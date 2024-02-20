// CALCULATOR PROGRAM 

const display = document.getElementById('dispaly');

function appendToDisplay(input) {
    display.value += input;
}
function calculate() {
    try{
    display.value =eval(display.value);
    }
    catch(error){
        display.value=("error");
    }
}
function clearDispaly() {
    display.value="";
}