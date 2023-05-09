let addtask;
addtask = [];
for(i= 20; i <= 1; i--){
let task = prompt('What are you to achieve?');
addtask.push(task); //anything the user adds to the list
console.log(addtask.join('-'));
}

