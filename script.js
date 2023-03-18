
let result = document.getElementById("result");

const ALLOWED_OPERATOR = ['/','*','+','-'];
const EVALUATE_OPERATOR = "=";

let leftSide = "";
let rightSide = "";
let operator = "";

let last5Answer = [];
let currentAnswer = 0;
let answerIndex = 0;

function appendValue(value){
    if(ALLOWED_OPERATOR.includes(value) && !! leftSide){
        operator = value;
    }else{
        if(!operator){
            leftSide = `${leftSide}${value}`;
            result.value = leftSide;
        }else if(operator=='='){
            calculate();
        }
        else{
            rightSide = `${rightSide}${value}`;
            result.value = rightSide;
        }
    }
}

function clearResult() {
    console.log(result.value);
  result.value = "";
    leftSide = "";
    rightSide= "";
    operator = "";
}

function deleteLast() {
result.value = result.value.slice(0, -1);
}
function updateAnswer(answerIndex) {
    if(answerIndex<5){
    result.value = last5Answer[answerIndex];
    result = document.getElementById('result');
    }
}

function reverseMove(){
    console.log(answerIndex);
    answerIndex++;
    console.log(answerIndex);
    if (answerIndex > 0 && answerIndex < 5) {
        answerIndex--;
        console.log(answerIndex);
        updateAnswer(answerIndex);
      }
}

function forwardMove(){
    console.log(answerIndex);
    if (answerIndex < last5Answer.length - 1) {
        updateAnswer(answerIndex);
        answerIndex++;
      }
}

function calculate() {
    if(leftSide && rightSide && operator){
        if(operator === '/'){
           result.value = parseInt(leftSide)/parseInt(rightSide);
           last5Answer.unshift(result.value);
        }
            else if(operator === '*'){
                result.value = parseInt(leftSide)*parseInt(rightSide);
                last5Answer.unshift(result.value);
            }
            else if(operator === '-'){
                result.value = parseInt(leftSide)-parseInt(rightSide);
                last5Answer.unshift(result.value);
            }
        else{
            result.value = parseInt(leftSide)+parseInt(rightSide);
            last5Answer.unshift(result.value);
        }
        if (last5Answer.length > 5) {
            last5Answer.pop();
          }
    }


/*
function appendValue(value) {
  result.value += value;
}
function getprev(result){
    var previousCalculations = result;
   result.value += previousCalculations;
}
*/
//   try {
//     result.value = eval(result.value);
//   } catch (error) {
//     result.value = "Error";
//   }

}