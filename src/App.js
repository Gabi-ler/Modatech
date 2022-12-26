// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import ItemDetail from './pages/ItemDetail';
import Footer from './components/Footer';
import ClickEvent from './components/ClickEvent';
import ClickChange from './components/ClickChange';
import Cart from './components/Cart';
import CartContext from './Context/CartContext';
import ItemCart from './components/ItemCart';
import CardData from './pages/CardData';
// import form from './pages/Form';


function App() {
  return (
  <div className="App">
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Hola Gabriel!!'} />} />
          <Route path='/item/:id' element={<ItemDetail/>} />
          <Route path='/category/:idCategories' element={<ItemListContainer greeting={'Hola Gabriel!!'}/>}/>
          <Route path='/carrito' element={<Cart/>}/>
          <Route path='/event' element={<ClickEvent/>}/>
          <Route path='/change' element={<ClickChange/>}/>
          <Route path='/itemcart' element={<ItemCart/>}/>
          <Route path='/carddata' element={<CardData/>}/>
          {/* <Route path='/formulario' element={<form/>}/> */}
        </Routes>
        <Footer/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header> */}
      </BrowserRouter>
    </CartContext>
  </div>
  );
}

export default App;
