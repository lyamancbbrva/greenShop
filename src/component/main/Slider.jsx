import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { useEffect } from "react";
import { getSliders } from "../../api/api";
import { Link } from "react-router-dom";

function Slider() {
    useEffect(() => {
        getSliders().then((res) => {
            localStorage.setItem('sliders', JSON.stringify(res))
        })
    }, [])

    const sliders = JSON.parse(localStorage.getItem('sliders'))

    return (
        <>
            <Swiper
                className='mySwiper sm:max-h-[60vh] lg:mr-[0] lg:m-0 py-2 w-[94vw] sm:w-[94vw] m-auto md:w-[80vw] lg:w-[100%]'
                pagination={{ clickable: true }}
                effect={"fade"}
                modules={[Pagination, Autoplay, EffectFade]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                {sliders && sliders.map((item, i) =>
                    <SwiperSlide key={i} className='w-[100%]'>
                        <Link to={item.slug}>
                            <img
                                className='object-cover h-full w-full'
                                src={item.img}
                                alt='banner'
                            />
                        </Link>
                    </SwiperSlide>)}
            </Swiper>
        </>
    );
}

export default Slider;
