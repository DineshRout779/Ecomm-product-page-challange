import { useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { data } from './data';

const App = () => {
  const [cart, setCart] = useState([]);
  const [product] = useState(data[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddCart = (prod, qty) => {
    let newCartItems = cart.some((item) => item.id === prod.id);
    if (!newCartItems) setCart([...cart, prod]);
    else setQuantity(quantity + qty);
  };

  // After checkout or on removal from cart
  const handleRemoveCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Ordered Sucessfully!');
    setCart([]);
  };

  return (
    <div className='App'>
      <Header
        cart={cart}
        quantity={quantity}
        onRemoveCart={(id) => handleRemoveCart(id)}
        onOrder={handleCheckout}
      />
      <Main
        product={product}
        onAddCart={(prod, qty) => handleAddCart(prod, qty)}
      />
    </div>
  );
};

export default App;
