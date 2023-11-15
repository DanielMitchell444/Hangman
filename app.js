//Array for movies category
let movieArray = [
"Harry Potter",
"The Conjuring",
'Star Wars',
'Lord of the Rings'
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

//Buttons, variables, and arrays 
let buttons = document.querySelectorAll('.button');
let movieContainer = document.querySelector('.style');
let letters = document.querySelectorAll('.a');
let categories = document.querySelector('.categories');
let container = document.querySelector('.container');
let container2 = document.querySelector('.containerr');
var chosenWord;
let selectedLetters = [];

function chooseWord(e){
     
      if(e.target.dataset.id = "Movies"){
     //Select a random index in the array
    let random = Math.floor(Math.random() * movieArray.length);
     //Attach the chosen word to the random index
     chosenWord = movieArray[random];
     
      //Loop through the chosen word
     for(let i = 0; i < chosenWord.length; i++){

      //Create elements based on the length of the chosen word
      //Print the elements to the screen
      let word = document.createElement('input');
      word.classList.add('style')
      movieContainer.appendChild(word);
      console.log(word);
      categories.style.display = "none";
      container.style.display = "none";
      container2.style.display = "block";
      container2.classList.add('container2');
    }
  }
  }

function getGuess(e){

var guess;

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

function checkWord(){
 //LOOP THROUGH THE MOVIE ARRAY//
}

letters.forEach(item => {
 item.addEventListener('click', (e) => {
   getGuess(e);
 })
})

buttons.forEach(item => {
  item.addEventListener('click', (e) => {
    chooseWord(e);
  })
})

