//w.a.p to swap between two given numbers 
num1=60
num2=40

// num3=num1
// num1=num2
// num2=num3

// console.log(`The value of num1 after swapping ${num1}`);
// console.log(`The value of num2 after swapping ${num2}`);


// Swapping with out temporary variable
num1=num1+num2 //60+40=100
num2=num1-num2 //100-40=60
num1=num1-num2 //100-60=40

console.log(`The value of num1 is ${num1} and the value  of num2 is ${num2}`);