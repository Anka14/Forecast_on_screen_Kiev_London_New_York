fetch(
    "http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=a3549e3136e7950d79901e88191124d2"
  )
  .then(function (resp) {
    return resp.json();
  }) //function will receive fetch's answer and make it in json//
  .then(function (data) {
    // this then
    console.log(data);
    document.querySelector(".name_of_city").textContent = data.name;
    document.querySelector(".weather_temp").innerHTML =
    Math.round(data.main.temp - 273) + "&deg";
    document.querySelector(".state_of_weather").textContent =
      data.weather[0]["description"];
      document.querySelector(".img2").src =
      "http://openweathermap.org/img/wn/" + data.weather[0]["icon"] + "@2x.png";
  });
  