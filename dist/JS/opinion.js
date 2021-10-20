"use strict";
const timeStamp = () => {
    const current = new Date();
    return current;
};
class JokeEval {
    constructor(joke, score, date) {
        this.joke = joke,
            this.score = score,
            this.date = date;
    }
}
let reportJokes = [];
const angryFace = document.getElementById('angry-face');
const normalFace = document.getElementById('no-care-face');
const funFace = document.getElementById('fun-face');
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
