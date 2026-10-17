
import Link from "next/link";

export const metadata = {
    title: "About",
    description:
        "Learn about our weather application, its features, and Open-Meteo data source.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 px-4 py-20 text-center text-white sm:px-6 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
                        About Us
                    </p>

                    <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                        Weather Information,
                        <span className="block text-sky-400">
                            Made Simple
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        Our Weather App helps you explore current weather
                        conditions and hourly forecasts for cities around
                        the world through a simple, responsive interface.
                    </p>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
                            Why Use Our App?
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            Weather at a Glance
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                            Find useful weather information in one convenient place.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-3xl">
                                🌡️
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-slate-900">
                                Current Weather
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                View temperature, feels-like temperature,
                                humidity, precipitation, and wind conditions.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-3xl">
                                🕒
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-slate-900">
                                Hourly Forecast
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                Explore upcoming hourly temperatures and
                                forecast details to help plan your day.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
                                🌍
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-slate-900">
                                City Search
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                Search supported cities and retrieve weather
                                information using their geographical coordinates.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 p-8 text-white sm:p-12">
                    <p className="text-sm font-bold uppercase tracking-widest text-sky-400">
                        Our Data Source
                    </p>

                    <h2 className="mt-4 text-3xl font-extrabold">
                        Powered by Open-Meteo
                    </h2>

                    <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                        This application uses the Open-Meteo geocoding API
                        to find cities and the weather forecast API to
                        retrieve current conditions and hourly forecast data.
                    </p>

                    <a
                        href="https://open-meteo.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex rounded-xl bg-sky-500 px-6 py-3 font-bold text-white transition hover:bg-sky-400"
                    >
                        Visit Open-Meteo
                    </a>
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/#weather-dashboard"
                        className="inline-flex rounded-xl bg-sky-600 px-7 py-3 font-bold text-white transition hover:bg-sky-700"
                    >
                        Explore Weather Dashboard
                    </Link>
                </div>
            </section>
        </main>
    );
}
