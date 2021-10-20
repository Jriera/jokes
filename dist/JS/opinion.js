"use strict";
const timeStamp = () => {
    const current = new Date();
    return current;
};
/* Es defineix una clase JokeEval per a cada evaluacio de l'acudit, generant un objecte amb
tres propietats: joke: Es l'acudit valortat, score:es la puntuacio donada, date: es la data i hora en que
es fa la evaluacio */
class JokeEval {
    constructor(joke, score, date) {
        this.joke = joke,
            this.score = score,
            this.date = date;
    }
}
/* reportJokes es l'array que conte cada una de les evaluacions */
let reportJokes = [];
/* Captura de cada una de les imatges que representen el feedback dels acudits */
const angryFace = document.getElementById('angry-face');
const normalFace = document.getElementById('no-care-face');
const funFace = document.getElementById('fun-face');
/* A cada click en cada element es genera un objecte JokeEval i s'enmagatzema a l'array reportJokes
A continuacio es retorna el contingut de l'array per consola  */
angryFace.addEventListener('click', () => {
    reportJokes.push(new JokeEval(jokeDisplay.innerHTML, 1, timeStamp()));
    console.log(reportJokes);
});
normalFace.addEventListener('click', () => {
    reportJokes.push(new JokeEval(jokeDisplay.innerHTML, 2, timeStamp()));
    console.log(reportJokes);
});
funFace.addEventListener('click', () => {
    reportJokes.push(new JokeEval(jokeDisplay.innerHTML, 3, timeStamp()));
    console.log(reportJokes);
});
