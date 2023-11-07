import React, { useContext } from "react";
import { TIENDAContext } from "../../Context/TiendaContext";
import { PRODUCTOS } from "../../items/productos";
import { CartItem } from "../Carrito/Cart-producto";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { Producto } from "../Tienda/Producto";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(TIENDAContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1> Tu carrito </h1>
      </div>
      <div className="cart">
        {PRODUCTOS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={Product} />;
          }
        })}
      </div>


      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Seguir comprando </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> El carrito esta vacio </h1>
      )}
    </div>
  );
};