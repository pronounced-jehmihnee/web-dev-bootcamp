var btn = document.querySelector("button");
var isColored = false;

btn.addEventListener("click", function(){

    if(isColored) {
        document.body.style.backgroundColor = "white";
        isColored = false;
    }
    else{
        document.body.style.backgroundColor = "purple";
        isColored = true;
    }

});

