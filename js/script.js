$(function () {
    // Once the button is pressed, the values are retrieved
    $('#submit').on("click", function(){
        // Retrieving selected Type
        var selType = document.getElementById("selectType").value
        // Retrieving chosen number
        var number = document.getElementById("selectNumber").value
        // Function call to make API request, passing variables
        if (number !== ""){
            apiCall(number, selType)
        }
        else{
            alert("Type a number")
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