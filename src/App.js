import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
      <BrowserRouter basename='/'>
        <CartProvider>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'All Products'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={`Sort by decade`} />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
    );
}

export default App;
