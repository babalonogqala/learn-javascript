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

const myName = document.getElementById("btn");
function displayName() {
  alert("babalo ace");
}
const output = myName.addEventListener("click", displayName);

// method

const person = {
  Name: "Babalo",
  age: 20,
  details: function () {
    alert("my name is " + this.Name + " and my years of age is " + this.age);
  }
};

// user input
function userInput() {
  const userdetails = window.prompt("hello the what is your name");
  const user = "welcome";
  alert(user + userdetails);
}
