import { ShieldCheck, Zap, Stars } from 'lucide-react'

const steps = [
  { title: 'Tell us what you need', desc: 'Answer a few quick questions about your job', icon: Zap },
  { title: 'Get matched with verified pros', desc: 'We notify qualified local professionals instantly', icon: ShieldCheck },
  { title: 'Compare quotes & hire', desc: 'See reviews, pricing and profiles — then choose', icon: Stars },
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">How Taskoria Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white grid place-items-center shadow-md shadow-blue-600/30 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
              <p className="text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
