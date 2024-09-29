import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { getSliders } from "../../api/api";
import { Link } from "react-router-dom";

function Slider() {
    const [data, setData] = useState([])

    useEffect(() => {
        getSliders().then((res) => setData(res))
    }, [])

    return (
        <>
            <Swiper
                className='mySwiper max-h-[20vh] sm:max-h-[46vh] lg:mr-[0] lg:m-0 py-2 w-[95vw] sm:w-[90vw] m-auto md:w-[80vw] lg:w-[100%]'
                navigation={true}
                pagination={true}
                effect={"fade"}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
            >
                {data && data.map((item, i) =>
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
