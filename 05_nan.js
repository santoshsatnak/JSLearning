



// NaN - Not a Number

var num1 = 0;
var num2 = 0;
var result = num1/num2;
console.log(result);

var num3 = "100";
console.log(`Type of num3 is ${typeof num3}`);

result = +num3;
console.log(`Type of num3 is ${typeof result}`);

var num4 = "GK";
var result = +num4;  // var result = NaN;
console.log(`Type of result is : ${result}`);
console.log(`Type of result is : ${typeof result}`);

console.log(`========Implicit Conversion=======`);

var result = '5' + 6;
console.log('Implicit Conversion is =', result);

var result = '80' + true;
console.log('Implicit Conversion is =', result);
console.log(`why result is 80true because thier is implicit 
conversion from boolean value ie. true to string`);

var result = '80' - true;
console.log('Implicit Conversion is =', result);
console.log(`why result is 79 because thier is implicit 
conversion from boolean value ie. true to string`);

console.log(`======Explicit conversion========`);

var num = '22';
var result = +num;
console.log(`Explicit Conversion is = ${result} and its typr is: ${typeof result}`);

console.log('2nd way of explicit conversion');
var result = Number(num);
console.log(`Explicit Conversion is = ${result} and its typr is: ${typeof result}`);

var result = Number("Viraj");
console.log(`Explicit Conversion is = ${result} and its typr is: ${typeof result}`);

var num = 100;
console.log(`Value of num is ${num} and it's type of ${typeof num}`);
var result = String(num);
console.log(`Explicit Conversion is = ${result} and its typr is: ${typeof result}`);

var num = 100;
var result = Boolean(num);
console.log(`Explicit Conversion is = ${result} and its typr is: ${typeof result}`);

console.log('===============');
var num = "50";
var result = Boolean(num);
console.log(`Explicit Conversion is = ${result} and its typr is: ${typeof result}`);

var isMarried = true;
var result = String(isMarried);
console.log(`Explicit Conversion is = ${result} and its typr is: ${typeof result}`);






