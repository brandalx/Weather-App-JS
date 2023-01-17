export const doApi = (_city) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${_city}&appid=3069ae2718e40f8dc1998b7250e16f10&units=metric`;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      updateInfoUi(data);
    })
    .catch((err) => {
      console.log(err);
      alert("There is problem occured");
    });
};

const updateInfoUi = (json) => {
  document.querySelector(
    "#id_img"
  ).src = `http://openweathermap.org/img/w/${json.weather[0].icon}.png`;
  document.querySelector("#id_town").innerHTML = json.name;
  document.querySelector("#id_condition").innerHTML = json.weather[0].main;
  document.querySelector("#id_temp").innerHTML = json.main.feels_like;
  document.querySelector("#id_wind").innerHTML = json.wind.speed;
};
