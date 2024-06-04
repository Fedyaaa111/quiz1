import { data } from './questions.js';

const next = document.querySelector('.display .container .next-btn');
const ques = document.querySelectorAll('.display .container .question .btn');
const title = document.querySelector('.display .container .div-descr #descr');
const count = document.querySelector('.display .container .point-div #point');
const container = document.querySelector('.display .container');
const score = document.querySelector('.final .final-page .score');
const page = document.querySelector('.final');
const button1 = document.querySelector('.final .final-page .div #button1');
const cont = document.querySelector('.display .container .question');
const p1 = document.querySelector('.paragraph-div1 .paragraph1');
const p2 = document.querySelector('.paragraph-div2 .paragraph2');
const button2 = document.querySelector('.display .container .music-btn .music-title');
const button3 = document.querySelector('.display .container .music-btn .music-title1');
const h1 = document.querySelector('.name .h1');
const timer = document.querySelector('.display .container .timer-div #timer');
const lose = document.querySelector('.lose-div');
const display = document.querySelector('.display');
const name = document.querySelector('.name');
const exit = document.querySelector('.exit');



let current = 0;
let point = 0;
let seconds = 100;

let t = setInterval(() => {
    timer.innerText = seconds;
    seconds--;
    if (seconds === 0) {
        clearInterval(t);
        display.style.display = 'none';
        name.style.display = 'none';
        lose.style.display = 'block';
    }

}, 900);


let song = new Audio('song.mp3');
button2.addEventListener('click', () => {
    song.play();
});
button3.addEventListener('click', () => {
    song.pause();
});
exit.addEventListener('click', () => {
    close();
});


h1.onmouseover = () => {
    let r = Math.trunc(Math.random() * 255);
    let g = Math.trunc(Math.random() * 255);
    let b = Math.trunc(Math.random() * 255);
    h1.style.color = `rgb(${r}, ${g}, ${b})`
}

ques.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (data[current][index + 1].cur) {
            button.style.backgroundColor = "green";
            next.style.top = '90%';
            p1.style.display = 'block';
            point++;
            current++;
        } else {
            button.style.backgroundColor = "red";
            next.style.top = '90%';
            p2.style.display = 'block';
            current++;
        }
        if (current == 10) {
            name.innerText = '';
            lose.innerText = '';
            container.style.display = 'none';
            score.innerText = `Wow, Your Score: ${point}/10`;
            page.style.display = 'block';
            button1.addEventListener('click', () => {
                location.reload();
            })
        }
        cont.style = 'pointer-events: none';
    })
});

let color = ['red', 'green', 'blue', 'purple', 'pink', 'red', 'green', 'blue', 'purple', 'pink'];

next.addEventListener('click', () => nextBtn());


document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        nextBtn();
    }
})

function nextBtn() {
    cont.style = 'pointer-events: auto';
    next.style.top = '150%';
    if (point > 0) {
        count.innerText = `${point}/10`;
    };
    document.body.style.background = color[current];
    p1.style.display = 'none';
    p2.style.display = 'none';

    ques.forEach((item, index) => {
        item.style.backgroundColor = null;
        title.innerText = data[current][0].description;
        item.innerText = data[current][index + 1].ques;
    })
}