//w.a.p to find  where 2 is present in the array or not
arr=[10,11,2,12,3,4]
search_item=2
ispresent=false

for(item of arr){
    if(item ==search_item){
        ispresent=true
        break;
    }

}
console.log(ispresent ?  'search item 2 is present ' : 'search item 2 is not present');



console.log('-----------------------------');

//w.a.p to print a to o/p=>[11,10,9]---logic 15-2=9,15-5=10....
a=[4,5,6]
b=[]
sum=0
for(item of a){
    sum+=item
    

}
for(item of a){
    b.push(sum-item)
}
console.log(b);


console.log('-----------------------------');

//w.a.p to find the duplicate element from the array
c=[10,20,30,20,30,40,50,60,10]
o=[]

for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=c.length-1;j++){
        if(c[i]==c[j]){
            o.push(c[i])
            
        }

    }
}
console.log(o.length==0 ?'no duplicates':o);

console.log('-----------------------------');

//w.a.p to find the pairs whose sum is 6
c=[2,3,4,5]//2+4=6
sum=6
ispresent=false

for(i=0;i<=c.length-1;i++){
    for(j=i+1;j<=c.length-1;j++){
        if(c[i]+c[j]==sum){
            console.log(`${c[i]},${c[j]}`);
            ispresent=true

            

        }
    }

}
!ispresent && console.log('no pairs found')



console.log('-----------------------------');

//w.a.p to find duplicates in two array
p=[10,11,12,20,30]
q=[11,20,25,30,33]
r=[]

for(i=0;i<=p.length-1;i++){
    for(j=0;j<=q.length-1;j++){
        if (p[i]==q[j]){
            r.push(p[i])

            
            

        }

        
    }
}
console.log(r);

