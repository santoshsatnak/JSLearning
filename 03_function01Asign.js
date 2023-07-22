
console.log('============Step-1=============================================================================');

function show(){
    console.log('I Want to learn JavaScript');
    console.log('JavaScript is not Difficult');
}
show();


console.log('============Step-2=============================================================================');


function personalDetails(arg1, arg2, arg3){
    console.log('firstName -', arg1,'lastName -', arg2,'collegeName-', arg3);
}
 res = personalDetails('Santosh', 'Satnak', 'JSPM Bhagwant Institue of Technology,Barshi')


console.log('============Step-3============================================================================');

function swapValues(arg1, arg2){
    
    console.log('Before swap=> Value1 =', arg1, '      |   Value2 =', arg2);
    var temp = arg1;
      arg1 = arg2;
      arg2 = temp;
      
      console.log('After swap=>  Value1 =', arg1, '   |   Value2 =', arg2 );
}
 result = swapValues(123, 321)
     

      result = swapValues('Virat', 'Anushaka')
     


console.log('============Step-4============================================================================');

function addition(arg1, arg2, arg3){
    console.log('Values are: ', arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var res = addition(10.23, 600, 40);
console.log('After Addition', res);

var res = addition('Hello','Good','Morning');
console.log('After Addition', res);

console.log('============Step-5============================================================================');



function bankDetails(arg1, arg2, arg3, arg4){
    console.log('Bank Name =', arg1,'|   Account Number =', arg2,'|   Location =', arg3, '|   PinCode -', arg4);
}
 details = bankDetails('CITI Bank', 3456782345, 'Pune', 431202)


 details = bankDetails('Axis Bank', 7856782345, 'Pune', 441202)


 details = bankDetails('HDFC Bank', 8956782345, 'Pune', 631202)

