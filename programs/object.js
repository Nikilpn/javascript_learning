// 
const employee ={
    empid:1000,
    empName:"neel",
    empdesg:"Developer",

}


console.log('--------------------');

console.log(employee);


console.log('--------------------');


console.log(employee["empName"]);

console.log('--------------------');

console.log(employee.empdesg);

//to add data
employee["emplocation"]="kochi"
console.log(employee);

console.log('--------------------');

Object.assign(employee,{empsal:25000})
console.log(employee);

//to update item


console.log('--------------------');
employee["empid"]=999000000
console.log(employee);


console.log('--------------------');

delete employee.empdesg
console.log(employee);

console.log('--------------------');

console.log('--------------------');

//check whether employee experience is present in the given object or not ,if present print "key is available" else add a new data value pairs and empexp:3
isPresent=false
for(emp in employee){
    console.log(emp);
    if(emp=="empExp"){
        isPresent=true

    }
}
isPresent? console.log('key is available'):(employee["empExp"]=3,console.log(employee));


console.log('--------------------');
//the above question in one line

emp in employee?console.log('key is available'):(employee['empExp']=3,console.log(employee));
