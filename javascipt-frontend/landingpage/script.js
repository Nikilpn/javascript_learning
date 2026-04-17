class Landing {
  //property

  dataBase = {
    manu: { username: "manu", password: "manu@123" },
    nikhil: { username: "nikhil", password: "nikhil@123" },
    arjun: { username: "arjun", password: "arjun@123" },
    rahul: { username: "rahul", password: "rahul@123" },
    anjali: { username: "anjali", password: "anjali@123" },
  };

  //methods
  savedata() {
    localStorage.setItem("dataBase", JSON.stringify(this.dataBase));
  }

  getData() {
    this.dataBase = JSON.parse(localStorage.getItem("dataBase"));
    console.log(this.dataBase);
  }
  register() {
    console.log(registerUser.value);
    console.log(registerPassword.value);
    if (registerUser.value == "" || registerPassword.value == "") {
      alert("Fill the details");
    } else {
      if (registerUser.value in this.dataBase) {
        alert("user already exists");
      } else {
        this.dataBase[registerUser.value] =
          { username: registerUser.value, password: registerPassword.value };
        console.log(this.dataBase);

        this.savedata();
        alert("user registered successfully");
        window.location="login.html"
      }
    }
  }

  login(){

    console.log(loginUser.value);
    console.log(loginPassword.value);
    this.getData()

    if(loginUser.value =="" || loginPassword.value==""){
        alert("fill in the detals")
    }else{
        if(loginUser.value in this.dataBase){
            if(this.dataBase[loginUser.value].password==loginPassword.value){
                localStorage.setItem("user",loginUser.value)
                alert("login successfully")
                window.location="index.html"
            }else{
                alert("wrong password")
            }

        }else{
            alert("invalid credentils")
        }
    }
    
    
  }
}

const obj = new Landing();
// obj.savedata();
obj.getData();
