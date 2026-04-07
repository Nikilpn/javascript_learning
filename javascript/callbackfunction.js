//callbackfunction

function parent(name,callback){
    console.log(`Hi my name is ${name}`);
    callback()
}

function child(){
    console.log('inside the child function');
}
parent("nikhil",child)

