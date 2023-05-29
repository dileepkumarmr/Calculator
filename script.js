let string = '';

let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {

    // Mouse EventListener
    button.addEventListener('click', (e) => {
       
        if (e.target.innerHTML == '=') {
            // Evaluate function
            string = eval(string);
            document.querySelector('input').value = string;
        }
        
        else if (e.target.innerHTML == 'C') {
            // Empty string to clear screen
            string = "";
            document.querySelector('input').value = string;
        }

        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }


    })

})