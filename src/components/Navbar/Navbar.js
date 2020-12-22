import React from 'react'
import CardWidget from '../CartWidget/CardWidget'

function Navbar() {
    return (
        <div className="bg-red-600 flex justify-between py-5 items-center">
            <h1 className="text-xl pl-4 text-white font-bold">Codermaker</h1>

            <ul className="pr-8">
                <li className="inline px-4"><a className="text-white hover:text-red-300" href="/">Monitores</a></li>
                <li className="inline px-4"><a className="text-white hover:text-red-300" href="/">Teclados</a></li>
                <li className="inline px-4"><a className="text-white hover:text-red-300" href="/">Mouses</a></li>
                <li className="inline px-4"><a className="text-white hover:text-red-300" href="/">CPUs</a></li>
            </ul>

            <ul className="pr-8">
                <li className="inline px-4"><a className="text-white hover:text-red-300" href="/">Login</a></li>
                <CardWidget />
            </ul>

        </div>
    )
}

export default Navbar
