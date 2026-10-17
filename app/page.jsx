
"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import WeatherDashboard from "./components/weaherDashboard";


export default function HomePage() {
  const [searchRequest, setSearchRequest] = useState({
    city: "",
    id: 0,
  });

  function handleCitySearch(city) {
    setSearchRequest((previous) => ({
      city,
      id: previous.id + 1,
    }));
  }

  return (
    <main>
      <Hero onSearch={handleCitySearch} />

      <WeatherDashboard searchRequest={searchRequest} />
    </main>
  );
}
