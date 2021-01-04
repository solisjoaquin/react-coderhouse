import React from 'react'
import Item from '../Item/Item'



function ItemList({ items }) {
    return (
        <div>
            { items.map(item => (
                <div className="p-5">
                    <Item key={item.id} title={item.title} />
                </div>
            ))

            }
        </div>
    )
}

export default ItemList
