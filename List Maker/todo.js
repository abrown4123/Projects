//check off todos with click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//delete todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});


//add new todo
$('input').keypress(function(e){
	if(e.which === 13){
		//new todo text after hitting enter
		var text = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + text + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input").fadeToggle();
});