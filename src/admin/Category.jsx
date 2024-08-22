import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import CategoryModal from "./CategoryModal";

function Category({ modal, setModal }) {
    return (
        <section className="px-6">
            {modal ? <CategoryModal modal={modal} setModal={setModal} /> : null}
            <h1 className="text-[1.25em] mt-16 mb-4 text-center font-semibold">Kataqoriyaların idarə olunmasi formu:</h1>
            <button
                onClick={() => { setModal(!modal) }}
                className="bg-green-700 text-white p-3 rounded-md font-semibold">+ Kataqoriya əlavə et</button>
            <div className="flex flex-col py-4">
                <div className="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-slate-700 text-white">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6">Kateqoriyanın adı</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">Edit</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-slate-800 text-white">
                                    <tr className="hover:bg-slate-700">
                                        <td className="whitespace-nowrap font-semibold py-4 pl-4 pr-3 text-sm sm:pl-6">
                                            Kartof sogan
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <div className="flex gap-2">
                                                <FiEdit className="text-[1.2em] text-blue-500 cursor-pointer" />
                                                <FaTrashAlt className="text-[1.2em] text-[red] cursor-pointer" />
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

export default Category