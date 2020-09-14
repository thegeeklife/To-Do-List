//add listener only to li, it will only listen to the pre-existing lis.
//add listener to ul and then li inside it
$("ul").on("click", "li", function(){
	//if li is gray turn it black else turn gray
	// if($(this).css("color")==="rgb(128, 128, 128)"){
	// 	$(this).css({
	// 	color:"black",
	// 	textDecoration:"none"
	// });
	// }else{
	// 	$(this).css({
	// 	color:"gray",
	// 	textDecoration:"line-through"
	// });
	// }
	$(this).toggleClass("completed");
})

$('ul').on("click","span",function(event){
	//X clicked delete todo, parent of the span which is the li
	$(this).parent().fadeOut(400,function(){
		$(this).remove();
	})
	//prevent from clicking other events
	event.stopPropagation();
	
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //enter key - 13
		var todoText = $(this).val()
		$(this).val("");
		//create new li and add to ul
		//using append.
		$("ul").append("<li><span> <i class='fas fa-minus-circle'></i> </span>" +  todoText + "</li>");

	}
})

$('.fa-plus').click(function(){
	$('input[type ="text"]').fadeToggle()
})