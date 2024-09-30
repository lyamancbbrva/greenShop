import { useEffect, Fragment, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { createImg, createSlider, deleteSlider, getCategories, getSliders } from "../api/api";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon, XMarkIcon, } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import { useDropzone } from "react-dropzone";

function SliderPage() {
    const formdata = new FormData()
    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);
    const [open, setOpen] = useState(false);
    const [delOpen, setDelOpen] = useState(false);
    const [id, setId] = useState(0);
    const [subCatId, setsubCatId] = useState(0);
    const [img, setImg] = useState([])
    const [imgSrc, setImgSrc] = useState('')

    useEffect(() => {
        getSliders().then((resp) => setData(resp))
        getCategories().then(resp => setCategory(resp))
    }, [])

    function addSlider() {
        const obj = { 
            categoryId: id, 
            subcategoryId: Number(subCatId),
            img: imgSrc, 
        }
        createSlider(obj).then(resp => {
            setData([...data, resp])
            setImg([])
        })
        setOpen(!open); 
        setImgSrc(null);
        toast.success('Şəkil əlavə olunduuu');
    }

    function delSlider(id) {
        deleteSlider(id)
        setData(data.filter(item => item.id !== id))
        toast.success('Şəkil silindi');
    }
    
    const onDrop = async (acceptedFiles) => {
        formdata.append('img', acceptedFiles[0])
        const newImg = await createImg(formdata)
        setImg([...img, newImg.img_url])
        setImgSrc(newImg.img_url)
    };

    const { getRootProps, getInputProps } = useDropzone({onDrop, maxFiles: 5});

    return (
        <section className="px-6">
            <h1 className='text-[1.25em] mt-16 mb-4 text-center font-semibold'>Slider-lərin idarə olunmasi formu:</h1>
            <button
                onClick={() => { setOpen(!open) }}
                className='bg-green-700 text-white p-3 rounded-md font-semibold'>
                + Slider əlavə et
            </button>
            <div className='flex flex-col py-4'>
                <div className='overflow-x-auto'>
                    <div className='inline-block min-w-full py-2 align-middle'>
                        <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-300'>
                                <thead className='bg-slate-700 text-white'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6'
                                        >
                                            Slider şəkilləri
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-3 py-3.5 text-left text-sm font-semibold'
                                        >
                                            Edit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200 bg-slate-800 text-white'>
                                    {data &&
                                        data?.map((item, i) => (
                                            <tr key={i} className='hover:bg-slate-700'>
                                                <td className='whitespace-nowrap font-semibold py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                                    {/* <a href={item.img}>{item.img}</a> */}
                                                    <p>{item.id}</p>
                                                </td>
                                                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                                    <FaTrashAlt
                                                        onClick={() => {
                                                            setId(item.id)
                                                            setDelOpen(true)
                                                        }}
                                                        className='text-[1.2em] text-[red] cursor-pointer'
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            {/*    C R E A T E    C O M P O N E N T     */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => {setOpen(!open)}}>
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
                                        <p className='font-bold text-xl'>Yeni şəkil əlavə et</p>
                                        <XMarkIcon onClick={() => setOpen(!open)} className='text-gray-400 w-6 cursor-pointer hover:text-red-600' />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Kateqoriya seçin:</label>
                                        <select
                                            onChange={(e) => setId(+e.target.value)}
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
                                            {img?.map((item, i) => <img key={i} onClick={() => { setImgSrc(item); setDelOpen(true) }} className="w-[100px] object-cover" src={item} />)}
                                        </div>
                                    </div>
                                    <button 
                                    onClick={()=> addSlider()}
                                    className='bg-blue-700 w-full sm:w-32 text-white rounded-md p-2 px-3 font-semibold'>
                                        Əlavə et
                                    </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root >

            {/*    D E L E T E   C O M P O N E N T     */}
            <Transition.Root show={delOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={() => setDelOpen(true)}>
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
                                        Slider şəklini
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
                                                delSlider(id)
                                                setDelOpen(false)
                                            }}
                                        >
                                            Bəli
                                        </button>
                                        <button
                                            type='button'
                                            className='inline-flex justify-center rounded-md border border-gray-300 bg-blue-600  px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
                                            onClick={() => setDelOpen(false)}
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

export default SliderPage