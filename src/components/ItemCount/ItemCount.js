import React, { useState } from 'react'



function ItemCount({ stock, initial }) {
    const [counter, setCounter] = useState(initial)

    const sumarUnItem = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const restarUnItem = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const addItem = () => {
        console.log(`${counter} productos agregados`)
    }
    return (
        <div className="bg-gray-300 p-4 flex flex-col w-52">
            Nombre de producto
            <div className="bg-white flex justify-between">
                <button className="px-7" onClick={restarUnItem}>-</button>
                {counter}
                <button className="px-7" onClick={sumarUnItem}>+</button>
            </div>
            <button onClick={addItem} className="text-white bg-blue-500 p-2 mt-2">Agregar</button>
        </div>
    )
}

export default ItemCount
