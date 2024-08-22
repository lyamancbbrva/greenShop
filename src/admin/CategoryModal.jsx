import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function CategoryModal({modal, setModal}) {

    return (
        <Transition.Root show={modal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setModal}>
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
                                    <p className='font-bold text-xl'>Yeni Kateqoriya əlavə et</p>
                                    <XMarkIcon onClick={() => setModal(!modal)} className='text-gray-400 w-6 cursor-pointer hover:text-red-600' />
                                </div>
                                <div className='my-3'>
                                    <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Kateqoriyanın adı</label>
                                    <input
                                        type="text"
                                        className="block w-full rounded-md text-sm border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                                        placeholder="Kateqoriyanın adı"
                                    />
                                </div>
                                <div className='my-4'>
                                    <label htmlFor="" className="block text-[12px] pt-2 font-bold text-gray-700 uppercase">Subkateqoriyanın adı</label>
                                    <p className='text-red-600 text-[11px] font-semibold'>*Ən az bir subkateqoriya əlavə olunmalıdır!</p>
                                    <input
                                        type="text"
                                        className="block w-full text-sm rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                                        placeholder="Subkateqoriyanın adı"
                                    />
                                </div>
                                <button className='bg-blue-700 w-full sm:w-32 text-white rounded-md p-2 mt-3 px-3 font-semibold'>Əlavə et</button>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root >
    )
}
