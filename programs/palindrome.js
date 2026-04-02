//w.a.p to check a given number is palindrome or not?

input=232
temp=input
lastDigit=0
rev=0


while(input>0){
    lastDigit=input%10
    rev=rev*10+lastDigit
    input=Math.floor(input/10)


};
console.log(rev)
if (temp==rev){
    console.log("palindrome");
}else{
    console.log("not palindrome")
};