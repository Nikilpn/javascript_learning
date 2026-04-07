//sort
a=[10,20,50,30,4,5]

newArray=a.sort((x,y)=>x-y)
console.log(newArray); //ascending order

newArray=a.sort((x,y)=>y-x)
console.log(newArray); //descending order
