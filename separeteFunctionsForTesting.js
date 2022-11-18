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

export const doPercentage =(number) =>{
    return Number(number)/100;

}

export const changeSign = (number) =>{
    let result = 0;
    if(Number(number) > 0){
        result = -number;
    }

    if(Number(number)< 0){
        result = -(number);
    }

    return result;
     
}

//Tests for doMathematics function:
console.log(doMathematics([1,"+",2]));
console.log(doMathematics([1,"-",2]));
console.log(doMathematics([1,"/",0]));
console.log(doMathematics([1,"*",5]));


//Tests for addCommas function:
console.log(addCommas(1234));
console.log(addCommas(12345));
console.log(addCommas(123456));
console.log(addCommas(1234567));

//Tests for doPercentage function:
console.log(doPercentage(50));
console.log(doPercentage("50"));
console.log(doPercentage(0.5));


//Tests for changeSign function:
console.log(changeSign(12));
console.log(changeSign(-12));
console.log(changeSign(0));
console.log(changeSign("12"));
console.log(changeSign("-12"));


