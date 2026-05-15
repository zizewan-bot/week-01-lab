import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Zize Wan | Portfolio",
  description:
    "A Next.js portfolio for Zize Wan featuring projects, skills, and interactive React components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[radial-gradient(circle_at_top,_rgba(255,248,239,0.9),_rgba(244,241,234,0.95)_42%,_#efe8df_100%)] text-stone-900">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col">
          <header className="px-6 pt-6 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-4 rounded-[1.75rem] border border-stone-200/90 bg-white/80 px-6 py-5 shadow-[0_18px_45px_rgba(47,42,36,0.08)] backdrop-blur md:flex-row md:items-center md:justify-between">
              <div>
                <Link
                  href="/"
                  className="font-[family:var(--font-playfair)] text-2xl font-semibold tracking-tight text-stone-900"
                >
                  Zize Wan
                </Link>
                <p className="mt-1 text-sm text-stone-600">
                  Entrepreneur, CSTU student, and builder in the Bay Area.
                </p>
              </div>
              <nav aria-label="Primary navigation" className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
                >
                  Projects
                </Link>
              </nav>
            </div>
          </header>

          {children}

          <footer className="px-6 pb-8 pt-2 text-center sm:px-8 lg:px-10">
            <div className="rounded-[1.5rem] border border-stone-200/80 bg-white/75 px-6 py-5 text-sm text-stone-600 shadow-[0_14px_32px_rgba(47,42,36,0.06)]">
              <p>&copy; 2026 Zize Wan. Built with Next.js, React, and Tailwind CSS.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
