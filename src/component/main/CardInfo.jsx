import { Link, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import { Cntx } from "../../context/DataContext";
import getAllProducts from "../../api/api";
import Aside from "./Aside";

function CardInfo({ updateCount, catSt }) {
    const { setSebetSay, sebetSay } = useContext(Cntx);
    const { id } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        getAllProducts().then(resp => setData(resp))
    }, [])

    const item = data && data.find(item => item.id == id);
    
    return (
        <section className='wrapper relative'>
            <div className="absolute z-10 top-[-5px] left-0">{catSt && <Aside catSt={catSt} />}</div>
            <div className='text-gray-600 py-10 px-3'>
                <Link to='/'>Home /</Link>
                <span> {item?.name}</span>
            </div>
            <div className='flex flex-col gap-[5vw] items-center bg-white md:flex-row md:max-w-4xl mb-5'>
                <img
                    className='object-cover w-full px-3 rounded-lg md:h-auto md:w-[300px]'
                    src={item?.img}
                    alt={item?.name}
                />
                <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h5 className='mb-2 text-xl uppercase font-bold tracking-tight text-gray-900'>
                        {item?.name}
                    </h5>
                    <div className='flex gap-1 text-[#43766C] text-[1.4em] py-2'>
                        <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />
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
                    <p className='mb-3 text-[2em] font-bold text-[#43766C]'>
                        {(item?.price)} ₼
                    </p>
                    <div className='py-3'>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                updateCount(id, -1);
                            }}
                            className='font-bold text-[1.2em] text-[#43766C]'>
                            ‒
                        </button>
                        <span className='px-4'>{item?.count}1 pcs</span>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                updateCount(id, 1);
                            }}
                            className='font-bold text-[1.2em] text-[#43766C]'>
                            ＋
                        </button>
                    </div>
                    <div className='flex items-center gap-4 py-2'>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                addToBasket(item.id, item.title, item.price, item.img);
                                setSebetSay(sebetSay + 1);
                            }}
                            className='rounded-3xl bg-[#43766C] text-white px-5 py-2 mb-3'>
                            Add to Basket
                        </button>
                        <FaRegHeart className='text-[1.3em] cursor-pointer text-[#43766C]' />
                        <LuRefreshCcw className='text-[1.3em] text-[#43766C] hover:rotate-[270deg] transition cursor-pointer' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardInfo;
