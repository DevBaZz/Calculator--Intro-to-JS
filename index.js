

alert(`How to make use of this calculator. 🖥📳🖥

~🚩 You will be asked to first put in your first value, 
~🚩 then you will select the operation you want to perform (Plus:+,     Minus:-, Multiplication:*, Division:/, remainder:%)
~🚩 the you will put in your second value,

✨Thaen you will get your result`);

const value1 = parseInt(prompt(` 🙃🙃🙃 Please provide your first value: Must be a number`));
const operation = prompt(` 😒😒 What operation do you want to perform (Plus:+, Minus:-, Multiplication:*, Division:/, remainder:%`);
const value2 = parseInt(prompt(` 🙈🙉🙊  Please provide your Second value: Must be a number`));

function calculator() {
    if (isNaN(value1) || isNaN(value2)) {
        alert(`You Broke My Calculator  🤬🤬😡🤬
You Broke My Calculator- please make sure you only use numbers`);
    }
    else if (value1 === "" || value2 === "") {
        alert(`You Broke My Calculator  😥😥😥
You Broke My Calculator- please Put in some values`);
    }
    else {
        switch (operation) {
            case "+":
                alert(`${value1} + ${value2} will give you ${value1 + value2};  🥳😇🥳`)
                return
            case "-":
                alert(`${value1} - ${value2} will give you ${value1 - value2}  🥳😇🥳`)
                return
            case "*":
                
                alert(`${value1} X ${value2} will give you ${ value1 * value2}  🥳😇🥳`)
                return
            case "/":
                
                alert(`${value1} divided by ${value2} will give you ${value1 / value2}  🥳😇🥳`)
                return
            case "%":
                
                alert(`${value1} modulus ${value2} will give you ${value1 % value2}  🥳😇🥳`)
                return;
            default:
                alert(`What are we doing here?
                 Use either +, -, /, *, %`)
                return
        }
    }

    alert(` End of Calculator 🖥🖨⌨🔌🔌`)
}

calculator()