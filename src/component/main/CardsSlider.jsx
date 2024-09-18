import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";
import { GoHeart } from "react-icons/go";
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
                        const { img, name, price, id } = item;
                        return (
                            <SwiperSlide key={i}>
                                <Link
                                    to={`/product/${id}`}
                                    className='text-center border rounded-md p-3 bg-white relative inline-block'
                                >
                                    <GoHeart className='absolute cursor-pointer top-3 right-3 text-[1.3em] text-[#43766C]' />
                                    <img src={img} alt={name} className="w-[150px] object-cover h-[25vh] rounded-md" />
                                    <h5 className='py-4 hover:text-[#43766C] text-[.82em] capitalize font-semibold'>
                                        {name}
                                    </h5>
                                    <p className='font-bold text-[1.2em]'>
                                        {price} ₼
                                    </p>
                                    <div className='py-3.5'>
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
                                        setBasket([...basket, item]);
                                    }} className='rounded-3xl  text-[.8em] bg-[#43766C] text-white px-4 py-2 font-semibold mb-3'>
                                        Add to basket
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
