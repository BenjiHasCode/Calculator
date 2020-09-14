var firstNumber = 0;
var secondNumber = 0;
var operation;
var operatorPressed = false;

$(document).ready(function () {
    $(".number").click( number );
    $(".zero").click( number );
    $(".operator").click( operator );
    $(".delete").click( clear );
    $(".equal").click( equals );
});

function number(){
    var total = $(".total");
    //if secondNumber starts with 0 it will enter the if, so we make sure that it only enters if secondNumber only contains 0
    //the way the program works now, is that second actually has 0, so when the user presses 0 it actually contains 00
    if(total.val() === "0" && secondNumber === 0|| !operatorPressed){
        firstNumber += $(this).text();
        //As far as I understand +firstNumber converts the var to a number, thus the first zero is removed
        total.val(+firstNumber);
    }
    //operatorPressed true, første tal er done
    else{
        secondNumber += $(this).text();
        total.val(+secondNumber);
    }
}

function operator(){
    //if second number isn't 0, then we have pressed an operator before.
    //we then calculate the previous two numbers and put them in number1
    //this frees number2 for a new value
    if(secondNumber !== 0){
        equals();
    }
    operation = $(this).text();
    operatorPressed = true;
    $(".total").val(+firstNumber + " " + operation);
}

function clear(){
    $("#total").val(0);
    firstNumber = 0;
    secondNumber = 0;
}

function equals(){
    var total;
    //we parse our numbers into doubles
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    switch (operation) {
        case "+":
            total = firstNumber + secondNumber;
            break;
        case "-":
            total = firstNumber - secondNumber;
            break;
        case "x":
            total = firstNumber * secondNumber;
            break;
        case "/":
            total = firstNumber / secondNumber;
            break;
        default:
            //maybe the user pressed the equal button without pressing any numbers
            alert("SOMETHING WENT TERRIBLY WRONG!\nDID YOU PRESS EQUALS WITHOUT PUTTING IN ANY NUMBERS? ( Ò.Ó)\nDon't worry I'll fix it for you! \\( ._.)/");
            total = "they messed with it";
    }
    if(total === "they messed with it"){
        clear();
    }else{
        $(".total").val(total);
        firstNumber = total;
        secondNumber = 0;
        operatorPressed = false;
    }
}