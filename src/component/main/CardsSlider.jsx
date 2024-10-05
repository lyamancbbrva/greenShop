import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { GiShoppingCart } from "react-icons/gi";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import { GoHeart } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { Cntx } from "../../context/DataContext";
import { Link } from "react-router-dom";
import { spiral } from "ldrs";
import getAllProducts, { getDiscountedProduct } from "../../api/api";
import toast from "react-hot-toast";
import axios from "axios";
spiral.register();

function CardsSlider() {

    const { setSebetSay, sebetSay, basket, setBasket } = useContext(Cntx);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://neptunbk.vercel.app/products?limit=30&page=22`).then(resp => setData(resp.data.products));
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
        toast.success(`${item.name} added to cart!`)
    }

    if (data.length === 0) {
        return (
            <div className='flex justify-center items-center'>
                <l-spiral size='50' speed='0.9' color='#43766C'></l-spiral>
            </div>
        );
    }

    function addWish(item) {
        const wishList = JSON.parse(localStorage.getItem('wishlist')) || [];
        const status = wishList.find(i => i.id === item.id);

        if (status) {
            toast.error(`${item.name} ayqa bunnan wishlistde vardana!`);
        } else {
            const updatedWishList = [...wishList, item];
            localStorage.setItem('wishlist', JSON.stringify(updatedWishList));
            toast.success(`${item.name} uxxxx tıkladım!`);
        }
    }

    return (
        <div className='flex justify-center items-start'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                speed={3000}
                loop={true}
                // navigation={true}
                modules={[FreeMode, Navigation, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className='mySwiper m-auto my-4 lg:mx-0 w-[100%]'
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 0 },
                    568: { slidesPerView: 3, spaceBetween: 0 },
                    715: { slidesPerView: 3.5, spaceBetween: 20 },
                    910: { slidesPerView: 4, spaceBetween: 10 },
                    1125: { slidesPerView: 5, spaceBetween: 10 },
                    1285: { slidesPerView: 5.5, spaceBetween: 10 },
                    1280: { slidesPerView: 6, spaceBetween: 10 },
                }}
            >
                {data.map((item) => {
                    const { name, price, id, discount, totalPrice } = item;
                    const img = item.img[0] == "https://neptun.az/image/cache/logo-270x270.png?v=9" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0E7_jTgtSApXn2SgGAJlFjZimO3iiH6X8hLrht5zcY8c-TBhyWowKgL6PlVTfVCoBf6g&usqp=CAU" : item.img[0]

                    return (
                        <SwiperSlide key={id}>
                            <Link
                                to={`/product/${id}`}
                                className='border card hover:shadow-md transition-all rounded-md p-3 bg-white inline-block'
                            >
                                <div className="relative">
                                    <GoHeart onClick={(e) => { e.preventDefault(); addWish(item) }} className='absolute cursor-pointer top-1 right-1 text-[1.3em] text-[#43766C] hover:text-red-600 hover:scale-[1.1] transition-all' />
                                    <img src={img} alt={name} className="w-[150px] object-cover h-[25vh] rounded-md" />
                                    <span className={`${discount != 0 ? 'block' : 'hidden'} bg-[#43766ca6] text-white absolute bottom-1 right-1 endirim rounded-md w-[50px] h-[30px] flex justify-center items-center text-[.85em] font-bold`}>
                                        {discount} %
                                    </span>
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
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default CardsSlider;