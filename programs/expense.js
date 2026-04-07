expense=[12000,5000,28000,10000,6000]

//1.find the least expense -5000
min_expense=expense[0];
for (i=0;i<=expense.length-1;i++){
    // console.log(expense[i])
    if (expense[i]<min_expense){
        min_expense=expense[i]
    }
    
};
console.log("least expense",min_expense)

//2.find the largest expense-28000

max_expense=expense[0];
for(i=0;i<=expense.length-1;i++){
    if(expense[i]>max_expense){
        max_expense=expense[i]
    }
};
console.log('max expense is: ',max_expense);

//3.find the total expense
total_expense=0
for(exp of expense){
    total_expense+=exp
    
}
console.log('total expense is :',total_expense)

//find the total expense 
total=0
for(i=0;i<=expense.length-1;i++){
    total+=expense[i]
}
console.log('total expense is:',total);
