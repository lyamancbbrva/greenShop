import { useState, Fragment, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import configObj from '../config/config';
import { useDropzone } from 'react-dropzone';
import { createImg, createProduct, deleteImg, deleteProduct, editProduct, getCategories } from "../api/api";
import toast from "react-hot-toast";
import axios from "axios";

function Products() {
    const formdata = new FormData()
    const apiKey = configObj.editorKey
    const editorRef = useRef(null)
    const [product, setProduct] = useState([])
    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [delModal, setDelModal] = useState(false)
    const [delOpen, setDelOpen] = useState(false)
    const [inp, setInp] = useState('')
    const [id, setId] = useState(0)
    const [category, setCategory] = useState([])
    const [img, setImg] = useState([])
    const [imgSrc, setImgSrc] = useState('')
    const [catId, setCatId] = useState(0)
    const [page, setPage] = useState(1)

    const initialObj = {
        name: "",
        isTopSelling: false,
        price: 0,
        discount: 0,
        img: [],
        categoryId: 0,
        subcategoryId: 0,
        description: "",
        metadata: ""
    }

    const [obj, setObj] = useState(initialObj)
    const url = `https://neptunbk.vercel.app/products?limit=100&page=${page}`

    useEffect(() => {
        axios.get(url).then(resp => setProduct(resp.data))
        getCategories().then(resp => setCategory(resp))
    }, [page])

    async function deleteImage() {
        const fileName = imgSrc.split('/').at(-1)
        const delImg = await deleteImg(imgSrc)
        setImg(img.filter(item => item !== imgSrc))
    }

    const onDrop = async (acceptedFiles) => {
        formdata.append('img', acceptedFiles[0])
        const newImg = await createImg(formdata)
        setImg([...img, newImg.img_url])
        setObj({ ...obj, img: [newImg.img_url] })
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 5 });

    function addProduct() {
        const productObj = { ...obj, description: editorRef.current.getContent() }
        createProduct(productObj).then(resp => setProduct([...product, resp]));
        setOpen(false);
        setEditOpen(false);
        setObj(initialObj);
        setImg(null)
        console.log(productObj);
        toast.success('Geldim e geldim!');
    }

    function updateProduct() {
        const productObj = { ...obj, description: editorRef.current.getContent() }
        editProduct(id, productObj)
            .then((resp) => {
                setProduct(product.products.map((prod) => (prod.id === id ? resp : prod)));
                setOpen(false);
                setEditOpen(false);
                setObj(initialObj);
                toast.success('Məhsul uğurla yeniləndi!');
            })
        console.log(productObj);
    }

    function handleCategory(item) {
        setId(item.id)
        setEditOpen(true)
        setOpen(true)
    }

    async function delProduct(id) {
        await deleteProduct(id)
        setProduct(product.products.filter(item => item.id !== id))
        toast.success('Məhsul gorbagor oldu!')
    }

    return (
        <section className="px-6">
            <h1 className="text-[1.25em] mt-16 mb-4 text-center font-semibold">Məhsulların idarə olunmasi formu:</h1>
            <button
                onClick={() => { setOpen(!open); setEditOpen(false) }}
                className="bg-green-700 float-end text-white p-3 rounded-md font-semibold">+ Məhsul əlavə et</button>
            <fieldset className="w-full space-y-1 py-5">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <input onChange={(e) => setInp(e.target.value)} type="search" name="Search" placeholder="Məhsulun adını daxil edin..." className="w-[100%] py-4 pl-10 text-sm rounded-md focus:outline-none border-2 focus:dark:bg-gray-50 focus:dark:border-default-600" />
                </div>
            </fieldset>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full py-2 align-middle md:px-0 lg:px-0">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-slate-700 text-white">
                                    <tr>
                                        <th colSpan="4" scope="col" className="px-6 py-2 text-center text-[1.3em]">Məhsullar siyahısı!</th>
                                    </tr>
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6">
                                            Şəkil, ad və kateqoriya
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                                            Endirim
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                                            Qiymet
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                                            Edit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {product.products
                                        ?.filter(item => item.name?.toLowerCase().startsWith(inp?.toLowerCase()))
                                        .map((item, i) => (
                                            <tr key={i} className="hover:bg-gray-200">
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                    <div className="flex items-center">
                                                        <div className="h-10 w-10 flex-shrink-0">
                                                            <img className="h-10 w-10 rounded-full" 
                                                            src={item.img == "https://neptun.az/image/cache/logo-270x270.png?v=9" ? "https://www.greenpeople.co.uk/cdn/shop/files/Natural-water-drop.jpg?height=379&v=1706272861&width=710" : item.img} alt={item.name} />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="font-medium text-gray-900">{item.name}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                    <div className="text-red-600 font-semibold">{item.discount} %</div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <span className="inline-flex px-2">
                                                        {item.price} $
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <div className="flex gap-2">
                                                        <FiEdit
                                                            onClick={() => handleCategory(item)}
                                                            className="text-[1.1em] text-[blue] cursor-pointer" />
                                                        <FaTrashAlt
                                                            onClick={() => { setDelOpen(!open); setId(item.id) }}
                                                            className="text-[1.1em] text-[red] cursor-pointer" />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex justify-center py-5 space-x-1 dark:text-gray-800">
                        {
                            new Array(product.totalPages).fill(null).map((_, index) => <button key={index} onClick={(e) => { window.scrollTo({ top: 0, behavior: "smooth" }); setPage(e.target.innerText) }
                            } type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-[#43766C] dark:border-[#43766C]">{index + 1}</button>)
                        }
                    </div>
                </div>
            </div>

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
                                            onInput={(e) => setObj({ ...obj, name: e.target.value })}
                                            // value={editOpen ? (product.products.name || product.products.find(item => item.id == id).name) : product.products.name}
                                            type="text"
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                                            placeholder="Məhsulun adı"
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Kateqoriya seçin:</label>
                                        <select
                                            onChange={(e) => { setCatId(e.target.value); setObj({ ...obj, categoryId: e.target.value }) }}
                                            // value={editOpen ? (obj.categoryId || product.find(item => item.id == id).categoryId) : obj.categoryId}
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
                                            onChange={(e) => setObj({ ...obj, subcategoryId: e.target.value })}
                                            // value={editOpen ? (product.find(item => item.id == id).subcategoryId || obj.subcategoryId) : obj.subcategoryId}
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                                        >
                                            <option>Subkateqoriya seçin</option>
                                            {category?.filter(item => item.id == catId)[0]?.subcategory?.map((item, i) => (
                                                <option key={i} value={item.id}>{item.categoryName}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Endirim Miqdarı (%):</label>
                                        <input
                                            onInput={(e) => { setObj({ ...obj, discount: e.target.value }) }}
                                            // value={editOpen ? (obj.discount || product.find(item => item.id == id).discount ) : obj.discount}
                                            type="number"
                                            placeholder='0'
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Məhsulun qiyməti:</label>
                                        <input
                                            onInput={(e) => setObj({ ...obj, price: e.target.value })}
                                            // value={editOpen ? (obj.price || product.find(item => item.id == id).price ) : obj.price}
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
                                                // checked={product.isTopSelling}
                                                onInput={(e) => setObj({ ...obj, isTopSelling: e.target.checked })}
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
                                        <textarea
                                            onInput={(e) => setObj({ ...obj, metadata: e.target.value })}
                                            // value={editOpen ? (obj.metadata || product.find(item => item.id == id).metadata ) : obj.metadata}
                                            className='text-sm block w-full rounded-md h-24 border-gray-400 p-2 border outline-indigo-600 shadow-sm'
                                            placeholder='Meta məlumatları daxil edin...'></textarea>
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

            {/*        İ M G     D E L E T E    M O D A L     */}
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
                                    <div className='mt-5 flex gap-2 text-center flex-row-reverse justify-center'>
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

            {/*    D E L E T E   C O M P O N E N T     */}
            <Transition.Root show={delOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setDelOpen}>
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:h-10 sm:w-10">
                                        <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <p className='text-center py-2 text-lg font-bold'>Məhsulu <span className='text-red-700'>silmək</span> istədiyinizə əminsiz?</p>
                                    <div className="mt-5 flex gap-2 text-center justify-center flex-row-reverse">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-6 py-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => {
                                                delProduct(id)
                                                setDelOpen(!delOpen)
                                            }}
                                        >
                                            Bəli
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-gray-300 bg-blue-600  px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                                            onClick={() => setDelOpen(!delOpen)}
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
        </section>
    )
}

export default Products