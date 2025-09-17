import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import Tienda from './components/Tienda'
import SobreNosotros from './components/SobreNosotros'
import Error from './components/Error'
import Home from './components/Home'
import Layout from './components/Layout'
import CartWidget from './components/CartWidget'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path='/Tienda' element={<Tienda />}/>
            <Route path='/SobreNosotros' element={<SobreNosotros />}/>
            <Route path='/Cart' element={<CartWidget />}/>
            <Route path='*' element={<Error />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
