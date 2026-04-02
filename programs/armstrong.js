//w.a.p to find the number is armstrong or not
//armstrong number 153=1**3  +  5**3  + 3**3=153

num=153
sum=0
temp=num
rem=0


while(num>0){
    rem=num%10
    sum=sum+(rem**3)
    num=Math.floor(num/10)
    

};
console.log(temp==sum? "factorial":"not factorial")