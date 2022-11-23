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
    previousState: ["0"],
    dotActive: false,
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
    multiplication.classList.remove("active");
}

const doMathematics = (equation) => {
    let sum = 0;
    let operation = 0;
  
    while (equation.indexOf("*") != -1 || equation.indexOf("/") != -1) {
      let newArr = [];
      if (equation.indexOf("*") != -1 && equation.indexOf("/") != -1) {
        let priority =
          equation.indexOf("*") < equation.indexOf("/")
            ? equation.indexOf("*")
            : equation.indexOf("/");
        let firstNo = Number(equation[priority - 1]);
        let secondNo = Number(equation[priority + 1]);
        operation = operators[equation[priority]](firstNo, secondNo);
        for (let index = 0; index < priority - 1; index++) {
          newArr.push(equation.shift());
        }
      } else if (equation.indexOf("*") != -1 && equation.indexOf("/") == -1) {
        let priority = equation.indexOf("*");
        let firstNo = Number(equation[priority - 1]);
        let secondNo = Number(equation[priority + 1]);
  
        operation = operators[equation[priority]](firstNo, secondNo);
  
        for (let index = 0; index < priority - 1; index++) {
          newArr.push(equation.shift());
        }
      } else if (equation.indexOf("/") != -1 && equation.indexOf("*") == -1) {
        let priority = equation.indexOf("/");
        let firstNo = Number(equation[priority - 1]);
        let secondNo = Number(equation[priority + 1]);
  
        operation = operators[equation[priority]](firstNo, secondNo);
  
        for (let index = 0; index < priority - 1; index++) {
          newArr.push(equation.shift());
        }
      }
      console.log(newArr);
  
      equation.shift();
      equation.shift();
      equation.shift();
      equation.unshift(operation);
      for (let index = newArr.length - 1; index >= 0; index--) {
        equation.unshift(newArr[index]);
      }
    }
  
    counter = 1;
    while (equation.length != 1) {
      let firstNo = Number(equation[counter - 1]);
      let secondNo = Number(equation[counter + 1]);
      let operand = equation[counter];
      sum = operators[operand](firstNo, secondNo);
      equation.shift();
      equation.shift();
      equation.shift();
      equation.unshift(sum);
    }
  
    return equation;
  };

const handleAddition = ()=>{
    if(calculator.plusActive == false){
    const getPreviousState = calculator.previousState.length;
    if(getPreviousState == 1){
    calculator.plusActive = true;
    addition.classList.add("active")
    let newState = display.innerHTML;
    newState += "+";
    calculator.equation.push(display.innerHTML);
    calculator.equation.push("+");
    calculator.previousState.push(newState);
    display.innerHTML=newState;
    calculator.dotActive = false;
    } else{
    calculator.plusActive = true;
    addition.classList.add("active")
    let newState = display.innerHTML;
    newState += "+";
    const toSlice = calculator.previousState[calculator.previousState.length-1].length;
    const lastElement = display.innerHTML.slice(toSlice);
    calculator.equation.push(lastElement);
    calculator.equation.push("+");
    calculator.previousState.push(newState);
    display.innerHTML=newState;
    calculator.dotActive = false;

    }
}
}

const handleSubstraction = ()=>{
    if(calculator.minusActive == false){
    const getPreviousState = calculator.previousState.length;
    if(getPreviousState == 1){
    calculator.minusActive = true;
    substraction.classList.add("active")
    let newState = display.innerHTML;
    newState += "-";
    calculator.equation.push(display.innerHTML);
    calculator.equation.push("-");
    calculator.previousState.push(newState);
    console.log(calculator.previousState);
    display.innerHTML=newState;
    calculator.dotActive = false;
    } else{
    calculator.minusActive = true;
    substraction.classList.add("active")
    let newState = display.innerHTML;
    newState += "-";
    const toSlice = calculator.previousState[calculator.previousState.length-1].length;
    const lastElement = display.innerHTML.slice(toSlice);
    calculator.equation.push(lastElement);
    calculator.equation.push("-");
    calculator.previousState.push(newState);
    console.log(calculator.previousState);
    display.innerHTML=newState;
    calculator.dotActive = false;

    }
}
}

