console.log("script running");

// Fix these querySelectors so that they each select the correct element.
const JavaScriptTitle = document.querySelector("#JavaScript");
const pythonTile = document.querySelector("#Python");
const sqlTile = document.querySelector("#SQL");
const javaTile = document.querySelector("#Java");
const TypeScriptTile = document.querySelector("#TypeScript");
const csTile = document.querySelector("#CS");
const cs2Tile = document.querySelector("#CS2");
const cs3Tile = document.querySelector("#CS3");
const phpTile = document.querySelector("#PHP");
const numb_guess = document.querySelector("numb_guess");

console.log(JavaScriptTitle);
console.log(pythonTile);
console.log(sqlTile);
console.log(javaTile);
console.log(TypeScriptTile);
console.log(csTile);
console.log(cs2Tile);
console.log(cs3Tile);
console.log(phpTile);



// This grabs the id from the input field so that the js can access it as we run through if else statements. 

const inputField = document.querySelector("#guess");
//1. get answer from textbox --- Done
//2. check answer aginst languages
//3. show matching tile

inputField.addEventListener("change", e => {
  console.log("typed an answer");
  let answer = inputField.value;
  console.log(answer);
  if (answer.toLowerCase() === "javascript") {
    JavaScriptTitle.classList.remove("hidden");
  } else if (answer.toLowerCase() === "python") {
    pythonTile.classList.remove("hidden");
  } else if (answer.toLowerCase() === "sql") {
    sqlTile.classList.remove("hidden");
  } else if (answer.toLowerCase() === "java") {
    javaTile.classList.remove("hidden");
  } else if (answer.toLowerCase() === "typescript") {
    TypeScriptTile.classList.remove("hidden");
  } else if (answer.toLowerCase() === "c#") {
    csTile.classList.remove("hidden");
  } else if (answer.toLowerCase() === "c") {
    cs2Tile.classList.remove("hidden");
  } else if (answer.toLowerCase() === "c++") {
    cs3Tile.classList.remove("hidden");
  } else if (answer.toLowerCase() === "php") {
    phpTile.classList.remove("hidden");
  }
  inputField.value = "";
  
});



//The class list shows all of the classes on the englishTitle which is the "English id". The remove function takes away one of the classes on the hidden


//Attempting to capture correct guesses
/*let correct_guess = 0;
for (let i = 0; i < 9; i++) {
  if (answer = inputField.value) {
   correct_guess++; 
    
console.log("Correct answer count:" + correct_guess);
}
}

let coding_language = [JavaScriptTitle, pythonTile, sqlTile, javaTile, TypeScriptTile, csTile, cs2Tile, cs3Tile, phpTile];

let correct_answer = ["javascript", "python", "c", "c++", "c#", "typescript","php", "sql", "java"]; */



/*
for (i = 0; i <correct_answer.length; i++) {
  let numb = 0;
      numb++;
  numb_guess.innerHTML = ("Number of Guesses: "+ numb);
}
*/








