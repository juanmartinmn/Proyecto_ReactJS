import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
import { getProduct } from "../../utils/products";
import Item from "../ItemList/Item";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((data)=>{
        setProduct(data)
      })
      .catch((error) => console.warn(error))
    console.log(id);
  }, [id])

  return (
    <Container>
      <h1>Detalle del Producto</h1>
      {product && <Item product={product}/>}
      <Link to='/'>
        <Button>Volver</Button>
      </Link>
    </Container>    
  );
}
 
export default ItemDetailContainer;