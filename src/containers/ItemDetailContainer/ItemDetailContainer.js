import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail.js/ItemDetail'
import { useParams, useLocation } from 'react-router-dom'
import NoMatch from '../../components/NoMatch';

let itemsList = [
    {
        id: 1,
        title: "Wireless Apple Keyboard",
        price: 1000,
        category: "keyboard",
        description: "El Magic Keyboard es un teclado con un nuevo diseño elegante, batería recargable y grandes prestaciones. Tiene un mecanismo de tijera optimizado debajo de cada tecla que mejora su estabilidad y funcionamiento, así como un perfil más estilizado, lo que te permitirá escribir con mayor rapidez, comodidad y precisión.",
        pictureUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        title: 'Macbook Pro',
        price: 3400,
        category: "notebook",
        description: "Intel Core i7 de seis núcleos a 2,6 GHz de novena generación Turbo Boost de hasta 4,5 GHz AMD Radeon Pro 5300M con 4 GB de memoria GDDR6 16 GB de memoria DDR4 a 2.666 MHz",
        pictureUrl: 'https://images.unsplash.com/photo-1515803171005-2d5e90f7b4d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80'
    },
    {
        id: 3,
        title: "Mouse Apple",
        price: 450,
        category: "mouse",
        description: "Olvídate de las pilas de toda la vida, porque el ratón Magic Mouse 2 es totalmente recargable. Es más ligero, lleva menos piezas gracias a la batería integrada y a su parte inferior uniforme, y ha ganado en estabilidad.",
        pictureUrl: 'https://images.unsplash.com/photo-1470054187619-8cf450e37193?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGtleWJvYXJkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 4,
        title: "Iphone 7",
        price: 1000,
        category: "phone",
        description: "Su memoria RAM de 2 GB es justo lo que necesitás para utilizar las funciones más importantes como llamar, enviar mensajes, navegar y ejecutar aplicaciones de uso frecuente como redes sociales o multimedia.",
        pictureUrl: 'https://images.unsplash.com/photo-1514473776127-61e2dc1dded3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGlwaG9uZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },


    {
        id: 5,
        title: "Keychron K2 Red Switch",
        price: 1000,
        category: "keyboard",
        description: "El Magic Keyboard es un teclado con un nuevo diseño elegante, batería recargable y grandes prestaciones. Tiene un mecanismo de tijera optimizado debajo de cada tecla que mejora su estabilidad y funcionamiento, así como un perfil más estilizado, lo que te permitirá escribir con mayor rapidez, comodidad y precisión.",
        pictureUrl: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80'
    },
    {
        id: 6,
        title: 'Macbook',
        price: 3400,
        category: "notebook",
        description: "Intel Core i7 de seis núcleos a 2,6 GHz de novena generación Turbo Boost de hasta 4,5 GHz AMD Radeon Pro 5300M con 4 GB de memoria GDDR6 16 GB de memoria DDR4 a 2.666 MHz",
        pictureUrl: 'https://images.unsplash.com/photo-1518118014377-ce94f3eae7af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=679&q=80'
    },
    {
        id: 7,
        title: "Mouse Apple (Black)",
        price: 450,
        category: "mouse",
        description: "Olvídate de las pilas de toda la vida, porque el ratón Magic Mouse 2 es totalmente recargable. Es más ligero, lleva menos piezas gracias a la batería integrada y a su parte inferior uniforme, y ha ganado en estabilidad.",
        pictureUrl: 'https://images.unsplash.com/photo-1565788061370-4771680a4df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
    },
    {
        id: 8,
        title: "Iphone 11",
        price: 1000,
        category: "phone",
        description: "Su memoria RAM de 2 GB es justo lo que necesitás para utilizar las funciones más importantes como llamar, enviar mensajes, navegar y ejecutar aplicaciones de uso frecuente como redes sociales o multimedia.",
        pictureUrl: 'https://images.unsplash.com/photo-1605161702560-995aeda17042?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },

];

function ItemDetailContainer() {

    const { id } = useParams()

    useEffect(() => {
        return () => { console.log("este es el id: ", id) }
    }, id)

    const [item, setItem] = useState([])

    const getDetail = new Promise((resolve, rejected) => {
        setTimeout(() => {
            const selectedItem = itemsList.find(item => item.id == id)
            let status = 200
            if (status < 400) {
                resolve(selectedItem)
            } else {
                rejected("hubo un error en el detail")
            }
        }, 1000)
    })


    useEffect(() => {
        getDetail
            .then(item => setItem(item))
            .catch(console.log("hubo un error"))
    }, [])

    return (
        <div>
            { item ?
                <ItemDetail item={item} />
                :
                <NoMatch />
            }

        </div>
    )

}

export default ItemDetailContainer
