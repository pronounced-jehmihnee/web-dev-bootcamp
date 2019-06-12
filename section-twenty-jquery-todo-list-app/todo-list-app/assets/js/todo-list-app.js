//jQuery To-Do project

// check off list items by clicking
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});

//click on X to delete to-do item
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        //pulling new to-do text from input
        var todoItem = $(this).val();
        //clear textbox
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-eraser'></i></span> " + todoItem + "</li>");
    }
});

$(".fa-caret-square-up").click(function(){
    $("input[type='text']").fadeToggle();
});