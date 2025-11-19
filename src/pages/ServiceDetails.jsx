import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ServiceDetails() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <main className="lg:col-span-2 space-y-6">
            <h1 className="text-3xl font-bold">Plumbing Fix & Maintenance</h1>
            <p className="text-slate-600">Trusted local professionals with transparent pricing and verified reviews.</p>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold mb-2">About this service</h2>
              <p className="text-slate-600">We handle leaks, blocked drains, hot water issues and more. Fully licensed and insured.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold mb-2">Professional details</h2>
              <ul className="text-slate-600 list-disc pl-5 space-y-1">
                <li>Verified • ID-checked • Insured</li>
                <li>Response time: under 30 minutes</li>
                <li>Coverage: Melbourne metro</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold mb-2">Reviews</h2>
              <div className="space-y-3 text-slate-700">
                <p>“Came within an hour and fixed the issue quickly.” — James</p>
                <p>“Transparent pricing and friendly.” — Maria</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold mb-2">Pricing</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl border p-4"><p className="font-semibold">Call-out</p><p className="text-slate-600">$79</p></div>
                <div className="rounded-xl border p-4"><p className="font-semibold">Hourly</p><p className="text-slate-600">$120</p></div>
                <div className="rounded-xl border p-4"><p className="font-semibold">Emergency</p><p className="text-slate-600">$199</p></div>
              </div>
            </div>
          </main>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold mb-2">Request Quote</h3>
              <form className="space-y-3">
                <input className="w-full border rounded-lg p-2" placeholder="Your name" />
                <input className="w-full border rounded-lg p-2" placeholder="Email" />
                <textarea className="w-full border rounded-lg p-2" placeholder="Describe your job" rows={4} />
                <button className="w-full px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-400">Submit</button>
              </form>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold mb-2">Compare other professionals</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• RapidFix Plumbing — 4.8 (210 reviews)</li>
                <li>• ClearFlow Services — 4.6 (145 reviews)</li>
                <li>• BlueDrop Plumbing — 4.7 (168 reviews)</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  )
}
