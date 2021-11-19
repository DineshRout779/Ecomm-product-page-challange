import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Counter from '../Counter';

const BuyingDetails = ({ onAddCart, product }) => {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className='buyingDetails flex flex-align'>
      <Counter
        counter={counter}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <button
        className='btn btn-primary btn-large flex flex-center bold'
        onClick={() => onAddCart(product, counter)}
      >
        <AiOutlineShoppingCart className='cart-svg' />
        Add to Cart
      </button>
    </div>
  );
};

export default BuyingDetails;
