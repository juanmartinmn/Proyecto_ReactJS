import React, {useEffect, useState, } from 'react'
import { Button } from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const handleSubtract = () => {
    setCount(count - 1)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleClick = () => onAdd(count);

  useEffect(() => {
      setCount(parseInt(initial));
  },[initial])

  return (
    <div className='itemCountContainer'>
        <div className='itemCounter'>
          <Button variant="outline-success" disabled={count <= 1} onClick={handleSubtract}>
            -
          </Button>
          <h5>{count}</h5>
          <Button variant="outline-success" disabled={count >= stock} onClick={handleAdd}>
            +
          </Button>
        </div>
      <div>
      <Button variant="outline-success" disabled={stock <= 0} onClick={handleClick}>
        Add to Cart
      </Button>
      </div>
    </div>
  )
}

export default ItemCount