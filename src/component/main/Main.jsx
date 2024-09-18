import Aside from "./Aside";
import CardsSlider from "./CardsSlider";
import Endirim from "./Endirim";
import Slider from "./Slider";
import { FaArrowRightLong } from "react-icons/fa6";
import reklam1 from '../../assets/reklam1.png';
import reklam2 from '../../assets/reklam2.png';
import reklam3 from '../../assets/reklam3.png';

function Main() {
    return (
        <main className='bg-slate-50'>
            <div className='wrapper-md'>
                <div className='flex gap-1 justify-between'>
                    <Aside />
                    <div className='lg:w-[70%] xl:w-[78%] mt-0 lg:ml-0 lg:flex flex-col items-end px-2'>
                        <Slider />
                        <div className='flex gap-3 justify-between py-3 w-[100%] '>
                            <div className='w-[100%] border lg:w-[18vw] xl:w-[20vw]'>
                                <div className='lg:w-[100%]'>
                                    <a href=''>
                                        <img
                                            className='object-cover w-full'
                                            src={reklam1}
                                            alt='50to50'
                                        />
                                    </a>
                                </div>
                                <div className='flex justify-between items-center bg-white py-2 px-5'>
                                    <p className='text-[13px] font-semibold'>
                                        New Bonus Card!
                                    </p>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div className='w-[100%] border lg:w-[18vw]  xl:w-[20vw]'>
                            <div className='lg:w-[100%]'>
                                    <a href=''>
                                        <img
                                            className='object-cover w-full'
                                            src={reklam3}
                                            alt='endirim'
                                        />
                                    </a>
                                </div>
                                <div className='flex justify-between items-center bg-white py-2 px-5'>
                                    <p className='text-[13px] font-semibold'>
                                    Delicious Discounts!
                                    </p>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div className='w-[18vw] border lg:block hidden xl:w-[20vw]'>
                                <div className='w-[100%]'>
                                    <a href=''>
                                        <img
                                            className='object-cover w-full'
                                            src={reklam2}
                                            alt='heftesonuendirim'
                                        />
                                    </a>
                                </div>
                                <div className='flex justify-between items-center bg-white py-2 px-5'>
                                    <p className='text-[13px] font-semibold'>
                                    Weekend Discounts in GreenShop!
                                    </p>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <section className="mb-8 px-2">
                    <div className='flex justify-between items-center py-2'>
                        <h3 className='font-bold'>Discount products</h3>
                        <a href='#' className='text-[#43766C]'>See all</a>
                    </div>
                    <Endirim />
                </section> */}
                <section className="px-2">
                    <div className='flex justify-between items-center py-2'>
                        <h3 className='font-bold'>Best sellers</h3>
                        <a href='#' className='text-[#43766C]'>See all</a>
                    </div>
                    <CardsSlider />
                </section>
            </div>
        </main>
    );
}

export default Main;
