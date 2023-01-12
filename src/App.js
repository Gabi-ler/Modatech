// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetail from './components/ItemDetail';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartContext from './Context/CartContext';
import ItemCart from './components/ItemCart';
import CheckOut from './pages/CheckOut';
import CompletedPurchase from './pages/CompletedPurchase.jsx'


function App() {
  return (
  <div className="App">
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Hola Adrian!!'} />} />
          <Route path='/item/:id' element={<ItemDetail/>} />
          <Route path='/category/:idCategories' element={<ItemListContainer greeting={'Hola Adrian!!'}/>}/>
          <Route path='/carrito' element={<Cart/>}/>
          <Route path='/itemcart' element={<ItemCart/>}/>
          <Route path='/carddata' element={<CheckOut/>}/>
          <Route path='/completedPurchase' element={<CompletedPurchase/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContext>
  </div>
  );
}

export default App;
