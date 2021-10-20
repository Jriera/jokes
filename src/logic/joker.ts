
      const anotherUrl:string= 'https://geek-jokes.sameerkumar.website/api?format=json';
      const url:string = 'https://icanhazdadjoke.com/'

      const getJoke = async (url:string):Promise<string> =>{
        try {
          const response:Response = await fetch(url, {
            method: 'GET', 
            headers: {
              'Accept': 'application/json'
            }
          });
          const data = await response.json();
          const joke:string = data.joke;
          return joke;
        } catch (error) {
           throw new Error(`Couldn't fetch joke ${error}`)
        }
      }
        
      const background:HTMLElement = document.getElementById('background') as HTMLElement;
      const button:HTMLButtonElement = document.getElementById('laugh') as HTMLButtonElement;
      const jokeDisplay:HTMLElement = document.getElementById('joke') as HTMLElement ;
      const shape1:HTMLElement = document.getElementById('shape-1') as HTMLElement;
      const shape2:HTMLElement = document.getElementById('shape-2') as HTMLElement;
      
      button.addEventListener('click',async () =>{
          const rdm:number=Math.random()
          if(rdm>0.5){ 
            jokeDisplay.innerHTML=await getJoke(url); 
            console.log('first URL')
          }
          else{
            jokeDisplay.innerHTML=await getJoke(anotherUrl);
            console.log('second URL')
          } 
          
          if (shape1.style.display!='none'){
            shape1.style.display='none';
            shape2.style.display='block';
            background.classList.remove('bg-warning')
            background.classList.add('bg-info')
          }

          else{
            shape1.style.display='block';
            shape2.style.display='none';
            background.classList.remove('bg-dark')
            background.classList.add('bg-warning')
            
          }

      })
            
          

          
         
      