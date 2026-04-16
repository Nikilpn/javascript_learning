//try catch exception handling

exp="10zhhh/2*5"

try{
    const result=eval(exp)
    console.log(result);
    
}
catch{
    console.log('error in try block');
    
}
finally{
    console.log('end of the code ');//it will execute every time
    
}

