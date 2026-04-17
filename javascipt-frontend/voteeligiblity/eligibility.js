function clickChange() {
  console.log(age.value);
  if (age.value) {
    if (age.value > 18) {
      const content = document.getElementById("result");
      content.innerHTML = "eligible for voting";
      result.style.color = "green";
    } else if (age.value < 18) {
      result.innerHTML = "Not eligible for voting";
      result.style.color = "red";
    } else{
      result.innerHTML = "please enter a valid value";
      result.style.color='blue'
    }

  }
  else{
    result.innerHTML='please enter a value'
    result.style.color='orange'
  }
}
//eligible for voting green color

//not eligible for voting red color

//no value -please enter a value blue color

//not a value please ente a value yellow color
