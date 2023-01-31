/*/////////////////////////////////////
Variables are coded below
/////////////////////////////////////*/
let currentCalc = ""
let numBtns = document.querySelectorAll('.numbers')
let operBtns = document.querySelectorAll('.operators')
let clearBtn = document.querySelector('#clear')
let deleteBtn = document.querySelector('#delete')
let equalBtn = document.querySelector('.equals')
let display = document.querySelector('#results-display')

/*/////////////////////////////////////
Functions are coded below
/////////////////////////////////////*/
const inputValue = function() {
     currentCalc += event.target.textContent
     display.value = currentCalc
}
const clearDisplay = function() {
    currentCalc = ""
    display.value = currentCalc
}
const deleteDigit = function() {
    currentCalc = ((currentCalc /10) | 0)
    display.value = currentCalc
}
const calculate = function() {
    currentCalc = eval(currentCalc)
    display.value = currentCalc
    

}


/*/////////////////////////////////////
Listeners are coded below
/////////////////////////////////////*/
numBtns.forEach(num => num.addEventListener('click',inputValue))
operBtns.forEach(num => num.addEventListener('click',inputValue))
clearBtn.addEventListener('click',clearDisplay)
deleteBtn.addEventListener('click',deleteDigit)
equalBtn.addEventListener('click',calculate)





