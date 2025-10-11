import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SobreNosotros from './components/SobreNosotros'
import Error from './components/Error'
import Home from './components/Home'
import Layout from './components/Layout'
import CartWidget from './components/CartWidget'
import ItemDetail from './components/ItemDetail'
import ItemListContainer from './components/ItemListContainer'
import { CartProvider } from './context/cartCntxt'
import { ProductosProvider } from './context/prodsContext'



function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <ProductosProvider>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/Tienda' element={<ItemListContainer />} />
                <Route path='/productos/:id' element={<ItemDetail />} />
                <Route path='/SobreNosotros' element={<SobreNosotros />} />
                <Route path='/Cart' element={<CartWidget />} />
                <Route path='*' element={<Error />} />
              </Route>
            </Routes>
          </ProductosProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
