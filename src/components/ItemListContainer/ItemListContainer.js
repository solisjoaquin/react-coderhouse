import React from 'react'

function ItemListContainer({ greeting }) {
    return (
        <div>
            <p className="text-lg p-7">{greeting}</p>
        </div>
    )
}

export default ItemListContainer
