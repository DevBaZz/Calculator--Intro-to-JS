

alert(`How to make use of this calculator. π₯π³π₯

~π© You will be asked to first put in your first value, 
~π© then you will select the operation you want to perform (Plus:+,     Minus:-, Multiplication:*, Division:/, remainder:%)
~π© the you will put in your second value,

β¨Thaen you will get your result`);

const value1 = parseInt(prompt(` πππ Please provide your first value: Must be a number`));
const operation = prompt(` ππ What operation do you want to perform (Plus:+, Minus:-, Multiplication:*, Division:/, remainder:%`);
const value2 = parseInt(prompt(` πππ  Please provide your Second value: Must be a number`));

function calculator() {
    if (isNaN(value1) || isNaN(value2)) {
        alert(`You Broke My Calculator  π€¬π€¬π‘π€¬
You Broke My Calculator- please make sure you only use numbers`);
    }
    else if (value1 === "" || value2 === "") {
        alert(`You Broke My Calculator  π₯π₯π₯
You Broke My Calculator- please Put in some values`);
    }
    else {
        switch (operation) {
            case "+":
                alert(`${value1} + ${value2} will give you ${value1 + value2};  π₯³ππ₯³`)
                return
            case "-":
                alert(`${value1} - ${value2} will give you ${value1 - value2}  π₯³ππ₯³`)
                return
            case "*":
                
                alert(`${value1} X ${value2} will give you ${ value1 * value2}  π₯³ππ₯³`)
                return
            case "/":
                
                alert(`${value1} divided by ${value2} will give you ${value1 / value2}  π₯³ππ₯³`)
                return
            case "%":
                
                alert(`${value1} modulus ${value2} will give you ${value1 % value2}  π₯³ππ₯³`)
                return;
            default:
                alert(`What are we doing here?
                 Use either +, -, /, *, %`)
                return
        }
    }

    alert(` End of Calculator π₯π¨β¨ππ`)
}

calculator()