import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";
import { GoHeart } from "react-icons/go";
import { useContext, useState } from "react";
import { Cntx } from "../../context/DataContext";
import { Link } from "react-router-dom";
import { spiral } from "ldrs";
spiral.register();

function CardsSlider() {
    const { data, addToBasket, setSebetSay, sebetSay } = useContext(Cntx);

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
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
            >
                {data ? (
                    data.map((item, i) => {
                        const { img, title, price, id } = item;
                        return (
                            <SwiperSlide key={i}>
                                <Link
                                    to={`/product/${id}`}
                                    className='text-center border rounded-md p-3 bg-white relative inline-block'
                                >
                                    <GoHeart className='absolute cursor-pointer top-3 right-3 text-[1.3em] text-[#43766C]' />
                                    <img src={img} alt={title} />
                                    <h5 className='py-4 hover:text-[#43766C] h-16 text-[.7em] font-semibold'>
                                        {title}
                                    </h5>
                                    <p className='font-bold text-[1.3em]'>
                                        {price} ₼
                                    </p>
                                    <div className='py-3'>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className='font-bold text-[1.2em] text-[#43766C]'>
                                            ‒
                                        </button>
                                        <span className='px-2'> ədəd</span>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className='font-bold text-[1.2em] text-[#43766C]'>
                                            ＋
                                        </button>
                                    </div>
                                    <button onClick={(e) => {
                                                e.preventDefault();
                                                setSebetSay(sebetSay + 1)
                                                addToBasket(item)
                                            }} className='rounded-3xl  text-[.85em] bg-[#43766C] text-white px-4 py-2 font-semibold mb-3'>
                                        Səbətə at
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
