import { useState, Fragment, useCallback, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import CreateModal from "./CreateModal";
import getAllProducts from "../api/api";

const people = [

]
function Products() {
    const [product, setProduct] = useState(null)
    const [open, setOpen] = useState(false)
    const [delOpen, setDelOpen] = useState(false)
    const [data, setData] = useState([])

    async function handleCategory(id, name) {
        setProduct({ id, name })
        setOpen(!open)
    }
    useEffect(() => {
        getAllProducts().then(resp => setData(resp)
        )
    }, [])

    return (
        <section className="px-6">
            {open && <CreateModal product={product} open={open} setOpen={setOpen} setProduct={setProduct}/> }
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
                                    {data.map((item, i) => (
                                        <tr key={i} className="hover:bg-gray-200">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img className="h-10 w-10 rounded-full" src={item.img[0]} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">{item.name}</div>
                                                        <div className="text-gray-500">{item.category.categoryName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                <div className="text-red-600 font-semibold">{item.discount} %</div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <span className="inline-flex px-2">
                                                    {item.price} azn
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