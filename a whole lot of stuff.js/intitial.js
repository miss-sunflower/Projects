console.log("Henlo.");
// welcome to another backend langauge. We got this.
console.log(3); //numbers are cool without any embelishments
console.log(3 + 4 * 6 / 7 % 1); //all the arithmetic operators are the same
console.log("Hello" + "World"); //concatenation
console.log(Number.isInteger(2017)); // returns boolean true/false if integer or not
console.log("Hello".length); //checks length of words inside

var favoriteFood = "pizza";
var numOfSlices = 8;

console.log(favoriteFood);

let meal = 'Enchiladas'; //new way of assigning variables
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

let changeMe = true;
//booleans don't require quotations
changeMe = false;
//log value to console means console.log();
console.log(changeMe);

let levelUp = 10;
levelUp += 5;
let powerLevel = 9001;
powerLevel -= 100;
let multiplyMe = 32;
multiplyMe *= 11;
let quarterMe = 1152;
quarterMe /= 4;

// Use the mathematical assignments in the space below:






// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//concatenation
let favoriteAnimal = "kitten";
console.log("My favorite animal:" + favoriteAnimal);

//string interpolation- `${myCity}`
let myName = "Elhanah";
let myCity = "Montreal";
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

//overview
//let myCity = "Montreal";
myCity = "New Brunswick";
console.log(`my favorite city is ${myCity}`);
var myPlace = "pieIX";
const pie = "3.14";

console.log("my favorite place is " + myCity + "and " + myPlace);
console.log(`${pie} is used in most mathematical operations`);

//console.log(test);
//const test = "figures"; //gives an undefined error
console.log(typeof myCity);//syntax is correct
//end of overview
print(myCity);
pickRandom(string);//still figuring out this one

var ingredients = ['flour', 'eggs', 'sugar'];//this is how arrays with strings work here
var egarray = ['breeze' , 5 , 20 , [34,56]];//array nesting

//another project/module
const kelvin = 293;
//just created a constant variable that contains the value of Kelvin as 293
const celsius = kelvin - 273;
//establishing the mathematics for a converter
var Fahrenheit = celsius * (9/5) + 32;
//creating a formula for calculating fahrenheit
//console.log(.floor(Fahrenheit)); - okay attempt but you forgot the math part.
//updating a value of a varible doesn't require any of the var or const or whatever.
Fahrenheit = (Math.floor(Fahrenheit));
//rounding the results down to a whole number.
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);
var Newton = celsius  * (33/100);//not const becuause then the value vannot be changed.
Newton = (Math.floor(Newton));
console.log(`The temperature is ${Newton} in Newtons.`);


//a dog years calculator
var myAge = 21;
//das my age bro.
let earlyYears = 2;
//basically the beginning of the dog years
earlyYears = 10.5 * earlyYears; // reassigning a value
let laterYears = myAge - 2; // every year after the first two
laterYears = laterYears * 4; // reassigning a value
console.log(`${earlyYears}`);
console.log( `${laterYears}`);
let myAgeInDogYears = earlyYears + laterYears; //total age
//let myName = "Elhanah Otasowie";
console.log(myName.toLowerCase());
myName = "Elhanah Otasowie".toLowerCase(); //change the case of the words

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`); //the conclusion of the whole project

//Conditonal Statements
let sale = false;
if(sale == true){
  console.log("Time to buy!");
}

let hungerLevel = 7;
if(hungerLevel => 7){
  console.log('Time to eat!');
}else{
  console.log('We can eat later!');
}

//logical operators
let mood = 'sleepy';
let tirednessLevel = 6;
if(mood != 'sleepy' || tirednessLevel > 8){
  console.log("time to sleep");
} else {
  console.log('not bed time yet');
}
//tenary operators
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === "Love That!" ? console.log('I love that!') : console.log("I don't love that!");

//else if statements
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
}  else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!')
}else{
  console.log('Invalid season.');
}
//switchcase
let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
  case 'first place' :
    console.log("You get the gold medal!");
    break;
  case 'second place' :
    console.log('You get the silver medal!');
    break;
  case 'third place' :
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}
//basiccally a review of everything
let safe = 100;

safe === 100 || safe != 2 ? console.log('Yup, the safe is locked!') : console.log('my g, btter watch the money');
let safety = 0;
switch(safety){
  case 0 :
    console.log("best be praying to the Lord");
    break; 
  default:
    console.log('invalid response');
    break;

    
    }
//a super long switch function
let userName = 'Elhanah';
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');
let userQuestion = 'Will I get married?';
console.log(`${userQuestion}, ${userName}?`);
let randomNumber = Math.floor(Math.random()* 8);
let eightBall = '';
switch(randomNumber){
  case 0 :
    eightBall = "It is certain";
    console.log(`${eightBall}`);
    break;
  case 1 :
    eightBall = "It is decidedly so";
    console.log(`${eightBall}`);
    break;
  case 2 :
    eightBall = "Reply hazy try again";
    console.log(`${eightBall}`);
    break;
  case 3 :
    eightBall = "Cannot predict now";
    console.log(`${eightBall}`);
    break;
  case 4 :
    eightBall = "Do not count on it";
    console.log(`${eightBall}`);
    break;
  case 5 :
    eightBall = "My sources say no";
    console.log(`${eightBall}`);
    break;
  case 6 :
    eightBall = "Outlook not so good";
    console.log(`${eightBall}`);
    break;
  case 7 :
    eightBall = "Signs point to yes";
    console.log(`${eightBall}`);
    break;
  default :
     console.log('I dunno, man.')
}

 
// control flow statements - the project
let raceNumber = Math.floor(Math.random() * 1000);
let registerTime = false;
let runningAge = 18;
 if(registerTime === true && runningAge >= 18){
   raceNumber += 1000;
 }
 if(runningAge > 18 && registerTime === true){
   console.log(` Adult Runner ${raceNumber} will race at 9:30AM.`);
 } else if(runningAge > 18 && registerTime === false){
    console.log(` Adult Runner ${raceNumber} will race at 11:00AM.`);
 } else if(runningAge < 18){
   console.log(`Youth Runner ${raceNumber} will race at 12:30PM (reagrdless of registration)`);
 } else{
   console.log('Please see the Registration Desk.');
 }
//introduction to functions
function getReminder(){
  console.log('Water the plants.');
}
function greetInSpanish(){
  console.log('Buenas tardes.')
}
//more on repetitive functions
function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks(); // don't forget the brackets
sayThanks();
sayThanks();

//adding lessons in parameters
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
//parameters are basicalling identifying the input to the formula you want to use/create
sayThanks('Cole');//then you put the actual figures/words when you're calling the function

//default parameters
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs"){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

//using the return function
function monitorCount(rows, columns){
  return rows * columns;
}
 const numOfMonitors = monitorCount(5,4);
 console.log(numOfMonitors);

//a lesson in helper functions
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns){
  return monitorCount(rows, columns) * 200; // make sure to add the parameters
  }
  const totalCost = costOfMonitors(5,4);
  console.log(totalCost);