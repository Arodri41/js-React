import React from "react";
import { PRODUCTOS } from "../../items/productos";
import { Producto } from "./Producto";
import "./Tienda.css"

export const Tienda = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> Nuestros Extintores </h1>
      </div>

      <div className="products">
        {PRODUCTOS.map((Product) => (
          <Producto data={Product} />
        ))}
      </div>
    </div>
  );
};
