import { useState, Fragment, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { createSubcategory, getCategories } from "../api/api";

function Subcategory() {

    const [product, setProduct] = useState(null);
    const [open, setOpen] = useState(false);
    const [delOpen, setDelOpen] = useState(false);
    const [cats, setCats] = useState([]);
    const [subCat, setSubCat] = useState('')
    const [catId, setCatId] = useState('')
    const [data, setData] = useState([])

    async function handleCategory(id, name) {
        setProduct({ id, name });
        setOpen(!open);
    }
    
    useEffect(() => {

        getCategories().then((res) => setCats(res));

    }, []);
    
    function createNewSubCat() {
        const obj = { categoryName: subCat, categoryId: catId };
       createSubcategory(obj).then(resp =>
       {
        //    setData([...data, resp])
            // console.log(data);
            console.log(resp);
            
       }

         )
       
    }
    
    
    

    return (
        <section className='px-6'>
            <h1 className='text-[1.25em] mt-16 mb-4 text-center font-semibold'>
                Subkateqoriyalarin əlavə olunmasi formu:
            </h1>
            <h6 className='font-semibold p-2'>Kateqoriya seçin</h6>
            <div className='flex gap-2 items-center'>
                <select
                onChange={(e) => setCatId(cats.find(item => item.categoryName == e.target.value).id)}
                className='bg-gray-100 border h-12 w-full border-gray-500 text-gray-900 text-md rounded-lg p-2'>
                    <option defaultValue disabled>Kataqoriya seçin</option>
                    {cats?.map((item) => 
                      <option  key={item.categoryName}>{item.categoryName}</option>
                     )}
                </select>
                <button
                    onClick={() => {
                        setOpen(!open);
                    }}
                    className='bg-green-700 float-end text-white p-3 min-w-[150px] rounded-md font-semibold'
                >
                    + Əlavə et
                </button>
            </div>
            <div className='flex flex-col py-4'>
                <div className='overflow-x-auto'>
                    <div className='inline-block min-w-full py-2 align-middle'>
                        <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-300'>
                                <thead className='bg-slate-700 text-white'>
                                    <tr>
                                        <th
                                            colSpan='4'
                                            scope='col'
                                            className='px-6 py-2 text-center text-[1.3em]'
                                        >
                                            Subkateqoriyalar siyahısı!
                                        </th>
                                    </tr>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6'
                                        >
                                            Ad
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-3 py-3.5 text-left text-sm font-semibold'
                                        >
                                            Edit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200 bg-white'>
                                        {
                                            data ? data.map((item, i) =>
                                                <tr key={i} className='hover:bg-gray-200'>
                                            <td className='whitespace-nowrap font-bold py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                                {item.categoryName}
                                            </td>
                                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                                <div className='flex gap-2'>
                                                    <FiEdit
                                                        onClick={() =>
                                                            handleCategory(
                                                                "2",
                                                                "sogan"
                                                            )
                                                        }
                                                        className='text-[1.1em] text-[blue] cursor-pointer'
                                                    />
                                                    <FaTrashAlt
                                                        onClick={() =>
                                                            setDelOpen(!delOpen)
                                                        }
                                                        className='text-[1.1em] text-[red] cursor-pointer'
                                                    />
                                                </div>
                                            </td>
                                        </tr>)
                                        : <tr className='hover:bg-gray-200'>
                                        <td className='whitespace-nowrap font-bold py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                            Subkateqoriya mövcud deyil
                                        </td>
                                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                            <div className='flex gap-2'>
                                                <FiEdit
                                                    onClick={() =>
                                                        handleCategory(
                                                            "2",
                                                            "sogan"
                                                        )
                                                    }
                                                    className='text-[1.1em] text-[blue] cursor-pointer'
                                                />
                                                <FaTrashAlt
                                                    onClick={() =>
                                                        setDelOpen(!delOpen)
                                                    }
                                                    className='text-[1.1em] text-[red] cursor-pointer'
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                        }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/*    C A T E G O R Y    M O D A L     */}
            <Transition show={open} as={Fragment}>
                <Dialog
                    as='div'
                    className='relative z-10'
                    onClose={() => {
                        setProduct(null);
                        setOpen(!open);
                    }}
                >
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
                                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-xl sm:p-11'>
                                    <div className='flex justify-between pb-4 border-b border-gray-500'>
                                        <p className='font-bold text-xl'>
                                            {product
                                                ? "Subkateqoriyaya düzəliş et"
                                                : "Subkateqoriya əlavə et"}
                                        </p>
                                        <XMarkIcon
                                            onClick={() => setOpen(false)}
                                            className='text-gray-400 w-6 cursor-pointer hover:text-red-600'
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label
                                            htmlFor=''
                                            className='block text-[12px] pt-2 font-bold text-gray-700 uppercase'
                                        >
                                            subkateqoriyanın adı
                                        </label>
                                        <input
                                            onInput={(e) => setSubCat(e.target.value)}
                                            type='text'
                                            className='block w-full text-sm rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm'
                                            placeholder='Subkateqoriyanın adı'
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <label
                                            htmlFor=''
                                            className='block text-[12px] py-2 font-bold text-gray-700 uppercase'
                                        >
                                            Kateqoriya seçin:
                                        </label>
                                        <select 
                                        onChange={(e) => setCatId(cats.find(item => item.categoryName == e.target.value).id)}
                                        className='block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm'>
                                            <option defaultValue disabled>Kateqoriya seçin:</option>
                                            {cats?.map((item, i) => (
                                                <option key={i}>
                                                    {item.categoryName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <button 
                                    onClick={() => {
                                        setOpen(false)
                                        createNewSubCat()
                                    }}
                                    className='bg-blue-700 w-full sm:w-24 text-white rounded-md p-2 mt-3 px-3 font-semibold'>
                                        {product ? "Düzəliş et" : "Əlavə et"}
                                    </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/*    D E L E T E   C O M P O N E N T     */}
            <Transition.Root show={delOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={setDelOpen}>
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
                                        Subkateqoriyanı{" "}
                                        <span className='text-red-700'>
                                            silmək
                                        </span>{" "}
                                        istədiyinizə əminsiz?
                                    </p>
                                    <div className='mt-5 flex gap-2 text-center justify-center'>
                                        <button
                                            type='button'
                                            className='inline-flex justify-center rounded-md border border-transparent bg-red-600 px-6 py-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                                            onClick={() => setDelOpen(!delOpen)}
                                        >
                                            Bəli
                                        </button>
                                        <button
                                            type='button'
                                            className='inline-flex justify-center rounded-md border border-gray-300 bg-blue-600  px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
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
    );
}

export default Subcategory;
