import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CardWidget from './CartWidget/CardWidget'

function Navbar() {
    const [displayMenu, setDisplayMenu] = useState(false)

    const handleMenuClick = () => {
        setDisplayMenu(!displayMenu)
    }
    return (

        <div>
            <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link to="/"><h1 className="text-xl pl-4 text-white font-bold">&#60; Coderstore &#62;</h1></Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">

                                    <Link to="/category/notebook" className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Notebook</Link>

                                    <Link to="/category/keyboard" className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Teclados</Link>

                                    <Link to="/category/mouse" className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Mouse</Link>

                                    <Link to="/category/phone" className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Celulares</Link>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <a className="text-white hover:text-blue-800" href="/">Login</a>
                                <CardWidget />

                                <div className="ml-3 relative">

                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">

                            <button onClick={handleMenuClick} className="bg-red-500 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {displayMenu ?
                    <div className=" md:hidden ">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                            <Link to="/category/notebook" className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Notebook</Link>

                            <Link to="/category/keyboard" className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Teclados</Link>

                            <Link to="/category/mouse" className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Mouse</Link>

                            <Link to="/category/phone" className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Celulares</Link>
                        </div>
                        <div className="pt-4 pb-3 ">
                            <div className="mt-3 px-2 space-y-1">
                                <CardWidget />
                            </div>
                        </div>
                    </div>
                    :
                    ""}
            </nav>


        </div>
    )
}

export default Navbar
