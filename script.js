
var toDoItems=[];


function ToDo (description) {
  this.description = description;
  this.complete = false;

}

ToDo.prototype.completeToDo= function(){
  this.complete=!this.complete;
}




function buildToDo(todo, index) {
 
  var toDoShell= document.createElement('div');
  toDoShell.className = 'toDoShell'; 
  

  let toDoText= document.createElement('span');
  toDoText.innerHTML= todo.description;
  toDoText.id= index;

  toDoText.addEventListener('click', completeToDo)

  if(todo.complete === true){
    toDoText.className='completeText'
  } 

  
  toDoShell.appendChild (toDoText);


  let x =document.createElement('div');
  x.innerHTML="X";
  x.className='closeToDo';
  
  toDoShell.appendChild(x);

 x.addEventListener('click', removeToDo)
 
  
  
  return toDoShell;
}



function buildToDos(toDos) {
  var arr= toDos.map(buildToDo)
  return arr;
}



function displayToDos() {

 let toDoContainer = document.querySelector('#toDoContainer');
 toDoContainer.innerHTML= '';
 let result=buildToDos(toDoItems);
 for( let i=0; i<result.length; i++ ){
   toDoContainer.appendChild(result[i]);
 }

}



function addToDo() {
 
  var input= document.querySelector('#toDoInput');
  if (input.value !== ""){
    var newTodo= new ToDo(input.value);
    toDoItems.push(newTodo);
    displayToDos();
    input.value = '';
  }
  
}

var input= document.querySelector('#toDoInput');
let btn= document.querySelector('#addButton')
btn.addEventListener('click',addToDo);




input.addEventListener('keyup',function(e){
  
  if (e.keyCode === 13) {
 addToDo();
}
});






function completeToDo(event) {
  
  const index = event.target.id;
 
  toDoItems[index].completeToDo();
  displayToDos();
 
}

function removeToDo (e){

  let container=document.querySelector('#toDoContainer');
    let parent =e.path[1]
    container.removeChild(parent);

  
}



displayToDos();




