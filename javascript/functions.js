//functions

function demo(num1,num2){          //parameters
    console.log("insert demo function")
    sum=num1+num2
    console.log(sum);
    console.log("----------------------")
}
demo(4,5);           //arguments

console.log("------------------------------------------------------------------------")

function demo1(num1,num2){        
    console.log("insert demo function")
    return sum=num1+num2 //the statement after return statement will not be executed ..
    console.log("hi")

}
demo1(4,8);    //Ans.undefined
console.log(demo1(5,5));

console.log(`"""""""""""""""""""""""""""""""""""""""""""""""""""""""`)

//w.a.p to find the cube of a given number using function
function findCube(x){
    return x**3


}
console.log(findCube(3));


//w.a.p to find the given number is odd or even using function
function oddOrEven(num){
    if(num%2==0){
        console.log(`the given number is even `)
    }
    else{
        console.log('the given number is odd')
    }
    
}



oddOrEven(3)


//using arrow function
 const evenOdd=(num)=>num%2==0 ?"even":"odd"
 console.log(evenOdd(2))


 //w.a.p to find a given number is positive or negative using arrow function

const positiveEven=(number)=>number<0 ?'negative' : number==0 ?'zero':'positive'
console.log(positiveEven(-9))