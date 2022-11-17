export const doMathematics = (numberArr)=>{
    if(numberArr[1] == "/" && numberArr[2] == 0){
        return "Error."
    }
    const firstNo = Number(numberArr[0]);
    const secondNo = Number(numberArr[2]);
    const operand = numberArr[1];
    let result = operators[operand](firstNo,secondNo);
    return result;
}

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



export const addCommas = (number) =>{
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

console.log(doMathematics([1,"+",2]));
console.log(doMathematics([1,"-",2]));
console.log(doMathematics([1,"/",0]));
console.log(doMathematics([1,"*",5]));

console.log(addCommas(1234));
console.log(addCommas(12345));
console.log(addCommas(123456));
console.log(addCommas(1234567));


