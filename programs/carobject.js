//hw
car={
    name:"baleno",
    model:"hatch back",
    manufacturer:"maruthi",
    price:"10 lakhs"
}

//display car name and manufacturer name
console.log('---------------------------');

console.log(car.name,"and manufacturer is ",car.manufacturer);


console.log('---------------------------');
//check whether model key is present or not if present display the value
"model" in car && console.log(car.model);

console.log('---------------------------');
//add variant key to the car object with value as maunel
car["variant"]=["Manuel"]
console.log(car);

console.log('---------------------------');

//update a new value "automatic to the car varient"\
car["variant"].push("automatic")
console.log(car);



console.log('---------------------------');

//create a new key "color" and value as "red","green","yellow"
car["color"]=["red","green","blue"]
console.log(car);


console.log('---------------------------');
pattern="ABCDBAA"
//w.a.p to find the first recursive letter->recursive letter=B
// words=pattern.split("")
// console.log(words);
pattern="ABCDBAA"
//w.a.p to find the first recursive letter->recursive letter=B
// words=pattern.split("")
// console.log(words);
otp={}
for(letter of pattern){
    console.log(letter);
    if (letter in otp){
        console.log('----');
        
        console.log(letter);
    
        
    }
    else{
        otp[letter]=1
    }
    
}
        
    


console.log('---------------------------');
console.log('---------------------------');
