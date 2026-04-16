//method overriding

class A{
    methodA(){
        console.log('this is the first one');
        
    }

    methodA(){
        console.log('this is the second one');
        
    }

    methodA(){
        console.log('this is the third one');
        
    }
}

const obj=new A()

obj.methodA()