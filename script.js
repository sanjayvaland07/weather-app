const apiKey = "8daecec8916e4ca6844141823240507";

const inputbox = document.querySelector("#input-box");
const display = document.querySelector(".result");

let data = null

function start()
{
    getData(inputbox.value, show);
}

function getData(location,show)
{
    // console.log(location);
    display.innerHTML = `<h1 class='warning'>Loading...</h1>`;
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`)
    .then((res)=>res.json())
    .then((dt)=>{
        data = dt;
        display.innerHTML = "";
        show(dt);
    }).catch((error)=>{
        console.log(error);
        display.innerHTML = `<h3 class='warning'>Error : failed to fetch data</h3>`;
    })
    
}

function show(result)
{
    // console.log(result);
    // console.log(result.current.condition.icon);
    display.innerHTML = "";
    display.innerHTML += `<p>${result.location.name},${result.location.country}</p>`;
    display.innerHTML += `<div class='text-center'>
                            <img src=${result.current.condition.icon} alt="" width=200 height=200>
                            <p>${result.current.condition.text}</p>
                        </div>`;
    display.innerHTML += `<div class='footer'>
    <div><p><i class="fa-solid fa-temperature-three-quarters"><span class='label'> temperature</span></i></p><p>${result.current.temp_c}</p></div>
    <div><p><i class="fa-solid fa-wind"><span class='label'> Windspeed(kpm)</span></i></p></i><p>${result.current.wind_kph}</p></div>

    </div>`;
}