class bank {

    // property
    accountDetails = {
        1000: { acno: 1000, username: "userone", password: "userone", balance: 5000 },
        1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 10000 },
        1002: { acno: 1002, username: "userthree", password: "userthree", balance: 6000 },
        1003: { acno: 1003, username: "userfour", password: "userfour", balance: 2000 }
    }
  
    // w.a. method to validate an account
    validate(accno){
        return accno in this.accountDetails ?true :false

    }

    // w.a. method to authenticate an account

    authenticate(accno,pswd){
        if(this.validate(accno)){
            // console.log("account found");
            if(this.accountDetails[accno].password==pswd){
                console.log('authenticate success');
                
            }
            else{
                console.log('incorrect account details');
                
            }
            

        }else{
            console.log('account not found');
            

        }

        }
    


    // w.a. method to check the balance of an account

    checkBalance(accno,pswd){
        if (this.validate(accno)){
            console.log('account number is valid');
            if(this.accountDetails[accno].password==pswd){
                // console.log('authenticate success');
                console.log(this.accountDetails[accno].balance);
                
                
          
                
                
            }
            else{
                console.log('invalid user credentials');
                
            }

            

        }
        else{
            console.log('account number is not valid');
            
        }
    }

    // w.a. method to transfer an amount from one account to another
    transferAmount(fromacno,pswd,toAcno,amount){
        if (this.validate(fromacno) && this.validate(toAcno)){
            console.log('account number details  is valid');
            if(this.accountDetails[fromacno].password==pswd){
                if(this.accountDetails[fromacno].balance>=amount){
                    this.accountDetails[fromacno].balance-=amount
                    console.log(`your current account number ${fromacno} balance is: ${this.accountDetails[fromacno].balance}`);
                    
                    this.accountDetails[toAcno].balance+=amount

                    console.log(`the current balance  amount of acc no: ${toAcno} is ${this.accountDetails[toAcno].balance}`);
                    


                }else{
                    console.log('insufficient amount');
                    
                }
                


            }
            else{
                console.log('invalid login credentials');
                
            }
            

        }
        else{
            console.log('account number is not valid');
            
        }
    }

}




const obj=new bank()
// obj.validate(1000)


console.log(obj.validate(1000) ? 'account exists' : 'account not found');

// obj.authenticate(1000,'userone')
// obj.checkBalance(1000,'userone')

obj.transferAmount(1000,"userone",1003,1000)