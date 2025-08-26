import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useToast } from '../context/ToastContext.jsx'

function Stars({value=4}){
  return (
    <div className="flex items-center gap-0.5 text-amber-500 text-sm" aria-label={`rating ${value} out of 5`}>
      {'★★★★★'.split('').map((s,i)=>(
        <span key={i} className={i<value?'':'text-gray-300'}>★</span>
      ))}
    </div>
  )
}

export default function ProductCard({product}){
  const { add } = useCart()
  const { push } = useToast()

  const onAdd = ()=>{
    add(product,1)
    push(`Added ${product.name} to cart`, 'success')
  }

  return (
    <div className="card group flex flex-col overflow-hidden">
      <div className="relative rounded-xl overflow-hidden">
        <img src={product.image} alt={product.name} className="aspect-[4/3] w-full object-cover transform transition group-hover:scale-105"/>
        <span className="absolute top-3 left-3 badge bg-white/90">{product.category}</span>
      </div>
      <h3 className="font-semibold text-lg mt-3">{product.name}</h3>
      <div className="flex items-center justify-between mt-1">
        <Stars value={product.rating||4}/>
        <span className="text-brand font-bold">${product.price.toFixed(2)}</span>
      </div>
      <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
      <div className="mt-4 flex items-center justify-between gap-2">
        <Link className="btn-ghost" to={`/products/${product.id}`}>View</Link>
        <button className="btn" onClick={onAdd}>Add</button>
      </div>
    </div>
  )
}
