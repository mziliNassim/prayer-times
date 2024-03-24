// DOM
let select = document.querySelector(".header-select");
select.addEventListener("change", () => handleSelelct());

// API Request 
// ===> Promis
// let handleSelelct;
// (handleSelelct = function () {
//   let city = select.value !== "Select a city" ? select.value : "Marrakech";
//   let cards = document.querySelector(".content-cards");
//   let url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=MA`;

//   document.querySelector(".content-header__city").innerHTML = city;
//   cards.innerHTML = '<div class="loding"></div>';
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       let { data: times } = data;
//       let timesExist = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

//       cards.innerHTML = "";
//       timesExist.map((ele) => {
//         cards.innerHTML += `
//           <div class="content-cards__card">
//             <h2 class="content-cards__card-title">${ele}</h2>
//             <div class="content-cards__card-body ${ele}">${times.timings[ele]}</div>
//           </div>
//         `;
//       });
//     })
//     .catch((err) => {
//       console.log("API Err : ", err);
//     });
// })();

// ===> Axios
let handleSelelct;
(handleSelelct = function () {
  let city = select.value !== "Select a city" ? select.value : "Marrakech";
  let cards = document.querySelector(".content-cards");
  let url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=MA`;

  document.querySelector(".content-header__city").innerHTML = city;
  cards.innerHTML = '<div class="loding"></div>';
  axios
    .get(url)
    .then((res) => {
      let { data: times } = res.data;
      let timesExist = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

      cards.innerHTML = "";
      timesExist.map((ele) => {
        cards.innerHTML += `
        <div class="content-cards__card">
          <h2 class="content-cards__card-title">${ele}</h2>
          <div class="content-cards__card-body ${ele}">${times.timings[ele]}</div>
        </div>
      `;
      });
    })
    .catch((err) => {
      console.log(err);
    });
})();

// set city in select options
(function setSelectOptons() {
  var citys = [
    "Agadir",
    "Al Hoceima",
    "Azilal",
    "Beni Mellal",
    "Ben Slimane",
    "Boulemane",
    "Casablanca",
    "Chaouen",
    "El Jadida",
    "El Kelaa des Sraghna",
    "Er Rachidia",
    "Essaouira",
    "Fes",
    "Figuig",
    "Guelmim",
    "Ifrane",
    "Kenitra",
    "Khemisset",
    "Khenifra",
    "Khouribga",
    "Laayoune",
    "Larache",
    "Marrakech",
    "Meknes",
    "Nador",
    "Ouarzazate",
    "Oujda",
    "Rabat-Sale",
    "Safi",
    "Settat",
    "Sidi Kacem",
    "Tangier",
    "Tan-Tan",
    "Taounate",
    "Taroudannt",
    "Tata",
    "Taza",
    "Tetouan",
    "Tiznit",
  ];

  for (var i = 0; i < citys.length; i++) {
    select.innerHTML += `
      <option value="${citys[i]}">${citys[i]}</option>
    `;
  }
})();

// set current date
(function setCurentDate() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dateUI = document.querySelector(".content-header__time .date");
  let currentDate = new Date();
  let currentYear = formaNum(currentDate.getFullYear());
  let currentMonth = formaNum(currentDate.getMonth() + 1);
  let currentDay = formaNum(currentDate.getDate());
  let Today = days[currentDate.getDay()];

  dateUI.innerHTML = `
    ${Today} - ${currentDay}/${currentMonth}/${currentYear}
  `;
})();

// set current time
(function setCurentTime() {
  let dateUI = document.querySelector(".content-header__time .time");
  setInterval(() => {
    let currentDate = new Date();
    let currentHour = formaNum(currentDate.getHours());
    let currentMin = formaNum(currentDate.getMinutes());
    let currentSec = formaNum(currentDate.getSeconds());

    dateUI.innerHTML = `
      ${currentHour}:${currentMin}:${currentSec}
    `;
  }, 1000);
})();

// single nums to multi num 7 -> 07
function formaNum(num) {
  return num < 10 ? `0${num}` : num;
}
