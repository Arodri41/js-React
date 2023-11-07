import React, { useContext } from "react";
import { TIENDAContext } from "../../Context/TiendaContext";

export const CartItem = (props) => {
  const { id, nombre, precio, img } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(TIENDAContext);

  return (
    <div className="cartItem">
      <img src={img} />
      <div className="descrition">
        <p>
          <b>{nombre}</b>
        </p>
        <p> Price: ${precio}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};