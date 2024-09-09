import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Cntx } from "../../context/DataContext";

function Sidebar({ sideSt, setSideSt }) {
    const { catalog } = useContext(Cntx);
    const [accSt, setAccSt] = useState(null)

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
                    } p-[2vw] fixed bg-white z-[1000] shadow-2xl sm:h-[calc(100%-170px)] h-[calc(100%-140px)] w-[70vw] lg:hidden bottom-0 transition duration-500 overflow-auto `}
            >
                {catalog &&
                    catalog.map((item, i) => {
                        const { name, submenu, icon } = item;
                        return (
                            <div
                                key={i}
                                onClick={() => setAccSt(accSt === i ? null : i)}
                                className={`${name == 'Kampaniyalar' ? 'bg-[#43766C] text-white' : 'bg-white'} border-b`}
                            >
                                <button className='flex p-1 items-center gap-3 '>
                                    <img
                                        src={icon}
                                        alt={name}
                                        className='w-6 h-6'
                                    />
                                    <p className="text-sm">{name}</p>
                                </button>
                                {submenu && submenu.length > 0 && (
                                    <div className={`${accSt === i ? 'h-[100%] ' : 'h-0'} overflow-hidden pl-[30px] py-[5px] transition-[3000ms]`}>
                                        {submenu.map((elem, j) => (
                                            <Link
                                                onClick={() => setSideSt(false)}
                                                key={j} to={`/${elem.slug}`}>
                                                <p className="py-[3px]">{elem.name}</p>
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
