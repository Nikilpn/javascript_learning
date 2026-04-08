//foreach
a=[1,2,3,4,5,6]


// for(num of a){
//     console.log(num)
// }

// //same as for loop=>forEach

a.forEach((item)=>console.log(item))

console.log('--------------------------------');


//w.a.p to find the square of all the elements in the given array
a.forEach((item)=>console.log(item**2))

console.log('--------------------------------');
//w.a.p using map function
newarr=a.map((item=>item**2))
console.log(newarr);

console.log('--------------------------------');
//w.a.p to create a newArray with number<=3 then increment by 1 else decrement by 1
a=[1,2,3,4,5,6]


op=a.map((item)=>{
    if(item<=3){
        return item+1
    }
    else{
        return item-1
    }
})
console.log(op);

console.log('--------------------------------');
op=a.map((item)=>item<=3? item+1:item-1)
console.log(op);

