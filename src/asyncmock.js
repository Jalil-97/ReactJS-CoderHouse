// vamos a simular la conexion a una base de datos, servidor o api, y vamos a simular el retraso con setTimeOut (2 segundos)

//ESTE ES MI ARRAY DE PRODUCTOS, SERIE COMO EL JSON DE JS
export const misProductos = [

    { id: 1, nombre: "Racket 1", precio: 200, img: "../public/img/paleta1.jpg", categoria: "paletas", detalle: "Medium balance model, ideal for intermediate players." },
    { id: 2, nombre: "Racket 2", precio: 170, img: "../public/img/paleta2.jpg", categoria: "paletas", detalle: "Lightweight design for easier control during volleys." },
    { id: 3, nombre: "Racket 3", precio: 220, img: "../public/img/paleta3.jpg", categoria: "paletas", detalle: "High power with a rough surface for better spin." },
    { id: 4, nombre: "Racket 4", precio: 220, img: "../public/img/paleta4.jpg", categoria: "paletas", detalle: "12K carbon structure for improved durability and control." },
    { id: 5, nombre: "Racket 5", precio: 220, img: "../public/img/paleta5.jpg", categoria: "paletas", detalle: "Tear-drop shape offering balance between control and power." },
    { id: 6, nombre: "Racket 6", precio: 220, img: "../public/img/paleta6.jpg", categoria: "paletas", detalle: "Soft EVA core that reduces vibrations on impact." },

    { id: 7, nombre: "Balls 1", precio: 220, img: "../public/img/pelotas1.jpg", categoria: "pelotas", detalle: "High pressure, consistent bounce for intense matches." },
    { id: 8, nombre: "Balls 2", precio: 220, img: "../public/img/pelotas2.jpg", categoria: "pelotas", detalle: "Increased durability on abrasive surfaces." },
    { id: 9, nombre: "Balls 3", precio: 220, img: "../public/img/pelotas3.jpg", categoria: "pelotas", detalle: "Medium speed, ideal for daily training sessions." },

    { id: 10, nombre: "Backpack 1", precio: 220, img: "../public/img/mochila1.jpg", categoria: "mochilas", detalle: "Thermal compartment to protect your racket." },
    { id: 11, nombre: "Backpack 2", precio: 220, img: "../public/img/mochila2.jpg", categoria: "mochilas", detalle: "Separate area for shoes and wet clothes." },
    { id: 12, nombre: "Backpack 3", precio: 220, img: "../public/img/mochila3.jpg", categoria: "mochilas", detalle: "Compact size, comfortable for daily use and training." },

]




export const getProductos = () => {

    return new Promise(resolve => { //la funcion devuelve una promesa, porque una promesa? porque en react se utilizan datos de forma asincrona
        setTimeout(() => { //aca simulamos el tiempo de espera de un servidor
            resolve(misProductos)
        }, 2000);


    })

}

export const getUnProducto = (id) => { //recibe como parametro el ID el cual es el identificador del producto que queremos buscar
    return new Promise(resolve => {
        setTimeout(() => {
            const unProducto = misProductos.find(item => item.id == id)
            resolve(unProducto)
        }, 1000);

    })
}
