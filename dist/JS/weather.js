"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=41.374853585024944&lon=2.1771399221062953&appid=b9f0bef736652c8d69b92419eab7fb57&units=metric`;
const getTemperature = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = yield response.json();
        const temp = data.main.temp;
        return temp;
    }
    catch (error) {
        throw new Error(`Couldn't fetch weather ${error}`);
    }
});
const getWeather = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = yield response.json();
        const weather = yield data.weather[0].icon;
        return weather;
    }
    catch (error) {
        throw new Error(`Couldn't fetch weather ${error}`);
    }
});
const tempreatureDisplay = () => __awaiter(void 0, void 0, void 0, function* () {
    const tempHolder = document.getElementById('temperature');
    const temp = yield getTemperature(weatherApi);
    tempHolder.innerHTML = `${temp} <sup>ºC</sup>`;
});
getTemperature(weatherApi);
const displayWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    const icon = yield getWeather(weatherApi);
    const weatherImg = document.getElementById("weather");
    weatherImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
});
displayWeather();
tempreatureDisplay();
