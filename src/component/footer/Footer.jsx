import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";
import delivery from '../../assets/delivery.svg';
import cash from '../../assets/cash.svg';
import gift from '../../assets/gift.svg';
import mobile from '../../assets/mobile.svg';
import online from '../../assets/online.svg';
import amiroff_creative_agency from '../../assets/amiroff_creative_agency.png';


function Footer() {
    
    return (
        <footer className='bg-[#FF8300] px-[2vw] text-white h-screen relative overflow-hidden'>
            <div className='text-[.7em] font-bold flex items-center text-center py-[20px] gap-[4vw]'>
                <div className='w-[30%] lg:flex gap-[10px] lg:w-[170px] lg:pl-[30px] lg:text-start'>
                    <img
                        src={delivery}
                        alt='neptun delivery'
                        className='mx-auto hover:scale-[1.2] transition'
                    />
                    <h4 className='py-[10px]'>
                        Pulsuz çatdırılma 50 azn-dən yuxarı
                    </h4>
                </div>
                <div className='w-[30%] lg:flex gap-[10px] lg:w-[150px] lg:text-start'>
                    <img
                        src={cash}
                        alt='neptun cash'
                        className=' mx-auto  hover:scale-[1.2] transition'
                    />
                    <h4 className='py-[10px]'>Nağd və ya kartla ödəniş</h4>
                </div>
                <div className='w-[30%] lg:flex gap-[10px] lg:w-[150px] lg:text-start'>
                    <img
                        src={gift}
                        alt='neptun gift'
                        className='mx-auto  hover:scale-[1.2] transition'
                    />
                    <h4 className='py-[10px]'>Nağd və ya kartla ödəniş</h4>
                </div>
                <div className=' hidden lg:flex gap-[10px] w-[150px] text-start'>
                    <img
                        src={online}
                        alt='online gift'
                        className='mx-auto  hover:scale-[1.2] transition'
                    />
                    <h4 className='py-[10px]'>Onlayn müştəri xidmətləri</h4>
                </div>
                <div className=' hidden lg:flex gap-[10px] w-[150px] text-start'>
                    <img
                        src={mobile}
                        alt='neptun gift'
                        className='mx-auto  hover:scale-[1.2] transition'
                    />
                    <h4 className='py-[10px]'>Sürətli mobil mağaza</h4>
                </div>
            </div>
            <div id="footer-logo" className='w-[100%] absolute left-[60%] top-[10%] z-0 md:w-[47%] sm:w-[70%] sm:left-[70%] lg:w-[40%] lg:left-[75%] xl:w-[28%] xl:left-[82%]'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='100%'
                    height='100%'
                    viewBox='0 0 442.03 565'
                    fill='#fff'
                >
                    <path
                        id='symbol'
                        className='cls-1'
                        d='M1220.94,3035.86a168.127,168.127,0,0,0-101.87,34.66c-25.9-22.53-59.57-35.53-98.41-35.53h-11.23A60.72,60.72,0,0,0,949,3095.65c0,32.93,26.763,60.66,60.429,60.66h11.23c21.58,0,31.94,18.19,31.94,37.26v172.44a60.907,60.907,0,0,0,61.29,60.66c33.67,0,60.44-27.73,60.44-60.66V3206.57c0-26,21.58-47.66,47.48-47.66s47.48,21.66,47.48,47.66v159.44c0,32.93,26.76,60.66,60.43,60.66a60.916,60.916,0,0,0,61.3-60.66V3206.57C1390.15,3111.25,1314.18,3035.86,1220.94,3035.86Zm-107.91,442.81a60.655,60.655,0,1,1-60.43,60.66A60.536,60.536,0,0,1,1113.03,3478.67Zm215.83,0a60.655,60.655,0,1,1-60.43,60.66A60.543,60.543,0,0,1,1328.86,3478.67Z'
                        transform='translate(-949 -3035)'
                    ></path>
                </svg>
            </div>
            <div className='p-[20px]'>
                <form action='' className='lg:flex gap-[4vw]'>
                    <h3 className='text-[.7em] font-bold py-[10px]'>
                        Bizə abunə olun
                    </h3>
                    <div className='relative w-[75vw] lg:w-[30vw] sm:w-[80vw] md:max-w-[600px]'>
                        <input
                            type='search'
                            name='Search'
                            placeholder='e-poçt ünvanınız... '
                            className='py-[10px]  w-[100%] pl-[10px] text-black text-[.8rem] text-sm bg-white rounded-[30px] focus:outline-none border-[1px] sm:py-[12px] '
                        />
                        <button
                            onClick={(e) => e.preventDefault()}
                            className='text-white text-[.9em] bg-[#FF8300] rounded-[30px] py-[8px] sm:py-[10px] px-[15px] font-bold absolute right-[3px] top-[2px]'
                        >
                            Abunə ol
                        </button>
                    </div>
                </form>
                <form action='' className='py-[20px] lg:flex gap-[4vw]'>
                    <h3 className='text-[.7em] font-bold py-[10px]'>
                        Sms xəbərdarlıq üçün
                    </h3>
                    <div className='flex justify-start gap-[10vw] sm:gap-[5vw]'>
                        <select className='py-[10px] w-[80px] pl-[10px] text-[#808080] text-[.9rem] text-sm bg-white rounded-[30px] focus:outline-none border-[1px] '>
                            <option value='' defaultValue={"---"}>
                                ---
                            </option>
                            <option value=''>050</option>
                            <option value=''>051</option>
                            <option value=''>055</option>
                            <option value=''>070</option>
                            <option value=''>077</option>
                        </select>
                        <div className='relative w-[50vw]  md:max-w-[400px]'>
                            <input
                                type='search'
                                name='Search'
                                placeholder='XXX YY ZZ'
                                className='py-[10px]  w-[100%] pl-[10px] text-black text-[.9rem] text-sm bg-white rounded-[30px] focus:outline-none border-[1px] sm:py-[12px]'
                            />
                            <button
                                onClick={(e) => e.preventDefault()}
                                className='text-white text-[.9em] bg-[#FF8300] rounded-[30px] py-[8px] sm:py-[10px] px-[15px] font-bold absolute right-[3px] top-[2px] '
                            >
                                Abunə ol
                            </button>
                        </div>
                    </div>
                </form>
                <div className='icons  lg:flex gap-[4vw]'>
                    <h3 className='text-[.7em] font-bold py-[10px]'>
                        Bizi izləyin
                    </h3>
                    <div>
                        <a
                            href=''
                            className='mr-[10px] w-[40px] h-[40px] p-[11px] text-center rounded-[50%] inline-block text-[#FF8300] bg-white '
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href=''
                            className='mr-[10px] w-[40px] h-[40px] p-[11px] text-center rounded-[50%] inline-block text-[#FF8300] bg-white '
                        >
                            <ImInstagram />
                        </a>
                        <a
                            href=''
                            className='mr-[10px] w-[40px] h-[40px] p-[11px] text-center rounded-[50%] inline-block text-[#FF8300] bg-white '
                        >
                            <TfiYoutube />
                        </a>
                        <a
                            href=''
                            className='mr-[10px] w-[40px] h-[40px] p-[11px] text-center rounded-[50%] inline-block text-[#FF8300] bg-white '
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
                <div className='footer-list hidden lg:flex text-[.8rem] pt-[20px]'>
                    <ul>
                        <li className='m-[10px]'>
                            <a href=''>Haqqımızda</a>
                        </li>
                        <li className='m-[10px]'>
                            <a href=''>Siyasətimiz</a>
                        </li>
                        <li className='m-[10px]'>
                            <a href=''>Yeniliklər</a>
                        </li>
                    </ul>
                    <ul>
                        <li className='m-[10px]'>
                            <a href=''>Aksiyalar</a>
                        </li>
                        <li className='m-[10px]'>
                            <a href=''>Kampaniyalar</a>
                        </li>
                        <li className='m-[10px]'>
                            <a href=''>Neptun Bonus Kart</a>
                        </li>
                    </ul>
                    <ul>
                        <li className='m-[10px]'>
                            <a href=''>Mağazalarımız</a>
                        </li>
                        <li className='m-[10px]'>
                            <a href=''>İrad və təkliflər</a>
                        </li>
                        <li className='m-[10px]'>
                            <a href=''>Alıcıların nəzərinə</a>
                        </li>
                        <li className='m-[10px]'>
                            <a href=''>Partnyorluq</a>
                        </li>
                        <li className='m-[10px]'>
                            <a href=''>Supermarketlərdə reklam</a>
                        </li>
                        <li className='m-[10px]'>
                            <a href=''>Alıcıların nəzərinə</a>
                        </li>
                    </ul>
                    <ul>
                        <li className='m-[10px]'>
                            <a href=''>Kariyera</a>
                        </li>
                        <li className='m-[10px]'>
                            <a href=''>İşə qəbul</a>
                        </li>
                        <li className='m-[10px]'>
                            <a href=''>Vakansiyalar</a>
                        </li>
                        <li className='m-[10px]'>
                            <a href=''>İşə qəbul</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-[.8em] inline-block py-[10px] mt-[10px] border-b-[1px] border-b-[#fff] border-dashed'>
                        Daha çox
                    </h3>
                </div>
                <div>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width='270.121'
                        height='149.809'
                        viewBox='0 0 2533 542'
                    >
                        <image
                            id='Слой_1'
                            data-name='Слой 1'
                            width='2533'
                            height='542'
                            xlinkHref='data:img/png;base64,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'
                        ></image>
                    </svg>
                </div>
                <span className='text-[.8rem] py-[10px] inline-block'>
                    © 2003 - 2023 Neptun Supermarket. All rights reserved
                </span>

                <div className='flex items-center gap-[4vw] py-[10px] lg:gap-[2vw]'>
                    <h6 className='text-[.8rem]'>Created by:</h6>
                    <img
                        id='amiroff-img'
                        className='w-[18vw] brightness-[0] sm:w-[15vw] lg:w-[80px]'
                        src={amiroff_creative_agency}
                        alt='amiroff agency'
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
