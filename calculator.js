
//Refer to the calculator screen and the equal button 

let calculator_screen = document.getElementById("textval");
let equal = document.getElementById("equal");


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

