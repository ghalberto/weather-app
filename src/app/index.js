//Require fils
require('./index.css')

const {weather} = require('./weather');
const {UI} = require('./ui');


 
const ui = new UI();
const x = new weather('London','GB')




//Functions  and events
async function fetchWeather(){
     const data = await x.getWeather();
     console.log(data);
     ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click',(e)=>{ 
  const city =  document.getElementById('city').value;
  const countryCode =  document.getElementById('countryCode').value
  x.changeLocation(city,countryCode);
  fetchWeather();
  
  
  e.preventDefault();
});
document.addEventListener('DOMContentLoaded', fetchWeather);

