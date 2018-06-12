
function zonny_alert(element_id, text) {
   var alerting = document.getElementById(element_id);
   var span = alerting.getElementsByClassName("close")[0];
   window.onclick = function(event) {
      if (event.target == alerting) {
        alerting.style.display = "none";
      }
   }
   span.onclick = function() {
      alerting.style.display = "none";
   }
   alerting.style.display = "block";
   //we need to change content of the alert block. 
   // the p element which is in the .alert-content class
   // the content should have a value .alert-content p
   var text_element = alerting.querySelector(".alert-content p")
   if (text_element) {
   //you need to change the <p> element content to have as an ouput the variable text
     text_element.innerText = text;
   }
}
