//Select DOM
const input = document.getElementById('task-input');
const tasklist = document.querySelector('.task-list');

document.querySelector(".hit").addEventListener('click',(e) => {
    e.preventDefault();

    //Create List
    const newtodo = document.createElement('li');
    const label = document.createElement('label');
    label.className = 'txt';
    newtodo.classList.add('todo');
    label.innerText = input.value;
    // console.log(input.value);
    tasklist.appendChild(newtodo);
    newtodo.appendChild(label);

    //Create  Complete Button
    const completebutton = document.createElement("input");
    completebutton.className = 'done';
    completebutton.setAttribute('type',"checkbox");
    newtodo.appendChild(completebutton);
    completebutton.addEventListener('click',()=>{
        label.style.textDecoration = "line-through";
        label.style.opacity = 0.5;
    });

    //Create trash Button
    const trashbutton = document.createElement("button");
    trashbutton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashbutton.classList.add("trash-btn");
    trashbutton.addEventListener('click',(e) => {
        e.preventDefault();
        newtodo.remove();
    });
    newtodo.appendChild(trashbutton);

    input.value = '';
});
