const phoneInput = document.querySelector('#phone-field');
// console.log(phoneInput)

let getInputNumbersValue = function (input) {
    // Return stripped input value — just numbers
    return input.value.replace(/\D/g, '');
};

if (phoneInput.value.length === 2) {
    phoneInput.addEventListener('keydown', function(evt) {
    // Проверяем, что код клавиши равен 27
    if (evt.keyCode === 8) {
      // Код отсюда выполнится только при нажатии ESC
      evt.preventDefault();
    }
  });
}

phoneInput.value = '+7(';


// if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
//     if (inputNumbersValue[0] == '9')
//         inputNumbersValue = '7' + inputNumbersValue;
//     var firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7';
//     formattedInputValue = input.value = firstSymbols + ' ';
//     if (inputNumbersValue.length > 1) {
//         formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
//     }
//     if (inputNumbersValue.length >= 5) {
//         formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
//     }
//     if (inputNumbersValue.length >= 8) {
//         formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
//     }
//     if (inputNumbersValue.length >= 10) {
//         formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
//     }
// } else {
//     formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
// }
// input.value = formattedInputValue;