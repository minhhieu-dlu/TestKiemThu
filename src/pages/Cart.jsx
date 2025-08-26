import { useCart } from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'
import OrderSummary from '../components/OrderSummary.jsx'
import { useMemo, useState } from 'react'
import { useToast } from '../context/ToastContext.jsx'

export default function Cart(){
  const { cart, remove, updateQty, total, clear } = useCart()
  const [discount, setDiscount] = useState(0)
  const { push } = useToast()

  const shipping = total>300 ? 0 : (cart.length>0 ? 9.99 : 0)
  const grand = Math.max(0, total + shipping - discount)

  const onApplyCoupon = (e)=>{
    e.preventDefault()
    const code = new FormData(e.currentTarget).get('code')?.toString().trim().toUpperCase()
    if(code==='SAVE10'){
      const d = Math.min(10, total*0.1)
      setDiscount(d)
      push(`Coupon applied — saved $${d.toFixed(2)}`, 'success')
    }else{
      push('Invalid coupon code', 'error')
    }
  }

  const progress = Math.min(100, Math.round((total/300)*100))

  if(cart.length===0) return (
    <div className="text-center fade-in-up">
      <p className="mb-4">Your cart is empty.</p>
      <Link to="/products" className="btn">Go shopping</Link>
    </div>
  )

  return (
    <div className="grid lg:grid-cols-3 gap-6 fade-in-up">
      <div className="lg:col-span-2 space-y-4">
        <div className="card">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={()=>{clear(); setDiscount(0); push('Cart cleared','success')}} className="px-3 py-1 rounded border hover:border-red-500 hover:text-red-600">Clear cart</button>
          </div>
          <div className="mt-3 bg-gray-100 rounded-xl p-3">
            <div className="text-sm mb-1">Free shipping at <span className="font-medium">$300</span>. You’re at <span className="font-medium">${total.toFixed(2)}</span>.</div>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <div className="h-full bg-brand" style={{width: `${progress}%`}}/>
            </div>
          </div>
        </div>
        {cart.map(item => (
          <div key={item.id} className="card flex items-center gap-4">
            <img src={item.image} alt={item.name} className="w-28 h-20 object-cover rounded-xl"/>
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" min="1" value={item.qty} onChange={e=>updateQty(item.id, parseInt(e.target.value||'1',10))} className="w-16 border rounded px-2 py-1"/>
              <span className="w-24 text-right font-semibold">${(item.price*item.qty).toFixed(2)}</span>
              <button onClick={()=>{remove(item.id); push('Item removed','info')}} className="px-3 py-1 rounded border hover:border-red-500 hover:text-red-600">Remove</button>
            </div>
          </div>
        ))}
        <Link to="/products" className="btn-ghost">← Continue shopping</Link>
      </div>

      <OrderSummary
        subtotal={total}
        shipping={shipping}
        discount={discount}
        total={grand}
        onApplyCoupon={onApplyCoupon}
      />
    </div>
  )
}
