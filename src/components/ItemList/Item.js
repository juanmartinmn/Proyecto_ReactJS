import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({product}) =>{
    
    const onAdd = () => {
        console.log(`Se agregaron ${onAdd} ${product.title}`)
    }

    return(
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={product.pictureUrl} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                {product.description}
                </Card.Text>
                <Card.Text>
                    ${product.price}
                </Card.Text>
                    <Link to={`/item/${product.id}`}>
                        <Button>Ver</Button>
                    </Link>
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
            </Card.Body>
        </Card>
    )
}

export default Item