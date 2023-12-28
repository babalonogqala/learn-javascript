//creating a function using paremeters
function displayFullName(lastname, firstname) {
  const fullname = lastname + firstname;
  return fullname; //with a return statement
}

const myAnswer = (document.getElementById("text").innerHTML = displayFullName(
  "nogqala",
  " babalo"
)); //pulling the function of the fullname

//other example
function calculateNum(num1, num2) {
  const myAnswer = num1 + num2;
  document.getElementById("number").innerHTML = myAnswer;
}

calculateNum(10, 12);

// events
const popUp = document.getElementById("popup");

function clickBtn() {
  alert("the button was clicked, and the task output a popout");
}

popUp.onclick = clickBtn;
