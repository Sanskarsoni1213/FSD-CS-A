import React from 'react'
import './Book.css'
const Book = ({book}) => {
    const [count, setCount] = React.useState(0);
    function handleBuyNow() {
        alert(`${book.title} added successfully`);
    }
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        if(count>0)
        setCount(count - 1);
    }
  return (
    <div className='card'>
      <img src={book.image} alt='book image' width={200} height={200}></img>
      <h3>Title: {book.title}</h3>
      <h4>Price: ₹{book.price}</h4>
      <div>
        <button onClick={decrement} style={{width:'20px',height:'25px'}}>-</button>
        <span>{count}</span>
        <button onClick={increment} style={{width:'20px',height:'25px'}}>+</button>
      </div>
      <br />
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  )
}

export default Book
