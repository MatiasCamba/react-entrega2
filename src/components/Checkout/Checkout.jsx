import './Checkout.css'
import { useContext, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../services/firebase/config'
import { collection, addDoc } from 'firebase/firestore'

const Checkout = () => {

    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Error! Completa nuevamente los campos");
            return;
        }
        if (email !== emailConfirmacion) {
            setError("La direccion de Email no es la misma!");
            return;

        }

        const orden = {
            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,


            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.error("Se produjo un error", error);
                setError("Se produjo un error, intenta nuevamente mas tarde");
            })
    }
    return (
        <div className='formulario-contenedor'>
            <h3 className='titulo-formulario'>FINALIZA TU COMPRA</h3>
            <form className='formulario' onSubmit={handleForm}>
                {
                    carrito.map((producto) => (
                        <div key={producto.item.id}>
                            <p>
                                {producto.item.nombre} x {producto.cantidad}
                            </p>
                            <hr />
                            <p>
                                precio $ : {producto.item.precio}
                            </p>
                            <hr />

                        </div>
                    ))

                }
                <hr />
                <div className='input-contenedor'>
                    <label htmlFor=""> Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                </div>
                <div className='input-contenedor'>
                    <label htmlFor=""> apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className='input-contenedor'>
                    <label htmlFor=""> Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className='input-contenedor'>
                    <label htmlFor=""> email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input-contenedor'>
                    <label htmlFor=""> confirma email</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {error && <p> {error}</p>}
                <button className='boton-formulario' type='submit'> Finalizar Compra</button>


            </form>
            {
                ordenId && (
                    <strong className='formulario-exito'> Gracias por tu compra! Tu orden es : {ordenId}</strong>
                )
            }

        </div>
    )
}

export default Checkout