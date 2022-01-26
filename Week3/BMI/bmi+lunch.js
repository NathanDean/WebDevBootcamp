function BMI(weight, height){
    return Math.round(weight/(height*height));
}

function BMI2(weight, height){
    let index = Math.round(weight/(height*height));

    if(index < 18.5){
        return `Your BMI is ${index} so you are underweight`;
    }
    else if (index >= 18.5 && index <= 24.9) {
        return `Your BMI is ${index} so you have a healthy weight`;
    }
    else {
        return `Your BMI is ${index} so you are overweight`
    }
}

function lunch() {
    let i = Math.floor(Math.random((0, 1)) * arguments.length);

    return `${arguments[i]} is buying lunch today.`;
}