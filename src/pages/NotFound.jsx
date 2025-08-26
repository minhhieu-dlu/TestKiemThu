import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold mb-2">404 — Page Not Found</h1>
      <p className="mb-4 text-gray-600">The page you are looking for does not exist.</p>
      <Link to="/" className="btn">Back to home</Link>
    </div>
  )
}
