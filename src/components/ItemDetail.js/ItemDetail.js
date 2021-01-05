import React from 'react'

function ItemDetail({ item }) {
    return (
        <div>
            <section className="text-gray-600 overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="product" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={item.pictureUrl} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm text-gray-500 tracking-widest">Detalles</h2>
                            <h1 className="text-gray-900 text-3xl font-medium mb-1">{item.title}</h1>
                            <p className="">{item.description}</p>
                            <div className="flex">
                                <span className=" font-bold text-2xl text-gray-900">$ {item.price}</span>
                                <button className="flex ml-auto text-white bg-green-500 py-2 px-6 hover:bg-green-600 rounded">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ItemDetail
