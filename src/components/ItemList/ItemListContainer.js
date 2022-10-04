import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../../utils/products';
import ItemList from './ItemList';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    const {categoryName} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(categoryName);
    },[categoryName])

    useEffect(() => {
        if (categoryName) {
            getProductsByCategory(categoryName)
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        } else {
            getAllProducts()
            .then((data)=> setProducts(data))
            .catch((error) => console.warn(error))
        }
    },[categoryName])

    return ( 
        <Container>
        <h1>Productos</h1>
        <h3 className="greeting">{greeting}</h3>
        <ItemList products={products}/>
        </Container>
    );
}

export default ItemListContainer;