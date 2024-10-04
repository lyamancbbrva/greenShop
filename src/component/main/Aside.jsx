import { useEffect } from "react";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { getCategories } from "../../api/api";
import icon from "../../assets/leaf.webp"

function Aside() {
    useEffect(() => {
        getCategories().then((resp) => {
            localStorage.setItem('categories', JSON.stringify(resp))
        })
    }, [])

    const data = JSON.parse(localStorage.getItem('categories'))

    return (
        <aside className='pt-6 mb-3 bg-white shadow-lg lg:inline-block w-[245.5px] hidden'>
            <nav>
                <ul className='flex flex-col '>
                    {data &&
                        data.map((item, i) => {
                            return (
                                <li
                                    key={i}
                                    className={`flex px-3 gap-3 items-center border-b py-2 hover:bg-[#43766c2c] relative dropdown`}
                                >
                                    <img src={icon} className="w-6" />
                                    <div className='flex justify-between capitalize items-center w-full relative'>
                                        <p className='font-bold text-[10px] lg:text-[.7em]'>
                                            {item.categoryName}
                                        </p>
                                        <GoChevronRight className={`w-[13px] ${item.subcategory.length == 0 ? 'hidden' : 'block'}`} />
                                        <ul
                                            id='scrollbar'
                                            className={`bg-[#fff] shadow-md  max-h-[200px] overflow-auto z-20 hidden dropdown-open border-l-[2px] border-l-[#43766C] rounded-sm py-2 absolute left-[calc(100%+13px)] top-[calc(100%-40px)] min-w-[12vw]`}
                                        >
                                            {
                                                item.subcategory.map((elem, i) => (
                                                    <Link
                                                        to={`/${elem.slug}`}
                                                        key={i}
                                                    >
                                                        <li className='text-[.8em] py-2 px-3 capitalize hover:bg-[#43766c29]'>
                                                            {elem.categoryName}
                                                        </li>
                                                    </Link>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;
