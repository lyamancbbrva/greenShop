import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import Aside from "./Aside";
import { Cntx } from "../../context/DataContext";
import getAllProducts, { getCategories, getProductBySubcategory } from "../../api/api";
import { spiral } from "ldrs";
import { filter } from "list";
spiral.register();
import toast from "react-hot-toast";

function SubCategory({ catSt }) {
    const [page, setPage] = useState(1);
    const { basket, setBasket, setSebetSay, sebetSay } = useContext(Cntx);
    const { category, subCategory } = useParams();
    const [pageCount, setPageCount] = useState(1);
    const [cat, setCat] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const catName = category.includes("-") ? category.split("-").join("") : category;
    const subcatName = subCategory.includes("-") ? subCategory.split("-").join("") : subCategory;

    const id = cat.find(item =>
        item.categoryName.replace(/\s+/g, "").toLowerCase() === catName.toLowerCase()
    )?.subcategory.find(item =>
        item.categoryName.replace(/\s+/g, "") === subcatName
    )?.id;

    useEffect(() => {
        getCategories().then(resp => setCat(resp));
    }, []);

    useEffect(() => {
        if (id) {
            getProductBySubcategory(id).then(resp => {
                setData(resp)
                setLoading(false);
            })
        }
    }, [id])

    function addToBasket(e, item) {
        e.preventDefault();
        const existingProduct = basket.find(basketItem => basketItem.id === item.id);
        if (existingProduct) {
            setBasket(
                basket.map(basketItem =>
                    basketItem.id === item.id
                        ? { ...basketItem, count: basketItem.count + 1 }
                        : basketItem
                )
            );
        } else {
            setBasket([...basket, { ...item, count: 1 }]);
        }
        setSebetSay(sebetSay + 1);
        toast.success(`${item.name} added to cart!`)
    }

    return (
        <main className="bg-[#F2F2F2]">
            <div className="wrapper relative">
                <div className="absolute z-10 top-[-5px] left-0">{catSt && <Aside catSt={catSt} />}</div>
                <div>
                    <div className="text-gray-600 py-5 px-3">
                        <Link to="/">Home /</Link>
                        <span className="capitalize"> {category} /</span>
                        <span className="capitalize"> {subCategory}</span>
                    </div>
                    <div className="flex gap-[2vw] justify-center items-start w-full">
                        <div className='filter hidden bg-white rounded-[10px] lg:inline-block px-[5px] w-[300px] text-[.8em]'>
                            <h3 className='p-[10px]'>Filter</h3>
                            <div className='flex justify-between py-[20px] border-b'>
                                <h5 className='px-[10px]'>
                                    Subcategory
                                </h5>
                                <FaChevronDown className='pr-[5px]' />
                            </div>
                            <div className='brand py-[20px]'>
                                <div className='flex justify-between py-[5px]'>
                                    <h5 className='px-[10px]'>Brand</h5>
                                    <FaChevronDown className='pr-[5px]' />
                                </div>
                                <div className='py-[10px] border-b flex justify-between px-[10px] items-center'>
                                    <div>
                                        <span className='inline-block w-[12px] h-[12px] bg-[#43766C] mx-[4px]'></span>
                                        GreenShop - Fast Delivery
                                    </div>
                                </div>
                            </div>
                            <div className='price border-b py-[8px]'>
                                <div className='flex justify-between py-[5px]'>
                                    <h5 className='px-[10px]'>Price</h5>
                                    <FaChevronDown className='pr-[5px]' />
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
                                <button className='rounded-3xl text-[.85em] bg-[#43766C] text-white px-4 py-2 font-semibold mb-3'>
                                    Reset all
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-[1.5vw] w-full">
                            {loading ? (
                                new Array(8).fill("").map((_, i) => (
                                    <div key={i} className="border xl:w-[210px] lg:w-[17vw] md:w-[25vw] sm:w-[35vw] w-[48%] card transition-all rounded-md p-3 bg-white relative inline-block animate-pulse">
                                        <div className="w-full h-[25vh] bg-gray-300 rounded-md"></div>
                                        <div className="pt-4 bg-gray-300 w-3/4 h-5 rounded-md mt-2"></div>
                                        <div className="bg-gray-300 w-1/2 h-4 rounded-md mt-3"></div>
                                        <div className="mt-3 bg-gray-300 w-full h-8 rounded-md"></div>
                                    </div>
                                ))
                            ) : data && data.length > 0 ? (
                                data.map((item, i) => {
                                    const { img, name, price, id, discount, totalPrice } = item;
                                    return (
                                        <Link
                                            key={i}
                                            to={`/product/${id}`}
                                            className='border xl:w-[210px] lg:w-[17vw] md:w-[25vw] sm:w-[35vw] w-[48%] card hover:shadow-md transition-all rounded-md p-3 bg-white relative inline-block'
                                        >
                                            <GoHeart onClick={(e) => e.preventDefault()} className='absolute bg-white rounded-full p-1 cursor-pointer top-4 right-4 text-[1.3em] text-[#43766C]' />
                                            <img src={img} alt={name} className="w-full object-cover h-[25vh] rounded-md" />
                                            <h5 className='pt-4 hover:text-[#43766C] text-ellipsis whitespace-nowrap overflow-hidden max-w-[148px] text-[.85em] capitalize'>{name}</h5>
                                            {discount > 0 && (
                                                <div>
                                                    <span className='bg-[#43766ca6] text-white absolute top-[47%] right-[18px] endirim rounded-md w-[50px] h-[30px] flex justify-center items-center text-[.85em] font-bold'>
                                                        {discount} %
                                                    </span>
                                                    <div className="flex gap-3 items-center py-3">
                                                        <p className='line-through text-md text-gray-400'>{price} $</p>
                                                        <p className='font-semibold italic text-[1.2em]'>{totalPrice} $</p>
                                                    </div>
                                                </div>
                                            )}
                                            <p className={`${discount === 0 ? 'block' : 'hidden'} font-semibold py-3 italic text-[1.2em]`}>
                                                {price} $
                                            </p>
                                            <button
                                                onClick={(e) => addToBasket(e, item)}
                                                className='rounded-md text-nowrap justify-center flex gap-2 w-full text-[.8em] border border-[#43766C] transition-all duration-200 hover:bg-[#43766c2b] px-4 py-2 font-semibold'
                                            >
                                                <GiShoppingCart className="text-lg text-gray-500" /> Add to Basket
                                            </button>
                                        </Link>
                                    );
                                })
                            ) : (
                                <div className="flex justify-center m-auto items-center">
                                    <p className="text-center text-gray-600 text-lg">Sorry, no results were found for your search...</p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-1 dark:text-gray-800 py-[20px]">
                {page?.pages &&
                    new Array(page.pages).fill("").map((_, i) => (
                        <button
                            onClick={(e) => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                setPageCount(Number(e.target.innerText));
                            }}
                            key={i}
                            type="button"
                            className={`${pageCount == i + 1 ? "bg-[red]" : ""
                                } inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 focus:bg-[#f1cba2] focus:border-1 focus:border-[#f69733]`}
                        >
                            {i + 1}
                        </button>
                    ))}
            </div>
        </main>
    );
}

export default SubCategory;
