import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Dashboard() {
  const cards = [
    { title: 'Leads', value: '8', desc: 'New this week' },
    { title: 'Messages', value: '3', desc: 'Awaiting reply' },
    { title: 'Credits', value: '120', desc: 'Balance' },
    { title: 'Profile', value: '80%', desc: 'Complete' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-bold mb-6">Professional Dashboard</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50">
              <p className="text-slate-500 text-sm">{c.title}</p>
              <p className="text-3xl font-bold">{c.value}</p>
              <p className="text-sm text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6 lg:col-span-2 h-64">Leads preview</div>
          <div className="rounded-2xl border border-slate-200 p-6 h-64">Messages preview</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
