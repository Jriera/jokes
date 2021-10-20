

const timeStamp = ():Date =>{
    const current = new Date();
    return current;
}

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


let reportJokes:JokeEval[]=[];
    
    

const angryFace:HTMLImageElement = document.getElementById('angry-face') as HTMLImageElement
const normalFace:HTMLImageElement = document.getElementById('no-care-face') as HTMLImageElement
const funFace:HTMLImageElement = document.getElementById('fun-face') as HTMLImageElement;

 
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

