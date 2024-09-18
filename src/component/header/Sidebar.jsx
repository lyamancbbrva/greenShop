import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../api/api";
import icon from "../../assets/leaf.webp"

function Sidebar({ sideSt, setSideSt }) {
    const [accSt, setAccSt] = useState(null)
    const [cat, setCat] = useState([])

    useEffect(() => {
        getCategories().then((resp) => setCat(resp));
    }, [])

    sideSt
        ? ((document.documentElement.style.overflow = "hidden"),
            (document.body.style.overflow = "hidden"))
        : ((document.documentElement.style.overflow = ""),
            (document.body.style.overflow = ""));

    return (
        <>
            <div onClick={()=> setSideSt(!sideSt)} className={`${sideSt ? 'block' : 'hidden'} absolute w-[100%] h-[100%] top-0`}></div>
            <nav
                className={`${sideSt ? "translate-x-0" : "translate-x-[-120%]"
                    } p-[2vw] fixed bg-white z-[1000] shadow-2xl sm:h-[calc(100%-28vh)] md:h-[calc(100%-22vh)] h-[calc(100%-150px)] w-[70vw] lg:hidden bottom-0 transition duration-500 overflow-auto `}
            >
                {cat &&
                    cat.map((item, i) => {
                        const { categoryName, subcategory } = item;
                        return (
                            <div
                                key={i}
                                onClick={() => setAccSt(accSt === i ? null : i)}
                                className={`${categoryName == 'Kampaniyalar' ? 'bg-[#43766C] text-white' : 'bg-white'} border-b`}
                            >
                                <button className='flex p-1 items-center gap-3 '>
                                    <img
                                        src={icon}
                                        // alt={name}
                                        className='w-6 h-6'
                                    />
                                    <p className="text-sm">{categoryName}</p>
                                </button>
                                {subcategory && subcategory.length > 0 && (
                                    <div className={`${accSt === i ? 'h-[100%] ' : 'h-0'} overflow-hidden pl-[30px] py-[5px] transition-[3000ms]`}>
                                        {subcategory.map((elem, j) => (
                                            <Link
                                                onClick={() => setSideSt(false)}
                                                key={j} to={`/${elem.slug}`}>
                                                <p className="py-[3px]">{elem.categoryName}</p>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
            </nav>
        </>
    );
}

export default Sidebar;
