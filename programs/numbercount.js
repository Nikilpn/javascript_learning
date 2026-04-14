//w.a.p to find count count
numArray=[10,20,30,20,40,50,60,10]

o={}

for(num of numArray){
    console.log(num);
    if(num in o){
        o[num]+=1
    }
    else{
        o[num]=1
    }
    
}
console.log(o);

