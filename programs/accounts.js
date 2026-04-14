accounts = [
  {
    acno: 1000,
    ac_type: 'savings',
    balance: 45000,
    transaction: [
      { to: 1001, amount: 5000, msg: 'ebill',    mode: 'gpay' },
      { to: 1002, amount: 7000, msg: 'emi',      mode: 'neft' },
      { to: 1003, amount: 1000, msg: 'recharge', mode: 'phonepay' }
    ]
  },

  {
    acno: 1001,
    ac_type: 'current',
    balance: 30000,
    transaction: [
      { to: 1000, amount: 9500, msg: 'transfer', mode: 'gpay' },
      { to: 1002, amount: 2500, msg: 'shopping', mode: 'card' }
    ]
  },

  {
    acno: 1002,
    ac_type: 'fixed',
    balance: 100000,
    transaction: [
      { to: 1003, amount: 5000, msg: 'loan',     mode: 'neft' },
      { to: 1001, amount: 1200, msg: 'refund',   mode: 'upi' }
    ]
  },

  {
    acno: 1003,
    ac_type: 'savings',
    balance: 30000,
    transaction: [
      { to: 1000, amount: 800,  msg: 'bill',     mode: 'phonepay' },
      { to: 1002, amount: 2200, msg: 'transfer', mode: 'gpay' }
    ]
  }
]

//1.total number of accounts

console.log(`total number of accounts :${accounts.length}`);

//2.print account number where accounttype is savings
accounts.forEach(acc => {
    if (acc.ac_type === "savings") {
        console.log(` account no where acc is savings ${acc.acno}`);
    }
});

//2.print account number where accounttype is savings
accounts.forEach((acc)=>{acc.ac_type=='savings' && console.log(acc.acno);
})

//3.print the balance of account number 1000
console.log('the balance of account number 1000');


console.log(accounts.find((item)=>item.acno=='1000').balance);


//4.print all gpay transactions
console.log('all gpay transactions');
demo=accounts.map((item)=>item.transaction).flat().filter((item)=>item.mode=='gpay')
console.log(demo);

console.log('-------');


//5.print all transaction whose amount >5000
accounts.map((item)=>item.transaction).flat().filter((item)=>item.amount>5000).forEach((item)=>console.log(item))

//6.print credit transaction of account 1002

console.log('----credit transaction of account 1002---');

credit=accounts.map((item)=>item.transaction).flat().filter((item)=>item.to==1002)
console.log(credit);

//7.print debit transaction of account 1002

console.log('----debit transaction of account 1002---');
debit=accounts.find((item)=>item.acno==1002).transaction
console.log(debit);


//8.transaction history
console.log('----transaction history--');
transaction_history={
    credit:credit,
    debit:debit
}
console.log(transaction_history);


//spread operator--merging of two different array

history=[...credit,...debit]
console.log(history);

//print the highest balance account details
console.log('---highest balance account details--');

console.log(accounts.reduce((data1,data2)=>data1.balance>data2.balance?data1:data2));
