var alerting = document.getElementById('myalert');
var span = document.getElementsByClassName("close")[0];

function zonny_alert(text) {
   alerting.style.display = "block";
   //we need to change content of the alert block. 
   // the p element which is in the .alert-content class
   // the content should have a value .alert-content p
   var text_element = document.querySelector(".alert-content p")
   //you need to change the <p> element content to have as an ouput the variable text
     text_element.innerText = text;
}
span.onclick = function() {
   alerting.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == alerting) {
     alerting.style.display = "none";
   }
}
