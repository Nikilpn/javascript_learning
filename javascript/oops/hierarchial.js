//hierarchial inheritance

//multilevel inheritance

class A{
    methodA(){
        console.log('inside method a');
        
    }
}


class B extends A{
    methodB(){
        console.log('inside method b');
        
    }
}

class C extends A{
    methodC(){
        console.log('inside method c');
        
    }
}

const obj1=new C()
obj1.methodC()

obj1.methodA()

