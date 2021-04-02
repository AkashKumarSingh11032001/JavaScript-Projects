// set intial count
let count = 0;

// select value and button 

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        //console.log(e.currentTarget); // this will just tell you which button you just clicked
        const btn_click = e.currentTarget.classList;

        // just increment/decrement/reset the count
        if (btn_click.contains('decrease')) {
            count--;
        }
        else if (btn_click.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }

        // changing color accouding to +ve / -ve /0
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }


        value.textContent = count;

    });

});
