import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { GiShoppingCart } from "react-icons/gi";
import { FreeMode, Navigation } from "swiper/modules";
import { GoHeart } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { Cntx } from "../../context/DataContext";
import { Link } from "react-router-dom";
import { spiral } from "ldrs";
import getAllProducts, { getDiscountedProduct } from "../../api/api";

spiral.register();

function CardsSlider() {
    const { setSebetSay, sebetSay, basket, setBasket } = useContext(Cntx);
    const [data, setData] = useState([]);
    const [discountedPro, setDiscountedPro] = useState([]);

    useEffect(() => {
        getAllProducts().then(resp => setData(resp));
        getDiscountedProduct().then(resp => setDiscountedPro(resp));
    }, []);

    function addToBasket(e, item) {
        e.preventDefault();
        const existingItem = basket.find(i => i.id === item.id);
        setBasket(
            existingItem
                ? [...basket.map(i => (i.id === existingItem.id ? { ...i, count: i.count + 1 } : i))]
                : [...basket, { ...item, count: 1 }]
        );
        setSebetSay(sebetSay + 1);
    }

    if (data.length === 0) {
        return (
            <div className='flex justify-center items-center'>
                <l-spiral size='50' speed='0.9' color='#43766C'></l-spiral>
            </div>
        );
    }

    return (
        <div className='flex justify-center items-start'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                navigation={true}
                modules={[FreeMode, Navigation]}
                className='mySwiper my-4 lg:mx-0 w-[100%]'
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 0 },
                    568: { slidesPerView: 3, spaceBetween: 10 },
                    768: { slidesPerView: 4, spaceBetween: 10 },
                    992: { slidesPerView: 5, spaceBetween: 10 },
                    1280: { slidesPerView: 6, spaceBetween: 10 },
                }}
            >
                {data.map((item) => {
                    const { img, name, price, id, discount, totalPrice } = item;
                    return (
                        <SwiperSlide key={id}>
                            <Link
                                to={`/product/${id}`}
                                className='border card hover:shadow-md transition-all rounded-md p-3 bg-white relative inline-block'
                            >
                                <GoHeart className='absolute cursor-pointer top-4 right-4 text-[1.3em] text-[#43766C]' />
                                <img src={img} alt={name} className="w-[150px] object-cover h-[25vh] rounded-md" />
                                <h5 className='pt-4 hover:text-[#43766C] text-[.85em] capitalize'>{name}</h5>
                                {discount > 0 && (
                                    <div>
                                        <span className='bg-[#43766ca6] text-white absolute top-[47%] right-[25px] endirim rounded-md w-[50px] h-[30px] flex justify-center items-center text-[.85em] font-bold'>
                                            {discount} %
                                        </span>
                                        <div className="flex gap-3 items-center py-3">
                                            <p className='line-through text-md text-gray-400'>{price} $</p>
                                            <p className='font-semibold italic text-[1.2em]'>{totalPrice} $</p>
                                        </div>
                                    </div>
                                )}
                                <p className={`${discount === 0 ? 'block' : 'hidden'} font-semibold py-3 italic text-[1.2em]`}>
                                    {price} $
                                </p>
                                <button
                                    onClick={(e) => addToBasket(e, item)}
                                    className='rounded-md flex gap-2 w-full text-[.8em] border border-[#43766C] transition-all duration-200 hover:bg-[#43766c2b] px-4 py-2 font-semibold'
                                >
                                    <GiShoppingCart className="text-lg text-gray-500" /> Add to Basket
                                </button>
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default CardsSlider;
