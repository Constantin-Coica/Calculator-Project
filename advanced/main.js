calculator = {
    numbers : [1,2,3,4,5,6,7,8,9],
    numberZero: 0,
    dot: ".",
    equalsBtn: "=",
    plus: "+",
    minus: "-",
    divide: "/",
    multiply: "x",
    sign: "+/-",
    percentage: "%",
    clearBtn:"AC",
    undo: "Undo",
    plusActive: false,
    plusActive: false,
    divideActive: false,
    multiplyActive: false,
    equation : [],
    previousState: [["0"]]
};

const initialiseButtonNumbers = (calculator, docElement)=>{
    const buttons = document.createElement("div");
    buttons.classList.add("container__number-buttons")
    calculator.numbers.forEach(element => {
        const item = document.createElement("button");
        item.innerHTML = element;
        item.classList.add("button","number")
        item.classList.add(".main__container.buttons")
        buttons.appendChild(item);

    });
    item = document.createElement("button");
    item.innerHTML = calculator.numberZero;
    item.classList.add("button", "number-zero")
    buttons.appendChild(item);
    
    item = document.createElement("button");
    item.innerHTML = calculator.dot;
    item.classList.add("button","dot");
    buttons.appendChild(item);

    item = document.createElement("button");
    item.innerHTML = calculator.undo;
    item.classList.add("button")
    buttons.appendChild(item);

    docElement.appendChild(buttons);
}

const initaliseButtonsTop = (calculator, docElement) =>{
    const buttons = document.createElement("div");
    buttons.classList.add("container__top-buttons")
    let item = document.createElement("button");
    item.innerHTML = calculator.clearBtn;
    item.classList.add("button","delete")
    buttons.appendChild(item);

    item = document.createElement("button");
    item.innerHTML = calculator.sign;
    item.classList.add("button","sign")
    buttons.appendChild(item);

    item = document.createElement("button");
    item.innerHTML = calculator.percentage;
    item.classList.add("button","percentage")
    buttons.appendChild(item);

    item = document.createElement("button");
    item.innerHTML = calculator.divide;
    item.classList.add("button","division")
    buttons.appendChild(item);


    docElement.appendChild(buttons);
}

const initaliseButtonsSide = (calculator, docElement) =>{
    const buttons = document.createElement("div");
    buttons.classList.add("container__side-buttons");
    let item = document.createElement("button");
    item.innerHTML = calculator.multiply;
    item.classList.add("button","multiplication");
    buttons.appendChild(item);


    item = document.createElement("button");
    item.innerHTML = calculator.minus;
    item.classList.add("button","substraction");
    buttons.appendChild(item);

    item = document.createElement("button");
    item.innerHTML = calculator.plus;
    item.classList.add("button","addition");
    buttons.appendChild(item);
    

    item = document.createElement("button");
    item.innerHTML = calculator.equalsBtn;
    item.classList.add("button","equals")
    buttons.appendChild(item);

    docElement.appendChild(buttons);
}

const initialise = (calculator, body) =>{
    const container = document.createElement("div");
    container.classList.add("main__container");

    const display = document.createElement("div");
    display.classList.add("container__display");
    display.innerHTML = "0";
    container.appendChild(display);

    initaliseButtonsTop(calculator,container);
    initialiseButtonNumbers(calculator,container);
    initaliseButtonsSide(calculator,container);
    body.appendChild(container);
}

const theBody = document.querySelector("body");
initialise(calculator,theBody);

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

numbers.forEach(element =>{
    element.addEventListener("click", event =>{
        if(display.innerHTML == 0){
            display.innerHTML = calculator.numbers[event.target.innerHTML-1];
        }
    })
})




