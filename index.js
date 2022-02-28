let screen = document.querySelector('#screen');
let buttons = document.querySelectorAll('button');
let screenvalue = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttontext = e.target.innerText;
        console.log(buttontext);

        if (buttontext == 'x') {
            buttontext = '*';
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if (buttontext == 'C') {
            screenvalue = '';
            screen.value = screenvalue;
        }
        else if (buttontext == '=') {
            screen.value = eval(screenvalue);
        }
        else {
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
    })
});
