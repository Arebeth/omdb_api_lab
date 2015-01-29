$(document).ready(function() {
	

	$("form").on("submit", function(e) {
		e.preventDefault();
		$("li").remove();
		$("h1").remove();
		var query = $("#movieName").val();
		$.getJSON('http://www.omdbapi.com/?s=' + query, function (result) {
			if (result.Response === "False") {
				$("ol").append("<h1>Sorry, no results were found.</h1>");
			} else {
			//for (var i = result.Search.length - 1; i >= 0; i--) {
				for (var i = 0; i < result.Search.length; i++) {
					$("ol").append("<li>" + "<a href='#'>" + result.Search[i].Title + "</a>" + "</li>");				
				}
			}
		});
	});

});