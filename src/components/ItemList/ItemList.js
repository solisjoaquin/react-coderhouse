import React, { useEffect } from 'react'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'

function ItemList({ items }) {
    const { id } = useParams()

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {id ?
                        items.filter(item => item.category == id)
                            .map(item => (
                                <Item item={item} />
                            ))
                        :
                        items.map(item => (
                            <Item item={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ItemList;

