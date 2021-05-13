//For alerting popup
let fullName = prompt( "What is your good name?" );
let Email = prompt( "What is your email" )
alert( "Thank you" + " " + fullName + "!" + " " + "We will keep in touch.✍️" );

//Change the end part of h3 content
function myFunction() {
return " Seats are still available"
}
document.getElementById( "special" )
special.innerHTML = myFunction();

//Try with numbers
let x = 10;
let y = 20;
let z = x + y * ( x + y );
alert( z );


//Try another
let country = "Switzerland";
let city = "Aargau";
let sentence = `I am from Kanton ${ city } in ${ country }`
alert( sentence );

//Replace H1
function apply() {
  let firstName = prompt("What is your first name?");
  let age = prompt("How old are you?");
  let heading = document.querySelector("h1");
  if (age >=16) {
      heading.innerHTML =
          "Hi " + firstName + "! Welcome to NGG class 👩‍💻";
  } else {
    heading.innerHTML =
      "Sorry " + firstName + ", you can't apply to NGG Class.";
  }
}
let applyButton = document.querySelector(".active");
applyButton.addEventListener("click", apply);
