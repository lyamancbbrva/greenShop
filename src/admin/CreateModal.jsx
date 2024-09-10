import { useState, Fragment, useCallback, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import configObj from '../config/config';
import { useDropzone } from 'react-dropzone';
import { getCategories } from "../api/api";

function CreateModal({open, setOpen, product, setProduct}) {
    const apiKey = configObj.editorKey
    const [category, setCategory] = useState([])
    const [id, setId] = useState()
    const editorRef = useRef(null)
    
    console.log(category.filter(item => item.id == id).map(item => item.subcategory[0]).map(item => item.categoryName));
    
    useEffect(() => {
        getCategories().then(resp => setCategory(resp))
    }, [])

    const onDrop = useCallback(acceptedFiles => { }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
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
                                    <select
                                    onChange={(e) => setId(e.target.value)}
                                     className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm">
                                        <option>Kateqoriya seçin:</option>
                                        {
                                            category && category.map(item => <option key={item.id} value={item.id}>{item.categoryName}</option> ) 
                                        }
                                    </select>
                                </div>
                                <div className='my-3'>
                                    <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Subkateqoriya:</label>
                                    <select className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm">
                                        <option>Subkateqoriya seçin</option>
                                        {
                                            category && category?.filter(item => item.id == id).map(item => item?.subcategory[0]).map((elem, i) => <option key={i}>{elem?.categoryName}</option>)
                                            
                                        }
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
    )
}

export default CreateModal