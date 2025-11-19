import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <h1 className="text-3xl font-bold">About Taskoria</h1>
        <p className="text-slate-600">Designed in Melbourne, Built in Nepal. We connect Australians with trusted local professionals through a premium, transparent experience.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6"><h3 className="font-semibold mb-2">Vision</h3><p className="text-slate-600">A faster, fairer marketplace where trust is built-in.</p></div>
          <div className="rounded-2xl border border-slate-200 p-6"><h3 className="font-semibold mb-2">Mission</h3><p className="text-slate-600">Help customers hire confidently and help professionals grow sustainably.</p></div>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6"><h3 className="font-semibold mb-2">Team</h3><p className="text-slate-600">A tight-knit crew across Australia and Nepal delivering world-class design and engineering.</p></div>
        <div className="rounded-2xl border border-slate-200 p-6"><h3 className="font-semibold mb-2">Global presence</h3><p className="text-slate-600">Melbourne • Kathmandu</p></div>
      </div>
      <Footer />
    </div>
  )
}
