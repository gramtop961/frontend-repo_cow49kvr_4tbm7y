import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Find Trusted Professionals for Any Job
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-lg text-slate-600"
            >
              Designed in Melbourne. Built in Nepal. Powered by Taskoria.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="w-full sm:w-auto flex-1 px-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 shadow-lg shadow-blue-600/30 hover:opacity-95"
                >
                  Get Free Quotes
                </Link>
                <Link
                  to="/professionals"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-blue-700 font-semibold bg-blue-50 hover:bg-blue-100 border border-blue-200"
                >
                  Become a Professional
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-3 text-slate-600">
                <div className="h-6 w-6 rounded-full bg-blue-600/10 border border-blue-600/20 grid place-items-center text-blue-700 text-xs font-bold">AU</div>
                <p className="text-sm">Verified pros • Fast matching • Transparent reviews</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
