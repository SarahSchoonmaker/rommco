export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-slate-50">
      {/* Hero Section */}
      <section className="w-full max-w-5xl rounded-xl bg-white px-6 py-20 shadow-sm sm:px-10 mt-10">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Engineering smarter systems for compliance, automation, and everyday
          life.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Rommco builds intelligent tools that reduce complexity, streamline
          decision-making, and eliminate real-world friction — for financial
          institutions, operations teams, and consumers.
        </p>
      </section>

      {/* Product Cards */}
      <section className="mt-12 w-full max-w-5xl">
        <h2 className="mb-6 text-2xl font-semibold text-slate-900">
          Flagship Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-medium text-slate-900">
              Underwrite AI™
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              AI-powered document intelligence for broker-dealers and financial
              institutions. Automatically extracts key data, flags
              inconsistencies, and accelerates risk review.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-medium text-slate-900">RegWatch AI™</h3>
            <p className="mt-2 text-sm text-slate-600">
              Real-time monitoring and summarization of SEC, FINRA, and
              regulatory guidance. Keeps compliance teams informed without
              manual research.
            </p>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="mt-14 w-full max-w-5xl">
        <h2 className="mb-6 text-2xl font-semibold text-slate-900">
          Divisions
        </h2>

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium text-slate-900">
              Rommco Intelligence
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              AI and automation products designed for compliance, document
              analysis, and operational decision-making across regulated
              industries.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium text-slate-900">
              Rommco Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Hardware and software solutions that solve everyday frustrations —
              practical tools built to improve quality of life and eliminate
              friction.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium text-slate-900">Rommco Labs</h3>
            <p className="mt-2 text-sm text-slate-600">
              Our R&D division focused on exploring future technologies,
              prototypes, and new product categories that enhance human
              experience and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-16 mb-10 text-xs text-slate-500">
        © {new Date().getFullYear()} Rommco Corporation. All rights reserved.
      </footer>
    </div>
  );
}
