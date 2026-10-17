
"use client";

import { useCallback, useEffect, useState } from "react";
import {
    getWeather,
    getWeatherDescription,
    searchCity,
} from "../lib/weather";

export default function WeatherDashboard({ searchRequest }) {
    const [cityInput, setCityInput] = useState("Dhaka");
    const [city, setCity] = useState(null);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const loadWeather = useCallback(async (cityName) => {
        const trimmedCity = cityName.trim();

        if (!trimmedCity) {
            setError("Please enter a city name.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const foundCity = await searchCity(trimmedCity);

            const weatherData = await getWeather(
                foundCity.latitude,
                foundCity.longitude
            );

            setCity(foundCity);
            setWeather(weatherData);
            setCityInput(foundCity.name);
        } catch (err) {
            setError(err.message || "Unable to fetch weather data.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!searchRequest?.city) return;

        setCityInput(searchRequest.city);
        loadWeather(searchRequest.city);
    }, [searchRequest, loadWeather]);

    useEffect(() => {
        loadWeather("Dhaka");
    }, [loadWeather]);

    async function handleSearch(event) {
        event.preventDefault();
        await loadWeather(cityInput);
    }

    const current = weather?.current;
    const hourly = weather?.hourly;

    const currentHourIndex = hourly
        ? hourly.time.findIndex((time) => time >= current.time)
        : 0;

    const forecastStart = Math.max(0, currentHourIndex);

    return (
        <section
            id="weather-dashboard"
            className="scroll-mt-24 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-600">
                        Live Weather Dashboard
                    </p>

                    <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-5xl">
                        Your City, Your Forecast
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
                        Search for a city to explore its current weather and hourly
                        forecast using Open-Meteo data.
                    </p>
                </div>

                <form
                    id="weather-search-form"
                    onSubmit={handleSearch}
                    className="mx-auto mb-10 flex max-w-2xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row"
                >
                    <input
                        id="weather-city-input"
                        type="text"
                        value={cityInput}
                        onChange={(event) => setCityInput(event.target.value)}
                        placeholder="Enter a city, e.g. Dhaka"
                        aria-label="City name"
                        className="min-w-0 flex-1 rounded-xl px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-200"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="rounded-xl bg-sky-500 px-7 py-3 font-bold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Searching..." : "Search Weather"}
                    </button>
                </form>

                {error && (
                    <div
                        role="alert"
                        className="mx-auto mb-8 max-w-2xl rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm font-medium text-red-700"
                    >
                        {error}
                    </div>
                )}

                {loading && (
                    <p className="py-8 text-center font-medium text-sky-700">
                        Fetching weather data...
                    </p>
                )}

                {!weather && !loading && !error && (
                    <p className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">
                        Search for a city to load its weather.
                    </p>
                )}

                {weather && city && current && (
                    <>
                        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 p-6 text-white shadow-xl sm:p-10">
                            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                                <div>
                                    <p className="text-sm font-semibold text-blue-100">
                                        Current Weather
                                    </p>

                                    <h3 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                                        {city.name}
                                    </h3>

                                    <p className="mt-1 text-blue-100">
                                        {[city.admin1, city.country].filter(Boolean).join(", ")}
                                    </p>

                                    <p className="mt-6 text-lg font-semibold">
                                        {getWeatherDescription(current.weather_code)}
                                    </p>

                                    <p className="mt-2 text-sm text-blue-100">
                                        Feels like {current.apparent_temperature}°C
                                    </p>
                                </div>

                                <div className="md:text-right">
                                    <p className="text-7xl font-extrabold sm:text-8xl">
                                        {Math.round(current.temperature_2m)}°
                                    </p>

                                    <p className="mt-2 text-blue-100">Temperature in °C</p>

                                    <p className="mt-4 text-sm text-blue-100">
                                        Local time:{" "}
                                        {new Date(current.time).toLocaleString("en", {
                                            dateStyle: "medium",
                                            timeStyle: "short",
                                            timeZone: weather.timezone,
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <WeatherMetric
                                icon="💧"
                                label="Humidity"
                                value={`${current.relative_humidity_2m}%`}
                            />

                            <WeatherMetric
                                icon="💨"
                                label="Wind Speed"
                                value={`${current.wind_speed_10m} km/h`}
                            />

                            <WeatherMetric
                                icon="🌧️"
                                label="Precipitation"
                                value={`${current.precipitation} mm`}
                            />

                            <WeatherMetric
                                icon="🧭"
                                label="Wind Direction"
                                value={`${current.wind_direction_10m}°`}
                            />
                        </div>

                        <section className="mt-10">
                            <div className="mb-5">
                                <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
                                    Next Hours
                                </p>

                                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                                    Hourly Forecast
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                                {hourly.time
                                    .slice(forecastStart, forecastStart + 12)
                                    .map((time, index) => {
                                        const hourIndex = forecastStart + index;
                                        const code = hourly.weather_code[hourIndex];

                                        return (
                                            <article
                                                key={time}
                                                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                                            >
                                                <p className="text-sm font-semibold text-slate-500">
                                                    {new Date(time).toLocaleTimeString("en", {
                                                        hour: "numeric",
                                                        hour12: true,
                                                        timeZone: weather.timezone,
                                                    })}
                                                </p>

                                                <p className="my-4 text-2xl">
                                                    {getWeatherIcon(code)}
                                                </p>

                                                <p className="text-2xl font-extrabold text-slate-900">
                                                    {Math.round(hourly.temperature_2m[hourIndex])}°
                                                </p>

                                                <p className="mt-2 text-xs leading-5 text-slate-500">
                                                    {getWeatherDescription(code)}
                                                </p>

                                                <p className="mt-3 text-xs text-sky-700">
                                                    Humidity: {hourly.relative_humidity_2m[hourIndex]}%
                                                </p>

                                                <p className="mt-1 text-xs text-slate-500">
                                                    Rain chance:{" "}
                                                    {hourly.precipitation_probability[hourIndex] ?? 0}%
                                                </p>
                                            </article>
                                        );
                                    })}
                            </div>
                        </section>

                        <p className="mt-8 text-center text-xs text-slate-400">
                            Weather data provided by Open-Meteo.
                        </p>
                    </>
                )}
            </div>
        </section>
    );
}

function WeatherMetric({ icon, label, value }) {
    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-2xl">
                    {icon}
                </span>

                <div>
                    <p className="text-sm text-slate-500">{label}</p>
                    <p className="mt-1 text-xl font-extrabold text-slate-900">
                        {value}
                    </p>
                </div>
            </div>
        </article>
    );
}

function getWeatherIcon(code) {
    if (code === 0) return "☀️";
    if ([1, 2].includes(code)) return "🌤️";
    if ([3, 45, 48].includes(code)) return "☁️";

    if (
        [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)
    ) {
        return "🌧️";
    }

    if ([71, 73, 75, 77, 85, 86].includes(code)) {
        return "❄️";
    }

    return "⛈️";
}
