import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import banner1 from '../../assets/banner1.webp';
import banner2 from '../../assets/banner2.webp';
import banner3 from '../../assets/banner3.webp';

function Slider() {
    return (
        <>
            <Swiper
                className='mySwiper lg:mr-[0] lg:m-0 py-2 w-[95vw] sm:w-[90vw] m-auto md:w-[80vw] lg:w-[100%]'
                navigation={true}
                pagination={true}
                effect={"fade"}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
            >
                <SwiperSlide className='w-[100%]'>
                    <a href=''>
                        <img
                            className='object-contain h-full w-full'
                            src={banner1}
                            alt='banner1'
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide className='w-[100%]'>
                    <a href=''>
                        <img
                            className='object-contain h-full w-full'
                            src={banner2}
                            alt='banner2'
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide className='w-[100%]'>
                    <a href=''>
                        <img
                            className='object-contain h-full w-full'
                            src={banner3}
                            alt='banner3'
                        />
                    </a>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
