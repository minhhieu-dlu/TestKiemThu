import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submit = (e)=>{
    e.preventDefault()
    // Demo login: accept anything non-empty, store a fake token
    if(email.trim() && password.trim()){
      localStorage.setItem('mini-token', 'demo-token')
      alert('Login successful (demo).')
      navigate('/')
    }else{
      alert('Please enter email & password.')
    }
  }

  return (
    <div className="max-w-md mx-auto card">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <form onSubmit={submit} className="grid gap-3">
        <label className="grid gap-1">
          <span className="text-sm">Email</span>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="border rounded px-3 py-2" placeholder="you@example.com"/>
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Password</span>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="border rounded px-3 py-2" placeholder="••••••••"/>
        </label>
        <button className="btn mt-2" type="submit">Login</button>
      </form>
      <p className="text-xs text-gray-500 mt-3">Demo only — no backend involved. A fake token is stored in localStorage.</p>
    </div>
  )
}
