import { Link, useParams } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { Cntx } from "../../context/DataContext";
import getAllProducts, { getProductById } from "../../api/api";
import Aside from "./Aside";

function CardInfo() {
    const { setSebetSay, sebetSay, setBasket, basket, catSt } = useContext(Cntx);
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [itemCount, setItemCount] = useState(1);

    useEffect(() => {
        getProductById(id).then(resp => setData(resp));
    }, []);

    function addToBasket(e) {
        e.preventDefault();
        const existingItem = basket.find(i => i.id === id);
        setBasket(
            existingItem
                ? [...basket.map(i => i.id === existingItem.id ? { ...i, count: i.count + itemCount } : i)]
                : [...basket, { ...data, count: itemCount }]
        )
        setSebetSay(sebetSay + itemCount);
    }

    function handleIncrement() { setItemCount(prevCount => prevCount + 1) }
    function handleDecrement() { setItemCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1)) }

    return (
        <section className='wrapper relative'>
            <div className="absolute z-10 top-[-5px] left-0">{catSt && <Aside catSt={catSt} />}</div>
            <div className='text-gray-600 py-8 px-3'>
                <Link to='/'>Home /</Link>
                <span> {data?.name}</span>
            </div>
            {data.length === 0 ?
                <div role="status" className="space-y-8 mx-3 my-10 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                    <div className="flex items-center justify-center w-full h-[55vh] bg-gray-300 rounded-xl sm:w-[550px] dark:bg-gray-400">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <div className="w-full">
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-6"></div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-6"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-6 max-w-[220px]"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-4 max-w-[220px]"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[360px] mb-6"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[360px] mb-6"></div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[260px] mb-6"></div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[260px] mb-6"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[440px]"></div>
                    </div>
                </div>
                :
                <div className='flex flex-col gap-[5vw] items-center bg-white 2md:flex-row md:max-w-5xl mb-5'>
                    <img
                        className='object-cover w-full md:w-[80%] px-3 rounded-[2rem] 2md:h-[55vh] 2md:w-[500px]'
                        src={data?.img == "https://neptun.az/image/cache/logo-270x270.png?v=9" ? "https://www.greenpeople.co.uk/cdn/shop/files/Natural-water-drop.jpg?height=379&v=1706272861&width=710" : data?.img}
                        alt={data?.name}
                    />
                    <div className='flex flex-col justify-between p-4 leading-normal'>
                        <h5 className='mb-2 text-xl uppercase font-bold tracking-tight text-gray-900'>
                            {data?.name}
                        </h5>
                        <div className="flex gap-1 text-yellow-500 mb-2">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <p className='mb-3 text-[.8em] text-gray-700'>
                            0 comments | Write a comment
                        </p>
                        <p className='mb-3 text-[.9em] text-gray-700'>
                            Availability: 🗹 In Stock
                        </p>
                        <p className='mb-3 text-[.9em] text-gray-700'>
                            Delivery: 🗹 Yes
                        </p>
                        <p className='mb-3 text-[.9em] text-gray-700'>
                            Description: yaxsi usaqdir
                        </p>
                        <p className='mb-3 text-[2em] font-bold text-[#43766C]'>
                            {data?.price} ₼
                        </p>
                        <div className='py-2 mb-3 border w-fit rounded-md'>
                            <button
                                onClick={handleDecrement}
                                className='font-bold border-r px-2 text-[1.2em] text-[#43766C]'>
                                ‒
                            </button>
                            <span className='px-4'>{itemCount} pcs</span>
                            <button
                                onClick={handleIncrement}
                                className='font-bold border-l px-2 text-[1.2em] text-[#43766C]'>
                                ＋
                            </button>
                        </div>
                        <div className='flex items-center gap-4 py-2'>
                            <button
                                onClick={addToBasket}
                                className='rounded-md flex justify-center gap-2 w-full text-[.8em] border border-[#43766C] transition-all duration-200 hover:bg-[#43766c2b] px-4 py-3 font-semibold'>
                                <GiShoppingCart className="text-lg text-gray-500" />Add to Basket
                            </button>
                        </div>
                    </div>
                </div>
            }
        </section >
    );
}

export default CardInfo;
