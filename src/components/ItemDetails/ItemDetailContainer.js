import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
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
    </Container>    
  );
}
 
export default ItemDetailContainer;