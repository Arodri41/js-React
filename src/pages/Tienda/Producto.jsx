import React, { useContext } from "react";
import { TIENDAContext } from "../../Context/TiendaContext";

export const Producto = (props) => {
  const { id, nombre, precio, img } = props.data;
  const { addToCart, cartItems } = useContext(TIENDAContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={img} />
      <div className="descricion">
        <p>
          <b>{nombre}</b>
        </p>
        <p> ${precio}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Agregar al Carrito {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};