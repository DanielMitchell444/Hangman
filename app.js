//Array for movies category
let movieArray = [
"harry potter",
"the conjuring",
'star wars',
'lord of the rings'
]

//Array for TV Category
let tvShowArray = [
 "Breaking Bad",
 "Criminal Minds",
 "How I Met Your Mother",
 "Greys Anatomy"
]

let animalsArray = [
  "Dog",
  "Cat",
  "Parrot",
  "Skunk"
];

let statesArray = [
  "Washington",
  "California",
  "Miami",
  "Texas"
]

//Buttons, variables, and arrays 
let buttons = document.querySelectorAll('.button');
let movieContainer = document.querySelector('.style');
let letters = document.querySelectorAll('.a');
let categories = document.querySelector('.categories');
let container = document.querySelector('.container');
let container2 = document.querySelector('.containerr');
var chosenWord;
var guess;
let selectedLetters = [];

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
      let word = document.createElement('input');
      word.className = "word1";
      word.classList.add('style')
      movieContainer.appendChild(word);
      console.log(chosenWord);
      categories.style.display = "none";
      container.style.display = "none";
      container2.style.display = "flex";
      container2.classList.add('container0');
    }
  } else if(buttonClick === "TV"){
      let random = Math.floor(Math.random() * tvShowArray.length);
      chosenWord = movieArray[random];
      console.log(chosenWord);
     }
   else if(buttonClick === "animals"){
     let random = Math.floor(Math.random() * animalsArray.length);
     chosenWord = animalsArray[random];
     console.log(chosenWord);
   }
   else if(buttonClick === "states"){
    let random = Math.floor(Math.random() * statesArray.length);
    chosenWord = statesArray[random];
    console.log(chosenWord);
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
      let buttonClick = e.target.dataset.id;
      for(let i = 0; i < chosenWord.length; i++){
     if(buttonClick === chosenWord[i]){
       console.log('yes') 
      return buttonClick;
      
     }

     else
     {
      console.log('no')
      return buttonClick;
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

