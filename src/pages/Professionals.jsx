import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Professionals() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl font-bold">Join Taskoria</h1>
            <p className="text-slate-600 mt-2">Buy credits, get verified leads, grow your business.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { name: 'Starter', price: '$0', features: ['Pay-as-you-go credits', 'Basic profile'] },
                { name: 'Pro', price: '$49/mo', features: ['Lower credit cost', 'Priority matching', 'Verified badge'] },
                { name: 'Premium', price: '$99/mo', features: ['Featured placement', 'Lead refunds', 'Dedicated support'] },
              ].map((t) => (
                <div key={t.name} className="rounded-2xl border border-slate-200 p-5">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-2xl font-bold">{t.price}</p>
                  <ul className="mt-2 text-sm text-slate-600 list-disc pl-5">
                    {t.features.map((f) => (<li key={f}>{f}</li>))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold mb-2">Verification badges</h2>
              <p className="text-slate-600">Verified • ID-Checked • Featured</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="font-semibold mb-2">Sign up</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input className="border rounded-lg p-2" placeholder="Business name" />
              <input className="border rounded-lg p-2" placeholder="Contact name" />
              <input className="border rounded-lg p-2" placeholder="Email" />
              <input className="border rounded-lg p-2" placeholder="Phone" />
              <input className="border rounded-lg p-2 sm:col-span-2" placeholder="Category" />
              <button className="sm:col-span-2 px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-400">Create account</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
