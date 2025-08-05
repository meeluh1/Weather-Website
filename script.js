const apiKey = "a9bfba31532cdd6c81ee2dbdc15f8f59"; 



  function setWeatherBackground(condition) {
  const body = document.body;
  const cond = condition.toLowerCase();
  console.log("Setting background for:", cond);

  switch (cond) {
    case "clear":
      body.style.backgroundImage = "url('images/clear.jpg')";
      break;
    case "clouds":
      body.style.backgroundImage = "url('images/cloudy.jpg')";
      break;
    case "rain":
      body.style.backgroundImage = "url('images/rain.jpg')";
      break;
    case "snow":
      body.style.backgroundImage = "url('images/snow.jpg')";
      break;
    default:
      body.style.backgroundImage = "url('images/default.jpg')";
  }
}
  
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("result");
 
  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const condition = data.weather[0].main;

    setWeatherBackground(condition);

    resultDiv.innerHTML = `
      <p>  ${temp}°C</p>
      <p>  ${condition}</p>
      <p> Humidity: ${humidity}%</p>
    `;
  } catch (err) {
    resultDiv.innerHTML = `❌ Error: ${err.message}`;
  }
}
