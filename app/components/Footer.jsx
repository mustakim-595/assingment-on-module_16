
export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 text-2xl font-bold text-white"
                        >
                            <span className="text-sky-400">☀</span>
                            SkyCast
                        </a>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
                            Stay informed about the weather wherever life takes you.
                            Explore current conditions and hourly forecasts for cities
                            around the world.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <a
                                    href="/"
                                    className="transition-colors hover:text-sky-400"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="transition-colors hover:text-sky-400"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/services"
                                    className="transition-colors hover:text-sky-400"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="transition-colors hover:text-sky-400"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Weather Features */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Weather Features
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-slate-400">
                            <li>Current Weather</li>
                            <li>Hourly Forecast</li>
                            <li>Temperature & Humidity</li>
                            <li>Wind Speed & Direction</li>
                            <li>Worldwide City Search</li>
                        </ul>
                    </div>

                    {/* Data Source */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Weather Data
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-slate-400">
                            Weather information is provided by Open-Meteo.
                        </p>

                        <a
                            href="https://open-meteo.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sky-400 transition-colors hover:text-sky-300"
                        >
                            Visit Open-Meteo
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 SkyCast. All rights reserved.</p>

                    <p>Built for a better weather experience.</p>
                </div>
            </div>
        </footer>
    );
}
