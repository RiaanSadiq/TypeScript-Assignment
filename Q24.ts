// -----Question 24-----

// Tests for equality and inequality with strings
let veg1 = 'Carrot';
let veg2 = 'Potato';

console.log("Are the vegitable equal? i predict false.");
console.log(veg1 == veg2);

let color1 = 'blue';
let color2 = 'blue';

console.log("Are the colors equal? i predict true.");
console.log(color1 === color2);

// Tests using the lower case function
let text1 = 'Hello World';
let text2 = 'hello world';

console.log("Is text1 the same as text2 in lowercase? i predict true.");
console.log(text1.toLowerCase() == text2.toLowerCase());

// Numerical tests
let number1 = 10;
let number2 = 5;

console.log("Is number1 greater than number2? i predict true.");
console.log(number1 > number2); // True

console.log("Is number1 less than or equal to number2? i predict false.");
console.log(number1 <= number2); // False

let price1 = 20;
let price2 = 20;

console.log("Are the prices equal? i predict true.");
console.log(price1 === price2); // True

let temperature1 = 75;
let temperature2 = 80;

console.log("Is temperature1 not equal to temperature2? i predict true.");
console.log(temperature1 !== temperature2); // True

// Tests using "and" and "or" operators
let isDaytime = true;
let isSunny = false;

console.log("Is it daytime and not sunny? I predict True.");
console.log(isDaytime && !isSunny); // True

let isWeekend = false;
let isHoliday = true;

console.log("Is it the weekend or a holiday? I predict True.");
console.log(isWeekend || isHoliday); // True

//Test whether an item is in an array
let Alphabet = ["a", "b", "c", "d"];

console.log("Is 'b' in the array? I predict True.");
for(let i=0 ; i<Alphabet.length; i++)
{
  if(Alphabet[i]== "b")
  {
    console.log(true);
  }
}

console.log("Is 'e' in the array? I predict False.");
for(let i=0 ; i<Alphabet.length; i++)
{
  if(Alphabet[i]== "e")
  {
    console.log(true);
  }
}
console.log(false);

 //Test whether an item is not in an array
let colors = ["red", "green", "yellow", "blue"];

console.log("Is 'pink' not in the array? i predict true.");
console.log(!colors.includes('pink'));

console.log("Is 'green' not in the array? i predict false.");
console.log(!colors.includes('green'));

// --------------------
