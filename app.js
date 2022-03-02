let API_KEY = `b7886c754d5e4912e9c7413b226f6c90`;

const searchTemperature = ()=>{
  let city =  document.getElementById('city-name').value;
    console.log(city)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url)
    fetch(url)
    .then(res=> res.json())
    .then(data=> displayApi(data))
}

const setInnertext = (id,text)=>{
    document.getElementById(id).innerText = text;
}
const displayApi = (temperature)=>{
console.log(temperature)
setInnertext('city',temperature.name)
}

