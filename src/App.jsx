import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar'
import Top from './components/Top/Top';
import TestEventos from './components/TestEventos/TestEventos';
import Cart from './components/Cart/Cart';
import CartContext from './components/CartContext/CartContext';

function App() {

  const title = 'MagicApp';

  return (

    <div className="App">

      <CartContext>

        <BrowserRouter>

          <Top />

          <NavBar title={title} />

          <Routes>

            <Route exact path='/' element={<ItemListContainer title={title} />} />

            <Route exact path='/category/:categoryId' element={<ItemListContainer />} />

            <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />

            <Route exact path='/cart' element={<Cart />} />

            <Route path="/testeventos" element={<TestEventos />} />

            <Route path="*" element={<p>404 Not Found</p>} />

          </Routes>

        </BrowserRouter>

      </CartContext>

    </div>
  )
}

export default App;
