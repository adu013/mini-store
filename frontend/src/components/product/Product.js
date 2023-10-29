import React from 'react';
import './Product.css';

const Product = (props) => {
  const { id, productName, productDescription, productPrice, productImage } = props;

  return (
    <div className='item'>
      <img src={productImage} alt="" />
      <p>{productName}</p>
      <p>{productDescription}</p>
      <div className='item-price'>
        S${productPrice}
      </div>
    </div>
  )
}

export default Product;
