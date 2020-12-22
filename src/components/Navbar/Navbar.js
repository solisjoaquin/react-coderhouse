import React from 'react'

function Navbar() {
    return (
        <div className="bg-red-600 flex justify-between py-4 items-center">
            <h1 className="text-lg pl-3 text-white font-bold">Codermaker</h1>
            <ul className="pr-8">
                <li className="inline px-4"><a className="text-white hover:text-red-300" href="/">Home</a></li>
                <li className="inline px-4"><a className="text-white hover:text-red-300" href="/">Ofertas</a></li>
                <li className="inline px-4"><a className="text-white hover:text-red-300" href="/">Nuevo</a></li>
            </ul>
        </div>
    )
}

export default Navbar
