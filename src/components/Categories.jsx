import { Wrench, Plug, Broom, Bug, Globe, Truck, Leaf, Paintbrush, Calculator, Camera, BookOpen, Hammer } from 'lucide-react'

const items = [
  { icon: Wrench, label: 'Plumbing' },
  { icon: Plug, label: 'Electrician' },
  { icon: Broom, label: 'Cleaning' },
  { icon: Bug, label: 'Pest Control' },
  { icon: Globe, label: 'Web Development' },
  { icon: Truck, label: 'Moving' },
  { icon: Leaf, label: 'Gardening' },
  { icon: Paintbrush, label: 'Painting' },
  { icon: Calculator, label: 'Accounting' },
  { icon: Camera, label: 'Photography' },
  { icon: BookOpen, label: 'Tutoring' },
  { icon: Hammer, label: 'Handyman' },
]

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Top Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="group rounded-2xl border border-slate-200 p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 grid place-items-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-slate-700">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
