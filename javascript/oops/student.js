//introduction

class student{ 
    //properties are not necessary
    // stdId
    // stdName
    // stdAge

    //constructor

    constructor(id,name,age){
        this.stdId=id
        this.stdName=name
        this.stdAge=age

        this.display() // can be called inside the class
    }

    //method

    display(){
        console.log(`student id is ${this.stdId} and student name is ${this.stdName} and the student age is ${this.stdAge}`);
        
    }


}

const student1=new student("1","nikhil","26")

const student2=new student("2","akhil","33")

student1.display()
student2.display()

