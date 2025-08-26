function Stat({value,label}){
  return <div className="text-center p-4 rounded-2xl border bg-white"><div className="text-3xl font-extrabold text-brand">{value}</div><div className="text-sm text-gray-500">{label}</div></div>
}
function Feature({title,desc}){
  return <div className="card"><h3 className="font-semibold mb-1">{title}</h3><p className="text-sm text-gray-600">{desc}</p></div>
}
function TeamCard({name,role,seed}){
  return <div className="card text-center"><img className="rounded-xl w-full aspect-square object-cover mb-3" src={`https://picsum.photos/seed/${seed}/400/400`} alt={name}/><h4 className="font-semibold">{name}</h4><p className="text-sm text-gray-500">{role}</p></div>
}
function FAQ({q,a}){
  return <details className="card"><summary className="cursor-pointer font-medium">{q}</summary><p className="text-sm text-gray-600 mt-2">{a}</p></details>
}

export default function About(){
  return (
    <div className="fade-in-up space-y-8">
      <section className="prose max-w-3xl mx-auto">
        <h1>About Mini E‑Com</h1>
        <p>We craft delightful shopping experiences. This demo shows a client‑only stack with modern UI, fast routing, and interactive components — perfect for practicing testing flows without a backend.</p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
        <Stat value="24+" label="Products"/>
        <Stat value="8" label="Categories"/>
        <Stat value="1.2s" label="First Load"/>
        <Stat value="100%" label="Responsive"/>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Why you’ll love it</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Feature title="Modern UI" desc="Tailwind utility classes and accessible components."/>
          <Feature title="Fast & Lightweight" desc="Vite dev server and optimized production build."/>
          <Feature title="No Backend Needed" desc="Demo auth and cart powered by localStorage."/>
          <Feature title="Composable" desc="Small React components you can extend."/>
          <Feature title="Test‑friendly" desc="Deterministic data set and client‑side routes."/>
          <Feature title="Responsive" desc="Looks great on phones, tablets, desktops."/>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TeamCard name="Linh Tran" role="Product Designer" seed="team1"/>
          <TeamCard name="Huy Nguyen" role="Frontend Engineer" seed="team2"/>
          <TeamCard name="An Pham" role="QA Engineer" seed="team3"/>
          <TeamCard name="Mai Do" role="PM" seed="team4"/>
        </div>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-3">FAQ</h2>
        <div className="grid gap-3">
          <FAQ q="Do you store my data?" a="No. This is a demo only — credentials are not sent anywhere. A fake token is stored in your browser localStorage."/>
          <FAQ q="Can I add more products?" a="Yes! Edit src/data/products.js to add more items and categories."/>
          <FAQ q="How to integrate a real backend?" a="Replace the localStorage auth and static catalog with your API calls — the UI is ready for it."/>
        </div>
      </section>
    </div>
  )
}
