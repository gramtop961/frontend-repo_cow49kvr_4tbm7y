export default function BrandStory() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 p-8 border border-slate-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Designed in Melbourne, Built in Nepal</h2>
              <p className="text-slate-600">
                A global team crafting a premium, trustworthy marketplace for Australia. Local insight meets world-class engineering.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-6 border border-slate-200 text-center shadow-sm">
                <p className="text-sm text-slate-500">Presence</p>
                <p className="text-xl font-semibold text-slate-900">Melbourne • Kathmandu</p>
              </div>
              <div className="rounded-2xl bg-white p-6 border border-slate-200 text-center shadow-sm">
                <p className="text-sm text-slate-500">Focus</p>
                <p className="text-xl font-semibold text-slate-900">Trust • Speed • Transparency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
