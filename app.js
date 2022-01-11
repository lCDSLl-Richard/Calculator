let operand1 = '';
let operand2 = '';
let operant = '';
let flag = false;

function loadResult(){

    document.getElementById('result').innerHTML = operand1;

}

function removeFromOperand(){
    if(flag){
        operand1 = '';
        operand2 = '';
    }else{
        operand1 = operand1.slice(0, operand1.length - 1)
    }
    loadResult()
}

function addToOperand(obj){

    if(flag){
        operand1 = '';
        operand2 = '';
        flag = false;
    }

    operand1 += obj.innerHTML;
    loadResult();

}

function operation(obj){
    if(operant === ''){
        operant = obj.innerHTML;
        operand2 = operand1;
        operand1 = '';
    }else{
        operant = obj.innerHTML;
    }

    document.getElementById('operator').innerHTML = obj.innerHTML;
    loadResult();
}


function calculate(){
    
    operand1 = Number(operand1);
    operand2 = Number(operand2);
    if(operand2 === 0){
        return 0;
    }else{
        
        switch(operant){
            case '+':
                operand1 += operand2;
                break;
                
            case '-':
                operand1 = operand2 - operand1;
                break;
                    
            case 'x':
                operand1 *= operand2;
                break;

            case '÷':
                operand1 = operand2/operand1;
                break;
            }

        document.getElementById('operator').innerHTML = '';
        loadResult();
        operant = '';
        flag = true;
    }

    animateCSS('#operator', 'pulse')
    animateCSS('#result', 'pulse')
}


function clear(){
    operand1 = '';
    operand2 = '';
    operant = '';
    document.getElementById('operator').innerHTML = '';
    flag = false;
    loadResult();
}

document.getElementById('clear').addEventListener('click', clear);

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});