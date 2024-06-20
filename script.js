function displayBtnValue (num) {
    if(endsWithMathOperator(document.getElementById('result').value)) {
        endsWithMathOperator(num) ? alert('Need To Write A Number After Math Operator') : document.getElementById('result').value += num;
    }
    else {
        document.getElementById('result').value += num;
    }
}

function endsWithMathOperator(text) {
    var operatorPattern = /[+\-*/%]$/;
    return operatorPattern.test(text);
}

function calcResult () {
    let result = document.getElementById('result').value;
    let finalResult = eval(result);
    document.getElementById('result').value = finalResult;
}

function clearScreen() {
    document.getElementById('result').value = '';
}