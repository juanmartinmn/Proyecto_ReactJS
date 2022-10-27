import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'; 


const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [showItemCount, setShowItemCount] = useState(true);

  const handleAdd = (value) => {
    setCount(value);
    setShowItemCount(false);
    addItem(product, value);
  };




  return (
    <div className='itemDetailContainer'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.pictureUrl} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                ${product.price}
            </Card.Text>
            <Card.Text>
              {product.description}
            </Card.Text>
            {showItemCount && (<ItemCount
              initial={1}
              stock={product.stock}
              onAdd={handleAdd}/>)
            }
            {!showItemCount && (
                <Link to='/cart'>
                  <Button variant="success">
                      Go to Cart
                  </Button>
                </Link>
            )}
          </Card.Body>
        </Card>

    </div>
  );
}
 
export default ItemDetail;