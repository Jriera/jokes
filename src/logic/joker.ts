/* Dues url per les API d'acudits */
const anotherUrl: string =
  "https://geek-jokes.sameerkumar.website/api?format=json";
const url: string = "https://icanhazdadjoke.com/";


const getJoke = async (url: string): Promise<string> => {
  try {
    const response: Response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    /* captura de la part relevant de la resposta de la API */
    const data = await response.json();
    const joke: string = data.joke;
    return joke;
  } catch (error) {
    throw new Error(`Couldn't fetch joke ${error}`);
  }
};

/* Definicio dels elements de HTML per utilitzarlos a TS */
const background: HTMLElement = document.getElementById(
  "background"
) as HTMLElement;
const button: HTMLButtonElement = document.getElementById(
  "laugh"
) as HTMLButtonElement;
const jokeDisplay: HTMLElement = document.getElementById("joke") as HTMLElement;
const shape1: HTMLElement = document.getElementById("shape-1") as HTMLElement;
const shape2: HTMLElement = document.getElementById("shape-2") as HTMLElement;

/* Esdeveniment a executar en fer click al boto */
button.addEventListener("click", async () => {
  const rdm: number = Math.random(); //generacio de numero aleatori per escollir aleatoriament l'API d'acudits
  if (rdm > 0.5) {
    jokeDisplay.innerHTML = await getJoke(url);
    console.log("first URL");
  } else {
    jokeDisplay.innerHTML = await getJoke(anotherUrl);
    console.log("second URL");
  }

  /* Al fer click al boto tambe es canvia de fonst i blob del background alternadament */
  if (shape1.style.display != "none") {
    shape1.style.display = "none";
    shape2.style.display = "block";
    background.classList.remove("bg-warning");
    background.classList.add("bg-info");
  } else {
    shape1.style.display = "block";
    shape2.style.display = "none";
    background.classList.remove("bg-dark");
    background.classList.add("bg-warning");
  }
});
