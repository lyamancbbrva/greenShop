import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { GiShoppingCart } from "react-icons/gi";
import { FreeMode, Navigation } from "swiper/modules";
import { GoHeartFill } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { Cntx } from "../../context/DataContext";
import { Link } from "react-router-dom";
import { spiral } from "ldrs";
import getAllProducts from "../../api/api";
spiral.register();

function CardsSlider() {
    const { setSebetSay, sebetSay, basket, setBasket } = useContext(Cntx);
    const [data, setData] = useState([])

    useEffect(() => {
        getAllProducts().then(resp => setData(resp))
    }, [])

    return (
        <div className='flex justify-center items-start'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                navigation={true}
                modules={[FreeMode, Navigation]}
                className='mySwiper my-4 lg:mx-0  w-[100%]'
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    568: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    992: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }}
            >
                {data ? (
                    data.map((item, i) => {
                        const { img, name, price, id } = item;
                        return (
                            <SwiperSlide key={i}>
                                <Link
                                    to={`/product/${id}`}
                                    className='border hover:shadow-md transition-all rounded-md p-3 bg-white relative inline-block'
                                >
                                    <GoHeartFill className='absolute cursor-pointer top-4 right-4 text-white shadow-xl text-[1.3em] transition-all hover:text-[#43766C]' />
                                    <img src={img} alt={name} className="w-[150px] object-cover h-[25vh] rounded-md" />
                                    <h5 className='pt-4 hover:text-[#43766C] text-[.85em] capitalize'>
                                        {name}
                                    </h5>
                                    <p className='font-semibold py-3 italic text-[1.2em]'>
                                        {price} $
                                    </p>
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        setSebetSay(sebetSay + 1)
                                        setBasket([...basket, item]);
                                    }} className='rounded-md flex gap-2 w-full text-[.8em] bg-[#f0eeee] transition-all duration-200 hover:bg-[#508e8279] px-4 py-2 font-semibold'>
                                        <GiShoppingCart className="text-lg text-gray-500" />Add to Basket
                                    </button>
                                </Link>
                            </SwiperSlide>
                        );
                    })
                ) : (
                    <l-spiral size='40' speed='0.9' color='#43766C'></l-spiral>
                )}
            </Swiper>
        </div>
    );
}

export default CardsSlider;
