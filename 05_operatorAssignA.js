console.log('=======Assignment no -1 ============================');

console.log('=======Statement no-1===============================');

function squreOfWordLength(){
    console.log(`The length of JavaScript is = ${res}`);
    console.log(`The Squre of string  "JavaScript is = ${res * res}`);

    console.log(`The length of Google Chrome is = ${res1}`);
    console.log(`The Squre of string  Google Chrome is = ${res1 * res1}`);

    console.log(`The length of Developer Smart is = ${res2}`);
    console.log(`The Squre of string  Developer Smart is = ${res2 * res2}`);  

}

var result = ("JavaScript");
var res = result.length;

var result1 = ("Google Chrome");
var res1 = result1.length;

var result2 = ("Developer Smart");
var res2 = result2.length;

 squreOfWordLength("JavaScript");

 console.log('=======Statement no-2===============================');

 function Developer() {
         console.log(`The given string is = ${develop}`);
         console.log(`The length of the given string is = ${length1}`);
         console.log(`The total number of the word in the given string is = ${word1}`);
         console.log(`Divide by total number of word in the string = ${divide}`);
         console.log(`Multiply by total number of word in the string = ${multi}`);
 }
    var develop  =  "I am Angular Developer";
    var length1 = develop.length;
    var word = develop.split(' ');
    var word1 = word.length;
    var divide = length1 / word1;
    var multi = length1 * word1;
    Developer();

