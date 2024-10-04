import { GiShoppingCart } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { IoClose } from "react-icons/io5";
import { IoHeartDislikeOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
import { Cntx } from "../../context/DataContext";

function Wishlist() {
    const {setBasket, basket, setSebetSay, sebetSay} = useContext(Cntx)

    const [list, setList] = useState(() => {
        const storedList = localStorage.getItem('sliders');
        return storedList ? JSON.parse(storedList) : [];
    });

    useEffect(() => {
        setList(JSON.parse(localStorage.getItem('wishlist')))
    }, [])

    function removeWish(id) {
        const newList = list.filter(item => item.id != id)
        setList(newList)
        localStorage.setItem('wishlist', JSON.stringify(newList))
        toast.success('sağ salamat ✌️')
    }

    function addToBasket(e, item) {
        e.preventDefault();
        const existingItem = basket.find(i => i.id === item.id);
        setBasket(
            existingItem
                ? [...basket.map(i => (i.id === existingItem.id ? { ...i, count: i.count + 1 } : i))]
                : [...basket, { ...item, count: 1 }]
        );
        setSebetSay(sebetSay + 1);
        toast.success(`${item.name} added to cart!`)
    }

    return (
        <>
            <section className='wrapper py-5 px-3 relative'>
                <h1 className="text-[1.2em] italic">My Wishlist: </h1>
                {list && list.length > 0 ?
                    <div className='flex items-center gap-[30px] flex-wrap py-[30px]'>
                        {list && list.map((item) => {
                            const { img, name, price, id, discount, totalPrice } = item;
                            return (
                                <>
                                    <div
                                        className='border card hover:shadow-md transition-all rounded-md p-3 bg-white inline-block'
                                    >
                                        <div className="relative">
                                            <IoClose onClick={() => removeWish(id)} className='absolute bg-white rounded-full p-1 cursor-pointer top-0 right-0 text-[1.5em] text-[#43766C] hover:text-red-600 hover:scale-[1.1] transition-all' />
                                            <Link to={`/product/${id}`}>
                                                <img src={img} alt={name} className="w-[150px] object-cover h-[25vh] rounded-md" />
                                                <span className={`${discount != 0 ? 'block' : 'hidden'} bg-[#43766ca6] text-white absolute bottom-1 right-1 endirim rounded-md w-[50px] h-[30px] flex justify-center items-center text-[.85em] font-bold`}>
                                                    {discount} %
                                                </span>
                                            </Link>
                                        </div>
                                        <h5 className='pt-4 hover:text-[#43766C] text-ellipsis whitespace-nowrap overflow-hidden max-w-[148px] text-[.85em] capitalize'>{name}</h5>
                                        {discount > 0 && (
                                            <div className="flex gap-3 items-center py-3">
                                                <p className='line-through text-md text-gray-400'>{price} $</p>
                                                <p className='font-semibold italic text-[1.2em]'>{totalPrice.toFixed(2)} $</p>
                                            </div>
                                        )}
                                        <p className={`${discount === 0 ? 'block' : 'hidden'} font-semibold py-3 italic text-[1.2em]`}>
                                            {price} $
                                        </p>
                                        <button
                                            onClick={(e) => addToBasket(e, item)}
                                            className='rounded-md text-nowrap flex gap-2 w-full text-[.8em] border border-[#43766C] transition-all duration-200 hover:bg-[#43766c2b] px-4 py-2 font-semibold'
                                        >
                                            <GiShoppingCart className="text-lg text-gray-500" /> Add to Basket
                                        </button>
                                    </div>
                                </>
                            );
                        })
                        }
                    </div >
                    :
                    <div className=' flex justify-center items-center flex-col gap-[30px] py-[10vh]'>
                        <IoHeartDislikeOutline className='text-[10rem] text-[#999]' />
                        <h2 className='text-[1rem] text-[#999]'>No items in WishList</h2>
                    </div>
                }
            </section >
        </>
    )
}

export default Wishlist