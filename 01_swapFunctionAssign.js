
function swap(n1,n2){
    console.log('inside swap functiomn');
    console.log('Before swap=> Value1 -', n1, 'Value2 -', n2, 'Value3 -', n3);
    var temp = n1;
      n1 = n2;
      n2 = n3;
      n3 = temp;
      console.log('After swap=>Value1 -', n1, 'Value2 -', n2, 'Value3 -', n3);
}



var sweety = "Sweety";
var cutie = "cutie";
swap(sweety, cutie);

console.log("======================================================================");


var n1 = 100;
var n2 = 200;
var n3 = 300;
swap(n1,n2,n3);