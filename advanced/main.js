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
    minusActive: false,
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
    item.classList.add("button","undo")
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
    display.innerHTML = calculator.numberZero;
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

const checkIfActive = (calculator) => {
    return calculator.plusActive || calculator.minusActive || calculator.divideActive || calculator.multiplyActive;
}

const deActivateAll = (calculator) =>{
    calculator.plusActive = false;
    addition.classList.remove("active");
    calculator.minusActive = false;
    substraction.classList.remove("active");
    calculator.divideActive = false;
    divisionBtn.classList.remove("active");
    calculator.multiplyActive = false;
    multiplication.classList.remove = false;
}

const doMathematics = (equation) =>{
    let sum = 0;
    
    while(equation.indexOf("*")!=-1 && equation.indexOf("/")!=-1){
        let newArr = [];
        let priority = equation.indexOf("*") < equation.indexOf("/") ? equation.indexOf("*"):equation.indexOf("/");
        let firstNo = Number(equation[priority-1]);
        let secondNo = Number(equation[priority+1]);
        let operation = operators[equation[priority]](firstNo,secondNo);
        for(let index = 0; index < priority-1; index++){
            newArr.push(equation.shift());
        }
        equation.shift();
        equation.shift();
        equation.shift();
        equation.unshift(operation);
        for(let index = newArr.length-1; index >=0; index--){
            equation.unshift(newArr[index]);
        }
    }

    counter = 1;
    while(equation.length!=0){
        let firstNo = Number(equation[counter-1]);
        let secondNo = Number(equation[counter+1]);
        sum+=operators[equation[index]](firstNo,secondNo);
        equation.shift();
        equation.shift();
        equation.shift();
        counter +=2;
    }

    return sum;
    
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

const undoBtn = document.querySelector(".button.undo");

numbers.forEach(element =>{
    element.addEventListener("click", event =>{
        if(display.innerHTML == 0 && !checkIfActive(calculator)){
            display.innerHTML = calculator.numbers[event.target.innerHTML-1];
        } else if(checkIfActive) {
            display.innerHTML += calculator.numbers[event.target.innerHTML-1];
            deActivateAll(calculator);
        } else {
            display.innerHTML += calculator.nuumbers[event.target.innerHTML-1]
        }
    })
});

addition.addEventListener("click", () =>{
    calculator.plusActive = true;
    addition.classList.add("active")
    let newState = display.innerHTML;
    newState += "+";
    calculator.equation.push(display.innerHTML);
    calculator.equation.push("+");
    calculator.previousState.push(newState);
    console.log(calculator.previousState);
    display.innerHTML=newState;
});

substraction.addEventListener("click", () =>{
    calculator.minusActive = true;
    substraction.classList.add("active")
    let newState = display.innerHTML;
    newState += "-";
    calculator.equation.push(display.innerHTML);
    calculator.equation.push("/");
    calculator.previousState.push(newState);
    console.log(calculator.previousState);
    display.innerHTML=newState;
});

divisionBtn.addEventListener("click", () =>{
    calculator.divideActive = true;
    divisionBtn.classList.add("active")
    let newState = display.innerHTML;
    newState += "/";
    calculator.equation.push(display.innerHTML);
    calculator.equation.push("/");
    calculator.previousState.push(newState);
    console.log(calculator.previousState);
    display.innerHTML=newState;
});

multiplication.addEventListener("click", () =>{
    calculator.multiplyActive = true;
    multiplication.classList.add("active")
    let newState = display.innerHTML;
    newState += "x";
    calculator.equation.push(display.innerHTML);
    calculator.equation.push("*");
    calculator.previousState.push(newState);
    console.log(calculator.previousState);
    display.innerHTML=newState;
});

equalsBtn.addEventListener("click", () =>{
    const toSlice = calculator.previousState[calculator.previousState.length-1].length;
    const lastElement = display.innerHTML.slice(toSlice);
    calculator.equation.push(lastElement);

});










