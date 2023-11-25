import { useContext } from 'react';
import { TIENDAContext } from '../../Context/TiendaContext';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';
import { product } from '../Tienda/product';
import { products } from '../../items/productos';
import context from 'react-bootstrap/esm/AccordionContext';

function CartItem({product, isOrderView}) {

    const { removeItem } = useContext(context);

    return (
        <article className="cartItem">
            <picture className="cartItem__img">
                <img src={product.image} alt={product.title} />
            </picture>
            <div className="cartItem__info">
                <Link to={"/producto/" + product.id}>
                    <h3 className="info__title">{product.title}</h3>
                </Link>
                <p className="info__description">{product.description}</p>
            </div>
            <div className="cartItem__qty">
                <h4 className="qty__title">Cantidad</h4>
                <span className="qty">{product.quantity}</span>
            </div>
            <div className="cartItem__total">
                <h4 className="total__title">Total</h4>
                <span className="total">${product.price*product.quantity}</span>
            </div>
            {
                isOrderView ? ("") : (
                        <ClearIcon className="cartItem__remove" onClick={() => removeItem(product.id)} />
                )
            }
        </article>
    )
}

export default CartItem