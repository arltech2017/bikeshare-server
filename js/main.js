var alerting = document.getElementById('myalert');
var span = document.getElementByClassName("close")[0];

function zonny_alert() {
   alerting.style.display = "block";
}
span.onclick = function() {
   alerting.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == alerting) {
     alerting.style.display = "none";
   }
}
