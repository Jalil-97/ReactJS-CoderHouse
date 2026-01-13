import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cart from './components/Cart/Cart'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <>

      <NavBar/>  

      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categorias/:categoria" element={<ItemListContainer/>}/>
        <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path = "*" element={<NotFound/>}/>
      </Routes>

      <Footer/>

    </>
  )
}

export default App
