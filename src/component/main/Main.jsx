import Aside from "./Aside";
import CardsSlider from "./CardsSlider";
import Endirim from "./Endirim";
import Slider from "./Slider";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { HiOutlineDevicePhoneMobile, HiChevronDoubleUp } from "react-icons/hi2";
import { BsEnvelope } from "react-icons/bs";
import reklam1 from '../../assets/reklam1.png';
import reklam2 from '../../assets/reklam2.png';
import reklam3 from '../../assets/reklam3.png';
import freshmaker from '../../assets/freshmaker.png';
import joyful from '../../assets/joyful.png';
import payman from '../../assets/payman.png';
import pfanner from '../../assets/pfanner.png';
import Awards from "./Awards";
import { Link } from "react-router-dom";

function Main() {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('scroll', function () {
        const button = document.querySelector('.scroll-to-top');
        const scrollPos = window.scrollY;
        const vwHeight = window.innerHeight;
        button.style.display = (scrollPos > (vwHeight * 0.5)) ? 'block' : 'none';
    });

    return (
        <main className='bg-slate-50'>
            <a href="https://wa.me/994709233313" target="_blank" className="bg-[#31564e] hover:bg-black z-20 right-5 bottom-5 fixed flex justify-center items-center w-[60px] h-[60px] transition-all duration-300 shadow-xl rounded-full">
                <MdCall className="text-[2em] text-[#fff]" />
            </a>
            <div onClick={scrollToTop} className="scroll-to-top bg-[#eedfd7] p-4 hover:text-white rounded-full cursor-pointer shadow-md hidden hover:bg-black transition-all duration-300 fixed right-6 bottom-24 z-20">
                <HiChevronDoubleUp className="text-xl" />
            </div>
            <div className='wrapper-md'>
                <div className='flex gap-1 justify-between'>
                    <Aside />
                    <div className='lg:w-[70%] xl:w-[78%] mt-0 lg:ml-0 lg:flex flex-col items-end px-2 mx-0 xl:mx-[-8px]'>
                        <Slider />
                        <div className='flex gap-3 justify-between py-3 w-[100%]'>
                            <div className='w-[100%] border xl:w-[20vw]'>
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
                            <div className='w-[100%] border xl:w-[20vw]'>
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
                                        50% Sale!
                                    </p>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div className='w-[18vw] border xl:block hidden xl:w-[20vw]'>
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
                                        Weekend Discounts!
                                    </p>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="px-3 pt-5">
                    <div className='flex justify-between items-center py-2'>
                        <h3>Popular products</h3>
                        <Link to={'/meyvə-tərəvəz-quru-meyvə/meyvə'}  className='text-[#43766C]'>See all</Link>
                    </div>
                    <CardsSlider />
                </section>
                <div className="my-8 border-y">
                    <h2 className="uppercase text-center tracking-widest py-5 italic"> - Over 300 awards won -</h2>
                    <Awards />
                </div>
                <section className="px-3">
                    <div className='flex py-2'>
                        <h3>Discounted products</h3>
                    </div>
                    <Endirim />
                </section>
                <div className="py-5 flex gap-5 lg:flex-row flex-col justify-center px-3">
                    <div className="flex gap-5 flex-col sm:flex-row">
                        <Link to=''><img src={freshmaker} alt="banner-freshmaker" className="w-full"/></Link>
                        <Link to=''><img src={payman} alt="banner-payman" className="w-full"/></Link>
                    </div>
                    <div className="flex gap-5 flex-col sm:flex-row">
                        <Link to=''><img src={joyful} alt="banner-joyful" className="w-full"/></Link>
                        <Link to=''><img src={pfanner} alt="banner-pfanner" className="w-full"/></Link>
                    </div>
                </div>
                <section className="px-3">
                    <div className='flex justify-between items-center py-2'>
                        <h3>Best sellers</h3>
                        <Link to={'/meyvə-tərəvəz-quru-meyvə/tərəvəz'} className='text-[#43766C]'>See all</Link>
                    </div>
                    <CardsSlider />
                </section>
                <div className="flex flex-col lg:flex-row gap-5 justify-center py-6 px-3 lg:px-0 w-[100%]">
                    <div className="bg-[#f3f2f2] text-center rounded-md p-8 w-full lg:w-[48%]">
                        <div className="bg-[#43766c2d] w-12 h-12 flex justify-center items-center m-auto rounded-full">
                            <BsEnvelope className="text-[#43766C] text-[1.5em]" />
                        </div>
                        <p className="uppercase py-4 font-semibold tracking-wider">Subscribe to our newsletter</p>
                        <p className="text-xs">Subscribe to our newsletter to receive your 20% discount code and receive natural beauty offers straight to your inbox.</p>
                        <div className="relative mt-6">
                            <input
                                type="email"
                                placeholder="Email address"
                                autoomplete="email"
                                aria-label="Email address"
                                className="block w-full rounded-lg border border-neutral-300 bg-white py-4 pl-6 pr-20 text-sm text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                            />
                            <div className="absolute inset-y-1 right-1 flex justify-end">
                                <button
                                    type="submit"
                                    aria-label="Submit"
                                    className="flex w-[70px] h-full items-center justify-center rounded-lg bg-[#43766C] text-white transition hover:bg-neutral-800"
                                >
                                    <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipule="evenodd"
                                            d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#f3f2f2] text-center rounded-md p-8 w-full lg:w-[48%]">
                        <div className="bg-[#43766c2d] w-12 h-12 flex justify-center items-center m-auto rounded-full">
                            <HiOutlineDevicePhoneMobile className="text-[#43766C] text-[1.5em]" />
                        </div>
                        <p className="uppercase py-4 font-semibold tracking-wider">SMS Signup</p>
                        <p className="text-xs">Subscribe to our SMS to be the first to know about exclusive offers and product launches!</p>
                        <div className="p-4 rounded-t-lg">
                            <div className="relative bg-white rounded-t-lg mt-2 text-gray-500">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                    <select className="text-sm outline-none rounded-lg h-full">
                                        <option>US</option>
                                        <option>ES</option>
                                        <option>MR</option>
                                    </select>
                                </div>
                                <input type="number" placeholder="+1 (555) 000-000" className="w-full pl-[4.5rem] pr-3 py-3 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-t-lg" />
                            </div>
                            <button className="bg-[#43766C] text-white w-full p-1.5 font-semibold text-xs rounded-b-lg">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
