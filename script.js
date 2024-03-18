
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoul = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');


let cerateTask = function(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');


    label.innerText = task;
    checkBox.type ='checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask =function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    
    bindInCompleteItems(listItem,completeTask);

}

let completeTask = function(){

}

let bindInCompleteItems = function(taskItem, checkboxClick){
    let checkBox = taskItem.querySelector('input [type="checkbox"]');
    checkBox.onchange = checkboxClick;
}