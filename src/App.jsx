
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/navBar'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <>

      <NavBar />  

      <Routes>

        <Route path="/" element={<ItemListContainer/>}/>

        <Route path="/categorias/:categoria" element={<ItemListContainer/>}/>

        <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>

        <Route path="/cart" element={<p>por ahora, soy un carro vacio</p>}/>

        <Route path = "*" element={<NotFound/>}/>


      </Routes>


    </>
  )
}

export default App
