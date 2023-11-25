import { useContext, useState } from 'react';
import { TIENDAContext } from '../../Context/TiendaContext';
import { Link } from 'react-router-dom';
import { CartItem } from "./CartItem";
import { db } from "../../services/firebase"
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';


function CartViewContainer() {
    const { quantity, cart, total, clear } = useContext(TIENDAContext);
    const [ buyer, setBuyer ] = useState({});
    const [ loading, setLoading ] = useState(false);


    const finalizePurchase = () => {
        setLoading(true)
        const items = [];
        cart.forEach((item) => {
            items.push({
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                image: item.image,
                quantity: item.quantity
            })
        })

        const cartCollection = collection(db, "sales");
        addDoc(cartCollection, {
            buyer,
            items,
            total,
            date: serverTimestamp(),
        })
        .then(result => {
            Swal.fire({
                title: 'Muchas gracias por su compra!',
                html: `Número de operación: <b>${result.id}</b>`,
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#00A19A'
            })
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        })

        updateStock(cart);
        clear();
    }

    return (
        <section className="mainContent cartView">
            {
                quantity === 0 ? ( loading ? (
                    <Spinner />
                ) : (
                    <h1 className="cartView__message">Tu carrito está vacío. Para agregar productos presiona <Link to="/" className="message__link">aquí</Link>.</h1>
                )
                ) : (
                    <>
                        <div className="cartView__header">
                            <h1 className="header__title">Mi carrito</h1>
                            <div className="header__links">
                                <Link to="/" className="link">Seguir comprando</Link>
                                <span className="clear" onClick={clear}>Vaciar carrito</span>
                            </div>
                        </div>
                        {
                            cart.map((product) => {
                                return <CartItem key={product.id} product={product} isOrderView={false} />
                            })
                        }
                        <div className="cartView__total">
                                <h2 className="title">Total: </h2>
                                <span className="total">${total}</span>
                        </div>
                        <div className="cartView__checkout">
                            <h2 className="checkout__title">Ingresa tus datos para finalizar la compra</h2>
                            <Checkout setBuyer={setBuyer} finalizePurchase={finalizePurchase} />
                        </div>
                    </>
                )
            }
        </section>
    )
}

export default CartViewContainer