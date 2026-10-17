
import Link from "next/link";

export const metadata = {
    title: "Services",
    description:
        "Explore current weather, hourly forecasts, city search, humidity, and wind information.",
};

const services = [
    {
        icon: "🌡️",
        title: "Current Weather",
        description:
            "View current temperature, feels-like temperature, humidity, precipitation, and wind conditions for a searched city.",
        number: "01",
    },
    {
        icon: "🕒",
        title: "Hourly Forecast",
        description:
            "Explore upcoming hourly temperatures and weather conditions to help you plan your daily activities.",
        number: "02",
    },
    {
        icon: "🔎",
        title: "City Search",
        description:
            "Search supported cities around the world and retrieve weather information using their geographical coordinates.",
        number: "03",
    },
    {
        icon: "💧",
        title: "Humidity Information",
        description:
            "Check relative humidity levels to better understand the moisture in the air.",
        number: "04",
    },
    {
        icon: "💨",
        title: "Wind Details",
        description:
            "Explore wind speed and wind direction provided by the weather API.",
        number: "05",
    },
    {
        icon: "📱",
        title: "Responsive Design",
        description:
            "Use the weather dashboard on desktop computers, tablets, and mobile devices.",
        number: "06",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 px-4 py-20 text-center text-white sm:px-6 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
                        Our Services
                    </p>

                    <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                        Understand the Weather
                        <span className="block text-sky-400">
                            with Confidence
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        Explore current conditions, search for cities, and
                        discover hourly forecasts through one simple dashboard.
                    </p>

                    <Link
                        href="/#weather-dashboard"
                        className="mt-8 inline-flex rounded-xl bg-sky-500 px-7 py-3 font-bold text-white transition hover:bg-sky-400"
                    >
                        Explore Weather Dashboard
                    </Link>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10">
                        <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
                            What We Offer
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            Explore Our Features
                        </h2>

                        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                            Our application brings useful weather information
                            together in an accessible and easy-to-use interface.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <article
                                key={service.number}
                                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-3xl transition group-hover:bg-sky-100">
                                        {service.icon}
                                    </div>

                                    <span className="text-sm font-bold text-slate-300">
                                        {service.number}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-slate-900">
                                    {service.title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    {service.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl rounded-3xl bg-sky-100 p-8 text-center sm:p-12">
                    <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                        Ready to Check the Weather?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
                        Search for your city and explore the available weather
                        information using our dashboard.
                    </p>

                    <Link
                        href="/#weather-dashboard"
                        className="mt-7 inline-flex rounded-xl bg-sky-600 px-7 py-3 font-bold text-white transition hover:bg-sky-700"
                    >
                        Check Weather Now
                    </Link>
                </div>
            </section>
        </main>
    );
}
