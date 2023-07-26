console.log('=============Assignment no - 1===========================================');

function TCS(gradScore,hscScore,sscScore,candidateName){
      var eligiblity = gradScore >= 70 || hscScore >= 80 || sscScore >= 90 ?
      ` Congratulations "${candidateName}" You are eligible for the TCS interview` :
       `Unfortunately "${candidateName}" You are not eligible for the TCS interview`;
       console.log(eligiblity);
}
TCS(80,86,90,"Santosh");
TCS(70,65,55, "Avinash");
TCS(60,79,88, "Nitin");

console.log('==========Assignment No - 2============================================');

console.log('==========Statement no -1 ============================================');

function maleMarriageEligibility(gender,age,boyName){

    var result= (gender==="Male") && (age >=21) ? `"${boyName}" You are eligible for marriage` :
     `"${boyName}" you are not eligible for marriage`  ;
    
    console.log(result);
    }
    
    maleMarriageEligibility("Male",25,"Bill Gates");
    maleMarriageEligibility("Male",17,"Steve Jobs");

    console.log('==========Statement no -2 ============================================');

function femaleMarriage( gender, age, girlName){
        var res= gender && age>=18 ? console.log(`Hey ${girlName} your are age is ${age} so you are  eligable for Marriage`) : 
          console.log(`Hey ${girlName} your are age is ${age} so you are Not Eligable for Marriage`);
      }
        femaleMarriage("Female", 16, "Jenifer");
        femaleMarriage("Female", 27, "Malinda Gates");