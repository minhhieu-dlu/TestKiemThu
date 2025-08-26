import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useEffect, useState } from 'react'

export default function Navbar(){
  const { cart } = useCart()
  const [authed, setAuthed] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    setAuthed(!!localStorage.getItem('mini-token'))
  },[])

  const logout = ()=>{
    localStorage.removeItem('mini-token')
    setAuthed(false)
    navigate('/')
  }

  const count = cart.reduce((s,i)=>s+i.qty,0)

  const linkClass = ({isActive}) => isActive ? 'text-brand font-semibold' : 'hover:text-brand'

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold text-brand">Mini E‑Com</Link>
        <nav className="ml-auto flex gap-6 items-center">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/cart" className="relative hover:text-brand">
            Cart
            {count>0 && <span className="ml-1 text-sm bg-brand text-white rounded-full px-2">{count}</span>}
          </NavLink>
          {!authed ? (
            <NavLink to="/login" className="btn">Login</NavLink>
          ) : (
            <button onClick={logout} className="btn">Logout</button>
          )}
        </nav>
      </div>
    </header>
  )
}
