import React from 'react'
import { Link } from 'react-router-dom'

function Item({ item }) {

    return (
        <Link key={item.id} class="lg:w-1/4 md:w-1/2 p-4 w-full " to={`/item/${item.id}`}>
            <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src={item.pictureUrl} />
            </a>
            <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">{item.category}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                <p class="mt-1">$ {item.price}</p>
            </div>
        </Link>
    )
}

export default Item
