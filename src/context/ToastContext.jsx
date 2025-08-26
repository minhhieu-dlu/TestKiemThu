import { createContext, useContext, useState, useCallback } from 'react'

const ToastCtx = createContext({})

export function ToastProvider({children}){
  const [toasts, setToasts] = useState([])

  const push = useCallback((message, type='info')=>{
    const id = Math.random().toString(36).slice(2)
    setToasts(t => [...t, {id, message, type}])
    setTimeout(()=> setToasts(t=> t.filter(x=> x.id!==id)), 2400)
  }, [])

  return (
    <ToastCtx.Provider value={{push}}>
      {children}
      <div className="fixed top-4 inset-x-0 flex flex-col items-center gap-2 z-50 px-4">
        {toasts.map(t => (
          <div key={t.id} className={`fade-in-up px-4 py-2 rounded-xl shadow text-white ${t.type==='success'?'bg-emerald-500':t.type==='error'?'bg-rose-500':'bg-gray-800'}`}>{t.message}</div>
        ))}
      </div>
    </ToastCtx.Provider>
  )
}

export const useToast = ()=> useContext(ToastCtx)
