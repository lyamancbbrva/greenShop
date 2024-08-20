import { Link } from "react-router-dom"
import { FaMapMarkedAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";

function Elaqe() {
    return (
        <section className="wrapper px-3">
            <div className='text-gray-600 font-semibold text-sm py-6 mb-9'>
                <Link to='/'>Ana səhifə /</Link>
                <span className='capitalize'> Əlaqə</span>
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
                        <FaMapMarkedAlt className="text-[2em] text-[#FF8300]" />
                        <a href="" className="hover:text-[#FF8300] font-semibold">Bakı ş., Nəsimi r-nu, Tbilisi pr.1058</a>
                    </div>
                    <div className="flex items-center gap-3 text-md mb-7">
                        <FiPhoneCall className="text-[2em] text-[#FF8300]" />
                        <a href="tel:/" className="hover:text-[#FF8300] font-semibold">162 | +994 12 530 82 63</a>
                    </div>
                    <div className="flex items-center gap-3 text-md mb-7">
                        <FaRegEnvelope className="text-[2em] text-[#FF8300]" />
                        <a href="email" className="hover:text-[#FF8300] font-semibold">info@neptun.az</a>
                    </div>
                    <input className="block text-xs border rounded-2xl p-2 my-3 bg-slate-50 w-[350px]" type="text" placeholder="Adınız*"/>
                    <input className="block text-xs border rounded-2xl p-2 my-3 bg-slate-50 w-[350px]" type="text" placeholder="E-mail ünvanınız*"/>
                    <textarea className="block text-xs border rounded-2xl p-2 my-3 bg-slate-50 w-[350px]" placeholder="Sual və ya ismarıcınız*"/>
                    <input className="block text-xs border rounded-2xl p-2 my-3 bg-slate-50 w-[350px]" type="text" placeholder="Aşağıdakı kodu daxil edin*"/>
                    <button className="rounded-3xl  text-[.85em] bg-[#FF8300] text-white px-4 py-2 my-3">Təsdiqlə</button>
                </div>
            </div>
        </section>
    )
}

export default Elaqe