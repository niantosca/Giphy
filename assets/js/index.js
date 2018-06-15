$(document).ready(function() {

var shows=["The Sopranos", "Parks and Rec", "Westworld", "Seinfeld", "Mad Men"];

function displayShowInfo() {
    var show = $(this).attr("data-name");
    var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=xUbmVn7I1sl2WIHjIbFw264N6EEcaTAK&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
          var imgURL = response.data;

          for (var i = 0; i < imgURL.length; i++) {
        var showDiv = $("<div class='show'>");
        var rating= imgURL[i].rating;
        var pUno= $("<p>").text("Rating: " + rating);

        
        var image = $("<img>")
        image.attr("src", imgURL[i].images.fixed_height_still.url);
        image.attr("data-state", "still");
        image.attr("data-still", imgURL[i].images.fixed_height_still.url);
        image.attr("data-animate", imgURL[i].images.fixed_height.url);
        image.addClass("gif");

          showDiv.append(image);
          showDiv.append(pUno);

          $("#showButtons").prepend(image);
          $("#showButtons").prepend(pUno);
          
}
})
}

    function makeButtons() {
    
                $("#buttons-view").empty();

        for (var i = 0; i < shows.length; i++) {

          var a = $("<button>");
          a.addClass("show-btn");
          a.attr("data-name", shows[i]);
          a.text(shows[i]);

          a.on("click", displayShowInfo);
          $("#buttons-view").append(a);
          
        }
      }
    
    
    

      $("#addShow").on("click", function(event) {
        event.preventDefault();
       
        var show = $("#show-input").val().trim();

        shows.push(show);

        makeButtons();
      });
      

      makeButtons();
   
      $("body").on("click", ".gif", function(event) {
        var state = $(this).attr("data-state");
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
  

      });
    });


        
