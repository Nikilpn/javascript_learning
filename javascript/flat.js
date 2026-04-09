//flat method

a=[[2,3],[4,6,[5,7],[20,34,[33,55,[44,56]]]]]

console.log(a);
console.log(a.flat(1));
console.log(a.flat(2));
console.log(a.flat(3)); //to convert 3 dimension array to single array
console.log(a.flat(Infinity)); //to convert infinity array to single array