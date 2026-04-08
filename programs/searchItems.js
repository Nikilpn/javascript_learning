let employees = [
    [1000, "Nikhil", "Developer", "Kochi", 30000, 1],
    [1001, "Arun", "Tester", "Trivandrum", 25000, 2],
    [1002, "Rahul", "Manager", "Calicut", 50000, 3],
    [1003, "Anu", "HR", "Kochi", 28000, 4],
    [1004, "Meera", "Designer", "Thrissur", 32000, 5],
    [1005, "Vishnu", "Developer", "Kollam", 35000, 6],
    [1006, "Akhil", "Support", "Kochi", 22000, 7],
    [1007, "Neha", "Developer", "Calicut", 40000, 8],
    [1008, "Riya", "Tester", "Thrissur", 26000, 9],
    [1009, "Sanjay", "Manager", "Kochi", 60000, 10]
];

console.log('------------------------------------------');

//print all the employee names
for(emp of employees){
    console.log(emp[1]);
    
}
console.log('------------------------------------------');
//w.a.p to print the total number of employees
console.log(`the number of employee is ${employees.length}`);

//print the developer employee details
for(emp of employees){
    if(emp[2]=='Developer'){
        console.log(emp)
    }
    

}
console.log('------------------------------------------');

//print employee whose salary >30000

for(emp of employees){
    if(emp[4]>30000){
        console.log(emp);
        
    }
}
//arrange employee based on their salary in descending order
console.log('------------------------------------------');

employees.sort((emp1,emp2)=>emp1[4]-emp2[4])
console.log(employees);

console.log('------------------------------------------');
//print the employee with highest salary

highest=employees.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(highest[0][1]);