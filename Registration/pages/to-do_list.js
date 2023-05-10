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

//let newItem; //give the list housing outside the function to make sure it works regardless uponstill. --update, i don't need to store the house in a lymthnal.
//let list = []; //actual housing for the list
let input = ['fold laundry', 'mop room', 'try not to kms'];
function addtask(){
//const input = document.getElementById('ltask').value;//to collect the input from the text box
//list.push(input); //collects the input
console.log(input.join('-')); 
}
addtask();

let compItem;//completed items go in here
let place;
function archivetask(){
    //hide instead of delete?
    //find index of selected array Item onclick? onselect?
    //place = [list.indexOf('mop room')]; // this looks like magic/sorcery
    compItem = input.splice(1, 2); //to remove said item
    //compItem = input[1];
    console.log(compItem.join('--'));
    console.log(input.join('-'));
}
    archivetask();
    //find index of selected array Item onclick? onselect?
    //onselect.apply(archivetask);





