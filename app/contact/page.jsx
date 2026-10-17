
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setSubmitted(false);
    }

    function handleSubmit(event) {
        event.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 px-4 py-20 text-center text-white sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
                        Contact Us
                    </p>

                    <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
                        Let&apos;s Get in Touch
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
                        Have a question, suggestion, or feedback about our
                        Weather App? We would love to hear from you.
                    </p>
                </div>
            </section>

            <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
                            Get in Touch
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                            We&apos;re Here to Help
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Use the form to share feedback or ask a question
                            about the weather information provided by this app.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                                <span className="text-2xl" aria-hidden="true">
                                    🌦️
                                </span>

                                <div>
                                    <h3 className="font-bold text-slate-900">
                                        Weather Information
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Weather forecasts are provided by Open-Meteo.
                                    </p>

                                    <a
                                        href="https://open-meteo.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-2 inline-block text-sm font-semibold text-sky-600 hover:text-sky-700"
                                    >
                                        Visit Open-Meteo
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                                <span className="text-2xl" aria-hidden="true">
                                    💬
                                </span>

                                <div>
                                    <h3 className="font-bold text-slate-900">
                                        Feedback & Suggestions
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Share ideas that could make this application
                                        more useful.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                        >
                            <h2 className="text-2xl font-extrabold text-slate-900">
                                Send Us a Message
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Fill in the fields below to prepare your message.
                            </p>

                            {submitted && (
                                <div
                                    role="status"
                                    className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800"
                                >
                                    Your form was submitted locally, but no message
                                    was sent. An email service or backend is needed
                                    to deliver it.
                                </div>
                            )}

                            <div className="mt-7 grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Full Name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                                    />
                                </div>
                            </div>

                            <div className="mt-5">
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What is your message about?"
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                                />
                            </div>

                            <div className="mt-5">
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-6 w-full rounded-xl bg-sky-600 px-6 py-3.5 font-bold text-white transition hover:bg-sky-700 sm:w-auto"
                            >
                                Submit Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-16 text-center sm:px-6">
                <p className="text-slate-600">
                    Want to check the weather instead?
                </p>

                <Link
                    href="/#weather-dashboard"
                    className="mt-4 inline-flex rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700"
                >
                    Go to Weather Dashboard
                </Link>
            </section>
        </main>
    );
}
