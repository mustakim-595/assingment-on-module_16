
const GEOCODING_API =
    "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_API =
    "https://api.open-meteo.com/v1/forecast";

// Search for a city and get its coordinates
export async function searchCity(city) {
    const cityName = city.trim();

    if (!cityName) {
        throw new Error("Please enter a city name.");
    }

    const params = new URLSearchParams({
        name: cityName,
        count: "1",
        language: "en",
        format: "json",
    });

    const response = await fetch(`${GEOCODING_API}?${params}`);

    if (!response.ok) {
        throw new Error("Unable to search for this city.");
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
        throw new Error("City not found. Please try another city.");
    }

    return data.results[0];
}

// Fetch real weather data using city coordinates
export async function getWeather(latitude, longitude) {
    const params = new URLSearchParams({
        latitude: String(latitude),
        longitude: String(longitude),
        current: [
            "temperature_2m",
            "relative_humidity_2m",
            "apparent_temperature",
            "is_day",
            "precipitation",
            "weather_code",
            "wind_speed_10m",
            "wind_direction_10m",
        ].join(","),
        hourly: [
            "temperature_2m",
            "relative_humidity_2m",
            "precipitation_probability",
            "weather_code",
            "wind_speed_10m",
        ].join(","),
        timezone: "auto",
        forecast_days: "2",
    });

    const response = await fetch(`${WEATHER_API}?${params}`);

    if (!response.ok) {
        throw new Error("Unable to fetch weather data. Please try again.");
    }

    return response.json();
}

// Convert Open-Meteo weather codes into readable descriptions
export function getWeatherDescription(code) {
    if (code === 0) return "Clear sky";
    if (code === 1) return "Mainly clear";
    if (code === 2) return "Partly cloudy";
    if (code === 3) return "Overcast";
    if ([45, 48].includes(code)) return "Foggy";
    if ([51, 53, 55].includes(code)) return "Drizzle";
    if ([56, 57].includes(code)) return "Freezing drizzle";
    if ([61, 63, 65].includes(code)) return "Rain";
    if ([66, 67].includes(code)) return "Freezing rain";
    if ([71, 73, 75, 77].includes(code)) return "Snow";
    if ([80, 81, 82].includes(code)) return "Rain showers";
    if ([85, 86].includes(code)) return "Snow showers";
    if (code === 95) return "Thunderstorm";
    if ([96, 99].includes(code)) return "Thunderstorm with hail";

    return "Weather information unavailable";
}
