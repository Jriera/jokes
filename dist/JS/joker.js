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
/* Dues url per les API d'acudits */
const anotherUrl = "https://geek-jokes.sameerkumar.website/api?format=json";
const url = "https://icanhazdadjoke.com/";
const getJoke = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });
        /* captura de la part relevant de la resposta de la API */
        const data = yield response.json();
        const joke = data.joke;
        return joke;
    }
    catch (error) {
        throw new Error(`Couldn't fetch joke ${error}`);
    }
});
/* Definicio dels elements de HTML per utilitzarlos a TS */
const background = document.getElementById("background");
const button = document.getElementById("laugh");
const jokeDisplay = document.getElementById("joke");
const shape1 = document.getElementById("shape-1");
const shape2 = document.getElementById("shape-2");
/* Esdeveniment a executar en fer click al boto */
button.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const rdm = Math.random(); //generacio de numero aleatori per escollir aleatoriament l'API d'acudits
    if (rdm > 0.5) {
        jokeDisplay.innerHTML = yield getJoke(url);
        console.log("first URL");
    }
    else {
        jokeDisplay.innerHTML = yield getJoke(anotherUrl);
        console.log("second URL");
    }
    /* Al fer click al boto tambe es canvia de fonst i blob del background alternadament */
    if (shape1.style.display != "none") {
        shape1.style.display = "none";
        shape2.style.display = "block";
        background.classList.remove("bg-warning");
        background.classList.add("bg-info");
    }
    else {
        shape1.style.display = "block";
        shape2.style.display = "none";
        background.classList.remove("bg-dark");
        background.classList.add("bg-warning");
    }
}));
