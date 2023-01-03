let date = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var list = []
document.getElementById("currentDay").innerHTML = `${days[date.getDay()]}`
document.getElementById("date").innerHTML = `${date.getDate()}`
document.getElementById("nextDay").innerHTML = `${days[(date.getDay()+1) % 7]}`
document.getElementById("thirdDay").innerHTML = `${days[(date.getDay()+2) % 7]}`
document.getElementById("monthName").innerHTML = `${months[date.getMonth()]} 2022`



const generateData=() => {
   getWeather(search.value);

}
var search = document.getElementById("searchInput")
search.addEventListener("keyup", generateData)
searchInput = search.value






async function getWeather(searchInput) {

   var apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=16c38487d88a455d882205628230101&q=${searchInput}&days=3`);
   var finalData = await apiResponse.json();
   list = finalData
   
   console.log(finalData);
   document.getElementById("location").innerHTML = `${finalData.location.name}`
   document.getElementById("location1").innerHTML = `${finalData.location.name}`
   document.getElementById("location2").innerHTML = `${finalData.location.name}`
   document.getElementById("icon1").setAttribute("src",`https:${finalData.current.condition.icon}`)
   document.getElementById("icon2").setAttribute("src",`https:${finalData.forecast.forecastday[1].day.condition.icon}`)
   document.getElementById("icon3").setAttribute("src",`https:${finalData.forecast.forecastday[2].day.condition.icon}`)
   document.getElementById("today-temp").innerHTML = `${finalData.current.temp_c}°C`
   document.getElementById("next-temp").innerHTML = `${finalData.forecast.forecastday[1].day.maxtemp_c}°C`
   document.getElementById("third-temp").innerHTML = `${finalData.forecast.forecastday[2].day.maxtemp_c}°C`
   document.getElementById("condition").innerHTML = `${finalData.current.condition.text}`
   document.getElementById("condition2").innerHTML = `${finalData.forecast.forecastday[1].day.condition.text}`
   document.getElementById("condition3").innerHTML = `${finalData.forecast.forecastday[1].day.condition.text}`
   document.getElementById("humidty").innerHTML = `${finalData.current.humidity}`
   document.getElementById("wind").innerHTML = `${finalData.current.wind_kph}` 
   document.getElementById("compass").innerHTML = `${finalData.current.wind_dir}`






    

}
getWeather("Alexandria")