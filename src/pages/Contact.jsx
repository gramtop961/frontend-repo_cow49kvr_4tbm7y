import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <h1 className="text-3xl font-bold">Contact Taskoria</h1>
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="font-semibold mb-2">Support</h2>
          <form className="space-y-3">
            <input className="w-full border rounded-lg p-2" placeholder="Name" />
            <input className="w-full border rounded-lg p-2" placeholder="Email" />
            <textarea className="w-full border rounded-lg p-2" placeholder="How can we help?" rows={5} />
            <button className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-400">Send</button>
          </form>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 p-5"><p className="font-semibold">Email</p><p className="text-slate-600">support@taskoria.com</p></div>
          <div className="rounded-2xl border border-slate-200 p-5"><p className="font-semibold">Phone</p><p className="text-slate-600">+61 3 0000 0000</p></div>
          <div className="rounded-2xl border border-slate-200 p-5"><p className="font-semibold">Live chat</p><p className="text-slate-600">Coming soon</p></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
