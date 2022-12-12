// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetail from './pages/ItemDetail';


function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Hola Gabriel!!'} />} />
        <Route path='/item/:id' element={<ItemDetail/>} />
        <Route path='/category/:idCategories' element={<ItemListContainer greeting={'Hola Gabriel!!'}/>}/>
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header> */}
    </BrowserRouter>
  </div>
  );
}

export default App;
