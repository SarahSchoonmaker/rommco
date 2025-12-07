// app/page.tsx

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-6 sm:px-16 bg-white dark:bg-black sm:items-start">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
            Rommco
          </h1>
          <p className="text-zinc-600 dark:text-zinc-300 max-w-xl">
            Rommco builds intelligent systems for compliance, automation, and
            quality-of-life engineering—reducing complexity and everyday
            friction for businesses and people.
          </p>
        </header>

        <section className="w-full space-y-8">
          <div>
            <h2 className="text-xl font-medium mb-2">Flagship Products</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 shadow-sm bg-zinc-50 dark:bg-zinc-900">
                <h3 className="font-medium mb-1">Underwrite AI™</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  Document intelligence for financial institutions and
                  broker-dealers. Reads financial documents, extracts key data,
                  and highlights inconsistencies and potential risk.
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 shadow-sm bg-zinc-50 dark:bg-zinc-900">
                <h3 className="font-medium mb-1">RegWatch AI™</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  Regulatory intelligence that monitors and summarizes rules and
                  guidance, helping teams stay ahead of SEC, FINRA, and other
                  regulatory changes.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">Divisions</h2>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                <strong>Rommco Intelligence:</strong> AI and automation for
                compliance, document analysis, and operational decision-making.
              </li>
              <li>
                <strong>Rommco Engineering:</strong> Practical hardware and
                product solutions that remove friction and everyday annoyance.
              </li>
              <li>
                <strong>Rommco Labs:</strong> R&amp;D space for exploring
                future-facing products and prototypes.
              </li>
            </ul>
          </div>
        </section>

        <footer className="mt-10 text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Rommco Corporation. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
