let result = 0;

const addNumbers = () => {
    operation(1);
}
const subtractNumbers = () => {
    operation(2);
}
const multiplyNumbers = () => {
    operation(3);
}
const divideNumbers = () => {
    operation(4);
}
const clearAll = () => {
    document.getElementById('txtNumber1').value = "";
    document.getElementById('txtNumber2').value = "";
    document.getElementById('txtResult').value = "";
}

const operation = (number) => {
    let number1 = document.querySelector('#txtNumber1').value;
    let number2 = document.querySelector('#txtNumber2').value;
    
    if(number1.trim() != '' && number2.trim() != '') {
        switch(number) {
            case 1:
                alert("suma");
                result = parseInt(number1) + parseInt(number2);
                Android.addNumbers(number1, number2);
                break;
            case 2:
                result = number1 - number2;
                Android.subtractNumbers(number1, number2);
                break;
            case 3:
                result = number1 * number2;
                Android.multiplyNumbers(number1, number2);
                break;
            case 4:
                result = number1 / number2;
                Android.divideNumbers(number1, number2);
                break;
        }
        alert("Tiene que imprimir resultado");
        document.getElementById('txtResult').value = result;
    } else {
        alert("Tiene que ingresar numeros");
        Android.showAlertMessage("Tiene que ingresar numeros","Aviso");
    }
}