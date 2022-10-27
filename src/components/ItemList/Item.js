import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ product }) => {
  return (
    <Card className='item' style={{ width: '17rem' }}>
      <Card.Img variant="top" src={product.pictureUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          $ {product.price}
        </Card.Text>
        <Card.Text>
          {product.description}
        </Card.Text>
          <Link to={`/item/${product.id}`}>
            <Button variant="outline-success">
              View
            </Button>
          </Link>
      </Card.Body>
    </Card>
  );
}
 
export default Item;