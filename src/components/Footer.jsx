export default function Footer(){
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Mini E‑Com</p>
        <p>Built with React, Vite & Tailwind</p>
      </div>
    </footer>
  )
}
