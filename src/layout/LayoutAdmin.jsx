import { Fragment, useState } from 'react'
import neptunlogin from '../assets/neptunlogin.png';
import { IoExitOutline } from "react-icons/io5";
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3BottomLeftIcon, BellIcon, CalendarIcon, FolderIcon, HomeIcon, UsersIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Link, Outlet } from 'react-router-dom';
import { IoChevronDown } from "react-icons/io5";
import { Cookies } from 'react-cookie';
import toast from 'react-hot-toast';

const navigation = [
    { name: 'Ana səhifə', href: '/admin', icon: HomeIcon },
    { name: 'Məhsullar', href: 'products', icon: UsersIcon },
    { name: 'Kateqoriyalar', href: 'categories', icon: FolderIcon },
    { name: 'Subkataqoriya', href: 'subcategory', icon: CalendarIcon },
]

const cook = new Cookies()

function LayoutAdmin() {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    function handleLogOut(e) {

        cook.remove('token')
        cook.remove('refresh')
        cook.remove('user')
        toast.success('Yolun qırağı ilə otlaya-otlaya👋')
        
    }

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex flex-shrink-0 items-center px-4">
                                        <Link to={'/'}>
                                            <img
                                                className="h-8 w-auto"
                                                src={neptunlogin}
                                                alt="neptun"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-5 h-0 flex-1 overflow-y-auto">
                                        <nav className="space-y-1 px-2">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className='text-gray-800 hover:bg-gray-50 focus:bg-gray-100 group flex items-center px-2 py-2.5 text-sm font-medium rounded-md'
                                                >
                                                    <item.icon
                                                        className='text-gray-900 mr-3 flex-shrink-0 h-6 w-6'
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="w-14 flex-shrink-0" aria-hidden="true">
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
                <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                    <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
                        <div className="flex flex-shrink-0 items-center px-4">
                            <Link to={'/'}>
                                <img
                                    className="h-14 w-auto mb-3"
                                    src={neptunlogin}
                                    alt="neptun"
                                />
                            </Link>
                        </div>
                        <div className="mt-5 flex flex-grow flex-col">
                            <nav className="flex-1 space-y-1 px-2 pb-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className='text-gray-800 hover:bg-gray-50 focus:bg-gray-100 group flex items-center px-2 py-2.5 text-sm font-medium rounded-md'
                                    >
                                        <item.icon
                                            className='text-gray-900 mr-3 flex-shrink-0 h-6 w-6'
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                            <Link
                            onClick={handleLogOut}
                             to={'/login'} className='flex items-center font-semibold gap-2 hover:text-orange-600 hover:bg-gray-100 px-4 py-2 text-md text-gray-700'>
                                <IoExitOutline />Çıxış edin</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col md:pl-64">
                    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
                        <button
                            type="button"
                            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="flex flex-1 justify-between px-4">
                            <div className="flex flex-1">
                                <form className="flex w-full md:ml-0" action="#" method="GET">
                                    <label htmlFor="search-field" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="search-field"
                                            className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                            name="search"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="ml-4 flex items-center md:ml-6">
                                <button
                                    type="button"
                                    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://pbs.twimg.com/profile_images/551416883191087104/gxoNeGX8_400x400.jpeg"
                                                alt=""
                                            />
                                            <span className='font-semibold mx-2.5'>{cook.get('user')}</span>
                                            <IoChevronDown className='text-gray-400 mt-1' />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Link 
                                            onClick={handleLogOut}
                                            to={'/login'} className='flex items-center gap-2 hover:bg-gray-100 px-4 py-2 text-sm text-gray-700'>
                                                <IoExitOutline className='text-[red]' />Çıxış</Link>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <main className="flex-1">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}

export default LayoutAdmin