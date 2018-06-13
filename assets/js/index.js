$(document).ready(function() {

var shows=["The Sopranos", "Parks and Rec", "Westworld", "Seinfeld", "Mad Men"];

function displayShowInfo() {
    var show = $(this).attr("data-name");
    var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=Y1nPq4QD6NDtKC6ZwJFTJuGj8SP0CbLO&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);

          for (var i = 0; i < results.length; i++) {
          

        var showDiv = $("<div class='show'>");

        var rating= response.rating;

        var pUno= $("<p>").text("Rating: " + rating);

        showDiv.prepend(pUno);
        

        var imgURL = response.data;

          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);

          // Appending the image
          showDiv.prepend(imgURL);

          // Putting the entire movie above the previous movies
          $("#showButtons").prepend(image);
          
};
})


   //YOU NEED AN ON-CLICK EVENT HERE FOR YOUR SUBMIT BUTTON (DUH)
    $("#addShow").on("click", function(event) {
        event.preventDefault();
        displayShowInfo();
        

   

   
        function makeButtons() {
        // Deleting the movies prior to adding new shows
        
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of shows
        for (var i = 0; i < shows.length; i++) {

          // Then dynamicaly generating buttons for each show in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of show-btn to our button
          a.addClass("show-btn");
          // Adding a data-attribute
          a.attr("data-name", shows[i]);
          // Providing the initial button text
          a.text(shows[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      $("#addShow").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var show = $("#show-input").val().trim();

        // Adding movie from the textbox to our array
        shows.push(show);

        // Calling renderButtons which handles the processing of our movie array
        makeButtons();
      });
      
      $(document).on("click", ".show-btn", displayshowInfo);

      // Calling the renderButtons function to display the intial buttons
      makeButtons();
    });
