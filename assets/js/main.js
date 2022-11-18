
$("ul").on("click","li",function(){ //event delegation
	$(this).toggleClass("done");
});
$(".fa-plus").on("click",function(){
	$("input").slideToggle();
	$(".fa-plus").toggleClass("rot");
});
$("ul").on("click",".del",function(event){  //event delegation
	event.stopPropagation();
	$(this).parent().fadeOut("fast",function(){
	$(this).remove();
	/*does lead to the event getting stiken through first when we click on delete*/
	});
});
$('input[type="text"]').on("keypress",function(event){
	if(event.which==13 && $(this).val()!="") /*which==13 for enter key and !+"" to not add entries when enter is pressed on an empty input window*/
  {$("ul").append('<li><span class="del"><i class="fas fa-trash-alt"></i></span> '+capitalizeFirstLetter($(this).val())+"</li>");
	$(this).val("");/*clears the input window*/
    }
});

const capitalizeFirstLetter = ([ first, ...rest ], locale = navigator.language) =>
  first === undefined ? '' : first.toLocaleUpperCase(locale) + rest.join('')
