//nested function
function a(){
    parent_variable="parent"
    console.log("inside function a");
    // console.log(`my child variable is ${child_variable}`)//cannot be accessed the variable defined in child function
    console.log(`my parent variable is ${parent_variable}`)
    function b(){
        child_variable="child"
        console.log("inside function b");
        console.log(`my parent variable is ${parent_variable}`)
        console.log(`my child variable is ${child_variable}`)

    }
    b()
}
a()

