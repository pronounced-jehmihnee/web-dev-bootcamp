var p1btn = document.querySelector("#p1");
var p2btn = document.querySelector("#p2");
var resetbtn = document.querySelector("#reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var scoreinput = document.querySelector("input[type=number]")
var winningscoredisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningscore = 5;

p1btn.addEventListener("click", function(){
    if(!gameover){
        p1score = p1score + 1;
        if(p1score === winningscore){
            p1display.classList.add("winner");
            gameover = true;
        }
        p1display.textContent = p1score;
    }
    
});

p2btn.addEventListener("click", function(){
    if(!gameover){
        p2score = p2score + 1;
        if(p2score === winningscore){
            p2display.classList.add("winner");
            gameover = true;
        }
        p2display.textContent = p2score;
    }
    
});

resetbtn.addEventListener("click", function(){
    reset();
});

scoreinput.addEventListener("change", function(){
    winningscoredisplay.textContent = scoreinput.value;
    winningscore = Number(scoreinput.value);
    reset();
});

function reset(){
    gameover = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
}
