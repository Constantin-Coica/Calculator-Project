import { doMathematics,addCommas, doPercentage, changeSign } from "./separeteFunctionsForTesting.js";

const display = document.querySelector(".container__display");
const deleteBtn = document.querySelector(".button.delete");
const sign = document.querySelector(".button.sign");
const percentage = document.querySelector(".button.percentage");
const divisionBtn = document.querySelector(".button.division");

const numbers = document.querySelectorAll(".button.number");
const zero = document.querySelector(".button.number-zero");
const dotBtn = document.querySelector(".button.dot");

const multiplication = document.querySelector(".button.multiplication");
const substraction = document.querySelector(".button.substraction");
const addition = document.querySelector(".button.addition");
const equalsBtn = document.querySelector(".button.equals");

let toOperateOn = [];
let activeOperand = false;
let activeDot = false;

const operators = {
    "+":function(a,b){
        return a+b;
    },

    "-":function(a,b){
        return a-b;
    },

    "*":function(a,b){
        return a*b;
    },

    "/":function(a,b){
        return a/b;
    }
}

numbers.forEach((element) =>{
    element.addEventListener("click", (event) =>{
        if(display.innerHTML == 0 || activeOperand == true){
        display.innerHTML = event.target.innerHTML;
        activeOperand = false;
        activeDot = false;
        } else {
            display.innerHTML += event.target.innerHTML;
        }

    });
});

addition.addEventListener("click", ()=>{

    toOperateOn.push(display.innerHTML);
    toOperateOn.push("+");
    activeOperand = true;
    deleteBtn.innerHTML = "C";

});

equalsBtn.addEventListener("click", ()=>{
    toOperateOn.push(display.innerHTML);
    display.innerHTML=doMathematics(toOperateOn);
    toOperateOn = [];
    deleteBtn.innerHTML = "AC"
});

substraction.addEventListener("click", ()=>{
    toOperateOn.push(display.innerHTML);
    toOperateOn.push("-");
    activeOperand=true;
});

multiplication.addEventListener("click", ()=>{
    toOperateOn.push(display.innerHTML);
    toOperateOn.push("*");
    activeOperand=true;
})

divisionBtn.addEventListener("click", () =>{
    toOperateOn.push(display.innerHTML);
    toOperateOn.push("/");
    activeOperand=true;
});

percentage.addEventListener("click", () =>{
    display.innerHTML = doPercentage(display.innerHTML);
});

sign.addEventListener("click", () =>{
    display.innerHTML = changeSign(display.innerHTML);
})

deleteBtn.addEventListener("click", () =>{
    if(deleteBtn.innerHTML == "C"){
    display.innerHTML = 0;
    activeDot = false;
    deleteBtn.innerHTML = "AC";
    }else {
        display.innerHTML = 0;
        toOperateOn = [];
    }

    
});

zero.addEventListener("click", () =>{
    if(display.innerHTML != 0 && toOperateOn.length != 2){
        display.innerHTML += 0;
    } else {
        display.innerHTML = 0;
    }
});

dotBtn.addEventListener("click", ()=>{
    if(!activeDot){
        activeDot = true;
        display.innerHTML += ".";
    }
});




