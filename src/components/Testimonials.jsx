export default function Testimonials() {
  const items = [
    { quote: 'Taskoria helped me find a great electrician within hours. So easy and transparent!', author: 'Sarah, Richmond' },
    { quote: 'Leads are high-quality and the verification process gives customers confidence.', author: 'Ben, Plumber in Geelong' },
    { quote: 'As a small business, the credit system is clear and fair. Highly recommend.', author: 'Priya, Cleaner in Parramatta' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">What people say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50 shadow-sm">
              <p className="text-slate-700">“{t.quote}”</p>
              <p className="mt-4 text-sm text-slate-500">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
