import { useContext } from "react";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { Cntx } from "../../context/DataContext";

function Aside() {

    const { catalog } = useContext(Cntx);

    return (
        <aside className='pt-6 mb-5 bg-white shadow-lg  lg:inline-block w-[250px] hidden'>
            <nav>
                <ul className='flex flex-col '>
                    {catalog &&
                        catalog.map((item, i) => {
                            const { name, submenu, icon } = item;
                           
                            return (
                                <li
                                    key={i}
                                    className={`flex px-3 ${
                                        name === "Kampaniyalar"
                                            ? "bg-[#43766C] text-white hover:bg-[#43766c56] "
                                            : "bg-white"
                                    } gap-3 items-center border-b py-2 hover:bg-[#43766c2c] relative dropdown`}
                                >
                                    <img src={icon} alt={name}  />
                                    <div className='flex justify-between items-center w-full relative'>
                                        <p className='font-bold text-[10px] lg:text-[.65em]'>
                                            {name}
                                        </p>
                                        <GoChevronRight className={`w-[13px] ${submenu.length == 0 ? 'hidden' : 'block'}`} />
                                        <ul
                                            id='scrollbar'
                                            className={`bg-[#fff]  max-h-[200px] overflow-auto z-20 hidden dropdown-open border-l-[2px] border-l-[#43766C] rounded-sm py-2 absolute left-[calc(100%+13px)] top-[calc(100%-40px)] min-w-[12vw]`}
                                        >
                                            {                                                                
                                             submenu.map((elem, i) => (
                                                      <Link
                                                          to={`/${elem.slug}`}
                                                          key={i}
                                                      >
                                                          <li className='text-[.8em] py-2 px-3 hover:bg-[#43766c29]'>
                                                              {elem.name}
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
