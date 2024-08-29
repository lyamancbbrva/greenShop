import { useState } from 'react';
import neptunlogin from '../assets/neptunlogin.png';
import toast from 'react-hot-toast';
import { Cookies } from 'react-cookie';
import { postLogin } from '../api/api';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const cook = new Cookies();

function Login() {

    const [pass, setPass] = useState("");
    const [login, setLogin] = useState("");
    const [type, setType] = useState('password');

    async function handleSubmit(e) {

        e.preventDefault();
        if (!pass || pass.length < 8) {
            toast.error("Şifrəni düz yaz ə!!!");
            return;
        }

        const obj = { login, password: pass };
        const user = await postLogin(obj); 

        if (user.status == true) {
            cook.set("token", user.token);
            cook.set("refresh", user.refresh);
            toast.success("Giriş olundu")
            window.location.href = "/admin";
         
                  
        } else  toast.error("Sən Zəzər əmi döylüsən!😔");
        
    }

    return (
        <section className='bg-gray-50'>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
                <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <div className='flex justify-center'>
                            <img
                                src={neptunlogin}
                                alt='neptun'
                                className='w-[210px]'
                            />
                        </div>
                        <h1 className='text-xl font-semibold text-center leading-tight text-gray-900'>
                            Xoş gəldin!
                        </h1>
                        <form
                            className='space-y-4 md:space-y-6'
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">İstifadəçi adı</label>
                                <input
                                    type="text"
                                    onChange={(e) => setLogin(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="user@blabla.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Şifrə</label>
                                <div className='relative'>
                                    <input
                                        type={type}
                                        onChange={(e) => setPass(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <span
                                        className="flex justify-around absolute top-3 right-3 items-center"
                                        onClick={() => setType(type == 'password' ? 'text' : 'password')}>
                                        {type === 'password' ? <IoEyeOffOutline size={21} /> : <IoEyeOutline size={21} />}
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-start'>
                                    <div className='flex items-center h-5'>
                                        <input
                                            id='remember'
                                            aria-describedby='remember'
                                            type='checkbox'
                                            className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300'
                                        />
                                    </div>
                                    <div className='ml-3 text-sm'>
                                        <label
                                            htmlFor='remember'
                                            className='text-gray-500'
                                        >
                                            Məni xatırla
                                        </label>
                                    </div>
                                </div>
                                <Link
                                    className='text-sm font-medium text-slate-800 hover:underline'
                                >
                                    Şifrəmi unutmuşam👉👈
                                </Link>
                            </div>
                            <button
                                type='submit'
                                className='w-full text-white bg-slate-800 hover:bg-slate-700 font-medium rounded-lg text-sm px-5 py-3 text-center'
                            >
                                Giriş et
                            </button>
                            <p className='text-sm font-light text-gray-500'>
                                Hesabınız yoxdur?{" "}
                                <Link
                                    to={'/register'}
                                    className='font-medium hover:underline'
                                >
                                    Qeydiyyatdan keçin
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
