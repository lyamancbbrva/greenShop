import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import configObj from '../config/config';
import { useDropzone } from 'react-dropzone';
import getAllProducts, { createImg, createProduct, deleteImg, editProduct, getCategories } from "../api/api";
import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";
import toast from "react-hot-toast";

function CreateModal({ open, setOpen, setEditOpen, editOpen }) {
    const formdata = new FormData()
    const apiKey = configObj.editorKey
    const [category, setCategory] = useState([])
    const editorRef = useRef(null)
    const [img, setImg] = useState([])
    const [delModal, setDelModal] = useState(false)
    const [imgSrc, setImgSrc] = useState('')
    const [id, setId] = useState(0)
    const [subCatId, setsubCatId] = useState(0)
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0);
    const [meta, setMeta] = useState('')
    const [topSell, setTopSell] = useState(false)
    const [product, setProduct] = useState([])

    useEffect(() => {
        getCategories().then(resp => setCategory(resp))
        getAllProducts().then(resp => setProduct(resp))
    }, [])

    async function deleteImage() {
        const fileName = imgSrc.split('/').at(-1)
        const delImg = await deleteImg(imgSrc)
        setImg(img.filter(item => item !== imgSrc))
    }

    const onDrop = async (acceptedFiles) => {
        formdata.append('img', acceptedFiles[0])
        const newImg = await createImg(formdata)
        setImg([...img, newImg.img_url])
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 5 });

    function addProduct() {
        const productObj = {
            name: name,
            isTopSelling: topSell,
            price: Number(price),
            discount: Number(discount),
            img: img,
            categoryId: Number(id),
            subcategoryId: Number(subCatId),
            description: editorRef.current.getContent(),
            metadata: meta
        }
        console.log(productObj)
        createProduct(productObj).then(resp => setProduct([...product, resp]))
        setOpen(false)
        setEditOpen(false)
        toast.success('Geldim e geldim!');
    }

    function updateProduct() {
        const productObj = {
            id,
            name,
            isTopSelling: topSell,
            price: Number(price),
            discount: Number(discount),
            img,
            categoryId: id,
            subcategoryId: Number(subCatId),
            description: editorRef.current ? editorRef.current.getContent() : '',
            metadata: meta,
        };
        editProduct(product.id, productObj)
            .then((resp) => {
                setProduct((prevProducts) => {
                    if (Array.isArray(prevProducts)) {
                        return prevProducts.map((p) => (p.id == product.id ? resp : p));
                    }
                    return [resp];
                });
                setOpen(false)
                setEditOpen(false);
                toast.success('Məhsul uğurla yeniləndi!');
            })
    }

    console.log(topSell);

    return (
        <>
            {/* C R E A T E     M O D A L    */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-xl sm:p-11">
                                    <div className="flex justify-between pb-4 border-b border-gray-500">
                                        <p className='font-bold text-xl'>
                                            {!editOpen ? "Yeni Məhsul əlavə et" : "Düzəliş et"}
                                        </p>
                                        <XMarkIcon onClick={() => setOpen(!open)} className='text-gray-400 w-6 cursor-pointer hover:text-red-600' />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">məhsulun adı</label>
                                        <input
                                            value={
                                                editOpen ? name || product?.find((item) => item.id == id)?.name : name
                                            }
                                            onInput={(e) => setName(e.target.value)}
                                            type="text"
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                                            placeholder="Məhsulun adı"
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Kateqoriya seçin:</label>
                                        <select
                                            onChange={(e) => setId(e.target.value)}
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm">
                                            <option>Kateqoriya seçin:</option>
                                            {
                                                category && category.map(item => <option key={item.id} value={item.id}>{item.categoryName}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Subkateqoriya:</label>
                                        <select
                                            onChange={(e) => setsubCatId(e.target.value)}
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                                        >
                                            <option>Subkateqoriya seçin</option>
                                            {category?.filter(item => item.id == id)[0]?.subcategory?.map((item, i) => (
                                                <option key={i} value={item.id}>{item.categoryName}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Endirim Miqdarı (%):</label>
                                        <input
                                            onInput={(e) => { setDiscount(e.target.value) }}
                                            type="number"
                                            placeholder='0'
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Məhsulun qiyməti:</label>
                                        <input
                                            onInput={(e) => setPrice(e.target.value)}
                                            type="number"
                                            placeholder='123'
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                                        />
                                    </div>
                                    <div className='my-6 flex items-center gap-10'>
                                        <span htmlFor="" className="text-[12px] font-bold text-gray-700 uppercase">Çox satılandır:</span>
                                        <label className="flex justify-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={topSell}
                                                onChange={(e) => setTopSell(e.target.checked)}
                                                className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
                                            />
                                        </label>
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Şəkil əlavə et!</label>
                                        <div className="space-y-2 text-center">
                                            <div
                                                {...getRootProps({
                                                    className: 'mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 cursor-pointer',
                                                })}
                                            >
                                                <input {...getInputProps()} />
                                                <div className="text-center">
                                                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                        <p>Şəkil yükləmək üçün klikləyin və ya sürükləyib atın</p>
                                                    </div>
                                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB <br />
                                                        maksimum 5 ədəd
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex my-2 gap-1">
                                            {img?.map((item, i) => <img key={i} onClick={() => { setImgSrc(item); setDelModal(true) }} className="w-[100px] object-cover" src={item} />)}
                                        </div>
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Məhsul haqqında məlumat</label>
                                        <Editor
                                            apiKey={apiKey}
                                            onInit={(_, editor) => editorRef.current = editor}
                                            initialValue={"Məhsul haqqında məlumat yazın..."}
                                            init={{
                                                height: 300,
                                                menubar: true,
                                                branding: false,
                                                plugins: [
                                                    'advlist autolink lists link image charmap print preview anchor',
                                                    'searchreplace visualblocks code fullscreen',
                                                    'insertdatetime media table paste code help wordcount'
                                                ],
                                                toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                                            }}
                                            textareaName="description"
                                        />
                                    </div>
                                    <div className='mb-3 border-b border-gray-400 py-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Meta məlumat</label>
                                        <textarea onInput={(e) => setMeta(e.target.value)} name="" id="" className='text-sm block w-full rounded-md h-24 border-gray-400 p-2 border outline-indigo-600 shadow-sm' placeholder='Meta məlumatları daxil edin...'></textarea>
                                    </div>
                                    <button
                                        onClick={() => !editOpen ? addProduct() : updateProduct()}
                                        className='bg-blue-700 w-full sm:w-32 text-white rounded-md p-2 px-3 font-semibold'>
                                        {!editOpen ? "Əlavə et" : "Düzəliş et"}
                                    </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root >

            {/* D E L E T E     M O D A L     */}
            <Transition.Root show={delModal} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={() => setDelModal(true)}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                    </Transition.Child>
                    <div className='fixed inset-0 z-10 overflow-y-auto'>
                        <div className='flex min-h-full justify-center p-4 text-center items-center sm:p-0'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                                enterTo='opacity-100 translate-y-0 sm:scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                            >
                                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                                    <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:h-10 sm:w-10'>
                                        <ExclamationTriangleIcon
                                            className='h-6 w-6 text-red-600'
                                            aria-hidden='true'
                                        />
                                    </div>
                                    <p className='text-center py-2 text-lg font-bold'>
                                        Şəkli
                                        <span className='text-red-700 mx-1.5'>
                                            silmək
                                        </span>
                                        istədiyinizə əminsiz?
                                    </p>
                                    <div className='mt-5 flex gap-2 text-center justify-center'>
                                        <button
                                            type='button'
                                            className='inline-flex justify-center rounded-md border border-transparent bg-red-600 px-6 py-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                                            onClick={() => {
                                                setDelModal(false)
                                                deleteImage()
                                            }
                                            }
                                        >
                                            Bəli
                                        </button>
                                        <button
                                            type='button'
                                            className='inline-flex justify-center rounded-md border border-gray-300 bg-blue-600  px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
                                            onClick={() => setDelModal(false)}
                                        >
                                            Xeyr
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default CreateModal