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
    if(total.val() === 0 || !operatorPressed){
        firstNumber += $(this).text();
        //WHY DOES +firstNumber REMOVE the first letter !?!?!?!?!?!?!?
        total.val(+firstNumber);
    }
    //else if comment operatorPressed true, første tal er done
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
    $(".total").val(operation);
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
            alert("SOMETHING WENT TERRIBLY WRONG!");
    }
    $(".total").val(total);
    firstNumber = total; //måske reset til nul, men på denne måde kan du lægge mere til resultatet
    secondNumber = 0;
    operatorPressed = false;
}