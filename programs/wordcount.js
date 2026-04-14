text="hai hello all hello world all"


//w.a.p to get the word count from the given text
//o/p=>(hai=1,hello=2.all=2,world=1)

words=text.split(" ")
console.log(words);
op={}

for(w of words){
    console.log(w);
    if(w in op){
        op[w]+=1
    }
    else{
        op[w]=1
    }
    
}
console.log(op);

