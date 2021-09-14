
var toDoItems=[];


function ToDo (description) {
  this.description = description;
  this.complete = false;

}

ToDo.prototype.completeToDo= function(){
  this.complete=!this.complete;
}




function buildToDo(todo, index) {
 
  let toDoShell= document.createElement('div');
  toDoShell.className = 'toDoShell'; 

  let toDoText= document.createElement('span');
  toDoText.innerHTML= todo.description;
  toDoText.id= index;

  toDoText.addEventListener('click', completeToDo)

  if(todo.complete === true){
    toDoText.className='completeText'
  } 
  toDoShell.appendChild (toDoText);
  
  return toDoShell
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

let btn= document.querySelector('#addButton')
btn.addEventListener('click',addToDo);



function completeToDo(event) {
  
  const index = event.target.id;
 
  toDoItems[index].completeToDo();
  displayToDos();
}

// Una vez que llegaste a este punto verificá que todos los tests pasen


// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //



displayToDos();


