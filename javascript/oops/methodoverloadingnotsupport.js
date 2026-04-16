// //polymorphism

// method overloading-not support in js


class A{
    methodA(){
        console.log('inside method a');
        
    }
    methodA(num){
        console.log(`inside method a  as argument num :${num}`);
        

    }
}



const obj1=new A()
obj1.methodA()

obj1.methodA(2)


//rest operator

class sum{
    sumOfNumbers(...args){
        let total=args.reduce((n1,n2)=>n2+n1)
        console.log(total);
        

    }
}
const obj2=new sum()

obj2.sumOfNumbers(23,4,4)
obj2.sumOfNumbers(23,4,4,6,6,6)
