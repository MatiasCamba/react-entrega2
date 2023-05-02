import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [] });


export const CarritoProvider = ( {children} ) => {
    const [carrito, setCarrito] = useState([]);



    const agregarProducto = (item, cantidad) => {
        if (!estaEnCarrito(item.id)) {
            setCarrito(prev => [...prev, { item, cantidad }]);

        } else {
            console.log(" ya esta en el carrito");
        }
    }



    const estaEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id);


    }

    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.id !== id);
        setCarrito(carritoActualizado);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    return (
        <CarritoContext.Provider value={{carrito, eliminarProducto,vaciarCarrito,agregarProducto}}>
            
            {children}

         </CarritoContext.Provider>
    )
}