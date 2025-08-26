import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'

export default function App(){
  return (
    <CartProvider>
      <ToastProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar/>
        <main className="flex-1 container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:id" element={<ProductDetail/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
          </ToastProvider>
    </CartProvider>
  )
}
