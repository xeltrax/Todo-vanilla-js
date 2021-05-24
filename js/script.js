//Select DOM
const input = document.getElementById('task-input');
const tasklist = document.querySelector('.task-list');

//Event Listeners
document.addEventListener("DOMContentLoaded",getTodos);

document.querySelector(".hit").addEventListener('click',(e) => {
        e.preventDefault();
    
        //FIXME: when the user clicks again on the checkbox then the label should be removed form
        //        line through apply the logic of counter if the num/2 then remove line-through
    
        //TODO: when the user adds the task the task should save in the local storage of the browser and 
        //       also add the current date to that.
    
        if(input.value != ''){
            //Create List
            const newtodo = document.createElement('li');
            const label = document.createElement('label');
            label.className = 'txt';
            newtodo.classList.add('todo');
            label.innerText = input.value;
            // console.log(input.value);
            tasklist.appendChild(newtodo);
            newtodo.appendChild(label);
        
            //For putting to local storage
            saveLocalTodos(input.value);
        
            //Create  Complete Button
            const completebutton = document.createElement("input");
            completebutton.className = 'done';
            completebutton.setAttribute('type',"checkbox");
            newtodo.appendChild(completebutton);
            let hitnum = 0;
            completebutton.addEventListener('click',()=>{
                if(hitnum===0){
                label.style.textDecoration = "line-through";
                newtodo.style.opacity = 0.7;
                hitnum = 1;
                }else{
                    label.style.textDecoration = "none";
                    newtodo.style.opacity = 1;
                    hitnum = 0;
                }
            });
    
            //Create trash Button
            const trashbutton = document.createElement("button");
            trashbutton.innerHTML = `<i class="fas fa-trash"></i>`;
            trashbutton.classList.add("trash-btn");
            trashbutton.addEventListener('click',(e) => {
                const item = e.target;
                const todo = item.parentElement;
                e.preventDefault();
                newtodo.remove();
                removeLocalTodos(todo);
            });
            newtodo.appendChild(trashbutton);
            
            input.value = '';
        }
        else{
            alert('please insert a task');
        }
});

function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos")){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
         //Create List
         const newtodo = document.createElement('li');
         const label = document.createElement('label');
         label.className = 'txt';
         newtodo.classList.add('todo');
         label.innerText = todo;
         // console.log(input.value);
         tasklist.appendChild(newtodo);
         newtodo.appendChild(label);
     
         //Create  Complete Button
         const completebutton = document.createElement("input");
         completebutton.className = 'done';
         completebutton.setAttribute('type',"checkbox");
         newtodo.appendChild(completebutton);
         let hitnum = 0;
         completebutton.addEventListener('click',()=>{
             if(hitnum===0){
             label.style.textDecoration = "line-through";
             newtodo.style.opacity = 0.7;
             hitnum = 1;
             }else{
                 label.style.textDecoration = "none";
                 newtodo.style.opacity = 1;
                 hitnum = 0;
             }
         });
 
         //Create trash Button
         const trashbutton = document.createElement("button");
         trashbutton.innerHTML = `<i class="fas fa-trash"></i>`;
         trashbutton.classList.add("trash-btn");
         trashbutton.addEventListener('click',(e) => {
             const item = e.target;
             const todo = item.parentElement;
             e.preventDefault();
             newtodo.remove();
             removeLocalTodos(todo);
         });
         newtodo.appendChild(trashbutton);

         //attach final Todo 
         tasklist.appendChild(newtodo);
    });
}