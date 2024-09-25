import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import Aside from "./Aside";
import { Cntx } from "../../context/DataContext";
import getAllProducts, { getCategories, getProductBySubcategory } from "../../api/api";
import { spiral } from "ldrs";
import { filter } from "list";
spiral.register();

function SubCategory({ catSt, updateCount }) {

    const [page, setPage] = useState(1);
    const { basket, setBasket, setSebetSay, sebetSay } = useContext(Cntx);
    const { category, subCategory } = useParams();
    const [pageCount, setPageCount] = useState(1);
    const [cat, setCat] = useState([]);

    const [data, setData] = useState([])
    const catName =  category.includes('-') ? category.split('-').join('') : category
    const subcatName =  subCategory.includes('-') ? subCategory.split('-').join('') : subCategory
    const id = cat.find(item => item.categoryName.replace(/\s+/g, '').toLowerCase() == catName.toLowerCase())?.subcategory.find(item => item.categoryName.replace(/\s+/g, '') == subcatName).id
    // const id = cat?.find(item => item.categoryName.toLowerCase() == catName.toLowerCase())?.subcategory?.find(elem => elem.categoryName.toLowerCase() == subCategory.toLowerCase()).id 
    
    useEffect(() => {
        getCategories().then(resp => setCat(resp))
        // getAllProducts().then(resp => console.log(resp))
        getProductBySubcategory(id).then(resp => setData(resp))
    }, []);
    console.log(id);
    
    // console.log(cat?.find(item => item.categoryName.toLowerCase() == catName.toLowerCase())?.subcategory?.map(elem => elem.categoryName.toLowerCase() ));
    
    
    
  
    
    
    
   
    
    
    
    
    // useEffect(() => {
    //     getAllProducts(category, subCategory, pageCount).then((res) => {
    //         setData(res?.data?.map((item) => ({ ...item, count: 1 })));
    //         setPage(res?.meta);
    //     });
    // }, [pageCount, category, subCategory]);
    // console.log(data);

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
        <main className='bg-[#F2F2F2]'>
            <div className='wrapper relative'>
                <div className="absolute z-10 top-[-5px] left-0">{catSt && <Aside catSt={catSt} />}</div>
                <div>
                    <div className='text-gray-600 py-5 px-3'>
                        <Link to='/'>Home /</Link>
                        <span className='capitalize'> {category} /</span>
                        <span className='capitalize'> {subCategory}</span>
                    </div>
                    <div className='flex gap-[2vw] justify-center items-start w-full'>
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
                        <div className='flex flex-wrap gap-[1.5vw] w-full'>
                            {data && data.length > 0 ? (
                                data.map((item, i) => {
                                    const { img, name, price, id } = item;
                                    return (
                                        <Link
                                            key={i}
                                            to={`/product/${id}`}
                                            className='border xl:w-[210px] lg:w-[17vw] md:w-[25vw] sm:w-[35vw] w-[48%] hover:shadow-md transition-all rounded-md p-3 bg-white relative'
                                        >
                                            <GoHeartFill className='absolute cursor-pointer top-4 right-4 text-[1.3em] text-white hover:text-[#43766C]' />
                                            <img src={img} alt={name} className="w-full object-cover h-[25vh] rounded-md" />
                                            <h5 className='pt-4 hover:text-[#43766C] text-[.85em] capitalize'>
                                                {name}
                                            </h5>
                                            <p className='font-semibold py-3 italic text-[1.2em]'>{price} $</p>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSebetSay(sebetSay + 1)
                                                    setBasket([...basket, item]);
                                                }}
                                                className='rounded-md flex justify-center gap-2 w-full text-[.8em] bg-[#f0eeee] transition-all duration-200 hover:bg-[#508e8279] px-4 py-2 font-semibold'>
                                                <GiShoppingCart className="text-lg text-gray-500" />
                                                Add to Basket
                                            </button>
                                        </Link>
                                    );
                                })
                            ) : (
                                <div className='flex justify-center m-auto items-center'>
                                    <l-spiral size='40' speed='0.9' color='#43766C'></l-spiral>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center space-x-1 dark:text-gray-800 py-[20px]'>
                {page?.pages ? (
                    new Array(page.pages).fill("").map((_, i) => (
                        <button
                            onClick={(e) => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                setPageCount(e.target.innerText);
                            }}
                            key={i}
                            type='button'
                            className={`${pageCount == i + 1 ? "bg-[red]" : ""
                                } inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 focus:bg-[#f1cba2] focus:border-1 focus:border-[#f69733]`}>
                            {i + 1}
                        </button>
                    ))
                ) : "No pages..."}
            </div>
        </main>
    );
}

export default SubCategory;
