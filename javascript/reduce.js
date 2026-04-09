//reduce

a=[2,3,4,5,6,7,22,3,4]
//syntax:  value=array.reduce((previousvalue,currentvalue)=>statement)
//highest
highest=a.reduce((num1,num2)=>num1>num2 ? num1:num2)
console.log(highest);

console.log('--------------------------------');

//lowest
lowest=a.reduce((num1,num2)=>num1<num2 ?num1:num2)
console.log(lowest);


console.log('--------------------------------');
//sum
sum=a.reduce((num1,num2)=>num1+num2)
console.log(sum);
