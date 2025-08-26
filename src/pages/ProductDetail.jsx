import { useParams } from 'react-router-dom'
import products from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductDetail(){
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { add } = useCart()

  if(!product) return <p>Product not found.</p>

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <img src={product.image} alt={product.name} className="rounded-2xl w-full object-cover"/>
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-brand text-3xl font-bold mb-6">${product.price.toFixed(2)}</p>
        <button className="btn" onClick={()=>add(product,1)}>Add to cart</button>
      </div>
    </div>
  )
}
