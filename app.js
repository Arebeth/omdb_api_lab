//Wait until HTML page is loaded before starting the JS...
$(document).ready(function() {
	
//listen for the submit event on the form(page's only form)...
	$("form").on("submit", function(e) {
		//prevent default action
		e.preventDefault();
		//clear out any previous search items
		$("li").remove();
		$("h1").remove();
		//define variable "query" to be the value of the movie name
		var query = $("#movieName").val();
		//use .getJson call on omdb's api and concatonate the "query" variable into the api. 
		//pass "result" into the function, though it could be "taco"
		$.getJSON('http://www.omdbapi.com/?s=' + query, function (result) {
			//if you search call for the movie name and it doesn't exist, it gives back "Response: False"
			//make an if/else statement
			//if no movie title is returned (i.e. result.Response === "False"), add a note saying "no results found"
			if (result.Response === "False") {
				$("ol").append("<h1>Sorry, no results were found.</h1>");
			//else (i.e. if movie(s) are found), run a loop over all the results and print each one
			} else {
			//for (var i = result.Search.length - 1; i >= 0; i--) {
				for (var i = 0; i < result.Search.length; i++) {
					//add a list item in ordered list with the movie title inside the links
					//a & href were going to be used in the bonus
					$("ol").append("<li>" /*+ "<a href='#'>"*/ + result.Search[i].Title + /*"</a>" + */"</li>");				
				}
			}
		});
	});

});