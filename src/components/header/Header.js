import { useState } from 'react';
import '../header/header.css';
import { MdMenu } from 'react-icons/md';
import Cart from './Cart';

const Header = ({ cart, quantity, onRemoveCart, onOrder }) => {
  const [isCartActive, setIsCartActive] = useState(false);

  const handleToggle = () => {
    setIsCartActive(!isCartActive);
  };

  return (
    <header>
      <div className='container header flex flex-between flex-align'>
        <MdMenu className='menu' />
        <img src='/images/logo.svg' alt='logo' className='logo' />
        <nav className='nav flex flex-between flex-align'>
          <div className='nav-link-container flex'>
            <a href='/#'>Collections</a>
            <a href='/#'>Men</a>
            <a href='/#'>Women</a>
            <a href='/#'>About</a>
            <a href='/#'>Contact</a>
          </div>
          <div className='nav-btn-container flex flex-between flex-center ml-auto'>
            <button id='cart' className='btn btn-cart' onClick={handleToggle}>
              <div className='icon-badge flex flex-center flex-align'>
                {cart.length}
              </div>
              <img src='./images/icon-cart.svg' alt='cart' />
            </button>
            <button id='profile' className='btn btn-profile'>
              <img src='./images/image-avatar.png' alt='profile' />
            </button>
          </div>
        </nav>
        <Cart
          isCartActive={isCartActive}
          cart={cart}
          onRemoveCart={onRemoveCart}
          onOrder={onOrder}
          quantity={quantity}
        />
      </div>
    </header>
  );
};

export default Header;
