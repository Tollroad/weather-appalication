const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "generate yours on rapid api website",
    "X-RapidAPI-Host": "generate yours on rapid api website",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log("data found");
      temp.innerHTML = response?.temp;
      feels_like.innerHTML = response?.feels_like;
      max_temp.innerHTML = response?.max_temp;
      min_temp.innerHTML = response?.min_temp;
      wind_speed.innerHTML = response?.wind_speed;
      wind_degrees.innerHTML = response?.wind_degrees;
      cloud_pct.innerHTML = response?.cloud_pct;
      humidity.innerHTML = response?.humidity;
      sunrise.innerHTML = response?.sunrise;
      sunset.innerHTML = response?.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Alwar");

const getWeatherShanghai = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hyderabad",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log("updated");
      temp1.innerHTML = response.temp;
      feels_like1.innerHTML = response.feels_like;
      max_temp1.innerHTML = response.max_temp;
      min_temp1.innerHTML = response.min_temp;
      wind_speed1.innerHTML = response.wind_speed;
      wind_degrees1.innerHTML = response.wind_degrees;
      cloud_pct1.innerHTML = response.cloud_pct;
      humidity1.innerHTML = response.humidity;
      sunrise1.innerHTML = response.sunrise;
      sunset1.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

const getWeatherdelhi = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log("updated");
      temp2.innerHTML = response.temp;
      feels_like2.innerHTML = response.feels_like;
      max_temp2.innerHTML = response.max_temp;
      min_temp2.innerHTML = response.min_temp;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees2.innerHTML = response.wind_degrees;
      cloud_pct2.innerHTML = response.cloud_pct;
      humidity2.innerHTML = response.humidity;
      sunrise2.innerHTML = response.sunrise;
      sunset2.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

const getWeatherJaipur = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=jaipur",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log("updated");
      temp3.innerHTML = response.temp;
      feels_like3.innerHTML = response.feels_like;
      max_temp3.innerHTML = response.max_temp;
      min_temp3.innerHTML = response.min_temp;
      wind_speed3.innerHTML = response.wind_speed;
      wind_degrees3.innerHTML = response.wind_degrees;
      cloud_pct3.innerHTML = response.cloud_pct;
      humidity3.innerHTML = response.humidity;
      sunrise3.innerHTML = response.sunrise;
      sunset3.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

const updateWeather = () => {
  getWeatherShanghai();
  getWeatherdelhi();
  getWeatherJaipur();
};

submitUpdate.addEventListener("click", ()=> {
    updateWeather();
})
