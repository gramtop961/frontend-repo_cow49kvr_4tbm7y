import { useState } from 'react'
import { Menu, X, Search, ChevronDown } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/services', label: 'Services' },
  { to: '/professionals', label: 'Become a Professional' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/faq', label: 'FAQ' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white grid place-items-center shadow-lg shadow-blue-600/20">
                <span className="font-bold">T</span>
              </div>
              <span className="font-semibold text-slate-900 text-lg">Taskoria</span>
            </Link>
            <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900 text-white ml-2">
              AU • Verified Leads
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-400 shadow-md shadow-blue-600/30 hover:opacity-95"
            >
              <Search className="h-4 w-4" /> Find pros
            </Link>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `block px-3 py-2 rounded-lg text-sm font-medium ${isActive ? 'text-blue-700 bg-blue-50' : 'text-slate-700 hover:bg-slate-100'}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
