// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Miguel Rodriguez" // HINT: Replace this with your own name!

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0 ;     // Ginger bread
let cc = 0 ;     // Chocolate Chip
let sugar = 0  ; // Sugar Sprinkle
let total = 0;
//first lets get the Cells as variables.

let gbQtyCell = document.querySelector('#qty-gb');
let ccQtyCell = document.querySelector('#qty-cc');
let sugarQtyCell = document.querySelector('#qty-sugar');
let totalQtyCell = document.querySelector('#qty-total');


// Event listener for clicks on the "+" button for Ginger Bread cookies
document.querySelector('#add-gb').addEventListener('click', function() {
    // first we need to add 1 everythime the button is clicked;
    gb = gb + 1;
    //now lets update the cell
    
    gbQtyCell.textContent = gb;
    
    // console.log('Ginger bread + button was clicked!', gb);
    
    //now lets add the totals
    total = total + 1;
    
    // update the cell
     totalQtyCell.textContent = total;
    // console.log('total cookies are!', total);
})

//Event listener for the minus button for gb.
//no need to create a v for the buttons since we only using them once for the event listeners.
document.querySelector('#minus-gb').addEventListener('click', function(){
    //To remove the cookie without going below zero we need an if Statement
    if (gb > 0){
        //this expression will only execute if gb is greater than zero!
        gb = gb - 1;

        // console.log('Ginger bread - button was clicked!', gb);
        //now update the cell
        gbQtyCell.textContent = gb;

        //Update totals
        total = total - 1;

        // console.log('total cookies are!', total);
        //update total cell
        totalQtyCell.textContent = total;
    }
})

// Nice now lets just copy and paste lol, and cahnge v names and elements

//lets star with cc!

document.querySelector('#add-cc').addEventListener('click', function() {
    cc = cc + 1;
    
    ccQtyCell.textContent = cc;
    
    // console.log('Chocolate Chip + button was clicked!', cc);
 
    total = total + 1;
    
     totalQtyCell.textContent = total;
    // console.log('total cookies are!', total);
})

document.querySelector('#minus-cc').addEventListener('click', function(){
    if (cc > 0){
        cc = cc - 1;

        // console.log('Chocolate Chip - button was clicked!', cc);
        ccQtyCell.textContent = cc;

        total = total - 1;

        // console.log('total cookies are!', total);
        totalQtyCell.textContent = total;
    }
})

//Working now with sugar Sprinkle!

document.querySelector('#add-sugar').addEventListener('click', function() {
    sugar = sugar + 1;
    
    sugarQtyCell.textContent = sugar;
    
    // console.log('Sugar Sprinkle + button was clicked!', sugar);
 
    total = total + 1;
    
     totalQtyCell.textContent = total;
    // console.log('total cookies are!', total);
})

document.querySelector('#minus-sugar').addEventListener('click', function(){
    if (sugar > 0){
        sugar = sugar - 1;

        // console.log('Sugar Sprinkle - button was clicked!', sugar);
        sugarQtyCell.textContent = sugar;

        total = total - 1;

        // console.log('total cookies are!', total);
        totalQtyCell.textContent = total;
    }
})
