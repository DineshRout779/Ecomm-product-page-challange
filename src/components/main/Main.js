import './main.css';
import ProductDetails from './ProductDetails';

const Main = ({ ...props }) => {
  return (
    <main className='container main'>
      <ProductDetails {...props} />
    </main>
  );
};

export default Main;
