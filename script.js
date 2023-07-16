// global variables
var userInput = document.getElementById("search");
var button = document.getElementById("citySearch");
var cards = document.querySelector(".cards");



var CurrentweatherApi = 'https://api.openweathermap.org/data/2.5/weather?q=austin&appid=ea306fd2bc8803aec16d1d339b6b87d6'

var forecastApi = 'https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=ea306fd2bc8803aec16d1d339b6b87d6'

// capture the value of the input for the city search
// when the search button is clicked we need to fetch the current weather data and the forecast data.

function captureUserInput() {

    runCurrentWeather(userInput.value)
    runForecast(userInput.value)
    saveSearchHis()
    renderSearchHistory()
}



// function runCurrentWeather(city) {

//     // once the weather data is returned we will need to parse through the data and add the contents that are needed to the HTML
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=ea306fd2bc8803aec16d1d339b6b87d6')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             populateCurrentWeather(data)
//         });
// }

// function runForecast(city) {
//     // the same goes for the forecast api
//     fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=ea306fd2bc8803aec16d1d339b6b87d6')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log("fetch 2", data);
//             populateFiveDay(data)
//         });

// }


// button.addEventListener('click', captureUserInput)


// function populateFiveDay(data) {

//     console.log("Humidity:", data.list[1].main.humidity)

//     for (let i = 1; i < 6; i++) {
//         // Create card elements
//         var cardEl = document.createElement("div");
//         var dateEl = document.createElement("p");
//         var tempEl = document.createElement("p");
//         var humEl = document.createElement("p");
//         var imageEl = document.createElement("img")
//         // Give elements content
//         let multiply = data.list[i].dt * 1000
//         let dateA = new Date(multiply)
//         let dateConvert = dateA.toLocaleString().split(',')[0];
//         dateEl.textContent = dateConvert;
//         tempEl.textContent = "Temp: " + data.list[i].main.temp + "F"
//         humEl.textContent = "Humidity: " + data.list[i].main.humidity + "%"
        

//         // Add any attributes (optional)
//         cardEl.setAttribute("class", "card")
//         imageEl.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`)


//         // Append elements to the page
//         cardEl.append(dateEl, imageEl, tempEl, humEl)
//         cards.append(cardEl)

//     }


// }

// button.addEventListener('click', captureUserInput)

// function populateCurrentWeather(data) {
// console.log (data)
// for (let i = 0; i < 1; i++) {

//     // var currentEl = document.getElementById("current-date");
//     var dateEl = document.getElementById("current-date");
//     var tempEl = document.getElementById("current-temp");
//     var humEl = document.getElementById("current-hum");
//     var imageEl = document.getElementById("current-img")

//     let multiply = data.dt * 1000
//     let dateA = new Date(multiply)
//     let dateConvert = dateA.toLocaleString().split(',')[0];
//     dateEl.textContent = `Date: ${dateConvert}`;
//     tempEl.textContent = "Temp: " + data.main.temp + "F"
//     humEl.textContent = "Humidity: " + data.main.humidity + "%"

//     // currentEl.setAttribute("class", "cWeather")
//     imageEl.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)

//     //cWeather.append(currentEl)
//     // currentEl.append(dateEl, imageEl, tempEl, humEl)
//     // cWeather.append(currentEl)

// }


// }



// // having trouble targeting the city name info from the api data <--- this is the issue

// var saveSearchHis = function() {
//     var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || []
//     var city = userInput.value
//     searchHistory.push(city)
//     localStorage.setItem("searchHistory", JSON.stringify(searchHistory))
// }
// function renderSearchHistory() {
//     document.querySelector(".search").innerHTML=""
//     var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || []
//     for (i=0;i<searchHistory.length-1;i++) {
//         var cityButton = document.createElement("button")
//         cityButton.textContent = searchHistory[i]
//         document.querySelector(".search").append(cityButton)

//     }
// } 

// // we need to save the city information in local storage and create buttons on the page as search history
// // Second item in the array is changiing the search button name? <--- this is the issue
// localStorage.setItem("city", "Search")
// document.getElementById("citySearch").innerHTML = localStorage.getItem("city");

// console.log(localStorage)












// // save the city name in local storage





// // create a button for the city name











// // if those buttons are clicked it will need to run the api data all over again. 
// function runHistory() {
//     runCurrentWeather(city)
//     runForecast(city)
// }

