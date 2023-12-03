//Array for movies category
let movieArray = [
"harry potter",
"the conjuring",
'star wars',
'lord of the rings'
]

//Array for TV Category
let tvShowArray = [
 "breaking bad",
 "criminal minds",
 "how i met your mother",
 "greys anatomy"
]

let animalsArray = [
  "dog",
  "cat",
  "parrot",
  "skunk"
];

let statesArray = [
  "washington",
  "california",
  "miami",
  "texas"
]

//Buttons, variables, and arrays 
let buttons = document.querySelectorAll('.button');
let movieContainer = document.querySelector('.style');
let letters = document.querySelectorAll('.a');
let categories = document.querySelector('.categories');
let container = document.querySelector('.container');
let container2 = document.querySelector('.containerr');
var chosenWord = []
var guess;
let selectedLetters = [];
let rightLetters = [];
let wrongLetters = [];
let hiddenWord = [];
let numGuesses = 0;
let guessedLetters;
let guess1;

function chooseWord(e){
   
      let buttonClick = e.target.dataset.id
     
      if(buttonClick === "movies"){
     //Select a random index in the array
    let random = Math.floor(Math.random() * movieArray.length);
     //Attach the chosen word to the random index
     chosenWord = movieArray[random];

     chosenWord = chosenWord.split(' ');
     chosenWord = chosenWord.join('');

     
      //Loop through the chosen word
     for(let i = 1; i <= chosenWord.length; i++){

      //Create elements based on the length of the chosen word
      //Print the elements to the screen
      let word = document.createElement('hr');
      let letters45 = document.createElement('h1');
      word.className = "word1";
      letters45.className = "letters45"
      letters45.id = "letters45";
      word.id = "word";
      word.classList.add('style')
      movieContainer.appendChild(letters45);
      movieContainer.appendChild(word);
      console.log(chosenWord);
      categories.style.display = "none";
      container.style.display = "none";
      container2.style.display = "flex";
      container2.classList.add('container0');
    }
  } else if(buttonClick === "TV"){
      let random = Math.floor(Math.random() * tvShowArray.length);
      chosenWord = tvShowArray[random];
      console.log(chosenWord);
      chosenWord = chosenWord.split(' ');
      chosenWord = chosenWord.join('');
 
      
       //Loop through the chosen word
      for(let i = 1; i <= chosenWord.length; i++){
 
       //Create elements based on the length of the chosen word
       //Print the elements to the screen
       let word = document.createElement('input');
       let letters45 = document.createElement('h1');
       word.className = "word1";
       letters45.className = "letters45";
       letters45.id = "letters45"
       word.classList.add('style')
       movieContainer.appendChild(letters45);
       movieContainer.appendChild(word);
       console.log(chosenWord);
       categories.style.display = "none";
       container.style.display = "none";
       container2.style.display = "flex";
       container2.classList.add('container0');
     }
    } else if(buttonClick === "animals"){
     let random = Math.floor(Math.random() * animalsArray.length);
     chosenWord = animalsArray[random];
     console.log(chosenWord);
     console.log(chosenWord);
      chosenWord = chosenWord.split(' ');
      chosenWord = chosenWord.join('');
 
      
       //Loop through the chosen word
      for(let i = 1; i <= chosenWord.length; i++){
 
       //Create elements based on the length of the chosen word
       //Print the elements to the screen
       let word = document.createElement('input');
       let letters45 = document.createElement('h1');
       word.className = "word1";
       letters45.className = "letters45"
       letters45.id = "letters45";
       word.className = "word1";
       word.classList.add('style')
       movieContainer.appendChild(letters45);
       movieContainer.appendChild(word);
       console.log(chosenWord);
       categories.style.display = "none";
       container.style.display = "none";
       container2.style.display = "flex";
       container2.classList.add('container0');
     }
   }
   else if(buttonClick === "states"){
    let random = Math.floor(Math.random() * statesArray.length);
    chosenWord = statesArray[random];
    console.log(chosenWord);

    console.log(chosenWord);
      chosenWord = chosenWord.split(' ');
      chosenWord = chosenWord.join('');
 
      
       //Loop through the chosen word
      for(let i = 1; i <= chosenWord.length; i++){
 
       //Create elements based on the length of the chosen word
       //Print the elements to the screen
       let word = document.createElement('input');
       let letters45 = document.createElement('h1');
       letters45.className = "letters45";
       letters45.id = "letters45";
       word.className = "word1";
       word.classList.add('style')
       movieContainer.appendChild(word);
       movieContainer.appendChild(letters45);
       console.log(chosenWord);
       categories.style.display = "none";
       container.style.display = "none";
       container2.style.display = "flex";
       container2.classList.add('container0');
     }
   }
  }

function getGuess(e){


//Loop through the letter buttons
for(let i = 0; i < letters.length; i++){

  //Check to see if the data-id is equal to the button HTML
  if(e.target.dataset.id === letters[i].innerHTML){

    //If it is, set it equal to the guess and push it to the
    //Selected letters array
    guess = letters[i].innerHTML;
    selectedLetters.push(guess);
    console.log(selectedLetters);
  }
} 
}

function checkWord(e){
      //Select the letters on the screen
      let words = document.getElementsByClassName('word1');
      let actualLetterss = document.getElementById('letters45')
     //Check to see if the chosen word has the letter
     //That the user has clicked
     //Also check to see if the index of the chosen word is less than
     // or greater  than 0
     //If it does, console.log right letter
      if(chosenWord.includes(e.target.dataset.id) 
      && chosenWord.indexOf(e.target.dataset.id) >= 0
      && chosenWord.indexOf(e.target.dataset.value) <= 0
      ){
        console.log('right letter');
        //Push right letters into the right letters arra
        rightLetters.push(e.target.dataset.id);
        console.log(rightLetters);
        //Loop through the chosen word array
        for(let i = 0; i < chosenWord.length; i++){
          //Check to see if the chosen word is equal
          //to the user clicked word
          if(chosenWord[i] === e.target.dataset.id){
            //Put the hidden word inside the 
            //Hidden word array
            hiddenWord[i] = e.target.dataset.id;
          }
        }
        actualLetterss.innerHTML = hiddenWord.join(" ");
        checkWin();
        }
     //Check to see if the chosen word does not have
     //the letter that the user clicks
     //If it doesn't, then console.log wrong letter
     else if(!chosenWord.includes(e.target.dataset.id)){
       console.log('wrong letter');
       numGuesses++;
       checkWin();
       wrongLetters.push(e.target.dataset.id);
     }
      }

//This function checks to see if the user guessed the word
//Correctly
function checkWin(){
  let actualLetterss = document.getElementById('letters45')
 for(let i = 0; i < chosenWord.length; i++){
 if(chosenWord.length === hiddenWord.length){
  console.log('You win');
 }
 else if(numGuesses == 5){
  console.log('you lose');
 }
}
}


letters.forEach(item => {
 item.addEventListener('click', (e) => {
   getGuess(e);
   checkWord(e);
 })
})

buttons.forEach(item => {
  item.addEventListener('click', (e) => {
    chooseWord(e);
  })
})

