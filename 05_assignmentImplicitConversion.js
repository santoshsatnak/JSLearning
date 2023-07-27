console.log('====Step 1 - Implicit Conversion to String==========================================');

result = '3' + 2;
console.log(`1) The result of '3' and 2 is = "${result}"`);
console.log(`because it is implicit conversion,
 2 is converted in to the string value. `);

console.log(`-------------------------------------------------------------------------------------`);

result = '3' + true;
console.log(`2) The result of '3 ' and true is = "${result}"` );
console.log(`Because it is implicit conversion , 
boolen value is true it is converted in to the string value.`);

console.log(`-------------------------------------------------------------------------------------`);

result = '3' + undefined;
console.log(`3) The result of '3 ' and undefined is = "${result}"`);
console.log(`Because it is implicit conversion ,
 boolen value is undefined it is converted in to the string value.`);

console.log(`-------------------------------------------------------------------------------------`);

result = '3' + null;
console.log(`4) The result of '3 ' and null is = "${result}"`);
console.log(`Because it is implicit conversion , 
boolen value is null and it is converted in to the string value.`);

console.log(`-------------------------------------------------------------------------------------`);

console.log('===step - 2 = Implicit boolean conversion to Number===================================');

result = '4' - true;
console.log(`1) The result of 4 and true is : "${result}"`);
console.log(`Because it is implicit conversion , 
boolean value is true and it is converted into a number ie. 1 and get the output is 3.`);

console.log(`-------------------------------------------------------------------------------------`);

result = 4 + true;
console.log(`2) The result of 4 and true is : "${result}"`);
console.log(`Because it is implicit conversion , 
boolean value is true and it is converted into a number ie. 1 and get the output is 5.`);

console.log(`-------------------------------------------------------------------------------------`);

result = 4 + false;
console.log(`3) The result of 4 and false is : "${result}"`);
console.log(`Because it is implicit conversion , 
boolean value is true and it is converted into a number ie. 0 and get the output is 4.`);
console.log(`-------------------------------------------------------------------------------------`);

console.log('===step - 3 = Implicit string conversion to Number===================================');

result = '4' - '2';
console.log(`1) The result of '4' and '2' is - "${result}"`);
console.log(`String is converted to the Number`);

console.log(`-------------------------------------------------------------------------------------`);

result = '4' - 2;
console.log(`2) The result of '4' and 2 is - "${result}"`);
console.log(`String is converted to the Number`);

console.log(`-------------------------------------------------------------------------------------`);

result = '4' * 2;
console.log(`3) The result of '4' multiply by 2 is - "${result}"`);
console.log(`String is converted to the Number`);

console.log(`-------------------------------------------------------------------------------------`);

result = '4' / 2;
console.log(`4) The result of '4' divided by 2 is - "${result}"`);
console.log(`String is converted to the Number`);




