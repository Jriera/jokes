

const timeStamp = ():Date =>{ //funcio que captura la data i hora del moment en que s'executa
    const current = new Date();
    return current;
}

/* Es defineix una clase JokeEval per a cada evaluacio de l'acudit, generant un objecte amb
tres propietats: joke: Es l'acudit valortat, score:es la puntuacio donada, date: es la data i hora en que 
es fa la evaluacio */
class JokeEval{
    joke:string;
    score:number;
    date:Date;
    constructor(joke:string,score:number,date:Date){
        this.joke=joke,
        this.score=score,
        this.date=date

    }
}

/* reportJokes es l'array que conte cada una de les evaluacions */
let reportJokes:JokeEval[]=[];
    
    
/* Captura de cada una de les imatges que representen el feedback dels acudits */
const angryFace:HTMLImageElement = document.getElementById('angry-face') as HTMLImageElement
const normalFace:HTMLImageElement = document.getElementById('no-care-face') as HTMLImageElement
const funFace:HTMLImageElement = document.getElementById('fun-face') as HTMLImageElement;

/* A cada click en cada element es genera un objecte JokeEval i s'enmagatzema a l'array reportJokes
A continuacio es retorna el contingut de l'array per consola  */
angryFace.addEventListener('click',()=>{
    reportJokes.push(new JokeEval(jokeDisplay.innerHTML,1,timeStamp()));
    console.log(reportJokes);
})
normalFace.addEventListener('click',()=>{
    reportJokes.push(new JokeEval(jokeDisplay.innerHTML,2,timeStamp()));
    console.log(reportJokes);
})
funFace.addEventListener('click',()=>{
    reportJokes.push(new JokeEval(jokeDisplay.innerHTML,3,timeStamp()));
    console.log(reportJokes);
})

