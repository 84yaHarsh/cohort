/*functional argument*/
function sum(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function doOperation(a,b,op){
    let val = divide(a,b);
    return val;
}
let task = doOperation(3,2,divide);
console.log(task);
