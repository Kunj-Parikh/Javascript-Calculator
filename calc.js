let evaluatedEquation = "";
let result = eval(evaluatedEquation);
// Add function to update the screen
let updateScreen = () => {
    document.getElementById('screen').innerHTML = evaluatedEquation;
}
updateScreen();

let divide = document.getElementById('divide').addEventListener('click', () => {evaluatedEquation+= "/"; updateScreen();});
let multiply = document.getElementById('multiply').addEventListener('click', ()=> {evaluatedEquation+= "*";updateScreen();});
let subtract = document.getElementById('subtract').addEventListener('click', ()=> {evaluatedEquation+= "-";updateScreen();});
let add = document.getElementById('add').addEventListener('click', ()=> {evaluatedEquation+= "+";updateScreen();});
let equals = document.getElementById('equals').addEventListener('click', ()=> {
    let result = eval(evaluatedEquation);
    document.getElementById('screen').innerHTML = eval(evaluatedEquation);
    if(result==undefined || result==evaluatedEquation){
        document.getElementById('screen').innerHTML = "Error";
    } else {
        document.getElementById('screen').innerHTML = eval(evaluatedEquation);
    }
});
let clear = document.getElementById('clear').addEventListener('click', ()=> {evaluatedEquation="";updateScreen();});
let decimal = document.getElementById('decimal').addEventListener('click', ()=> {evaluatedEquation+= ".";updateScreen();});
let zero = document.getElementById('zero').addEventListener('click', ()=> {evaluatedEquation+= "0";updateScreen();});
let one = document.getElementById('one').addEventListener('click', ()=> {evaluatedEquation+= "1";updateScreen();});
let two = document.getElementById('two').addEventListener('click', ()=> {evaluatedEquation+= "2";updateScreen();});
let three = document.getElementById('three').addEventListener('click', ()=> {evaluatedEquation+= "3";updateScreen();});
let four = document.getElementById('four').addEventListener('click', ()=> {evaluatedEquation+= "4";updateScreen();});
let five = document.getElementById('five').addEventListener('click', ()=> {evaluatedEquation+= "5";updateScreen();});
let six = document.getElementById('six').addEventListener('click', ()=> {evaluatedEquation+= "6";updateScreen();});
let seven = document.getElementById('seven').addEventListener('click', ()=> {evaluatedEquation+= "7";updateScreen();});
let eight = document.getElementById('eight').addEventListener('click', ()=> {evaluatedEquation+= "8";updateScreen();});
let nine = document.getElementById('nine').addEventListener('click', ()=> {evaluatedEquation+= "9";updateScreen();});
