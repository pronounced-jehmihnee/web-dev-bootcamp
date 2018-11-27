var todos = [];

var input = prompt("what would you like to do?");

while(input !== "quit"){
    //handle input
    if(input === "list"){
      listTodos();
    }
    else if(input === "new"){
      addTodo();
    }
    else if(input === "delete"){
      delTodo();
    }
    //ask again for new input
    var input = prompt("what would you like to do?");
}
console.log("application exit")

function listTodos(){
  console.log("=================");
  todos.forEach(function(todo, number){
    console.log(number + 1 + ": " + todo);
  });
    console.log("=================");
}

function addTodo(){
  //as for new to-do
  var newTodo = prompt("enter new item to do");
  //add to to-do array
  todos.push(newTodo);
  alert("to-do item added");
}

function delTodo(){
  //ask for index of to-do item to be deleted
  var index = prompt("enter numeral of to-do item to delete");
  //delete that to-do item
  todos.splice(index-1,1);
  alert(todos[index-1] + " deleted");
}
