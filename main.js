import { doMathematics,addCommas } from "./separeteFunctionsForTesting.js";

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
        if(display.innerHTML == 0){
        display.innerHTML = event.target.innerHTML;
        } else {
            display.innerHTML += event.target.innerHTML;
        }

    });
});

addition.addEventListener("click", ()=>{
    toOperateOn.push(display.innerHTML);
    toOperateOn.push("+");

})

equalsBtn.addEventListener("click", ()=>{
    toOperateOn.push(display.innerHTML);
    display.innerHTML=doMathematics(toOperateOn);
    toOperateOn = [];
})



