
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: {
    default: "Weather App | Live Weather Forecast",
    template: "%s | Weather App",
  },
  description:
    "Explore current weather, temperature, humidity, wind speed, and hourly forecasts for cities around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 antialiased">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
