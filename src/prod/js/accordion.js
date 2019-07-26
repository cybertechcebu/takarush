$(function(){
	$("button.orng").on("click", function() {
		$(this).next(".hidden_box") .slideToggle();
		$("button.orng .arw-dwn") .toggleClass("arw-dwn2");
	});
});

$(function(){
	$("button.blu").on("click", function() {
		$(this).next(".hidden_box") .slideToggle();
		$("button.blu .arw-dwn") .toggleClass("arw-dwn2");
	});
});
