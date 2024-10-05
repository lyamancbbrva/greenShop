import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import Aside from "./Aside";
import { Cntx } from "../../context/DataContext";
import getAllProducts, { getCategories, getProductBySubcategory } from "../../api/api";
import { spiral } from "ldrs";
spiral.register();
import toast from "react-hot-toast";

function SubCategory() {
    const [page, setPage] = useState(1);
    const { basket, setBasket, setSebetSay, sebetSay, catSt, setCatSt } = useContext(Cntx);
    const { category, subCategory } = useParams();
    const [cat, setCat] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [priceRange, setPriceRange] = useState(10);

    const catName = category.includes("-")
        ? category.split("-").join("").replace(/[\s,]/g, "")
        : category.replace(/[\s,]/g, "");

    const subcatName = subCategory.includes("-")
        ? subCategory.split("-").join("").replace(/[\s,]/g, "")
        : subCategory.replace(/[\s,]/g, "");

    const id = cat.find(item =>
        item.categoryName.replace(/[\s,]/g, "").toLowerCase() === catName.toLowerCase()
    )?.subcategory.find(item =>
        item.categoryName.replace(/[\s,]/g, "") === subcatName
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
        existingProduct ?
            setBasket(
                basket.map(basketItem =>
                    basketItem.id === item.id
                        ? { ...basketItem, count: basketItem.count + 1 }
                        : basketItem
                )
            )
            : setBasket([...basket, { ...item, count: 1 }]);
        setSebetSay(sebetSay + 1);
        toast.success(`${item.name} added to cart!`)
    }

    function addWish(e, item) {
        e.preventDefault()
        const wishList = JSON.parse(localStorage.getItem('wishlist')) || [];
        const status = wishList.find(i => i.id === item.id);

        if (status) {
            toast.error(`${item.name} ayqa bunnan wishlistde vardana!`);
        } else {
            const updatedWishList = [...wishList, item];
            localStorage.setItem('wishlist', JSON.stringify(updatedWishList));
            toast.success(`uxxxx tıkladım!`);
        }
    }

    const filteredData =  data.products?.filter(item => item.totalPrice <= priceRange)

    return (
        <main onClick={() => setCatSt(false)} className="bg-[#F2F2F2]">
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
                            <div className="border-b py-4">
                                <div className='flex justify-between'>
                                    <h5 className='px-[10px]'>
                                        Subcategory
                                    </h5>
                                    <FaChevronDown className='pr-[5px]' />
                                </div>
                                <span className="capitalize m-5">- {subCategory}</span>
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
                            <div className='price border-b py-[8px] pb-3'>
                                <div className='flex justify-between py-[5px]'>
                                    <h5 className='px-[10px]'>Price</h5>
                                    <FaChevronDown className='pr-[5px]' />
                                </div>
                                <div className='flex justify-between p-[10px]'>
                                    <h6>0 $</h6>
                                    <h6>{priceRange} $</h6>
                                </div>
                                <div className='text-center'>
                                    <input
                                        type='range'
                                        min="0"
                                        max='12'
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(+e.target.value)}
                                        className='w-[80%] h-[3px] range-input'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-[1.5vw] w-full pb-5">
                            {loading ? (
                                new Array(8).fill("").map((_, i) => (
                                    <div key={i} className="border xl:w-[210px] lg:w-[17vw] md:w-[25vw] sm:w-[35vw] w-[48%] card transition-all rounded-md p-3 bg-white relative inline-block animate-pulse">
                                        <div className="w-full h-[25vh] bg-gray-300 rounded-md"></div>
                                        <div className="pt-4 bg-gray-300 w-3/4 h-5 rounded-md mt-2"></div>
                                        <div className="bg-gray-300 w-1/2 h-4 rounded-md mt-3"></div>
                                        <div className="mt-3 bg-gray-300 w-full h-8 rounded-md"></div>
                                    </div>
                                ))
                            ) : filteredData && filteredData.length > 0 ? (
                                filteredData?.map((item, i) => {
                                    const { img, name, price, id, discount, totalPrice } = item;
                                    return (
                                        <Link
                                            key={i}
                                            to={`/product/${id}`}
                                            className='border xl:w-[210px] lg:w-[17vw] md:w-[25vw] sm:w-[35vw] w-[48%] card hover:shadow-md transition-all rounded-md p-3 bg-white relative inline-block'
                                        >
                                            <div className="relative">
                                                <GoHeart onClick={(e) => addWish(e, item)} className='absolute cursor-pointer top-1 right-1 text-[1.3em] text-[#43766C]' />
                                                <img src={img} alt={name} className="w-full object-cover h-[25vh] rounded-md" />
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
        </main>
    );
}

export default SubCategory;