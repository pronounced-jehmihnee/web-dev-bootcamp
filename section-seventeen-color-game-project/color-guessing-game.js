//initialize variables
var numsquares = 6;
var colors = [];
var pickedcolor;

//initialize selectors
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("color-display");
var feedbackdisplay = document.querySelector("#feedback-display");
var headercolor = document.querySelector("h1");
var resetbtn = document.querySelector("#reset-colors");
var modebtns = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listener(s)
    modebtnlisteners();
    //square click event listeners
    squarelisteners();

    restart();
};

function modebtnlisteners(){
    for(var i = 0; i < modebtns.length; i++){
        modebtns[i].addEventListener("click", function(){
            modebtns[0].classList.remove("selected");
            modebtns[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "easy"){
                numsquares = 3;
            }
            else{
                numsquares = 6;
            }
            restart();
        });
        
    }
};

function squarelisteners(){
    for(var i = 0; i < squares.length; i++){
        //click listeners
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedcolor = this.style.backgroundColor;
            //compare color to winning color
            if(clickedcolor === pickedcolor){
                feedbackdisplay.textContent = "correct!";
                resetbtn.textContent = "play again?";
                changeColors(clickedcolor);
                headercolor.style.backgroundColor = clickedcolor;
            }
            else{
                this.style.backgroundColor = "#232323";
                feedbackdisplay.textContent = "try again";
            }
            
        });
    }
};




resetbtn.addEventListener("click", function(){
    restart();
});

function restart(){
    //generate all new colors
    colors = generateRandoColors(numsquares);
    //pick new winning color
    pickedcolor = pickColor();
    //change color display to winning color
    colordisplay.textContent = pickedcolor;
    //change reset button message
    resetbtn.textContent = "new colors";
    //hide feedback-display message
    feedbackdisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    headercolor.style.backgroundColor = "#4682b4";
}

function changeColors(color){
    //loop thru all squares
    for(var i = 0; i < squares.length; i++){
        //change squares to winning color
        squares[i].style.backgroundColor = color;
    }
    

};

function pickColor(){
    var rando = Math.floor(Math.random() * colors.length);
    return colors[rando];
};

function generateRandoColors(num){
    //make an array
    var arr = [];
    //add num random colors to an array
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
};

function randomColor(){
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
};
