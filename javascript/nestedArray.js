//nested array

//write a program to print all the items from the given array

a=[[2,4],[3,5],[7,9]]
for(item of a){
    // console.log(item)
    for(num of item){
        console.log(num);
    }
}

console.log('---------------------------------------');

highest=a[0][0]

//w.a.p to find the highest number
for(item of a){
    for(num of item){
        if(highest<num){
            highest=num
        }
  
    }
}
console.log('highest is:',highest);


console.log('---------------------------------------');

//w.a.p to find the lowest number

lowest=a[0][0]

//w.a.p to find the highest number
for(item of a){
    for(num of item){
        if(lowest>num){
            lowest=num
        }
  
    }
}
console.log('lowest is:',lowest);
console.log('---------------------------------------');
//w.a.p find the sum of all numbers

sum=0
for(item of a){
    for(num of item){
        sum=sum+num
        
    }
}
console.log('sum of numbers is: ',sum);

