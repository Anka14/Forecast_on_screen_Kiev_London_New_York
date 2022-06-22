fetch(
  "http://api.openweathermap.org/data/2.5/weather?id=703448&appid=a3549e3136e7950d79901e88191124d2"
)
  .then(function (resp) {
    return resp.json();
  }) //function will receive fetch's answer and make it in json//
  .then(function (data) {
    // this then
    console.log(data);
    document.querySelector(".package_name").textContent = data.name;
    document.querySelector(".tempreture").innerHTML =
      Math.round(data.main.temp - 273) + "&deg";
    document.querySelector(".weather_description").textContent =
      data.weather[0]["description"];
    document.querySelector(".img").src =
      "http://openweathermap.org/img/wn/" + data.weather[0]["icon"] + "@2x.png";
  });


