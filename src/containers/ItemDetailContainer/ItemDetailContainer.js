import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail.js/ItemDetail'

let itemDetailList =
{
    id: 1,
    title: "Wireless Apple Keyboard",
    price: 1000,
    description: "El Magic Keyboard es un teclado con un nuevo diseño elegante, batería recargable y grandes prestaciones. Tiene un mecanismo de tijera optimizado debajo de cada tecla que mejora su estabilidad y funcionamiento, así como un perfil más estilizado, lo que te permitirá escribir con mayor rapidez, comodidad y precisión.",
    pictureUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
}

function ItemDetailContainer() {
    const [item, setItem] = useState([])

    const getDetail = new Promise((resolve, rejected) => {
        setTimeout(() => {
            let status = 200
            if (status < 400) {
                resolve(itemDetailList)
            } else {
                rejected("hubo un error")
            }
        }, 2000)
    })


    useEffect(() => {
        getDetail
            .then(item => setItem(item))
            .catch(console.log("hubo un error"))
    }, [])

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )

}

export default ItemDetailContainer
