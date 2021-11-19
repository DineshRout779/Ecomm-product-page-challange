// import { useState } from 'react';
import BuyingDetails from './BuyingDetails';
import LightBox from './LightBox';

const PriceDetails = ({ price, discount }) => {
  return (
    <div className='priceDetails'>
      <div className='discountedPrice'>
        <h2>${price * (discount / 100)}</h2>
        <p className='discount clr-orange'>{discount}%</p>
      </div>
      <div className='originalPrice'>
        <p className='bold'>${price}</p>
      </div>
    </div>
  );
};

const ProductDescription = ({ product, onAddCart }) => {
  return (
    <div className='details-container'>
      <small className='brand clr-orange bold'>Sneaker Company</small>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <PriceDetails {...product} />
      <BuyingDetails onAddCart={onAddCart} product={product} />
    </div>
  );
};

const ProductImages = ({ ...props }) => {
  return <LightBox {...props} />;
};

const ProductDetails = ({ product, quantity, onAddCart }) => {
  return (
    <div className='flex flex-center flex-between flex-align container-fluid'>
      <ProductImages images={product.images} thumbnails={product.thumbnails} />
      <ProductDescription
        product={product}
        quantity={quantity}
        onAddCart={onAddCart}
      />
    </div>
  );
};

export default ProductDetails;
