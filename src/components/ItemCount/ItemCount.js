import { useState } from "react";
import { Button, Container } from "react-bootstrap";

const ItemCount = ({stock,initial,onAdd}) => {

    const [count,setCount] = useState(initial);

    const restar = () => {
        if(count>1){
            setCount(count-1);
        }
    }

    const sumar = () => {
        if (count<stock) {
            setCount(count+1);
        }
    }

    return ( 
        <Container>
            <Button onClick={sumar}>+</Button>
            <p>{count}</p>
            <Button onClick={restar}>-</Button>
        </Container>
    );
}
export default ItemCount;