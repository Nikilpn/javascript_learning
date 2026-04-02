//w.a.p to print the given out corresponding a given input
//  input 2-output 24  -----2*12
//  input 3- output 369------3*123
//  input 4-output 49362-----4*1234

input=3
i=1
output=0



while (input>=i){
    output=output*10+i
    i++;
};
console.log(output*input)