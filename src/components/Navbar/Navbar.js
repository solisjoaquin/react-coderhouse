import React from 'react'
import { NavLink } from 'react-router-dom'
import CardWidget from '../CartWidget/CardWidget'

function Navbar() {

    return (
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex justify-between py-5 items-center">
            <NavLink to="/"><h1 className="text-xl pl-4 text-white font-bold">&#60; Coderstore &#62;</h1></NavLink>

            <ul className="pr-8">
                <li className="inline px-4"><NavLink className="text-white hover:text-blue-600 " to="/category/notebook">Notebook</NavLink></li>
                <li className="inline px-4"><NavLink className="text-white hover:text-blue-600 " to="/category/keyboard">Teclados</NavLink></li>
                <li className="inline px-4"><NavLink className="text-white hover:text-blue-600 " to="/category/mouse">Mouse</NavLink></li>
                <li className="inline px-4"><NavLink className="text-white hover:text-blue-600 " to="/category/phone">Celulares</NavLink></li>
            </ul>

            <ul className="pr-8">
                <li className="inline px-4"><a className="text-white hover:text-blue-800" href="/">Login</a></li>
                <CardWidget />
            </ul>

        </div>
    )
}

export default Navbar
