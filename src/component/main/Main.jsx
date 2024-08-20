import Aside from "./Aside";
import CardsSlider from "./CardsSlider";
import Endirim from "./Endirim";
import Slider from "./Slider";
import { FaArrowRightLong } from "react-icons/fa6";
import reklam1 from '../../assets/azn-50.png';
import reklam2 from '../../assets/nes-cake.jpg';
import reklam3 from '../../assets/heftesonu-banner.png';

function Main() {
    return (
        <main className='bg-slate-50'>
            <div className='wrapper-md'>
                <div className='flex gap-1 justify-between'>
                    <Aside />
                    <div className='lg:w-[70%] xl:w-[78%] mt-0 lg:ml-0 lg:flex flex-col items-end'>
                        <Slider />
                        <div className='flex gap-3 justify-between py-3 w-[100%] '>
                            <div className='w-[100%] lg:w-[18vw] xl:w-[20vw]'>
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
                                        50 azn 50 Bonus
                                    </p>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div className='w-[100%] lg:w-[18vw]  xl:w-[20vw]'>
                            <div className='lg:w-[100%]'>
                                    <a href=''>
                                        <img
                                            className='object-cover w-full'
                                            src={reklam2}
                                            alt='endirim'
                                        />
                                    </a>
                                </div>
                                <div className='flex justify-between items-center bg-white py-2 px-5'>
                                    <p className='text-[13px] font-semibold'>
                                        Neptunda Dadlı Endirimlər!
                                    </p>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div className='w-[18vw] lg:block hidden xl:w-[20vw]'>
                                <div className='w-[100%]'>
                                    <a href=''>
                                        <img
                                            className='object-cover w-full'
                                            src={reklam3}
                                            alt='heftesonuendirim'
                                        />
                                    </a>
                                </div>
                                <div className='flex justify-between items-center bg-white py-2 px-5'>
                                    <p className='text-[13px] font-semibold'>
                                        Həftəsonu Endirimləri Neptunda!
                                    </p>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="mb-8 px-2">
                    <div className='flex justify-between items-center py-2'>
                        <h3 className='font-bold'>Endirimli məshullar</h3>
                        <a href='#' className='text-[#FF8300]'>Hamısına bax</a>
                    </div>
                    <Endirim />
                </section>
                <section className="px-2">
                    <div className='flex justify-between items-center py-2'>
                        <h3 className='font-bold'>Ən çox satılanlar</h3>
                        <a href='#' className='text-[#FF8300]'>Hamısına bax</a>
                    </div>
                    <CardsSlider />
                </section>
            </div>
        </main>
    );
}

export default Main;
