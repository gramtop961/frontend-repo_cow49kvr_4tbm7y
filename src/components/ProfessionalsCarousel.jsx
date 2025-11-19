import { useState } from 'react'
import { Star, BadgeCheck } from 'lucide-react'

const pros = Array.from({ length: 8 }).map((_, i) => ({
  name: `Alex ${i + 1}`,
  trade: ['Electrician', 'Plumber', 'Cleaner', 'Gardener'][i % 4],
  rating: (4 + (i % 2 ? 0.5 : 0)).toFixed(1),
  reviews: 120 + i * 5,
  verified: true,
}))

export default function ProfessionalsCarousel() {
  const [index, setIndex] = useState(0)

  const visible = pros.slice(index, index + 4)

  const next = () => setIndex((prev) => (prev + 1) % (pros.length - 3))
  const prev = () => setIndex((prev) => (prev - 1 + (pros.length - 3)) % (pros.length - 3))

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Featured Professionals</h2>
          <div className="flex gap-2">
            <button onClick={prev} className="px-3 py-2 rounded-lg border border-slate-200">Prev</button>
            <button onClick={next} className="px-3 py-2 rounded-lg border border-slate-200">Next</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visible.map((pro, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-white grid place-items-center font-semibold">{pro.name[0]}</div>
                <div>
                  <p className="font-semibold text-slate-900 flex items-center gap-1">{pro.name} {pro.verified && <BadgeCheck className="h-4 w-4 text-blue-600" />}</p>
                  <p className="text-sm text-slate-600">{pro.trade}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <div className="flex items-center text-yellow-500"><Star className="h-4 w-4 fill-yellow-400" /> <span className="ml-1 font-medium text-slate-800">{pro.rating}</span></div>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600">{pro.reviews} reviews</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
