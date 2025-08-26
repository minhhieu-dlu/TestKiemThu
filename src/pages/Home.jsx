import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="text-center fade-in-up">
      <div className="mx-auto max-w-4xl py-12">
        <div className="rounded-3xl p-10 bg-gradient-to-r from-sky-50 to-indigo-50 border">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Discover Tech You’ll Love</h1>
          <p className="text-gray-600 mb-8">Shop a curated selection of gadgets — headphones, drones, cameras and more. Smooth interactions, modern UI, and a demo cart to try the flow.</p>
          <div className="flex items-center justify-center gap-3">
            <Link to="/products" className="btn">Shop now</Link>
            <Link to="/about" className="btn-ghost">About us</Link>
          </div>
        </div>
      </div>
      <img className="rounded-2xl shadow mx-auto" alt="hero" src="https://picsum.photos/seed/hero2/1200/420"/>
    </section>
  )
}
