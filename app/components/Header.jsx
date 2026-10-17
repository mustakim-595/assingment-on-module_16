
"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
                <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3"
                >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-2xl shadow-lg shadow-sky-200">
                        ☀️
                    </span>

                    <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                        Sky<span className="text-sky-500">Cast</span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold text-slate-600 transition-colors hover:text-sky-600"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="/#weather-dashboard"
                    className="hidden items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-600 md:inline-flex"
                >
                    Check Weather <span>→</span>
                </Link>

                <button
                    type="button"
                    onClick={() => setMenuOpen((previous) => !previous)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden"
                >
                    {menuOpen ? (
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m6 6 12 12M18 6 6 18"
                            />
                        </svg>
                    ) : (
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {menuOpen && (
                <nav className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-600"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="/#weather-dashboard"
                            onClick={() => setMenuOpen(false)}
                            className="mt-2 rounded-xl bg-sky-500 px-4 py-3 text-center font-bold text-white transition hover:bg-sky-600"
                        >
                            Check Weather →
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}
