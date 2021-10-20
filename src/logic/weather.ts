


const weatherApi:string = `https://api.openweathermap.org/data/2.5/weather?lat=41.374853585024944&lon=2.1771399221062953&appid=b9f0bef736652c8d69b92419eab7fb57&units=metric`

/* funcio que captura la temperatura dins de la resposta
porporcionada per la API del temps */
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
   
    
/* La API del temps te definides unes icones per cada estat del temps.
el nom de la qual ve retornada dins de la reposta de la API.
Aquest nom de la icona es el que es caputra en aquesta funcio */
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
      
     
/* Aquesta funcio simplement insereix dins de l'element html la resposta de
la funcio de la temperatura. S'ha de tindre en compte que la resposta 
de la funcio de la temperatura es una Promise, per tant ha de ser cridada 
amb async/await */
  const tempreatureDisplay = async () =>{
        const tempHolder:HTMLElement = document.getElementById('temperature') as HTMLElement;
        const temp = await getTemperature(weatherApi)
        tempHolder.innerHTML=`${temp} <sup>ºC</sup>`; 
  }

/* Funcio per obtenir el src de la imatge de la icona del temps
La resposta de la icona tambe es una Promise, per tant s'ha de
utilitzar async/await per poder utilitzarla */
    const displayWeather = async () =>{
        const icon = await getWeather(weatherApi);//nom de la icona
        const weatherImg:HTMLImageElement = document.getElementById("weather") as HTMLImageElement //img HTML tag que retornara la imatge

        //Aquesta es la url base de la  src de totes les icones. Inserint el nom de la icona de la resposta
        //en la url i fent servir la url com a img.src podem retornar la imatge al navegador
        weatherImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png` 
    }
    
displayWeather();
tempreatureDisplay();