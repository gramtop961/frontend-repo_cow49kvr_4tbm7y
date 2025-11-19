import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white grid place-items-center shadow-lg shadow-blue-600/20">
                <span className="font-bold">T</span>
              </div>
              <span className="font-semibold text-slate-900 text-lg">Taskoria</span>
            </div>
            <p className="text-sm text-slate-600">Trustworthy pros. Faster matching. Clear pricing.</p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/about" className="hover:text-slate-900">About Us</Link></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><Link to="/faq" className="hover:text-slate-900">Help / FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Terms</a></li>
              <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Email: support@taskoria.com</li>
              <li>Phone: +61 3 0000 0000</li>
              <li>Live chat (coming soon)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 text-sm text-slate-500">
          © Taskoria 2025 — Designed in Melbourne • Built in Nepal
        </div>
      </div>
    </footer>
  )
}
