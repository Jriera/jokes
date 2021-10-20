


const weatherApi:string = `https://api.openweathermap.org/data/2.5/weather?lat=41.374853585024944&lon=2.1771399221062953&appid=b9f0bef736652c8d69b92419eab7fb57&units=metric`

const getTemperature = async (url:string):Promise<string> =>{
  try {
    const response = await fetch(url, {
      method: 'GET', 
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    const temp:string =data.main.temp;
    return temp;
  } catch (error) {
     throw new Error(`Couldn't fetch weather ${error}`)
  }
}
   
    

const getWeather = async (url:string):Promise<string> =>{
    try {
      const response = await fetch(url, {
        method: 'GET', 
        headers: {
          'Accept': 'application/json'
        }
      });
      const data = await response.json();
      const weather:string = await data.weather[0].icon;
      return weather;
    } catch (error) {
       throw new Error(`Couldn't fetch weather ${error}`)
    }
  }
      
     

  const tempreatureDisplay = async () =>{
        const tempHolder:HTMLElement = document.getElementById('temperature') as HTMLElement;
        const temp = await getTemperature(weatherApi)
        tempHolder.innerHTML=`${temp} <sup>ºC</sup>`; 
  }
getTemperature(weatherApi);

    const displayWeather = async () =>{
        const icon = await getWeather(weatherApi);
        const weatherImg:HTMLImageElement = document.getElementById("weather") as HTMLImageElement
        weatherImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
    }
    
displayWeather();
tempreatureDisplay();