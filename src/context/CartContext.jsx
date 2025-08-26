import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartCtx = createContext()

export function CartProvider({children}){
  const [cart, setCart] = useState(()=>{
    try{
      const raw = localStorage.getItem('mini-cart')
      return raw ? JSON.parse(raw) : []
    }catch{ return [] }
  })

  useEffect(()=>{
    localStorage.setItem('mini-cart', JSON.stringify(cart))
  }, [cart])

  const total = useMemo(()=>cart.reduce((s,i)=>s + i.price * i.qty, 0), [cart])

  const add = (product, qty=1)=>{
    setCart(prev => {
      const ex = prev.find(x=>x.id===product.id)
      if(ex) return prev.map(x=> x.id===product.id ? {...x, qty: x.qty + qty} : x)
      return [...prev, {...product, qty}]
    })
  }
  const remove = (id)=> setCart(prev => prev.filter(x=>x.id!==id))
  const clear = ()=> setCart([])
  const updateQty = (id, qty)=> setCart(prev => prev.map(x=> x.id===id ? {...x, qty: Math.max(1, qty)} : x))

  return <CartCtx.Provider value={{cart, add, remove, clear, updateQty, total}}>{children}</CartCtx.Provider>
}

export const useCart = ()=> useContext(CartCtx)
