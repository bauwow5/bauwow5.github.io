window.addEventListener("DOMContentLoaded", domLoaded);
// When the DOM has finished loading, add the event listeners.
function domLoaded() {
   // TODO: Use addEventListener() to register a click event handler for the convert button.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#add_a_simple_listener

   const convert_btn = document.getElementById("convertButton");
   convert_btn.addEventListener("click", convert);


   let f_input = document.getElementById("F_in");
   let c_input = document.getElementById("C_in");
   f_input.addEventListener("input", clearC);
   c_input.addEventListener("input", clearF);


   // Add event listeners to handle clearing the box that WAS NOT clicked,
   // e.g., the element C_in listens for 'input', with a callback fn to
   // execute after that event does happen. 
   // You don't send arguments to the event handler function.
   // So, if you want the event handler to call another function that
   // DOES take arguments, you can send that other function as a callback.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#event_listener_with_anonymous_function
   // Here is an example of anonymous event handler fn that calls alert with an argument:
   // document.getElementById("weatherIcon").addEventListener("click", function() {alert("You clicked the icon.")})

}
// TODO: (Part of the above is to write the functions to be executed when the event handlers are invoked.)


function clearF() {
   let f_input = document.getElementById("F_in");
   f_input.value = "";
}

function clearC() {
   let c_input = document.getElementById("C_in");
   c_input.value = "";
}

function convert() {

   let f_input = document.getElementById("F_in");
   let c_input = document.getElementById("C_in");
   let C = parseFloat(c_input.value);
   let F = parseFloat(f_input.value);
   
   if (!isNaN(C)){
      let F = convertCtoF(C);
      weatherIcon(F);
      f_input.value = F;
   }

   else if (!isNaN(F)) {
      weatherIcon(F);
      c_input.value = convertFtoC(F);
   }
   else{
      let msg = document.getElementById("message");
      msg.innerHTML = "Enter a temperature to convert.";
   }
}

function convertCtoF(C) {
   let F = C * 9/5 + 32;
   return F;
   // TODO: Return temp in °F. 
   // °F = °C * 9/5 + 32
}

function convertFtoC(F) {
   const C = (F-32) * 5/9;
   return C;
   // TODO: Return temp in °C. 
   // °C = (°F - 32) * 5/9
}

function weatherIcon(S)
{
   console.log("weather icon");
   let pic = document.getElementById("weatherIcon");
   if (-200 < S && S <= 32)
   {
      console.log("cold");
      pic.src = "images/cold.png";
      pic.alt = "cold";
   }
   else if (32 < S && S < 90) {
      pic.src = "images/cool.png";
      pic.alt = "cool";
   }
   else if (90 <= S && S < 200) {
      pic.src = "images/hot.png";
      pic.alt = "hot";
   }
   else if (-200 >= S || S >= 200) {
      console.log("dead");
      pic.src = "images/dead.png";
      pic.alt = "dead";
   }
   else {
      pic.src = "images/C-F.png";
   }

}
// TODO: write a fn that can be called with every temp conversion
// to display the correct weather icon.
// Based on degrees Fahrenheit:
// 32 or less, but above -200: cold
// 90 or more, but below 200: hot
// between hot and cold: cool
// 200 or more, -200 or less: dead
// both input fields are blank: C-F
