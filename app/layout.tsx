// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Rommco | Intelligent Systems & Engineering",
  description:
    "Rommco builds intelligent systems for compliance, automation, and quality-of-life engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <div className="min-h-screen flex flex-col">
          {/* Top nav */}
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
              <Link href="/" className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 shadow-sm" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-wide uppercase text-slate-900">
                    Rommco
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Systems • Intelligence • Engineering
                  </span>
                </div>
              </Link>

              <nav className="flex items-center gap-3 text-sm text-slate-600">
                <Link href="/products" className="hover:text-slate-900">
                  Products
                </Link>
                <Link href="/pricing" className="hover:text-slate-900">
                  Pricing
                </Link>
                <Link href="/about" className="hover:text-slate-900">
                  About
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-sky-500 px-3 py-1 text-xs font-medium text-sky-600 hover:bg-sky-50"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1">
            <div className="mx-auto max-w-5xl px-4 py-10">{children}</div>
          </main>

          {/* Footer */}
          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} Rommco Corporation. All rights
                reserved.
              </p>
              <p>
                Intelligent systems for compliance, automation, and everyday
                experience.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
