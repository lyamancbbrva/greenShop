import React, { useContext, useState } from "react";
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
import azneptun from '../../assets/az-neptun.png';

function Header({ catSt, setCatSt }) {

    const [sideSt, setSideSt] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const { sebetSay } = useContext(Cntx)
    const [activeAccordion, setActiveAccordion] = useState(null);

    function toggleAccordion(index) {
        setActiveAccordion(activeAccordion === index ? null : index);
    }

    function toggleSideBar() {
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <Sidebar sideSt={sideSt} setSideSt={setSideSt} />
            <div className='wrapper'>
                <div className='flex my-[10px] justify-between items-center gap-[3vw] p-[10px] '>
                    <Link to='/' className='w-[40vw] md:w-[20vw] '>
                        <svg
                            version='1.1'
                            id='neptun_logo_svg'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0px'
                            y='0px'
                            viewBox='270 250 330 90'
                            style={{ enableBackground: "new 270 250 330 90" }}
                            xmlSpace='preserve'
                            fill='#FF8300'
                            width='100%'
                        >
                            <g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    fill='#FF8300'
                                                    className='st0'
                                                    d='M352.1,270.4c-10,0-17.7,6.3-20.8,13.8c-2.4,5.8-2.5,12.7,0.3,18.4c3.5,7.3,11.5,13.1,21.7,13.1
c4.5,0,8.8-1.2,12.7-3.4c2.8-1.7,3.8-5.4,2.1-8.3c-1.7-2.8-5.4-3.9-8.2-2.1c-5.7,3.1-13,2.2-16.9-3.7h23.5c5,0,8.6-2.7,8.1-8
C373.1,278.9,363.5,270.4,352.1,270.4z M343,288.1c0.8-3.4,4.6-6.5,9-6.5c4.5,0,8.2,3.2,9,6.5H343z'
                                                ></path>
                                                <path
                                                    className='st0'
                                                    d='M404.3,270.1c-4,0-7.8,1.1-11.1,2.8c-1.2-1.3-2.9-2.1-5-2.1c-3.6,0-6.6,3-6.6,6.6v44.8
c0,3.6,2.9,6.5,6.5,6.7h0.6c3.9,0,7-3.2,7-7v-8.2c2.7,1.1,5.6,1.7,8.6,1.7c12.5,0,22.7-10.2,22.7-22.7
C427,280.3,416.8,270.1,404.3,270.1z M404.3,301.3c-4.8,0-8.6-3.8-8.6-8.6c0-4.8,3.8-8.6,8.6-8.6c4.8,0,8.6,3.8,8.6,8.6
C412.9,297.5,409.1,301.3,404.3,301.3z'
                                                ></path>
                                                <path
                                                    className='st0'
                                                    d='M455.3,283.1c3.5,0,6.2-2.7,6.2-6.1c0-3.5-2.7-6.2-6.2-6.2h-6.5v-7c0-3.9-3.2-7.1-7.1-7.1
s-7.1,3.2-7.1,7.1v32.7c0,10.3,7.4,18.5,17.9,18.5h1.3c3.9,0,7.1-3.2,7.1-7.1s-3.2-7.1-7.1-7.1h-1.3c-2.6,0-3.7-2.1-3.7-4.3
v-13.5H455.3z'
                                                ></path>
                                                <path
                                                    className='st0'
                                                    d='M501.2,270.8c-3.9,0-7,3.2-7,7v18.4c0,3-2.5,5.5-5.5,5.5c-3,0-5.5-2.5-5.5-5.5v-18.4c0-3.8-3.1-7-7-7
c-4,0-7.1,3.2-7.1,7v18.4c0,10.8,8.8,19.6,19.6,19.6c10.8,0,19.6-8.8,19.6-19.6v-18.4C508.2,274,505.1,270.8,501.2,270.8z'
                                                ></path>
                                                <path
                                                    className='st0'
                                                    d='M536.7,270.8c-10.8,0-19.6,8.8-19.6,19.6v18.4c0,3.8,3.1,7,7.1,7c3.9,0,7-3.2,7-7v-18.4
c0-3,2.5-5.5,5.5-5.5c3,0,5.5,2.5,5.5,5.5v18.4c0,3.8,3.1,7,7,7c4,0,7.1-3.2,7.1-7v-18.4C556.3,279.5,547.5,270.8,536.7,270.8z
'
                                                ></path>
                                                <path
                                                    className='st0'
                                                    d='M303.4,270.8c-4.4,0-8.5,1.5-11.8,4c-3-2.6-6.9-4.1-11.4-4.1h-1.3c-3.8,0-7,3.1-7,7c0,3.8,3.1,7,7,7h1.3
c2.5,0,3.7,2.1,3.7,4.3v1.1c0,0.1,0,0.3,0,0.4v18.4c0,3.8,3.1,7,7.1,7c3.9,0,7-3.2,7-7v-18.4c0-3,2.5-5.5,5.5-5.5
c3,0,5.5,2.5,5.5,5.5v18.4c0,3.8,3.1,7,7,7c4,0,7.1-3.2,7.1-7v-18.4C323,279.5,314.2,270.8,303.4,270.8z'
                                                ></path>
                                                <circle
                                                    className='st0'
                                                    cx='290.9'
                                                    cy='328.9'
                                                    r='7'
                                                ></circle>
                                                <circle
                                                    className='st0'
                                                    cx='315.9'
                                                    cy='328.9'
                                                    r='7'
                                                ></circle>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            fill='#FF8300'
                                            className='st0'
                                            d='M437.2,330.1c0.9,0,1.7,0.4,2.2,1.1c0.6,0.7,0.8,1.6,0.6,2.5c-0.1,0.7-0.5,1.2-1,1.7
c-0.5,0.4-1.2,0.6-1.9,0.6h0c-0.6,0-1.2-0.2-1.7-0.6c-0.5-0.4-0.8-0.9-1-1.5c-0.1-0.2,0-0.4,0.1-0.6s0.3-0.3,0.5-0.3
c0.3,0,0.5,0.2,0.6,0.5c0.1,0.3,0.3,0.6,0.6,0.8c0.3,0.2,0.6,0.3,1,0.3h0c0.4,0,0.7-0.1,1-0.3c0.3-0.2,0.5-0.5,0.6-0.9
c0.1-0.5,0-1-0.3-1.4c-0.3-0.4-0.7-0.6-1.2-0.6c-0.7,0-1.4-0.3-1.9-0.8c-0.5-0.5-0.8-1.1-0.8-1.9v-0.2c0-0.7,0.3-1.4,0.8-1.9
c0.5-0.5,1.1-0.8,1.9-0.8h0c0.6,0,1.1,0.2,1.5,0.5c0.5,0.3,0.8,0.8,0.9,1.3c0.1,0.2,0,0.4-0.1,0.6c-0.1,0.2-0.3,0.3-0.5,0.3h0
c-0.3,0-0.5-0.1-0.6-0.4c-0.1-0.3-0.2-0.5-0.5-0.7c-0.2-0.2-0.5-0.3-0.8-0.3h0c-0.4,0-0.7,0.1-0.9,0.4c-0.3,0.3-0.4,0.6-0.4,0.9
v0.2c0,0.4,0.1,0.7,0.4,0.9C436.5,330,436.8,330.1,437.2,330.1z'
                                        ></path>
                                        <path
                                            fill='#FF8300'
                                            className='st0'
                                            d='M446.7,335c-0.5-0.6-0.8-1.3-0.8-2v-6.4c0-0.2,0.1-0.3,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2
c0.2,0,0.3,0.1,0.4,0.2c0.1,0.1,0.2,0.3,0.2,0.5v6.5c0,0.4,0.1,0.8,0.4,1.1c0.3,0.3,0.6,0.5,1,0.6c0.5,0.1,0.9-0.1,1.3-0.4
c0.4-0.3,0.5-0.7,0.5-1.2v-6.5c0-0.2,0.1-0.3,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2s0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.5v6.5
c0,0.8-0.3,1.5-0.9,2.1c-0.6,0.6-1.3,0.8-2.1,0.8C447.9,335.9,447.2,335.6,446.7,335z'
                                        ></path>
                                        <path
                                            fill='#FF8300'
                                            className='st0'
                                            d='M460.5,326c0.7,0,1.3,0.3,1.8,0.8c0.5,0.5,0.8,1.1,0.8,1.8v0c0,0.7-0.3,1.3-0.8,1.8
c-0.5,0.5-1.1,0.8-1.8,0.8H459v4.1c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.5-0.2
c-0.1-0.1-0.2-0.3-0.2-0.5v-8.7c0-0.2,0.1-0.3,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2H460.5z M461.8,328.6c0-0.4-0.1-0.7-0.4-0.9
c-0.3-0.3-0.6-0.4-0.9-0.4H459v2.7h1.5c0.4,0,0.7-0.1,0.9-0.4C461.7,329.3,461.8,329,461.8,328.6L461.8,328.6z'
                                        ></path>
                                        <path
                                            fill='#FF8300'
                                            className='st0'
                                            d='M473.1,334.7c0.2,0,0.3,0.1,0.4,0.2c0.1,0.1,0.2,0.3,0.2,0.5c0,0.2-0.1,0.3-0.2,0.5
c-0.1,0.1-0.3,0.2-0.4,0.2h-3.4c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5v-8.5c0-0.2,0.1-0.3,0.2-0.5
c0.1-0.1,0.3-0.2,0.5-0.2h3.4c0.2,0,0.3,0.1,0.4,0.2c0.1,0.1,0.2,0.3,0.2,0.5c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.4,0.2
h-2.7v2.6h2.3c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.5c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2h-2.3v3.3H473.1z'
                                        ></path>
                                        <path
                                            fill='#FF8300'
                                            className='st0'
                                            d='M485.1,328.6c0,0.8-0.3,1.4-0.9,1.9c0.6,0.5,0.9,1.2,0.9,1.9v2.8c0,0.2-0.1,0.3-0.2,0.5
c-0.1,0.1-0.3,0.2-0.5,0.2s-0.3-0.1-0.4-0.2c-0.1-0.1-0.2-0.3-0.2-0.5v-2.8c0-0.4-0.1-0.7-0.4-0.9c-0.3-0.3-0.6-0.4-0.9-0.4h-1.5
v4.1c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5v-8.7
c0-0.2,0.1-0.3,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2h2.1c0.7,0,1.3,0.3,1.8,0.8S485.1,327.9,485.1,328.6L485.1,328.6z M481.1,330h1.5
c0.4,0,0.7-0.1,0.9-0.4c0.3-0.3,0.4-0.6,0.4-0.9v0c0-0.4-0.1-0.7-0.4-0.9c-0.3-0.3-0.6-0.4-0.9-0.4h-1.5V330z'
                                        ></path>
                                        <path
                                            fill='#FF8300'
                                            className='st0'
                                            d='M498,325.9c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.5v8.7c0,0.2-0.1,0.3-0.2,0.5
c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5v-6.1l-1.9,3.7c0,0,0,0.1-0.1,0.1
c-0.1,0.1-0.1,0.1-0.2,0.2c-0.2,0.1-0.3,0.1-0.5,0c-0.2,0-0.3-0.2-0.4-0.3l-1.9-3.6v6.1c0,0.2-0.1,0.3-0.2,0.5
c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5v-8.7c0-0.2,0.1-0.3,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2
c0.2,0,0.4,0.1,0.6,0.3c0,0,0,0,0,0l0,0l2.5,4.9l2.5-4.9c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0-0.1c0.1-0.2,0.2-0.2,0.2-0.2
S497.8,325.9,498,325.9z'
                                        ></path>
                                        <path
                                            fill='#FF8300'
                                            className='st0'
                                            d='M510,327.7c0.1,0.3,0.1,0.5,0.1,0.8v6.8c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2s-0.3-0.1-0.5-0.2
c-0.1-0.1-0.2-0.3-0.2-0.5v-4.1h-2.7v4.1c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.5-0.2
c-0.1-0.1-0.2-0.3-0.2-0.5v-6.8c0-0.3,0-0.5,0.1-0.8c0,0,0-0.1,0,0c0.3-0.8,0.8-1.4,1.7-1.6c0,0,0,0,0,0c0.1,0,0.1,0,0.2-0.1h0
c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0l0,0c0.1,0,0.2,0,0.2,0h0c0.1,0,0.2,0,0.2,0l0.1,0c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0h0
c0.1,0,0.1,0,0.2,0.1c0,0,0,0,0,0C509.1,326.3,509.7,326.8,510,327.7C510,327.7,510,327.7,510,327.7L510,327.7z M508.8,330v-1.5
c0-0.2,0-0.3-0.1-0.5l0,0c-0.1-0.1-0.1-0.2-0.2-0.3c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0,0-0.1,0-0.1-0.1
s-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.2,0c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0h-0.1
c-0.1,0-0.1,0-0.2,0c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0l-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0.1
c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.3c0,0,0,0,0,0
c-0.1,0.2-0.1,0.3-0.1,0.5v1.5H508.8z'
                                        ></path>
                                        <path
                                            fill='#FF8300'
                                            className='st0'
                                            d='M521.7,328.6c0,0.8-0.3,1.4-0.9,1.9c0.6,0.5,0.9,1.2,0.9,1.9v2.8c0,0.2-0.1,0.3-0.2,0.5
c-0.1,0.1-0.3,0.2-0.5,0.2s-0.3-0.1-0.4-0.2c-0.1-0.1-0.2-0.3-0.2-0.5v-2.8c0-0.4-0.1-0.7-0.4-0.9c-0.3-0.3-0.6-0.4-0.9-0.4h-1.5
v4.1c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5v-8.7
c0-0.2,0.1-0.3,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2h2.1c0.7,0,1.3,0.3,1.8,0.8S521.7,327.9,521.7,328.6L521.7,328.6z M517.6,330h1.5
c0.4,0,0.7-0.1,0.9-0.4c0.3-0.3,0.4-0.6,0.4-0.9v0c0-0.4-0.1-0.7-0.4-0.9c-0.3-0.3-0.6-0.4-0.9-0.4h-1.5V330z'
                                        ></path>
                                        <path
                                            fill='#FF8300'
                                            className='st0'
                                            d='M533,335c0.1,0.1,0.1,0.3,0.1,0.5c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.1-0.5,0.1c-0.2,0-0.3-0.1-0.4-0.3
l-3-4v3.6c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5v-8.8
c0-0.2,0.1-0.3,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2c0.2,0,0.3,0.1,0.4,0.2c0.1,0.1,0.2,0.3,0.2,0.5v3.1l3-3.6
c0.1-0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.4s0,0.3-0.1,0.5l-3.1,3.7L533,335z'
                                        ></path>
                                        <path
                                            fill='#FF8300'
                                            className='st0'
                                            d='M543.2,334.7c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.5c0,0.2-0.1,0.3-0.2,0.5
c-0.1,0.1-0.3,0.2-0.5,0.2h-3.4c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5v-8.5c0-0.2,0.1-0.3,0.2-0.5
c0.1-0.1,0.3-0.2,0.5-0.2h3.4c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.5c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2
h-2.7v2.6h2.3c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.5c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2h-2.3v3.3H543.2z'
                                        ></path>
                                        <path
                                            fill='#FF8300'
                                            className='st0'
                                            d='M554.7,326c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.5c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2
H553v8.1c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5v-8.1H550
c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.2,0.1-0.3,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2H554.7z M554.7,326
c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.5c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2H553v8.1c0,0.2-0.1,0.3-0.2,0.5
c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5v-8.1H550c-0.2,0-0.3-0.1-0.5-0.2
c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.2,0.1-0.3,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2H554.7z'
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>
                    <div className='relative w-[40vw] lg:w-[30vw]'>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                            <button
                                type='button'
                                title='search'
                                className='p-1 focus:outline-none focus:ring'
                            >
                                <svg
                                    fill='#FF8300'
                                    viewBox='0 0 512 512'
                                    className='w-4 h-4 dark:text-gray-800'
                                >
                                    <path d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z'></path>
                                </svg>
                            </button>
                        </span>
                        <input
                            type='search'
                            name='Search'
                            placeholder='Məhsulu axtar'
                            className='py-[4px] sm:py-[10px] w-[100%] pl-10 text-sm bg-white rounded-[30px] text-[.7rem] focus:outline-none border-[1px] border-[#FF8300]'
                        />
                        <button className='text-white text-[.9em] bg-[#FF8300] rounded-[30px] py-[4px] sm:py-[10px] px-[15px]  absolute right-0 '>
                            Axtar
                        </button>
                    </div>
                    <button onClick={toggleSideBar} className='hidden md:block lg:hidden p-[10px] bg-[#FF8300] text-white rounded-[5px] text-[1.4em] '>
                        <FaBars />
                    </button>
                    <div className='hidden lg:flex justify-end w-[40vw]'>
                        <img
                            src={azneptun}
                            alt='az-neptun'
                            className='object-cover'
                        />
                    </div>
                </div>
            </div>
            <nav className='bg-[#FF8300] text-white py-[10px] flex justify-between items-center lg:p-[0] px-[1.5vw]'>
                <div className='wrapper flex justify-between items-center w-[100%]'>
                    <FiBarChart
                        onClick={() => setSideSt(!sideSt)}
                        className='rotate-90 h-[30px] w-[30px] lg:hidden' />
                    <div className='desktop-nav  lg:flex items-center gap-[30px] justify-between '>
                        <div
                            onClick={() => setCatSt(!catSt)}
                            id='category-button'
                            className='hidden lg:inline cursor-pointer py-[12px] px-[10px] text-[#FF8300] bg-white w-[250px] xl:w-[360px]'
                        >
                            <HiMiniBars4 className='text-[1.4em] inline mr-[2vw] ' />
                            <span className='text-[.8em] font-bold '>
                                Kateqoriyalar
                            </span>
                        </div>

                        <ul className='xl:flex gap-[15px] w-[100%] hidden '>
                            <li className='text-[.8em] font-medium py-3'>
                                <Link to='/'>Ana Səhifə</Link>
                            </li>
                            <li className='text-[.8em] font-medium relative hover about py-3 block'>
                                <Link to='/haqqimizda'>Haqqımızda</Link>
                                <TiArrowSortedDown className='inline' />
                                <ul className='bg-[#fff] z-10 hover-menu h-0 hover:py-[15px] px-[10px] transition-[1s] overflow-hidden border-t-[2px] about-open border-t-[#FF8300]  rounded-b-[10px] shadow text-black text-[1em] absolute left-0 top-[calc(100%+0px)] w-[12vw]'>
                                    <li className="py-[3px]">
                                        <Link to='siyasetimiz'>
                                            Siyasətimiz
                                        </Link>
                                    </li>
                                    <li className="py-[3px]">
                                        <Link to=''>Yeniliklər</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='text-[.8em] font-medium hover aksia py-3 relative'>
                                <a href=''>Aksiyalar</a>
                                <TiArrowSortedDown className='inline' />
                                <ul className='bg-[#fff] z-10 h-0 hover-menu overflow-hidden transition-all border-t-[2px] aksia-open border-t-[#FF8300] px-[15px] hover:py-[15px] rounded-b-[10px] shadow text-black  text-[1em] absolute left-0 top-[calc(100%+0px)] w-[12vw]'>
                                    <li className="py-[3px]">
                                        <a href=''>Kampaniyalar</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Neptun Bonus Kart</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Elektron Kataloq</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='text-[.8em] font-medium relative hover supermarket py-3'>
                                <a href=''>Supermarketlər</a>
                                <TiArrowSortedDown className='inline' />
                                <ul className='bg-[#fff] z-10 h-0 hover-menu overflow-hidden hover:py-[15px] supermarket-open border-t-[2px]  transition-all border-t-[#FF8300] px-[15px] rounded-b-[10px] shadow text-black  text-[1em] absolute left-0 top-[calc(100%+0px)] w-[12vw]'>
                                    <li className="py-[3px]">
                                        <a href=''>Mağazalarımız</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>İrad və təkliflər</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Alıcıların Nəzərinə</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Partnyorluq</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Tərəfdaşlar</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Marketdə Reklam</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='text-[.8em] font-medium relative hover karyera py-3'>
                                <a href=''>Kariyera</a>
                                <TiArrowSortedDown className='inline' />
                                <ul className='bg-[#fff] z-10 h-0 overflow-hidden hover-menu transition-all karyera-open border-t-[2px]  border-t-[#FF8300] hover:py-[10px] px-[15px] rounded-b-[10px] shadow text-black  text-[1em] absolute left-0 top-[calc(100%+0px)] w-[12vw]'>
                                    <li className="py-[3px]">
                                        <a href=''>İşə qəbul proseduru</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>Vakansiyalar</a>
                                    </li>
                                    <li className="py-[3px]">
                                        <a href=''>CV yerləşdirin</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='text-[.8em] font-medium py-3'>
                                <Link to='/elaqe'>Əlaqə</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-[4vw] lg:gap-[1vw]'>
                        <div className='border-r-[1px] border-r-[#fff] px-[2vw] flex items-center '>
                            <FaLock className='inline text-[.8em] mx-[5px]' />
                            <span className='text-[.8em] hover:text-[#ccc] cursor-pointer'>
                                Giriş
                            </span>
                        </div>
                        <ul className="flex">
                            <li className='flex items-center text-[.9em] hesab hover w-full relative'>
                                <span className="hidden md:inline">Hesabım</span>
                                <FaChevronDown className='text-[.7em] mx-[2vw] cursor-pointer lg:mx-[5px]' />
                                <ul className='bg-[#fff] h-0 overflow-hidden hesab-open hover-menu   transition-all px-[15px] rounded-b-[10px] shadow text-black  text-[.9em] absolute left-0 top-[calc(100%+1px)] min-w-[10vw]'>
                                    <li className='hover:text-[#FF8300] m-1'>
                                        <a href=''>Hesabım</a>
                                    </li>
                                    <li className='hover:text-[#FF8300] m-1'>
                                        <a href=''>Ödəniş tarixçəsi</a>
                                    </li>
                                    <li className='hover:text-[#FF8300] m-1'>
                                        <a href=''>Əməliyyatlar</a>
                                    </li>
                                    <li className='hover:text-[#FF8300] m-1'>
                                        <a href=''>Yükləmələr</a>
                                    </li>
                                    <li className='hover:text-[#FF8300] m-1'>
                                        <a href=''>Sifarişi rəsmiləşdir</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <FaRegHeart className='text-[1.3em] ' />
                        <LuRefreshCcw className='text-[1.3em] hover:rotate-[270deg] transition cursor-pointer' />
                        <Link
                            to='/basket'
                            className='relative p-[2vw] sm:p-[1vw] lg:p-[10px]'
                        >
                            <SlBasket className='text-[1.3em]' />
                            <span className='bg-[#00FF00] absolute top-0 right-0 rounded-[50%] px-[5px] text-[.7em] text-black '>
                                {sebetSay}
                            </span>
                        </Link>
                    </div>
                    <button onClick={toggleSideBar} className='md:hidden  p-[1.7vw] text-[#FF8300] bg-white rounded-[5px] text-[1.4em] '>
                        <FaBars />
                    </button>
                </div>
            </nav>
            <div className="sidebar" id="scrollbar">
                <div
                    id="drawer-navigation"
                    className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    tabIndex="-1"
                    aria-labelledby="drawer-navigation-label"
                >
                    <button
                        type="button"
                        onClick={toggleSideBar}
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
                                <p className="p-2 text-gray-900 text-[.85em] hover:text-[#FF8300]">Ana Səhifə </p>
                            </li>
                            <li className="border-b cursor-pointer">
                                <div className=" bg-white rounded-xl">
                                    <Link to='/haqqimizda' onClick={() => toggleAccordion(0)} className=" p-2 text-gray-900 text-[.85em] hover:text-[#FF8300] inline-flex justify-between items-center gap-x-3 w-full">
                                        Haqqımızda
                                        <svg className="hs-accordion-active:hidden block size-4 bg-[#FF8300] text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5v14"></path>
                                        </svg>
                                    </Link>
                                    <div className={`${activeAccordion === 0 ? 'block' : 'hidden'} w-full overflow-hidden transition duration-300`}>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#FF8300]">Siyasətimiz</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#FF8300]">Yeniliklər</p>
                                    </div>
                                </div>
                            </li>
                            <li className="border-b cursor-pointer">
                                <div className="bg-white rounded-xl">
                                    <button onClick={() => toggleAccordion(1)} className="p-2 text-gray-900 text-[.85em] hover:text-[#FF8300] inline-flex justify-between items-center gap-x-3 w-full">
                                        Aksiyalar
                                        <svg className="hs-accordion-active:hidden block size-4 bg-[#FF8300] text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5v14"></path>
                                        </svg>
                                    </button>
                                    <div className={`${activeAccordion === 1 ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#FF8300]">Kampaniyalar</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#FF8300]">Neptun Bonus Kart</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#FF8300]">Elektron Kataloq</p>
                                    </div>
                                </div>
                            </li>
                            <li className="border-b cursor-pointer">
                                <div className="bg-white rounded-xl">
                                    <button onClick={() => toggleAccordion(2)} className="p-2 text-gray-900 text-[.85em] hover:text-[#FF8300] inline-flex justify-between items-center gap-x-3 w-full">
                                        Supermarketlər
                                        <svg className="hs-accordion-active:hidden block size-4 bg-[#FF8300] text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5v14"></path>
                                        </svg>
                                    </button>
                                    <div className={`${activeAccordion === 2 ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#FF8300]">Mağazalarımız</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#FF8300]">İrad və təkliflər</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#FF8300]">Alıcıların Nəzərinə</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#FF8300]">Partnyorluq</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#FF8300]">Tərəfdaşlar</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#FF8300]">Marketdə Reklam</p>
                                    </div>
                                </div>
                            </li>
                            <li className="border-b cursor-pointer">
                                <div className="bg-white rounded-xl">
                                    <button onClick={() => toggleAccordion(3)} className="p-2 text-gray-900 text-[.85em] hover:text-[#FF8300] inline-flex justify-between items-center gap-x-3 w-full">
                                        Karyera
                                        <svg className="hs-accordion-active:hidden block size-4 bg-[#FF8300] text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5v14"></path>
                                        </svg>
                                    </button>
                                    <div className={`${activeAccordion === 3 ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#FF8300]">İşə qəbul proseduru</p>
                                        <p className="px-4 py-2 text-[.8em] hover:text-[#FF8300]">Vakansiyalar</p>
                                    </div>
                                </div>
                            </li>
                            <li className="border-b cursor-pointer">
                                <Link to='/elaqe' className="p-2 text-gray-900 text-[.85em] hover:text-[#FF8300]">Əlaqə</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
