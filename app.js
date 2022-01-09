const container = document.querySelector('.container');

let r = Math.floor(Math.random()*180);
let g = Math.floor(Math.random()*180);
let b = Math.floor(Math.random()*180);
let a = Math.random().toFixed(1);
const refreshButton = document.querySelector('.refreshButton');
let rowXcol = 16;


function columnsAndRows(n){
    for (let i = 0; i < n*n; i++) {
        const div = document.createElement('div');
        div.style.width = 'var(--width)';
        div.style.height = 'var(--height)';
        div.style.border = 'var(--border)';
        
        div.addEventListener('mouseenter',()=>{
            div.style.background = `rgba(${r}, ${g}, ${b}, ${a})`;
            div.style.borderColor = `rgba(${g}, ${b}, ${r}, ${a})`;
        }) 
        div.addEventListener('mousedown',()=>{
            div.style.background = `#aca8a8`;
            div.style.borderColor = `var(--border)`;
        })
        container.appendChild(div);
 
     }
     container.style.gridTemplateColumns = `repeat(${n}, auto )`;
        container.style.gridTemplateRows = `repeat(${n}, auto )`;

}
columnsAndRows(rowXcol);

function refreshPage(){
let userInput = parseInt(prompt('Please enter Row X Column Size'));
if (userInput > 100) {
   alert('please enter a number less than 100') ;
   window.location.reload();
}

columnsAndRows(userInput);
}
refreshButton.addEventListener('click', refreshPage)







// Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.

//     Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
//     Also check out prompts.
//     You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

// (Optional): Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.
// Push your project to GitHub!