import React from 'react';
import productos from '../../items/productos';

const product = () => {
  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {productos.map(productos => (
          <li key={productos.id}>
            {productos.name} - ${productos.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default product;