

function swap(n1,n2){ // n1, n2 arguments or parameters n1=100  n2=200
      console.log('inside swap functiomn');
      console.log('Before swap=> n1', n1, 'n2', n2);
      var temp = n1;
      n1 = n2;
      n2 = temp;
      console.log('After swap=> n1', n1, 'n2', n2);
}

var num1 = 100;
var num2 = 200;
swap(num1, num2);  //function call or invocation

var sweety = "Sweety";
var cutie = "cutie";
swap(sweety, cutie);

var name1 = "Virat";
var name2 = "Anushka";
swap(name1, name2);
console.log('End of program');
