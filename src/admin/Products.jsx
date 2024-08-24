import { useState, Fragment, useCallback } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import configObj from '../config/config';
import { useDropzone } from 'react-dropzone';

const people = [
    {
        name: 'Kartof',
        title: 'Front-end Developer',
        department: 'Optimization',
        email: 'Terevez',
        role: 'Member',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oNHxTGIrLf8NOW5i4E2RZOgTVfA4AXHOVA&s',
    },
]
function Products() {
    const [product, setProduct] = useState(null)
    const [open, setOpen] = useState(false)
    const [delOpen, setDelOpen] = useState(false)
    const apiKey = configObj.editorKey
    const editorRef = useRef(null)

    async function handleCategory(id, name) {
        setProduct({ id, name })
        setOpen(!open)
    }


    const onDrop = useCallback(acceptedFiles => { }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <section className="px-6">
            <h1 className="text-[1.25em] mt-16 mb-4 text-center font-semibold">Məhsulların idarə olunmasi formu:</h1>
            <button
                onClick={() => { setOpen(!open) }}
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
                    <input type="search" name="Search" placeholder="Məhsulun adını daxil edin..." className="w-[100%] py-4 pl-10 text-sm rounded-md focus:outline-none border-2 focus:dark:bg-gray-50 focus:dark:border-default-600" />
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
                                    {people.map((person) => (
                                        <tr key={person.email} className="hover:bg-gray-200">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">{person.name}</div>
                                                        <div className="text-gray-500">{person.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                <div className="text-red-600 font-semibold">2 %</div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <span className="inline-flex px-2">
                                                    515 azn
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="flex gap-2">
                                                    <FiEdit
                                                        onClick={() => handleCategory("1", "kartof")}
                                                        className="text-[1.1em] text-[blue] cursor-pointer" />
                                                    <FaTrashAlt
                                                        onClick={() => setDelOpen(!open)}
                                                        className="text-[1.1em] text-[red] cursor-pointer" />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            {/*     C R E A T E   P R O D U C T      */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10"
                    onClose={() => {
                        setProduct(null)
                        setOpen(!open)
                    }}>
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
                                            {product ? 'Məhsula düzəliş et' : 'Yeni Məhsul əlavə et'}
                                        </p>
                                        <XMarkIcon onClick={() => setOpen(!open)} className='text-gray-400 w-6 cursor-pointer hover:text-red-600' />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">məhsulun adı</label>
                                        <input
                                            type="text"
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                                            placeholder="Məhsulun adı"
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Kateqoriya seçin:</label>
                                        <select className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm">
                                            <option>Kateqoriya seçin:</option>
                                            <option>Kartof</option>
                                            <option>Sogan</option>
                                        </select>
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Subkateqoriya:</label>
                                        <select className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm">
                                            <option>Subkateqoriya seçin</option>
                                        </select>
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Endirim Miqdarı (%):</label>
                                        <input
                                            type="number"
                                            placeholder='0'
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Məhsulun qiyməti:</label>
                                        <input
                                            type="number"
                                            placeholder='123'
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                                        />
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Şəkil əlavə et!</label>
                                        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                            <div className="space-y-2 text-center">
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div className="flex flex-col text-sm text-gray-600">
                                                    <div {...getRootProps()} className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 p-2">
                                                        <input {...getInputProps()} />
                                                        {
                                                            isDragActive ? <p>Drop the file here...</p> : <p>Click to upload or drag and drop</p>
                                                        }
                                                    </div>
                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
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
                                        <textarea name="" id="" className='text-sm block w-full rounded-md h-24 border-gray-400 p-2 border outline-indigo-600 shadow-sm' placeholder='Meta məlumatları daxil edin...'></textarea>
                                    </div>
                                    <button className='bg-blue-700 w-full sm:w-32 text-white rounded-md p-2 px-3 font-semibold'>
                                        {product ? 'Düzəliş et' : 'Əlavə et'}
                                    </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root >

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
                                    <div className="mt-5 flex gap-2 text-center justify-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-6 py-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setDelOpen(!delOpen)}
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