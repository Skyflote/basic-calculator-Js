
//Refer to the calculator screen and the equal button 

let calculator_screen = document.getElementById("textval");
let equal = document.getElementById("equal");
let clear = document.getElementById("clr");

let style = window.getComputedStyle(calculator_screen, null).getPropertyValue('font-size');
let firstSize = parseFloat(style);

//Function to add the value of the button clicked in the calculator screen
function display(val){
    if(calculator_screen.innerText==="0"){
        calculator_screen.innerText = ""
    }
    calculator_screen.innerText+=val
 }


//Function to evaluate the expression in the calculator screen
 equal.addEventListener("click", function evaluate() {

    let x = calculator_screen.innerText;
    let y = eval(x);
    calculator_screen.innerText = y

 });


 //Function to clear the content of the calculator screen
 function clr() {
     calculator_screen.innerText = "0"
 }

//Function to check if text is overflowing the calculator screen

function checkOverflow(el) {
    let curOverflow = el.style.overflow ;
    if (!curOverflow || curOverflow === "visible") {
        el.style.overflow = "hidden"
    }
    let isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight ;
    el.style.overflow = curOverflow ;
    console.log(isOverflowing);
    return isOverflowing
}

//Function to adjust the font size of the text in the calculator screen

const incrementionRate = 1 // To augment/diminish 0.05em every step 

function adjustFontSize(el) {
    let lastSize = parseFloat(style);

    let i = 0;
    while (checkOverflow(el)) {
        lastSize = lastSize - incrementionRate;
        el.style.fontSize = `${lastSize}px`
    }
    console.log(lastSize)
}

// Execute function on each button pressed

document.querySelectorAll('input').forEach(item => {
    item.addEventListener('click', () => {
        adjustFontSize(calculator_screen)
    } )
})

// Reset font size when Clr button pressed

clear.addEventListener("click", function resetFontSize() {
    calculator_screen.style.fontSize = `${firstSize}px`
    console.log("ok")

 });