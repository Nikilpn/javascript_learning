//vowels printing
sentence="good morning all"

vowels=['a','e','i','o','u','A','E','I','O','U']
o=[]
newArray=Array.from(sentence)
console.log(newArray);
for(char of newArray){
    if(vowels.includes(char)){
        // console.log(char);
        
        o.push(char)
        

    }
}


console.log(o);


console.log('--------------------');
Array.from(sentence).filter((char)=>vowels.includes(char)).forEach((item)=>console.log(item))

