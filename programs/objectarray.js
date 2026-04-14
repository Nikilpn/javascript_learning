products = [
  { pid: 100, pName: 'apple',     band: '5g', price: 120000, display: 'led' },
  { pid: 101, pName: 'samsung',   band: '5g', price: 45000,  display: 'led' },
  { pid: 102, pName: 'blackberry',band: '4g', price: 50000,  display: 'led' },
  { pid: 103, pName: 'nokia',     band: '3g', price: 1200,   display: 'lcd' },
  { pid: 104, pName: 'motorola',  band: '4g', price: 10000,  display: 'lcd' }
]
//1.print product name only
console.log('----product name only----');
products.forEach((pro)=>console.log(pro.pName))


//2.print all mobile details whose display is lcd
console.log('----all mobile details whose display is lcd----');
products.filter((pro)=>pro.display=='lcd').forEach((item)=>console.log(item.pName));

//3.print 5g mobile phone number


console.log('----5g mobile phone number----');

products.filter((pro)=>pro.band=='5g').forEach((item)=>console.log(item.pName))

//4.sort mobile number based on price

console.log('----mobile number based on price----');
products.sort((pro1,pro2)=>pro1.price-pro2.price).forEach((item)=>console.log(item.pName));


//print costly mobile number
console.log('----costly mobile number---');


console.log(products.reduce((pro1,pro2)=>pro1.price>pro2.price ?pro1:pro2));


console.log('----low cost mobile ----');
//6.low cost mobile 
console.log(products.reduce((pro1,pro2)=>pro1.price<pro2.price ?pro1:pro2));

