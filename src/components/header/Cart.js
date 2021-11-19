import { FaTrash } from 'react-icons/fa';

const Cart = ({ isCartActive, cart = [], onRemoveCart, quantity, onOrder }) => {
  return (
    <>
      {isCartActive && (
        <div className='cart'>
          <h3
            style={{
              borderBottom: '1px solid #ccc',
            }}
          >
            Cart
          </h3>
          <div className='cart-body'>
            {!cart.length ? (
              <div
                className='flex flex-center'
                style={{
                  minHeight: '200px',
                  width: '100%',
                }}
              >
                <p>'Your Cart is empty'</p>
              </div>
            ) : (
              cart.map((item) => {
                return (
                  <div className='cart-item' key={item.id}>
                    <div className='flex flex-between flex-align'>
                      <img
                        src={`./images/${item.images[0]}`}
                        alt={item.title}
                        style={{
                          width: '50px',
                        }}
                        className='flex-2'
                      />
                      <div className='flex flex-column flex-9'>
                        <h4>{item.title}</h4>
                        <div className='flex flex-between'>
                          <p>
                            ${item.price * (item.discount / 100)} x {quantity}
                          </p>
                          <p>
                            Total:{' '}
                            <b>
                              ${item.price * (item.discount / 100) * quantity}
                            </b>
                          </p>
                        </div>
                      </div>
                      <button
                        className='btn btn-delete flex-1'
                        onClick={() => onRemoveCart(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
            <button
              onClick={onOrder}
              className='btn btn-primary flex flex-center mt-1 bold'
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
