import { useContext, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Cntx } from "../../context/DataContext";
import { Link } from "react-router-dom";

export const Basket = () => {
    const { basket, setBasket, setSebetSay } = useContext(Cntx)

    function HandleDelete(id) {
        const elem = basket.filter(item => item.id !== id)
        setBasket(elem)
        setSebetSay(elem.length)
    }
    const updatedBasket = basket.map(item => ({ ...item, count: item.count || 1 }))

    function HandleIncrement(id) {
        const newBasket = updatedBasket.map(item =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        )
        setBasket(newBasket)
    }

    function HandleDecrement(id) {
        const newBasket = updatedBasket.map(item =>
            item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
        )
        setBasket(newBasket)
    }

    const totalAmount = basket.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2)

    return (
        <section className='wrapper py-5 px-3'>
            <h1 className="text-[1.7em]">Basket</h1>
            <div className=" mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-sm">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Image</th>
                            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Product Name</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Quantity</th>
                            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Price</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Amount</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {basket.map((item) => (
                            <tr key={item.id}>
                                <td className="w-32 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                    <img src={item.img} alt={item.name} className="md:w-24 w-20" />
                                    <dl className="font-normal lg:hidden">
                                        <dd className="mt-1 truncate text-gray-700">{item.title}</dd>
                                        <dd className="mt-1 truncate text-gray-500 sm:hidden">{item.price} ₼</dd>
                                    </dl>
                                </td>
                                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{item.name}</td>
                                <td className="px-3 py-4 w-fit text-sm text-gray-500 sm:table-cell">
                                    <button
                                        onClick={() => HandleDecrement(item.id)}
                                        className='font-bold text-[1.2em] text-[#43766C] active:text-[#000]'>
                                        ‒
                                    </button>
                                    <span className='px-2'>{item.count}</span>
                                    <button
                                        onClick={() => HandleIncrement(item.id)}
                                        className='font-bold text-[1.2em] text-[#43766C] active:text-[#000]'>
                                        ＋
                                    </button>
                                </td>
                                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{item.price} ₼</td>
                                <td className="px-3 py-4 text-sm text-gray-500">{(item.price * item.count).toFixed(2)} ₼</td>
                                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <p className="hover:text-red-600 text-[1.2em] cursor-pointer">
                                        <FaTrashAlt onClick={() => { HandleDelete(item.id) }} />
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end my-6">
                <table className="border">
                    <tbody>
                        <tr className="text-left text-sm font-semibold border">
                            <th className="p-2">Amount:</th>
                            <td className="p-2">{totalAmount} ₼</td>
                        </tr>
                        <tr className="text-left text-sm font-semibold border">
                            <th className="p-2">Total Amount:</th>
                            <td className="p-2">{totalAmount} ₼</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="py-4 mt-4 flex justify-between">
                <Link to='/' className="rounded-3xl text-[.85em] bg-[#43766C] text-white px-4 py-2 font-semibold mb-3">Continue Shopping </Link>
                <button className="rounded-3xl text-[.85em] bg-[#43766C] text-white px-4 py-2 font-semibold mb-3">Checkout</button>
            </div>
        </section>
    )
}
