//the interactive file for the to-do
let newItem; //give the list housing outside the function to make sure it works regardless uponstill. --update, i don't need to store the house in a lymthnal.
let list = []; //actual housing for the list
//let input = ['fold laundry', 'mop room', 'try not to kms'];
function addtask(){
            let input = document.querySelector('#ltask').value;//to collect the input from the text box
            list.push(input); //collects the input
            console.log(list.join('-')); 
}

/*function displayItems(){
                    let html= '';
                    for (let i = 0; i < list.length; i++) {
                    html += "<li>" + list[i] + "</li>";
                 }
               }*/

              /* <script>
                function displayItems(){
                    //let list = [];
                    const input = [document.getElementById('ltask').value];
                    //list.push(input); 
                    let html= '';
                    for (let i = 0; i < input.length; i++) {
                    html += input[i];
                 }
                  input.innerHTML = html;
                  alert(input.innerHTML);
                  //promt gives you a message box
                  
                }
                 
            </script>*/
        