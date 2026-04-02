let num1 = 100;
let num2 = 200;
let num3 = 300;

if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(`Second largest: ${num2}`);
        console.log(`Descending: ${num1}, ${num2}, ${num3}`);
    } else {
        console.log(`Second largest: ${num3}`);
        console.log(`Descending: ${num1}, ${num3}, ${num2}`);
    }

} else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        console.log(`Second largest: ${num1}`);
        console.log(`Descending: ${num2}, ${num1}, ${num3}`);
    } else {
        console.log(`Second largest: ${num3}`);
        console.log(`Descending: ${num2}, ${num3}, ${num1}`);
    }

} else {
    if (num1 > num2) {
        console.log(`Second largest: ${num1}`);
        console.log(`Descending: ${num3}, ${num1}, ${num2}`);
    } else {
        console.log(`Second largest: ${num2}`);
        console.log(`Descending: ${num3}, ${num2}, ${num1}`);
    }
}