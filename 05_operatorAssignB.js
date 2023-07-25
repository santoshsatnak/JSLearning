console.log("=========Assignment No - 2=============================================");

console.log("=========Statement No - 1=============================================");
var greatNumber = function(num1 , num2){
     var res = num1 >= num2 ? num1 : num2;
     console.log(`Greater the number between ${num1} and ${num2} is =  ${res}`);
    
    }
greatNumber(10 , -10);
greatNumber(800 , 899);

console.log("=========Statement No - 2=============================================");

var isOddEvenNumber = function(arg1){
    var result = arg1 % 2 == 0;
    console.log(`Check the number is "${arg1}" : ${result}`);
}
isOddEvenNumber(29);
isOddEvenNumber(44);
isOddEvenNumber(0);
isOddEvenNumber(101);

console.log("=========Statement No - 3=============================================");

var wordLength = function(str){
    var len = str.length;
    var result = len % 2 == 0 ? "EVEN" :  "ODD" ;

    console.log(`The length of the given string is = ${len} and the string value is = ${result}`);
}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");
