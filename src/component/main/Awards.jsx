import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import award1 from "../../assets/award1.png";
import award2 from "../../assets/award2.png";
import award3 from "../../assets/award3.png";
import award4 from "../../assets/award4.png";
import award5 from "../../assets/award5.png";
import award6 from "../../assets/award6.png";
import award7 from "../../assets/award7.png";
import award8 from "../../assets/award8.png";
import award9 from "../../assets/award9.png";
import award10 from "../../assets/award10.png";

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
                300: { slidesPerView: 3, spaceBetween: 10, },
                500: { slidesPerView: 4, spaceBetween: 10, },
                768: { slidesPerView: 5, spaceBetween: 10, },
                992: { slidesPerView: 5, spaceBetween: 10, },
                1024: { slidesPerView: 6, spaceBetween: 10, },
                1280: { slidesPerView: 8, spaceBetween: 10, },
            }}
            modules={[Autoplay]}
            className="mySwiper py-5">
            <SwiperSlide><img className="inline" src={award1} alt="marks" /></SwiperSlide>
            <SwiperSlide><img className="inline" src={award2} alt="marks" /></SwiperSlide>
            <SwiperSlide><img className="inline" src={award3} alt="marks" /></SwiperSlide>
            <SwiperSlide><img className="inline" src={award4} alt="marks" /></SwiperSlide>
            <SwiperSlide><img className="inline" src={award5} alt="marks" /></SwiperSlide>
            <SwiperSlide><img className="inline" src={award6} alt="marks" /></SwiperSlide>
            <SwiperSlide><img className="inline" src={award7} alt="marks" /></SwiperSlide>
            <SwiperSlide><img className="inline" src={award8} alt="marks" /></SwiperSlide>
            <SwiperSlide><img className="inline" src={award9} alt="marks" /></SwiperSlide>
            <SwiperSlide><img className="inline" src={award10} alt="marks" /></SwiperSlide>
        </Swiper>
    )
}
export default Awards