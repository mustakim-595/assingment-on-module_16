
"use client";

import { useState } from "react";

export default function Hero({ onSearch }) {
    const [city, setCity] = useState("Dhaka");

    function handleSubmit(event) {
        event.preventDefault();

        const cityName = city.trim();

        if (!cityName) return;

        onSearch(cityName);

        document
            .getElementById("weather-dashboard")
            ?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-sky-200">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Real-Time Weather Updates
                    </span>

                    <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                        Understand the
                        <span className="block text-sky-400">
                            Weather Around You
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                        Discover current temperatures, humidity, wind speed, and hourly
                        forecasts for cities around the world—all in one place.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur sm:flex-row"
                    >
                        <input
                            type="text"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                            placeholder="Enter your city name"
                            aria-label="Search weather by city"
                            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30"
                        />

                        <button
                            type="submit"
                            className="rounded-xl bg-sky-500 px-6 py-3 font-bold text-white transition hover:bg-sky-400"
                        >
                            Search Weather
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-slate-400">
                        Try searching for Dhaka, London, Tokyo, or New York.
                    </p>
                </div>

                <div className="mx-auto w-full max-w-md">
                    <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-300">
                                    Your Weather Companion
                                </p>
                                <p className="mt-1 text-xl font-bold">Explore the forecast</p>
                            </div>

                            <span className="text-4xl" aria-hidden="true">
                                🌤️
                            </span>
                        </div>

                        <div className="my-8 rounded-2xl bg-gradient-to-br from-sky-400/20 to-blue-500/10 p-6 text-center">
                            <span className="text-7xl" aria-hidden="true">
                                🌍
                            </span>

                            <h2 className="mt-4 text-2xl font-bold">
                                Weather Worldwide
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-300">
                                Search any supported city to view its live weather data.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-2xl bg-white/5 p-4">
                                <span className="text-2xl" aria-hidden="true">
                                    🌡️
                                </span>
                                <p className="mt-2 font-semibold">Temperature</p>
                                <p className="mt-1 text-sm text-slate-400">
                                    Current conditions
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/5 p-4">
                                <span className="text-2xl" aria-hidden="true">
                                    🕒
                                </span>
                                <p className="mt-2 font-semibold">Hourly Forecast</p>
                                <p className="mt-1 text-sm text-slate-400">
                                    Plan your day
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
