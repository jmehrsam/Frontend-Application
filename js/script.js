$(function () {
    // Once the button is pressed, the values are retrieved
    $('#submit').on("click", function(){
        // Retrieving selected Type
        var selType = document.getElementById("selectType").value
        // Retrieving chosen number
        var number = document.getElementById("selectNumber").value
        // Function call to make API request, passing variables
        if (number !== ""){
          document.getElementById("warning").innerText = null
          apiCall(number, selType)
        }
        else{
          var warning = "Warning: Type a number"
          document.getElementById("warning").innerText = warning
        }
    })
    
    // Function to call API and display data
    function apiCall(number, selType){
        // Making AJAX request and combining parameters to form URL to save output in variable
        var output = $.ajax({type: "GET" , url:"http://numbersapi.com/"+ number +"/" + selType, async: false}).responseText
        // Display output in site
        document.getElementById("output").innerText = output
    }
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}