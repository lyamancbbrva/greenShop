import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import getAllProducts from "../../api/api";
import Aside from "./Aside";
import { Cntx } from "../../context/DataContext";

function SubCategory({ catSt, product, setProduct, updateCount }) {
    
    const [page, setPage] = useState(1);
    const { basket, setBasket, setSebetSay, sebetSay } = useContext(Cntx);
    const { category, subCategory } = useParams();
    const [pageCount, setPageCount] = useState(1);
   

    useEffect(() => {
        getAllProducts(category, subCategory, pageCount).then((res) => {
            setProduct(res?.data?.map((item) => ({ ...item, count: 1 })));
            setPage(res.meta);
        });
    }, [pageCount, category, subCategory]);

    function addToBasket(item) {
        const existingProduct = basket.find(
            (basketItem) => basketItem.id === item.id
        );
        if (existingProduct) {
            setBasket(
                basket.map((basketItem) =>
                    basketItem.id === item.id
                        ? {
                              ...basketItem,
                              count: basketItem.count + item.count,
                          }
                        : basketItem
                )
            );
        } else {
            setBasket([...basket, item]);
        }
    }

 
    

    return (
        <main className='bg-[#F2F2F2] '>
            <div className='wrapper flex'>
                <div>{catSt ? <Aside catSt={catSt} /> : ""}</div>
                <div>
                    <div
                        className={`text-gray-600 font-semibold py-5 px-3 ${
                            !catSt ? "" : "text-center"
                        } `}
                    >
                        <Link to='/'>Ana səhifə /</Link>
                        <span className='capitalize'> {category} /</span>
                        <span className='capitalize'> {subCategory}</span>
                    </div>
                    <div
                        className={`flex ${
                            !catSt ? "justify-end" : "justify-center"
                        }  items-start`}
                    >
                        {catSt ? (
                            ""
                        ) : (
                            <div className='filter hidden bg-white rounded-[10px] lg:inline-block px-[5px] w-[23vw] text-[.8em] '>
                                <h3 className='p-[10px] '>Filtr</h3>
                                <div className='flex justify-between py-[20px] border-b '>
                                    <h5 className='px-[10px]'>
                                        Alt Kateqoriya
                                    </h5>
                                    <FaChevronDown className=' pr-[5px] ' />
                                </div>
                                <div className='marka py-[20px]'>
                                    <div className='flex justify-between py-[5px] '>
                                        <h5 className='px-[10px]'>Markası</h5>
                                        <FaChevronDown className=' pr-[5px] ' />
                                    </div>
                                    <div className='py-[10px] border-b flex justify-between px-[10px] items-center '>
                                        <div>
                                            <span className='inline-block w-[12px] h-[12px] bg-[#43766C] mx-[4px] '></span>
                                            NEPTUN-MEYVETEREVEZ
                                        </div>
                                        <span className='text-[#43766C] inline-block text-end'>
                                            13
                                        </span>
                                    </div>
                                </div>
                                <div className='qiymet border-b py-[8px]'>
                                    <div className='flex justify-between py-[5px]'>
                                        <h5 className='px-[10px]'>Qiymət</h5>
                                        <FaChevronDown className=' pr-[5px] ' />
                                    </div>
                                    <div className='flex justify-between p-[10px]'>
                                        <h6>0₼</h6>
                                        <h6>13₼</h6>
                                    </div>
                                    <div className='text-center'>
                                        <input
                                            type='range'
                                            className='w-[80%] h-[3px] range-input'
                                        />
                                    </div>
                                </div>
                                <div className='py-[20px] text-center'>
                                    <button className='rounded-3xl  text-[.85em] bg-[#43766C] text-white px-4 py-2 font-semibold mb-3'>
                                        Hamısını sıfırla
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className='flex flex-wrap gap-[5px] w-[100%] justify-start'>
                            {product && (product.length > 0)? (
                                product.map((item, i) => {
                                    
                                    const { img, title, price, id, count } = item;
                                    return (
                                        <div
                                            key={i}
                                            className='sm:w-[49%] md:w-[30%]  xl:w-[calc(26%-1vw)] '
                                        >
                                            <Link
                                                to={`/product/${id}`}
                                                className='text-center rounded-md p-3 bg-white relative inline-block m-[.5vw] '
                                            >
                                                <GoHeart className='absolute cursor-pointer top-3 right-3 text-[1.3em] text-[#43766C]' />
                                                <img src={img} alt={title} />
                                                <h5 className='py-4 hover:text-[#43766C] h-16 text-[.7em] font-semibold'>
                                                    {title}
                                                </h5>
                                                <p className='font-bold text-[1.3em]'>
                                                    {price * count} ₼
                                                </p>
                                                <div className='py-3'>
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            updateCount(id, -1);
                                                        }}
                                                        className='font-bold text-[1.2em] text-[#43766C]'
                                                    >
                                                        ‒
                                                    </button>
                                                    <span className='px-2'>
                                                        {count} ədəd
                                                    </span>
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            updateCount(id, 1);
                                                        }}
                                                        className='font-bold text-[1.2em] text-[#43766C]'
                                                    >
                                                        ＋
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        addToBasket(item);
                                                        setSebetSay(
                                                            sebetSay + 1
                                                        );
                                                    }}
                                                    className='rounded-3xl  text-[.85em] bg-[#43766C] text-white px-4 py-2 font-semibold mb-3'
                                                >
                                                    Səbətə at
                                                </button>
                                            </Link>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="p-[40px] text-[3.5em]">Elə bilki aldında</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center space-x-1 dark:text-gray-800 py-[20px]'>
                {new Array(page.pages).fill("").map((_, i) => (
                    <button
                        onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            setPageCount(e.target.innerText);
                        }}
                        key={i}
                        type='button'
                        className={` ${
                            pageCount == i + 1 ? "bg-[red]" : ""
                        } inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 focus:bg-[#f1cba2] focus:border-1 focus:border-[#f69733] `}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </main>
    );
}

export default SubCategory;
