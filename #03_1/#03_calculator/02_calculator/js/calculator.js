'use strict';
const elementSelect = document.getElementById("calcType")
const elementNum1 = document.getElementById("num1");
const elementNum2 = document.getElementById("num2");
const elementResult = document.getElementById("result");
elementSelect.addEventListener("change",
function(){
    const result = calculate(
        Number(elementNum1.value),
        Number(elementNum2.value),
        elementSelect.value
    );
    elementResult.innerHTML = Result;
    },false
);
elementNum1.addEventListener("change",
function(){
    const result = calculate(
        Number(elementNum1.value),
        Number(elementNum2.value),
        elementSelect.value
    );
    elementResult.innerHTML = result;
    },false
);
elementNum2.addEventListener("change",
function(){
    const result = calculate(
        Number(elementNum1.value),
        Number(elementNum2.value),
        elementSelect.value
    );
    elementResult.innerHTML = result;
    },false
);