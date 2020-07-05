// isEven
function isEven(x){
    return x % 2 == 0;
}
// factorial
function factorial(x){
    var fact = 1;
    for(var i = x; i > 0; i--){
        fact *= i;
    }
    return fact;
}

function kebabToSnake(str){
    var newStr = str.replace(/-/g, "_"); 
    return newStr;
}