const handleMultiplication = ()=>{
    if(calculator.multiplyActive == false){
    const getPreviousState = calculator.previousState.length;
    if(getPreviousState == 1){
    calculator.multiplyActive = true;
    multiplication.classList.add("active")
    let newState = display.innerHTML;
    newState += "x";
    calculator.equation.push(display.innerHTML);
    calculator.equation.push("*");
    calculator.previousState.push(newState);
    console.log(calculator.previousState);
    display.innerHTML=newState;
    calculator.dotActive = false;
    } else{
    calculator.multiplyActive = true;
    multiplication.classList.add("active")
    let newState = display.innerHTML;
    newState += "x";
    const toSlice = calculator.previousState[calculator.previousState.length-1].length;
    const lastElement = display.innerHTML.slice(toSlice);
    calculator.equation.push(lastElement);
    calculator.equation.push("*");
    calculator.previousState.push(newState);
    console.log(calculator.previousState);
    display.innerHTML=newState;
    calculator.dotActive = false;

    }
}
}


const handleDivision = ()=>{
    if(calculator.divideActive == false){
    const getPreviousState = calculator.previousState.length;
    if(getPreviousState == 1){
    calculator.divideActive = true;
    divisionBtn.classList.add("active")
    let newState = display.innerHTML;
    newState += "/";
    calculator.equation.push(display.innerHTML);
    calculator.equation.push("/");
    calculator.previousState.push(newState);
    console.log(calculator.previousState);
    display.innerHTML=newState;
    calculator.dotActive = false;
    } else{
    calculator.divide = true;
    divisionBtn.classList.add("active")
    let newState = display.innerHTML;
    newState += "/";
    const toSlice = calculator.previousState[calculator.previousState.length-1].length;
    const lastElement = display.innerHTML.slice(toSlice);
    calculator.equation.push(lastElement);
    calculator.equation.push("/");
    calculator.previousState.push(newState);
    console.log(calculator.previousState);
    display.innerHTML=newState;
    calculator.dotActive = false;

    }
}
}

const handleEquals = ()=>{
    if(calculator.equation.length > 0){
    const toSlice = calculator.previousState[calculator.previousState.length-1].length;
    const lastElement = display.innerHTML.slice(toSlice);
    calculator.equation.push(lastElement);
    const result = doMathematics(calculator.equation)[0];
    display.innerHTML=result;
    calculator.equation = [];
    calculator.previousState = [result.toString()];
    if(Number.isInteger(result)){
        calculator.dotActive = false;
    } else{
        calculator.dotActive = true;
    }
    }
}

const changeSign = ()=>{
    const getPreviousState = calculator.previousState.length;
    if(getPreviousState == 1){
    display.innerHTML = -display.innerHTML;
    } else {
        const toSlice = calculator.previousState[calculator.previousState.length-1].length;
        let lastElement = display.innerHTML.slice(toSlice);
        lastElement = (-lastElement).toString();
        lastElement = calculator.previousState[calculator.previousState.length-1] + lastElement;
        display.innerHTML = lastElement;


    }

}

const doPercentage = ()=>{
    if(calculator.equation.length >0 ){
    const toSlice = calculator.previousState[calculator.previousState.length-1].length;
    const lastElement = display.innerHTML.slice(toSlice);
    calculator.equation.push(lastElement);
    const result = doMathematics(calculator.equation)[0]/100;
    display.innerHTML=result;
    calculator.equation = [];
    calculator.previousState = [result.toString()];
    } else {
        const percentageDone = Number(display.innerHTML)/100
        display.innerHTML = percentageDone;
    }

}

/*const doUndo = ()=>{
    if(calculator.previousState.length > 1){
        const toSlice = calculator.previousState[calculator.previousState.length-1].length;
        const lastElement = display.innerHTML.slice(toSlice);
        calculator.equation.push(lastElement);
        display.innerHTML = calculator.previousState[calculator.previousState.length-1];
        calculator.previousState.pop();
        console.log(calculator.previousState)
        calculator.equation.pop();
        console.log(calculator.equation);
    } else {
        display.innerHTML = calculator.previousState[0];
        calculator.equation = [];
    }
}*/

const clearAll = ()=>{
    calculator.equation = [];
    calculator.previousState = ["0"];
    display.innerHTML = "0";
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
    handleAddition();
});

substraction.addEventListener("click", () =>{
    handleSubstraction();
});

divisionBtn.addEventListener("click", () =>{
    handleDivision();
});

multiplication.addEventListener("click", () =>{
    handleMultiplication();
});

equalsBtn.addEventListener("click", () =>{
    handleEquals();

});

sign.addEventListener("click", () =>{
    changeSign();
})

percentage.addEventListener("click", ()=>{
    doPercentage();
})

zero.addEventListener("click",() =>{
    if(display.innerHTML != "0"){
        display.innerHTML += "0"
    }
})

dotBtn.addEventListener("click",()=>{
    if(calculator.dotActive == false){
        display.innerHTML += "."
    }
})

/*undoBtn.addEventListener("click", () =>{
    doUndo();
})*/

deleteBtn.addEventListener("click", ()=>{
    clearAll();
})









