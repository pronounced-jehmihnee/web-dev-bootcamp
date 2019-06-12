$(document).ready(function () {
    //select all divs and give them a purple background
    $("div").css("background", "purple");
    //select all divs with class "highlight" and make them 200 px wide
    $(".highlight").css("width", "200px");
    //select the div with id "third" and give it an orange border
    $("#third").css("border", "solid orange 2px");
    //bonus: select the first div only and change it's font color to pink
    $("div:first").css("color", "pink");

  });