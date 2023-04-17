const products = [
    { nombre: "Lasagña", precio: 3600, id: "1", idCat: "2", img: "../img/lasagña.jpg" },
    { nombre: "lomo", precio: 4500, id: "2", idCat: "2", img: "../img/lomo.jpg" },
    { nombre: "rogel", precio: 1800, id: "3", idCat: "4", img: "../img/rogel.jpg" },
    { nombre: "tiramisu", precio: 2100, id: "4", idCat: "4", img: "../img/tiramisu.jpg" }
]


export const getProducts = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        })
    }, 100)
}
export const getProductoPorID = (productsId) => {
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve (products.find (prod => prod.id === productsId)) 
        },100)
    })
}
export const getProductsPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            const productsCategoria = products.filter(prod=>prod.idCat===idCategoria);
            resolve(productsCategoria)
        },100)
    })
}