import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { postLogin, registerUser } from "../api/api";
import { Cookies } from "react-cookie";
import toast from "react-hot-toast";

const cook = new Cookies()

function Register() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [type, setType] = useState("password");

    async function signUp() {

        const obj = { login, password }
        const user = await registerUser(obj)
        toast.success('DAY SƏN DƏ ADMİNSƏN!')
        window.location.href = '/admin'
        

    }

    return (
        <div className='flex flex-col max-w-md mx-auto mt-[70px] p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800'>
            <div className='mb-8 text-center'>
                <h1 className='my-3 text-4xl font-bold'>Kasıb</h1>
                <p className='text-sm dark:text-gray-600'>Qeydiyyatdan keş</p>
            </div>
            <form noValidate='' action='' className='space-y-12'>
                <div className='space-y-4'>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm'>
                            Adun nədir?
                        </label>
                        <input
                            onInput={(e) => setLogin(e.target.value)}
                            type='email'
                            name='text'
                            id='email'
                            placeholder='Adınız'
                            className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
                        />
                    </div>
                    <div>
                        <div className='flex justify-between mb-2'>
                            <label htmlFor='password' className='text-sm'>
                                Şifrə qoy
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type={type}
                                onChange={(e) => setPassword(e.target.value)}
                                className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                                placeholder='••••••••'
                                required
                            />
                            <span
                                className='flex justify-around absolute top-3 right-3 items-center'
                                onClick={() =>
                                    setType(
                                        type == "password" ? "text" : "password"
                                    )
                                }
                            >
                                {type == "password" ? (
                                    <IoEyeOffOutline size={21} />
                                ) : (
                                    <IoEyeOutline size={21} />
                                )}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <div>
                        <button
                            onClick={signUp}
                            type='button'
                            className='w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50'
                        >
                            Bas
                        </button>
                    </div>
                    <p className='px-6 text-sm text-center dark:text-gray-600'>
                        Hesabın var ?
                        <Link
                            to='/login'
                            rel='noopener noreferrer'
                            href='#'
                            className='hover:underline dark:text-violet-600'
                        >
                            Onda get
                        </Link>
                        .
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Register;
