//oops

class employee{
    //properties 
    empId
    empName
    empDesg

    //constructor
    constructor(id,name,designation){
        this.empId=id
        this.empName=name
        this.empDesg=designation

    }

    //method

    display(){
        console.log(`the id of the employee is ${this.empId} and  the name is ${this.empName}`);
        
    }



}

const emp1 = new employee(1,"nikhil","developer")
emp1.display()