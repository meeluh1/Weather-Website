const apiKey = "a9bfba31532cdd6c81ee2dbdc15f8f59"; 

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.innerHTML = "⚠️ Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const temp = data.main.temp;
    const humidity = data.main.humidity;

    resultDiv.innerHTML = `
      <p>🌡️ Temperature: ${temp}°C</p>
      <p>💧 Humidity: ${humidity}%</p>
    `;
  } catch (err) {
    resultDiv.innerHTML = `❌ Error: ${err.message}`;
  }
}
