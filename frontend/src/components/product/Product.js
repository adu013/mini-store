import React, { useEffect, useState } from 'react';
import './Product.css';

const Product = (props) => {
  const { id, productName, productDescription, productPrice, productImage } = props;
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    console.log("Product Use Effecr");
    productImage ? setImgUrl(productImage.replace("minio:9000", "localhost:9000")) : setImgUrl("")
  }, []);

  return (
    <div className='item'>
      <img src={imgUrl} alt="" />
      <p>{productName}</p>
      <p>{productDescription}</p>
      <div className='item-price'>
        S${productPrice}
      </div>
    </div>
  )
}

export default Product;
