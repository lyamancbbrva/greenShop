import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

function Subcategory() {
    return (
        <section className="px-6">
            <h1 className="text-[1.25em] mt-16 mb-4 text-center font-semibold">Subkateqoriyalarin əlavə olunmasi formu:</h1>
            <h6 className="font-semibold p-2">Kateqoriya seçin</h6>
            <div className="flex gap-2 items-center">
                <select class="bg-gray-100 border h-12 w-full border-gray-500 text-gray-900 text-md rounded-lg p-2">
                    <option selected>Kataqoriya seçin</option>
                    <option value="">blabla</option>
                    <option value="">blabla</option>
                </select>
                <button className="bg-green-700 float-end text-white p-3 min-w-[150px] rounded-md font-semibold">+ Əlavə et</button>
            </div>
            <div className="flex flex-col py-4">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-slate-700 text-white">
                                    <tr>
                                        <th colspan="4" scope="col" className="px-6 py-2 text-center text-[1.3em]">Subkateqoriyalar siyahısı!</th>
                                    </tr>
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6">Ad</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">Edit</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                        <tr className="hover:bg-gray-200">
                                            <td className="whitespace-nowrap font-bold py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                Subkateqoriya mövcud deyil
                                            </td>
                                            
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="flex gap-2">
                                                    {/* <FiEdit className="text-[1.1em] text-[blue] cursor-pointer" /> */}
                                                    {/* <FaTrashAlt className="text-[1.1em] text-[red] cursor-pointer" /> */}
                                                </div>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subcategory