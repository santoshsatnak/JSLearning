console.log('===========Statement No - 1===========');

var squre = function(num1){
    var result = num1 * num1;
    console.log(`The squre of 5 is = ${result}`); 
    
}
squre(5,5);

var squre = function(num1){
    var result = num1 * num1;
    console.log(`The squre of 6 is = ${result}`); 
    
}
squre(6,6);


var squre = function(num1){
    var result = num1 * num1;
    console.log(`The squre of 25 is = ${result}`); 
    
}
squre(25,25);


var squre = function(num1){
    var result = num1 * num1;
    console.log(`The squre of 100 is = ${result}`); 
    
}
squre(100,100);


console.log('===========Statement No - 2===========');

console.log('Type of the given function is =', typeof squre);

console.log('===========Statement No - 3===========');

var area = function(num1 , num2){
    var result = num1 * num2;
    console.log(`The area of the Triangle is = ${result}`); 
    
}
area(499,917);

console.log('===========Statement No - 4===========');


var swap = function(value1 , value2){
     
    console.log(`The values are Before swapping = ${value1} and ${value2}`);
    
}
swap ("MAHI" , "RAINA");

var swap = function(value1 , value2){
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log(`The values are After swapping = ${value1} and ${value2}`);
}
swap ("MAHI" , "RAINA");

var swap = function(value1 , value2){
     
    console.log(`The values are Before swapping = ${value1} and ${value2}`);
    
}
swap (55 , 77);

var swap = function(value1 , value2){
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log(`The values are Before swapping = ${value1} and ${value2}`);
    
}
swap (55 , 77);





console.log('===========Statement No - 5===========');

var wordCount = function(word){
    var words = word.split(" ");
    var wordCount  = word.length;
    console.log(`The avaliable string is - ${word}`);
    return wordCount;
 }
 var result = wordCount("JS is the most popular language of internet");
 console.log(`Total number of character avalable in the string is: ${result}`);

var str = function(){
    

      console.log(`The character at index 6 is = ${result}`);
      console.log(`The character at index 11 is = ${result1}`);
      console.log(`The last character of the string is = ${result2}`);
      console.log(`The first character of the string is = ${result3}`);
      console.log(`The first character of the string is = ${result4}`);
      console.log(`The total number  of the words of the given  string is = ${word}`);
      console.log(`Calculate the squre of = ${word * word}`);
}
    

    var str1 = "JS is the most popular language of internet";
    var result = str1.charAt(6)
    var result1 = str1.charAt(11);
    var result2 = str1.charAt(str1.length-1);
    var result3 = str1.charAt(0);
    var result4 = str1.charAt(str1.length-3);
    var result5 = str1.split(' ');
    var word = result5.length;
    str();







