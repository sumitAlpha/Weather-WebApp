// //elemnts feteching from html

// const userTab=document.querySelector("[data-userWeather]");
// const searchTab=document.querySelector("[data-searchWeather]");
// const userContainer=document.querySelector(".weather-container");
// const grantAccessContainer=document.querySelector(".grant-location-container");
// const searchForm=document.querySelector("[data-searchForm]");
// const loadingScreen=document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".user-info-container");
// //initally 
// let currentTab=userTab;
// const API_KEY="a58a5418690bd434fe5ad7c1329fb79f";
// currentTab.classList.add("current-tab");
// getfromsessionStorage();


// function switchTab(clickedTab){
//     if(clickedTab!=currentTab){
//         currentTab.classList.remove("current-tab");
//       currentTab=clickedTab;
//       currentTab.classList.add("current-tab");
//      //kya search form wala container is invisible, if yes then make it visible
//       if(!searchForm.classList.contains("active")){
//         grantAccessContainer.classList.remove("active");
//         userInfoContainer.classList.remove("active");
//         searchForm.classList.add("active");
//       }
//       else{
//         //search weather wale tab par tha ab your weather wale tab pr jana hai
//         searchForm.classList.remove("active");
//         userInfoContainer.classList.remove("active");
//         getfromsessionStorage();

//       }
//     }
// }
// userTab.addEventListener("click",()=>{
//     //pass usertab as input paramter
//     switchTab(userTab);
// });

// searchTab.addEventListener("click",()=>{
//      //pass searchTab as input paramter
//     switchTab(searchTab);
// });

// //check if the coordinates are present or not
// function  getfromsessionStorage(){
//     const localCoordinates=sessionStorage.getItem("user-coordinates");
//     //agr nhi mila coordinates
//     if(!localCoordinates){
//         grantAccessContainer.classList.add("active");
//     }
//     else{
//         //agr mil gaya tha toh uss coordinates se API call maro
//         const coordinates=JSON.parse(localCoordinates);
//         fetchUserWeatherInfo(coordinates);
//     }
// }
// async function fetchUserWeatherInfo(coordinates){
//     const {lat,lon}= coordinates;
//     //grantAccessContainer ko invisible krwana hoga
//     grantAccessContainer.classList.remive("active");
//     //maker loader visible
//     loadingScreen.classList.add("active");
//     //API CALL 
//     try{
//      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
//            const data=await response.json();
//            //loader ko hata do
//            loadingScreen.classList.remove("active");

//            //user infocontainer ko visible krwa do
//            userInfoContainer.classList.add("active");

//            //render krna hoga laya hua data api call se
//             renderWeatherInfo(data);
//     }
//     catch (err){
//         loadingScreen.classList.remove("active");
//     }
// }

// function renderWeatherInfo(WeatherInfo){
//     //firstly we have to fetch the elements
//     const cityName=document.querySelector("[data-cityName]");
//     const countryIcon=document.querySelector("[data-countryIcon]");
//     const desc=document.querySelector("[data-weatherDesc]");
//     const weatherIcon=document.querySelector("[data-weatherIcon]");
//     const temp=document.querySelector("[data-temp]");
//     const windspeed=document.querySelector("[data-windspeed]");
//     const humidity=document.querySelector("[data-humidity]");
//     const cloudiness=document.querySelector("[data-clouding]");

//     //fetch values from weatherInfo object and put it in UI elements
//     cityName.innerText=WeatherInfo?.name;
//     countryIcon.src=`https://flagcdn.com/144x108/${WeatherInfo?.sys?.country.toLowerCase()}.png`
//     desc.innerText=WeatherInfo?.weather?.[0]?.description;
//     weatherIcon.src=`http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//     temp.innerText=WeatherInfo?.main?.temp;
//     windspeed.innerText=WeatherInfo?.wind?.speed;
//     humidity.innerText=WeatherInfo?.main?.humidity;
//     cloudiness.innerText=WeatherInfo?.clouds?.all;
// }

//  function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else{
//         alert("No geolocation Support available"); 
//     }
//  }

//  function showPosition(position) {
//     const userCoordinates= {
//         lat:position.coords.latitude,
//          lon:position.coords.longitude
//     }

//     sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
//     fetchUserWeatherInfo(userCoordinates);
//  }
// //making of grant Access button
// const grantAccessButton=document.querySelector("[data-grantAccess]");

// grantAccessButton.addEventListener("click",getLocation);

// //searchinput wala element
// const searchInput=document.querySelector("[ data-searchInput]");
// searchForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let cityName =searchInput.value;
//     if(cityName==="")
//     return;

//     else{
//         fetchSearchWeatherInfo(cityName);
//     }
// });


//  async function fetchSearchWeatherInfo(cityName){
//         loadingScreen.classList.add("active");
//         grantAccessContainer.classList.remove("active");
//         userInfoContainer.classList.remove("active");
//     try{
//         const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//         const data=await response.json();
//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//     }
//     catch(err){
     
//     }

//  }
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//initially vairables need????

let oldTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
oldTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(newTab) {
    if(newTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            //kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //main pehle search wale tab pr tha, ab your weather tab visible karna h 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
            //for coordinates, if we haved saved them there.
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(searchTab);
});

//check if cordinates are already present in session storage
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
        //agar local coordinates nahi mile
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
    // make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const  data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        //HW

    }

}

function renderWeatherInfo(weatherInfo) {
    //fistly, we have to fetech the elements.

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °c`;
    windspeed.innerText = `${weatherInfo?.wind?.speed}m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText =`${ weatherInfo?.clouds?.all}%`;

}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //HW - show an alert for no gelolocation support available
    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        //hW
    }
}
 


     
  




