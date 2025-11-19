import Header from '../components/Header'
import Footer from '../components/Footer'

const faqs = [
  { q: 'What makes a great website?', a: 'Clarity, speed, trust and a crystal-clear path to action. Taskoria uses modern UI, fast matching and transparent reviews to convert better.' },
  { q: 'Why choose Taskoria?', a: 'Verified professionals, faster responses, and a fair credit system for pros. Designed in Melbourne, built in Nepal.' },
  { q: 'What questions do professionals ask clients?', a: 'Timing, budget, location, and the specifics of the job to provide accurate quotes.' },
  { q: 'COVID safety', a: 'Professionals follow current Australian health guidelines. You can request mask-wearing and contact-free service where possible.' },
]

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="rounded-2xl border border-slate-200 p-4">
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
