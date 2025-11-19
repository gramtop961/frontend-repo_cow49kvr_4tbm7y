import Header from '../components/Header'
import Footer from '../components/Footer'
import { Star, Filter } from 'lucide-react'

export default function Services() {
  const items = Array.from({ length: 12 }).map((_, i) => ({
    title: ['Plumbing Fix', 'Electrical Install', 'End of Lease Clean', 'Garden Makeover'][i % 4],
    location: ['Melbourne', 'Sydney', 'Brisbane', 'Perth'][i % 4],
    rating: (4 + (i % 2 ? 0.5 : 0)).toFixed(1),
    price: 120 + i * 10,
  }))

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Services</h1>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200"><Filter className="h-4 w-4" /> Filters</button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1 space-y-4">
            <div className="rounded-2xl border border-slate-200 p-4">
              <h3 className="font-semibold mb-2">Category</h3>
              <select className="w-full border rounded-lg p-2">
                <option>All</option>
                <option>Plumbing</option>
                <option>Cleaning</option>
                <option>Electrical</option>
              </select>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <h3 className="font-semibold mb-2">Budget</h3>
              <input type="range" className="w-full" />
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <h3 className="font-semibold mb-2">Location</h3>
              <input type="text" className="w-full border rounded-lg p-2" placeholder="Suburb or postcode" />
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <h3 className="font-semibold mb-2">Rating</h3>
              <div className="flex items-center gap-1 text-yellow-500"><Star className="h-4 w-4 fill-yellow-400" /><Star className="h-4 w-4 fill-yellow-400" /><Star className="h-4 w-4 fill-yellow-400" /><Star className="h-4 w-4 fill-yellow-400" /><Star className="h-4 w-4" /></div>
            </div>
          </aside>

          <section className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {items.map((s, i) => (
              <a key={i} href={`/services/${i+1}`} className="block rounded-2xl border border-slate-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400" />
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-sm text-slate-600">{s.location}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-yellow-500"><Star className="h-4 w-4 fill-yellow-400" /><span className="text-slate-800 font-medium">{s.rating}</span></div>
                  <div className="text-slate-700">From ${s.price}</div>
                </div>
              </a>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
