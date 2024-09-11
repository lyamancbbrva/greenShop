import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";
import delivery from '../../assets/delivery.svg';
import cash from '../../assets/cash.svg';
import gift from '../../assets/gift.svg';
import mobile from '../../assets/mobile.svg';
import online from '../../assets/online.svg';

function Footer() {

    return (
        <footer className='bg-[#43766C] px-[2vw] text-white relative overflow-hidden'>
            <div className='text-[.7em] font-bold flex items-center justify-around text-center py-[20px] gap-[4vw]'>
                <div className='w-[30%] lg:flex gap-[10px] lg:w-[170px] lg:pl-[30px] lg:text-start'>
                    <img
                        src={delivery}
                        alt='neptun delivery'
                        className='mx-auto hover:scale-[1.2] transition'
                    />
                    <h4 className='py-[10px]'>
                        Free delivery over 50 azn
                    </h4>
                </div>
                <div className='w-[30%] lg:flex gap-[10px] lg:w-[150px] lg:text-start'>
                    <img
                        src={cash}
                        alt='neptun cash'
                        className=' mx-auto  hover:scale-[1.2] transition'
                    />
                    <h4 className='py-[10px]'>Payment by cash or card</h4>
                </div>
                <div className='w-[30%] lg:flex gap-[10px] lg:w-[150px] lg:text-start'>
                    <img
                        src={gift}
                        alt='neptun gift'
                        className='mx-auto  hover:scale-[1.2] transition'
                    />
                    <h4 className='py-[10px]'>Gift coupons</h4>
                </div>
                <div className=' hidden lg:flex gap-[10px] w-[150px] text-start'>
                    <img
                        src={online}
                        alt='online gift'
                        className='mx-auto  hover:scale-[1.2] transition'
                    />
                    <h4 className='py-[10px]'>Online customer service</h4>
                </div>
                <div className=' hidden lg:flex gap-[10px] w-[150px] text-start'>
                    <img
                        src={mobile}
                        alt='neptun gift'
                        className='mx-auto  hover:scale-[1.2] transition'
                    />
                    <h4 className='py-[10px]'>Fast mobile store</h4>
                </div>
            </div>
            <div className='p-[20px]'>
                <div className="flex items-center flex-wrap justify-center md:justify-between lg:justify-around">
                    <form action='' className='lg:flex items-center gap-[1vw]'>
                        <h3 className='text-[.7em] font-bold py-[10px]'>
                            Subscribe to us
                        </h3>
                        <div className='relative w-[75vw] lg:w-[30vw] sm:w-[80vw] md:max-w-[400px]'>
                            <input
                                type='search'
                                name='Search'
                                placeholder='your email... '
                                className='py-[10px]  w-[100%] pl-[10px] text-black text-[.8rem] text-sm bg-white rounded-[30px] focus:outline-none border-[1px] sm:py-[12px] '
                            />
                            <button
                                onClick={(e) => e.preventDefault()}
                                className='text-white text-[.9em] bg-[#43766C] rounded-[30px] py-[8px] sm:py-[10px] px-[15px] font-bold absolute right-[3px] top-[2px]'
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                    <form action='' className='py-[20px] lg:flex items-center gap-[1vw]'>
                        <h3 className='text-[.7em] font-bold py-[10px]'>
                            For sms alert
                        </h3>
                        <div className='relative w-[75vw] lg:w-[30vw] sm:w-[80vw] md:max-w-[400px]'>
                            <input
                                type='search'
                                name='Search'
                                placeholder='XXX YY ZZ'
                                className='py-[10px]  w-[100%] pl-[10px] text-black text-[.9rem] text-sm bg-white rounded-[30px] focus:outline-none border-[1px] sm:py-[12px]'
                            />
                            <button
                                onClick={(e) => e.preventDefault()}
                                className='text-white text-[.9em] bg-[#43766C] rounded-[30px] py-[8px] sm:py-[10px] px-[15px] font-bold absolute right-[3px] top-[2px] '
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                    <div className='icons justify-center py-2 lg:flex gap-[4vw]'>
                        <div>
                            <a
                                href=''
                                className='mr-[10px] w-[40px] h-[40px] p-[11px] text-center rounded-[50%] inline-block text-[#43766C] bg-white '
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href=''
                                className='mr-[10px] w-[40px] h-[40px] p-[11px] text-center rounded-[50%] inline-block text-[#43766C] bg-white '
                            >
                                <ImInstagram />
                            </a>
                            <a
                                href=''
                                className='mr-[10px] w-[40px] h-[40px] p-[11px] text-center rounded-[50%] inline-block text-[#43766C] bg-white '
                            >
                                <TfiYoutube />
                            </a>
                            <a
                                href=''
                                className='mr-[10px] w-[40px] h-[40px] p-[11px] text-center rounded-[50%] inline-block text-[#43766C] bg-white '
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
                <p className='text-[.85rem] text-center py-[10px]'>
                    © 2024 | All rights reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
