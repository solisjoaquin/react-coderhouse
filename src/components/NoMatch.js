import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function NoMatch() {
    let location = useLocation();

    return (
        <div className="container px-5 py-24 mx-auto items-center">
            <h3 className="text-3xl my-4 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                No encontramos nada en la dirección <code>{location.pathname}</code>

            </h3>
            <div class="inline-flex rounded-md shadow">
                <Link to="/" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Volver al home
          </Link>
            </div>
        </div>
    )
}

export default NoMatch
