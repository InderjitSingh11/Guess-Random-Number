let userInputBox = document.querySelector('.user-input-box');
let winnerBox = document.querySelector('.Winner-box');
let tryBox = document.querySelector('.Try-Box');
let alertBox = document.querySelector('.alert-box')

userInputBox.classList.add('active');

let randomValue;

function createRandomNumber() {

    randomValue = Math.floor(Math.random() * 100);
    console.log(randomValue)
}

createRandomNumber();

let allBtn = document.querySelectorAll('.btn');

let clickBtn = '';

allBtn.forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        clickBtn += btn.target.innerText;
        Valuedisplay(clickBtn);
        alertBox.classList.remove('active');
    })
})

let input = document.querySelector('.input');

function Valuedisplay(clickBtn) {
    input.innerHTML = '';
    input.innerHTML = clickBtn;
}

let submitBTN = document.getElementById('SubmitBTN');

submitBTN.addEventListener('click', () => {
    checkMatchValue(clickBtn);
    input.innerHTML = ' 0 to 100';
    countCheck(clickBtn);
    clickBtn = '';
})

let clv = document.getElementById('clv');

let count = 0;

function countCheck(clickBtn) {
    if (clickBtn !== '') {
        count++
        clv.innerHTML = count;

        if (count == 10) {
            userInputBox.classList.remove('active');
            tryBox.classList.add('active');
            alertBox.classList.remove('active');
            winnerBox.classList.remove('active');
        }
    }
}

let displayOutput = document.querySelector('.displayOutput');

function checkMatchValue(clickBtn) {

    if (clickBtn == '') {
        return
    }
    else {

        if (clickBtn > randomValue) {
            alertBox.classList.add('active');
            displayOutput.innerHTML = 'Actual Value is Smaller';
        }
        else if (clickBtn < randomValue) {

            alertBox.classList.add('active');
            displayOutput.innerHTML = 'Actual Value is Grater'
        }
        else if (clickBtn == randomValue) {
            winnercall(clickBtn);
        }

    }
}


let backbtn = document.querySelector('.backbtn');

backbtn.addEventListener('click', () => {
    if (clickBtn.length > 0) {
        clickBtn = clickBtn.slice(0, -1); // Remove the last character
        input.innerHTML = clickBtn
    } else {
        console.log('String is empty'); // Handle the case when the string is empty
    }
})


let Value = document.querySelector('.Value');

function winnercall() {
    userInputBox.classList.remove('active');
    tryBox.classList.remove('active');
    alertBox.classList.remove('active');
    winnerBox.classList.add('active');
    Value.innerHTML = ` ${clickBtn} = ${randomValue}  `
}

let playagain = document.getElementById('playagain');
playagain.addEventListener('click', () => {
    location.reload();
})

let tryAgain = document.getElementById('tryAgain');
tryAgain.addEventListener('click',()=>{
    location.reload();
})