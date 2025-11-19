import { ShieldCheck, Timer, Star, Lock, Bot } from 'lucide-react'

const reasons = [
  { title: 'Verified professionals', desc: 'ID-checked, reviewed and verified', icon: ShieldCheck },
  { title: 'Faster matching', desc: 'Get responses in minutes, not days', icon: Timer },
  { title: 'Transparent reviews', desc: 'Real ratings and feedback on every profile', icon: Star },
  { title: 'Secure communication', desc: 'Chat safely without sharing your number', icon: Lock },
  { title: 'AI-powered matching', desc: 'Smarter recommendations for better outcomes', icon: Bot },
]

export default function WhyChoose() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Why Choose Taskoria</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {reasons.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 grid place-items-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">{title}</h3>
              <p className="text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
