import React from "react";

const Product = ({ name, price, description }) => {
  return (
    <div>
      <h1>
        {name} - {price}
      </h1>
      <p>{description.substring(0, 100)}...Read more</p>
    </div>
  );
};

export default Product;
