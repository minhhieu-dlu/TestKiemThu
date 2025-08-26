import { useMemo, useState } from 'react'
import productsData from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import CategoryFilter from '../components/CategoryFilter.jsx'

export default function Products(){
  const [category, setCategory] = useState('all')
  const [q, setQ] = useState('')
  const categories = useMemo(()=> Array.from(new Set(productsData.map(p=>p.category))), [])

  const filtered = productsData.filter(p => 
    (category==='all' || p.category===category) &&
    (q.trim()==='' || p.name.toLowerCase().includes(q.toLowerCase()))
  )

  return (
    <section className="fade-in-up">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <h2 className="text-2xl font-bold">Products</h2>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products..." className="border rounded px-3 py-2 w-full md:w-72"/>
      </div>
      <CategoryFilter categories={categories} value={category} onChange={setCategory}/>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(p => <ProductCard key={p.id} product={p}/>)}
      </div>
      {filtered.length===0 && <p className="text-center text-gray-500 mt-10">No products found.</p>}
    </section>
  )
}
