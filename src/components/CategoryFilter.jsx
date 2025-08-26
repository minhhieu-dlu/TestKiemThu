export default function CategoryFilter({categories, value, onChange}){
  return (
    <div className="flex gap-2 flex-wrap mb-4">
      <button onClick={()=>onChange('all')} className={`px-4 py-2 rounded-full border ${value==='all'?'bg-brand text-white border-brand':'hover:border-brand hover:text-brand'}`}>All</button>
      {categories.map(cat => (
        <button key={cat} onClick={()=>onChange(cat)} className={`px-4 py-2 rounded-full border ${value===cat?'bg-brand text-white border-brand':'hover:border-brand hover:text-brand'}`}>{cat}</button>
      ))}
    </div>
  )
}
