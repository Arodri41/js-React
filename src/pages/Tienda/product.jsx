import React, { useContext } from "react";


export const product = (props) => {
  const { id, name, price, img } = props.data;
 


  return (
    <div className="product">
      <img src={img} />
      <div className="descricion">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>
    </div>
  );
};
export default product