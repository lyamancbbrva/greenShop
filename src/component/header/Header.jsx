import React, { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FiBarChart } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { FaChevronDown, FaRegHeart } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiMiniBars4 } from "react-icons/hi2";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { Cntx } from "../../context/DataContext";
import logo from '../../assets/greenLogo.png';
import getAllProducts, { searchProduct } from "../../api/api";

function Header({ catSt, setCatSt }) {
    const [status, setStatus] = useState(false)
    const [sideSt, setSideSt] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [inp, setInp] = useState("")
    const [data, setData] = useState([])
    const { sebetSay } = useContext(Cntx)
    const [activeAccordion, setActiveAccordion] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState([null])

    function toggleAccordion(index) { setActiveAccordion(activeAccordion === index ? null : index) }

    useEffect(() => {
        searchProduct().then(res => { setFilteredProducts(res) })
        getAllProducts().then(res => {setData(res)})
    }, [])

    async function handleSearch(e) {
        setInp(e.target.value)
        setStatus(true);
        const filtered = data.filter(item =>
            item.name.toLowerCase().startsWith(inp.toLowerCase())
        );
        setFilteredProducts(filtered)
    }


    return (
        <header onClick={() => setStatus(false)}>
            <Sidebar sideSt={sideSt} setSideSt={setSideSt} />
            <div className='wrapper'>
                <div className='flex justify-between items-center gap-[3vw] px-[10px] py-[20px]'>
                    <Link to='/' className='w-[40vw] md:w-[14vw] '>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className='relative w-[45vw] lg:w-[30vw]'>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                            <button
                                type='button'
                                title='search'
                                className='p-1 focus:outline-none focus:ring'
                            >
                                <svg
                                    fill='#43766C'
                                    viewBox='0 0 512 512'
                                    className='w-4 h-4 dark:text-gray-800'
                                >
                                    <path d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z'></path>
                                </svg>
                            </button>
                        </span>
                        <input
                            onChange={handleSearch}
                            type='search'
                            name='Search'
                            placeholder='Search...'
                            className='py-[4px] sm:py-[10px] w-[100%] pl-10 text-sm bg-white rounded-[30px] text-[.7rem] focus:outline-none border-[1px] border-[#43766C]'
                        />
                        <button className='text-white text-[.9em] bg-[#43766C] rounded-[30px] py-[4px] sm:py-[10px] px-[15px]  absolute right-0 '>
                            Search
                        </button>
                        <div id="scrollbar" className={`${status ? 'block' : 'hidden'} max-h-[250px] sm:max-h-[200px] overflow-y-auto absolute z-20 rounded-md shadow-md m-auto w-[47vw] lg:w-[30vw] md:w-[45vw]`}>
                            {
                                filteredProducts && filteredProducts?.map((item, i) => (
                                    <Link key={i} className="flex gap-5 items-center p-3 border-b w-full bg-gray-50 hover:bg-gray-200">
                                        <img src={item?.img} className="w-16 h-16 object-cover rounded-md" alt={item?.name} />
                                        <div>
                                            <h3 className="text-sm hover:text-green-700 capitalize text-md transition-all">
                                                {item?.name}
                                            </h3>
                                            <p className="text-sm font-bold text-green-900">{item?.price} ₼</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={()=>setIsOpen(!isOpen)} className='hidden md:block lg:hidden p-[10px] bg-[#43766C] text-white rounded-[5px] text-[1.4em] '>
                        <FaBars />
                    </button>
                </div>
            </div>
            <nav className='bg-[#43766C] text-white py-[10px] flex justify-between items-center lg:p-[0] px-[2vw]'>
                <div className='wrapper flex justify-between items-center w-[100%]'>
                    <FiBarChart
                        onClick={() => setSideSt(!sideSt)}
                        className='rotate-90 h-[30px] w-[30px] lg:hidden' />
                    <div className='desktop-nav  lg:flex items-center gap-[30px] justify-between '>
                        <div
                            onClick={() => setCatSt(!catSt)}
                            id='category-button'
                            className='hidden lg:inline cursor-pointer py-[12px] px-[10px] text-[#43766C] bg-white w-[250px] xl:w-[360px]'
                        >
                            <HiMiniBars4 className='text-[1.4em] inline mr-[2vw] ' />
                            <span className='text-[.9em] tracking-wider font-bold '>
                                Categories
                            </span>
                        </div>

                        <ul className='xl:flex gap-[15px] w-[100%] hidden '>
                            <li className='text-[.8em] font-medium py-3'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='text-[.8em] font-medium relative hover about py-3 block'>
                                <Link to='/haqqimizda'>About</Link>
                                <TiArrowSortedDown className='inline' />
                                <ul className='bg-[#fff] z-10 hover-menu h-0 hover:py-[15px] border-t-2 border-[#43766C] px-[10px] transition-[1s] overflow-hidden about-open rounded-b-[10px] shadow text-black text-[1em] absolute left-0 top-[calc(100%+1px)] w-[12vw]'>
                                    <li className="py-[3px]">
                                        <Link to='siyasetimiz'>
                                            Our Policy
                                        </Link>
                                    </li>
                                    <li className="py-[3px]">
                                        <Link to=''>News</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='text-[.8em] font-medium hover aksia py-3 relative'>
                                <a href=''>Promotions</a>
                                <TiArrowSortedDown className='inline' />
                                <ul className='bg-[#fff] z-10 h-0 hover-menu overflow-hidden transition-all aksia-open px-[15px] border-t-2 border-[#43766C] hover:py-[15px] rounded-b-[10px] shadow text-black  text-[1em] absolute left-0 top-[calc(100%+1px)] w-[12vw]'>
                                    <li className="py-[3px]">
                                        <a href=''>Campaigns</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Bonus Card</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Electronic Catalog</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='text-[.8em] font-medium relative hover supermarket py-3'>
                                <a href=''>Supermarkets</a>
                                <TiArrowSortedDown className='inline' />
                                <ul className='bg-[#fff] z-10 h-0 hover-menu overflow-hidden hover:py-[15px] supermarket-open transition-all border-t-2 border-[#43766C] px-[15px] rounded-b-[10px] shadow text-black  text-[1em] absolute left-0 top-[calc(100%+1px)] w-[12vw]'>
                                    <li className="py-[3px]">
                                        <a href=''>Our Stores</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Feedback and Suggestions</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>For Buyers</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Partnership</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Partners</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Advertising in Market</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='text-[.8em] font-medium relative hover karyera py-3'>
                                <a href=''>Career</a>
                                <TiArrowSortedDown className='inline' />
                                <ul className='bg-[#fff] z-10 h-0 overflow-hidden hover-menu transition-all karyera-open hover:py-[10px] px-[15px] border-t-2 border-[#43766C] rounded-b-[10px] shadow text-black  text-[1em] absolute left-0 top-[calc(100%+1px)] w-[12vw]'>
                                    <li className="py-[3px]">
                                        <a href=''>Recruitment Procedure</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Vacancies</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Submit CV</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='text-[.8em] font-medium py-3'>
                                <Link to='/elaqe'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-[4vw] lg:gap-[1vw]'>
                        <div className='border-r-[1px] border-r-[#fff] px-[2vw] hover:text-[#ccc] flex items-center '>
                            <FaLock className='inline text-[.8em] mx-[5px]' />
                            <Link to='login' className='text-[.8em] font-medium cursor-pointer'>
                                Login
                            </Link>
                        </div>
                        <ul className="flex">
                            <li className='flex items-center py-3 text-[.85em] hesab hover w-full relative'>
                                <span className="hidden md:inline text-nowrap font-medium">My Account</span>
                                <FaChevronDown className='text-[.7em] mx-[2vw] cursor-pointer lg:mx-[5px]' />
                                <ul className='bg-[#fff] font-medium h-0 overflow-hidden hesab-open hover-menu transition-all px-[15px] rounded-b-[10px] shadow text-black  text-[.9em] absolute left-[-15px] top-[calc(100%+2px)] min-w-[10vw]'>
                                    <li className='hover:text-[#43766C] m-1'>
                                        <a href=''>My Account</a>
                                    </li>
                                    <li className='hover:text-[#43766C] m-1'>
                                        <a href=''>Payment History</a>
                                    </li>
                                    <li className='hover:text-[#43766C] m-1'>
                                        <a href=''>Transactions</a>
                                    </li>
                                    <li className='hover:text-[#43766C] m-1'>
                                        <a href=''>Downloads</a>
                                    </li>
                                    <li className='hover:text-[#43766C] m-1'>
                                        <a href=''>Finalize Order</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <FaRegHeart className='text-[1.3em] cursor-pointer' />
                        <LuRefreshCcw className='text-[1.3em] hover:rotate-[270deg] transition cursor-pointer' />
                        <Link
                            to='/basket'
                            className='relative p-[2vw] sm:p-[1vw] lg:p-[10px]'
                        >
                            <SlBasket className='text-[1.3em]' />
                            <span className='bg-[#fcfbf4] absolute top-0 right-0 rounded-[50%] px-[5px] text-[.7em] text-black '>
                                {sebetSay}
                            </span>
                        </Link>
                    </div>
                    <button onClick={()=>setIsOpen(!isOpen)} className='md:hidden  p-[1.7vw] text-[#43766C] bg-white rounded-[5px] text-[1.4em] '>
                        <FaBars />
                    </button>
                </div>
            </nav>
            <div className="sidebar" id="scrollbar">
                <div onClick={()=> setIsOpen(!isOpen)} className={`${isOpen ? 'block' : 'hidden'} bg-[#0000004b] z-10 absolute w-[100%] h-[100%] top-0`}></div>
                <div
                    id="drawer-navigation"
                    className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 shadow-2xl overflow-y-auto transition-transform duration-300 bg-white ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    tabIndex="-1"
                    aria-labelledby="drawer-navigation-label"
                >
                    <button
                        type="button"
                        onClick={()=> setIsOpen(!isOpen)}
                        aria-controls="drawer-navigation"
                        className="text-black bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div className="py-4 overflow-y-auto">
                        <ul className="space-y-2 py-8">
                            <li className="border-b cursor-pointer">
                                <Link to={'/'} onClick={()=> setIsOpen(!isOpen)} className="p-2 block text-gray-900 text-[.85em] hover:text-[#43766C]">Home</Link>
                            </li>
                            <li className="border-b cursor-pointer">
                                <div className=" bg-white rounded-xl">
                                    <Link to='/haqqimizda' onClick={() => {toggleAccordion(0); setIsOpen(!isOpen)}} className=" p-2 text-gray-900 text-[.85em] hover:text-[#43766C] inline-flex justify-between items-center gap-x-3 w-full">
                                        About Us
                                        <svg className="hs-accordion-active:hidden:block size-4 bg-[#43766C] text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5v14"></path>
                                        </svg>
                                    </Link>
                                    <div className={`${activeAccordion === 0 ? 'block' : 'hidden'} w-full overflow-hidden transition duration-300`}>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#43766C]">Our Policy</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#43766C]">News</p>
                                    </div>
                                </div>
                            </li>
                            <li className="border-b cursor-pointer">
                                <div className="bg-white rounded-xl">
                                    <button onClick={() => toggleAccordion(1)} className="p-2 text-gray-900 text-[.85em] hover:text-[#43766C] inline-flex justify-between items-center gap-x-3 w-full">
                                        Promotions
                                        <svg className="hs-accordion-active:hidden:block size-4 bg-[#43766C] text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5v14"></path>
                                        </svg>
                                    </button>
                                    <div className={`${activeAccordion === 1 ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#43766C]">Campaigns</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#43766C]">Bonus Card</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#43766C]">Electronic Catalog</p>
                                    </div>
                                </div>
                            </li>
                            <li className="border-b cursor-pointer">
                                <div className="bg-white rounded-xl">
                                    <button onClick={() => toggleAccordion(2)} className="p-2 text-gray-900 text-[.85em] hover:text-[#43766C] inline-flex justify-between items-center gap-x-3 w-full">
                                        Supermarkets
                                        <svg className="hs-accordion-active:hidden:block size-4 bg-[#43766C] text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5v14"></path>
                                        </svg>
                                    </button>
                                    <div className={`${activeAccordion === 2 ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#43766C]">Our Stores</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#43766C]">Feedback and Suggestions</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#43766C]">For Buyers</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#43766C]">Partnership</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#43766C]">Partners</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#43766C]">Advertising in Market</p>
                                    </div>
                                </div>
                            </li>
                            <li className="border-b cursor-pointer">
                                <div className="bg-white rounded-xl">
                                    <button onClick={() => toggleAccordion(3)} className="p-2 text-gray-900 text-[.85em] hover:text-[#43766C] inline-flex justify-between items-center gap-x-3 w-full">
                                        Career
                                        <svg className="hs-accordion-active:hidden:block size-4 bg-[#43766C] text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5v14"></path>
                                        </svg>
                                    </button>
                                    <div className={`${activeAccordion === 3 ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#43766C]">Recruitment Procedure</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#43766C]">Vacancies</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#43766C]">Submit CV</p>
                                    </div>
                                </div>
                            </li>
                            <li className="border-b pb-2 cursor-pointer">
                                <Link to='/elaqe' onClick={()=> setIsOpen(!isOpen)} className="p-2 text-gray-900 text-[.85em] hover:text-[#43766C]">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;