
var showCurrentTime = function(){
    var noon = 12;
    var time = document.getElementById("indextime");

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var meridian = "am";

    if(hours >= noon){
        meridian = "pm";
    }

    if(hours > noon){
        hours = hours - 12;
    }
    // Set Mintues 
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    // Putting clock together
    var clockTime = hours + ":" + minutes + " " + meridian;

    time.innerText = clockTime;
};

var showDayOfTheWeek = function(){
    let currentDate = new Date();
    let  dayOfTheWeek = currentDate.getDay();
    let indexDay = document.getElementById("indexday")
    if(dayOfTheWeek === 0 ){
        indexDay.innerHTML = "Sunday";
    } else if( dayOfTheWeek === 1){
        indexDay.innerHTML = "Monday";
    } else if( dayOfTheWeek === 2){
        indexDay.innerHTML = "Tuesday";
    } else if( dayOfTheWeek === 3){
        indexDay.innerHTML = "Wednesday";
    } else if( dayOfTheWeek === 4){
        indexDay.innerHTML = "Thursday";
    } else if( dayOfTheWeek === 5){
        indexDay.innerHTML = "Friday";
    }else{
        indexDay.innerHTML = "Saturday";
    }
}

var showMonth = function(){
    let currentDate = new Date();
    let month = currentDate.getMonth();
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();
    var dateHtml = document.getElementById("indexdate");
    var indexMonth = null;

    if(month === 0){
      indexMonth = "January"
    } else if(month === 1){
      indexMonth = "February"
    } else if(month === 2){
        indexMonth = "March"
    } else if(month === 3){
        indexMonth = "April"
    } else if(month === 4){
        indexMonth = "May"
    } else if(month === 5){
        indexMonth = "June"
    } else if(month === 6){
        indexMonth = "July"
    } else if(month === 7){
        indexMonth = "August"
    } else if(month === 8){
        indexMonth = "September"
    } else if(month === 9){
        indexMonth = "October"
    } else if(month === 10){
        indexMonth = "November"
    } else {
        indexMonth = "December"
    }
    dateHtml.innerText = `${indexMonth} ${day} ${year}`
}
function dayRefresh(){
    showCurrentTime();
    showDayOfTheWeek();
    showMonth();
}
showCurrentTime();
showDayOfTheWeek();
showMonth();
setInterval(dayRefresh,10000);

// Weather Api Load on Screen
window.addEventListener("load", () => {
    let long, lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=a4087264ee8b438d91cf72bc5e2b9dcf`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const apiLog = data.data[0];
                const location = apiLog.city_name;
                const stateLetters = apiLog.state_code;
                let temp = apiLog.temp;
                const weatherDescription = apiLog.weather.description;
                temp = converstionToF(temp);
                console.log(temp,location,stateLetters,weatherDescription);
            });
     
        });
    } 
    // Function For Conversion Of C To F Weather
    var converstionToF = deg => Math.round((deg * 9/5) + 32 - 4);

    // Function For Setting Dom according to Weather
    
    var weatherUi = (degree, city, image, state, description) => {
        // Dom Interaction Variables 
        degreeHtml = document.getElementById("indexclimate");
        cityHtml = document.getElementById("indexcity");
        image = document.getElementById("indexweatherimg");
        descriptionHtml = document.getElementById("index-weather-title");
        degree = null;
        city = null;
        image = null;
        state = null;
        description = null;
        
        cityHtml.innerText = `${city}, ${state}`;

        if()
        

    };
});
