import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";

function Awards() {
    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false
            }}
            speed={3000}
            breakpoints={{
                300: { slidesPerView: 3, spaceBetween: 10,},
                500: { slidesPerView: 4, spaceBetween: 10,},
                768: { slidesPerView: 5, spaceBetween: 10,},
                992: { slidesPerView: 5, spaceBetween: 10,},
                1024: { slidesPerView: 6, spaceBetween: 10,},
                1280: { slidesPerView: 8, spaceBetween: 10,},
            }}
            modules={[Autoplay]}
            className="mySwiper py-5">
            {
                new Array(10).fill(null).map((_, item) =>
                    <SwiperSlide key={item} >
                        <img className="inline" src={`./src/assets/award${item + 1}.png`} alt="marks" />
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
}
export default Awards