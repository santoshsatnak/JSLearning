console.log('==============Assignment No - 1==============');

console.log('==============Step No - 1==============');

function checkNumber(num){
    var numValue = +num;
    if (isNaN(numValue) || num<0) {
        
    } else {
        // if block is used for handle all valid Scenarious
        if (num%2==0) {
             console.log(`${num} is EVEN`);
        } else {
            console.log(`${num} is ODD`);
        }
    }
}
checkNumber(45);
checkNumber(70);
checkNumber(67);
checkNumber(98);

console.log('==============Step No - 2==============');

function voteEligibility(age){
    var voterAge = +age;
    
        if (age>=18) {
            console.log(`Congratulations as per your age ${age} , you are Eligible for the Vote`);
        } else {
            console.log(`Unfortunately as per your age ${age}, you are not Eligible for the Vote`);
        }
    
}
voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);

console.log('==============Step No - 3==============');

function checkString(stringValue){
    var stringlen = stringValue.length;
    if (stringlen>=10) {
        console.log(`${stringValue} is contain more than 10 characters`);
    } else {
        console.log(`${stringValue} is not contain more than 10 characters`);
    }
}
checkString("JavaScript - ES6");
checkString("JavaScript - ES6");

console.log('==============Step No - 3==============');

function lang(string1){
    string1.startswith("Java")
    if ( string1.startswith("Java")) {
        console.log(`${string1}, this string starting with "Java"`);
    } else {
        console.log(`${string1}, this string starting  with "Java"`);
    }
}

console.log('==============Assignment No - 2==============');

function voteEligibility(age){
    var voterAge = +age;
    if (age<=0 || isNaN(voterAge) || age>130) {
        console.log(`As per your age ${voterAge} your age is invalid, please Enter your valid age.`);
        
    } else {
        // if block is used for the handle All valid scenarious.
        if (age>=18) {
            console.log(`Congratulations as per your age ${age} , you are Eligible for the Vote`);
        } else {
            console.log(`Unfortunately as per your age ${age}, you are not Eligible for the Vote`);
        }
    } 
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);




