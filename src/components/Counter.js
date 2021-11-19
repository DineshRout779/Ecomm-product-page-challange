const Counter = ({ counter, onIncrease, onDecrease }) => {
  return (
    <div className='counter flex flex-center'>
      <button
        className='counterBtn clr-orange flex flex-center'
        id='decrease'
        onClick={onDecrease}
      >
        <img src='./images/icon-minus.svg' alt='' />
      </button>
      <div className='bold'>{counter}</div>
      <button
        className='counterBtn clr-orange flex flex-center'
        id='increase'
        onClick={onIncrease}
      >
        <img src='./images/icon-plus.svg' alt='' />
      </button>
    </div>
  );
};

export default Counter;
