import { Link } from "react-router-dom"
import { FaMapMarkedAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import Aside from "../main/Aside";
import { Cntx } from "../../context/DataContext";
import { useContext } from "react";

function Elaqe() {
    const { catSt } = useContext(Cntx)
    
    return (
        <section className="wrapper px-3 relative">
            <div className="absolute top-[-5px] left-0">{catSt && <Aside catSt={catSt} />}</div>
            <div className='text-gray-600 font-semibold text-sm py-6 mb-9'>
                <Link to='/'>Home /</Link>
                <span className='capitalize'> Contact</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 my-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48571.7002694023!2d49.688629182076085!3d40.45908449399509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403085c6361123a1%3A0x9a9061575f8679a1!2zWMSxcmRhbGFu!5e0!3m2!1saz!2saz!4v1723983366450!5m2!1saz!2saz"
                    className="w-full"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div>
                    <div className="flex items-center gap-3 text-md mb-7">
                        <FaMapMarkedAlt className="text-[2em] text-[#43766C]" />
                        <a href="" className="hover:text-[#43766C] font-semibold">US, California</a>
                    </div>
                    <div className="flex items-center gap-3 text-md mb-7">
                        <FiPhoneCall className="text-[2em] text-[#43766C]" />
                        <a href="tel:/" className="hover:text-[#43766C] font-semibold">162 | +9900 555 447 55</a>
                    </div>
                    <div className="flex items-center gap-3 text-md mb-7">
                        <FaRegEnvelope className="text-[2em] text-[#43766C]" />
                        <a href="email" className="hover:text-[#43766C] font-semibold">info@blabla.com</a>
                    </div>
                    <input className="block text-xs border rounded-2xl p-2 my-3 bg-slate-50 w-[350px]" type="text" placeholder="your name*"/>
                    <input className="block text-xs border rounded-2xl p-2 my-3 bg-slate-50 w-[350px]" type="text" placeholder="your email address*"/>
                    <textarea className="block text-xs border rounded-2xl p-2 my-3 bg-slate-50 w-[350px]" placeholder="your comments*"/>
                    <input className="block text-xs border rounded-2xl p-2 my-3 bg-slate-50 w-[350px]" type="text" placeholder="password*"/>
                    <button className="rounded-3xl  text-[.85em] bg-[#43766C] text-white px-4 py-2 my-3">Submit</button>
                </div>
            </div>
        </section>
    )
}

export default Elaqe