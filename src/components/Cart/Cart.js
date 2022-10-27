import { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import CartContext from "../../contexts/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { createOrder } from "../../utils/orders";
import OrderModal from "../OrderModal/OrderModal";
import './Cart.css';

const buyerMock = {
  name: 'Juan Martin Molina',
  phone: '381 777 7777',
  email: 'juanmartinmn@mail.com'
}

const Cart = () => {
  const { cart, total, removeItem, clear } = useContext(CartContext);
  const [user, setUser] = useState(buyerMock);
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState();

  const handleRemove = (itemId) => {
    removeItem(itemId);
  }

  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const handleBuy = async () => {
    const newOrder = {
      buyer: buyerMock,
      items: cart,
      total
    };
    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear();
  }

  const showTable = cart.length > 0

  return (
    <Container className='cartContainer'>
      <h1>Cart</h1>
      {showTable && (
        <>
          <Table striped bordered hover>
            <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td><img src={item.pictureUrl} height='100px'></img></td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td><FaTrashAlt onClick={() => handleRemove(item.id)}/></td>
                  </tr>
                ))}
            </tbody>
      
          </Table>
          <h3>Subtotal: $ {total}</h3>
          <Button variant="success" onClick={handleOpen}>Checkout</Button>
        </>
      )}
      {!showTable && (
        <>
          <h3>Shopping Cart empty</h3>
          <Link to='/'>
            <Button variant="success">Back to home</Button>
          </Link>
        </>
      )}
      <OrderModal
        showModal={showModal}
        onClose={handleClose}
        onBuy={handleBuy}
        orderId={orderId}
      />
    </Container>
  );
}
 
export default Cart;