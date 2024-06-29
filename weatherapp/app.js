const apikey="bb7031c632b6ed2cf970df2f23ca6d26"
const apiurl="https://api.openweathermap.org/data/2.5/"
const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const searchtext=document.querySelector(".search input ")
const weatherIcon=document.querySelector(".weather img")
var weather;
async function checkWeather(city){
    const response = await fetch(apiurl+`weather?q=`+city+`&appid=`+apikey+`&units=metric`);
    if(response.status == 404){
        document.querySelector(".error p").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else{
        var data =await response.json();
        console.log(data);
        weather=data.weather[0].main; 
       //console.log(data.name);
       document.querySelector(".error p").style.display ="none";
       document.querySelector(".city").innerHTML =data.name;
       document.querySelector(".wind").innerHTML =data.wind.speed+`kmph`;
       document.querySelector(".humidity").innerHTML =data.main.humidity+`%`;
       document.querySelector(".temp").innerHTML =data.main.temp+`°c`;
       searchbox.value="";
        console.log(weather);
       searchtext.placeholder="Enter City Name"; //here we diretly use dot operator and attribute name 
       document.querySelector(".weather").style.display ="block"; //we use style as it is from style 
        switch(weather){
            case "clear sky"||"Clear":
                weatherIcon.src="images/clear.png";
                console.log("1");
                break;
            case "Haze"||"mist":
                weatherIcon.src="images/mist.png";
                console.log("2");
                break;
            case "Clouds":
                    weatherIcon.src="images/clouds.png";
                    console.log("3");
                    break;
            case "Drizzle":
                    weatherIcon.src="images/drizzle.png";
                    console.log("4");
                    break;
            case "Rain":
                    weatherIcon.src="images/rain.png";
                    console.log("5");
                    break;
            case "Snow":
                    weatherIcon.src="images/snow.png";
                    console.log("6");
                    break;
            default:
                weatherIcon.src="images/snow.png";
                    console.log("default");
        }
    }
    
}


searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
    
    
})
