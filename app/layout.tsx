// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Rommco | Intelligent Systems & Automation",
  description:
    "Rommco builds intelligent systems and automation tools that reduce friction, streamline workflows, and enhance everyday life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <header className="site-header">
            <div className="container header-inner">
              <a href="/" className="logo">
                <div className="logo-mark">R</div>
                <div className="logo-text-group">
                  <span className="logo-text-main">Rommco</span>
                  <span className="logo-text-sub">
                    Systems • Intelligence • Engineering
                  </span>
                </div>
              </a>
              <nav className="nav">
                <a href="/" className="nav-link">
                  Home
                </a>
                <a href="/products" className="nav-link">
                  Products
                </a>
                <a href="/pricing" className="nav-link">
                  Pricing
                </a>
                <a href="/about" className="nav-link">
                  About
                </a>
                <a href="/contact" className="nav-link nav-cta">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          <main className="main">
            <div className="container">{children}</div>
          </main>

          <footer className="site-footer">
            <div className="container footer-inner">
              <p>
                © {new Date().getFullYear()} Rommco Corporation. All rights
                reserved.
              </p>
              <p className="footer-subtext">
                Intelligent systems and automation for real work and real life.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
