console.log('=====Assignment No -1 =====');

console.log('-----Statement-1 =My Dream Company-----');

var dream = 'XYZ India pvt.ltd';
console.log('My Dream Company is =', dream );


console.log('-----Statement-2 =My Hobbies-----');
var  hobby1   = "Trekking ";
var hobby2 = "Swimming";
var hobby3 = "Programming";

console.log('Hobby1 -', hobby1, '|| Hobby2 -', hobby2, '|| Hobby3 -', hobby3);

var lengthHobby1 = hobby1.length;
var lengthHobby2 = hobby2.length;
var lengthHobby3 = hobby3.length;

console.log('Total number of Characters in hobby1,hobby2 and hobby3 is =', lengthHobby1+lengthHobby2+lengthHobby3);


console.log('=====================Assignment No -2 ==============================');


console.log(`----------------Statement- 1 = Print as it is--------------------`);

var assign = "Hey you are doing good, keep it up";
console.log('Print the string as it is =', assign);

console.log(`----------------Statement- 2 = Length of the string--------------------`);

var assign = "Hey you are doing good, keep it up";
var lengthassign = assign.length;
console.log('Length of the string is =', lengthassign);

console.log(`-----Statement- 3 = Remove the extra spaces-----`);

var assign = "      Hey you are doing good, keep it up     ";
var result = assign.trim();
console.log(`Remove extra spaces = ${result}`,` ||and it's lenth = ${result.length}`);

console.log(`-----Statement- 4 = Print the remove the extra spaces in step-3-----`);

var assignTrimStart = assign.trimStart();
var assignTrimEnd = assign.trimEnd();
var before = assign.length - assignTrimStart.length;
var after = assign.length - assignTrimEnd.length;
var extraSpaces = before + after;

console.log(`Removing the last spaces = ${assignTrimEnd}`);
console.log(`Removing the last spaces and it's length = ${assignTrimEnd.length}`);
console.log(`Total Number of spaces remove in Ending string = ${after}`);
console.log(`Removing the starting spaces = ${assignTrimStart}`);
console.log(`Removing the starting spaces and it's length = ${assignTrimStart.length}`);
console.log(`Total Number of spaces remove in starting string = ${before}`);
console.log(`Total Number of extra spaces removed in step 3 = ${extraSpaces}` );

console.log(`-----Statement- 5 = Print the first and last character after trim-----`);

var assign = "Hey you are doing good, keep it up";
var letter1 = assign.charAt();
console.log(`Print the first character after trim = ${assign.charAt(0)}`);
console.log(`Print the first character after trim = ${assign.charAt(assign.length-1)}`);

console.log(`-----Statement- 6 = Print the count of the total words avalable in the string-----`);

var assign = "Hey you are doing good, keep it up";
var count = assign.split(' ');  
var words = count.length;

console.log(`Given string = ${assign}`);
console.log(`Total number of words avalable in the string = ${words}`);

console.log(`-----Statement- 7 = Print the index of the wprd "good"-----`);

var assign = "Hey you are doing good, keep it up";
var index = assign.indexOf('good');

console.log(`Print the index of the wprd "good" = ${index}`);

console.log(`-----Statement-8  = print the substracting starting from index 22-----`);

var assign = "Hey you are doing good, keep it up";
var from22 = assign.substring(22);

console.log(`print the substracting starting from index 22 = ${from22}`);

console.log(`-----Statement-9  = Check, is string ends with word "up"-----`);

var assign = "Hey you are doing good, keep it up";
var check = assign.includes("up");

console.log(`Check, is string ends with word "up" = ${check}`);

console.log(`-----Statement-10  = Check, is string starts with word "Hey"-----`);

var assign = "Hey you are doing good, keep it up";
var check = assign.includes("Hey");

console.log(`Check, is string ends with word "up" = ${check}`);
