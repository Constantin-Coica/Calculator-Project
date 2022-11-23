const operators = {
  "+": function (a, b) {
    return a + b;
  },

  "-": function (a, b) {
    return a - b;
  },

  "*": function (a, b) {
    return a * b;
  },

  "/": function (a, b) {
    return a / b;
  },
};

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
    console.log(firstNo);
    let secondNo = Number(equation[counter + 1]);
    console.log(secondNo);
    let operand = equation[counter];
    sum = operators[operand](firstNo, secondNo);
    equation.shift();
    equation.shift();
    equation.shift();
    equation.unshift(sum);
  }
  console.log(equation);
  return equation;
};

console.log(doMathematics(["8", "*", "3", "/", "3"]));
