//array
weekdays=["Monday","Tuesday","Wednesday"]
console.log(weekdays);
console.log(typeof(weekdays));

console.log(weekdays[0]);
console.log(weekdays[weekdays.length-1]);

console.log("-------------------------------")

//w.a.p to print all the items in an array using loop
for(i=0;i<weekdays.length;i++){
    console.log(weekdays[i]);
}
//w.a.p to print all the items in an array using while loop
j=0
while(j<=weekdays.length-1){
    console.log(weekdays[j]);
    j++;
}
console.log("-------------------------------");

for(let k in weekdays){
    console.log(weekdays[k]);
}
console.log("-------------------------------");
for (let l of weekdays){
    console.log(l);
}