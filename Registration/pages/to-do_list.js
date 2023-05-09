/*let addtask;
addtask = ['help', 'laundry'];
let task = 'task to be added';      
//for(i= 20; i <= 1; i--){
//let task = prompt('What are you to achieve?');
addtask.push(task); //anything the user adds to the list
console.log(addtask.join('-'));
//}

let addtask;
addtask = ['help', 'laundry'];
let task = addtask.push();      
//for(i= 20; i <= 1; i--){
//let task = prompt('What are you to achieve?');
//addtask.push(task); //anything the user adds to the list
console.log(addtask.join('\n'));
//}*/

// there has to be some sort of pseudo code
//let removetask = [addtask.pop()]; //hopefully whatever leaves addtask ends up here
//console.log(removetask.join()); //find a way to cross it out? 

// there has to be some sort of pseudo code
//let removetask = [addtask.pop()]; //hopefully whatever leaves addtask ends up here
let newItem = []; //give the list housing outside the function to make sure it works regardless uponstill.
function addtask(){
const input = document.getElementById('ltask').value;//to collect the input from the text box
newItem.push(input); //collects the input
console.log(newItem.join('\n'));

 
}