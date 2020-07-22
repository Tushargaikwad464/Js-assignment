/* const attr = document.getElementById('attribute');
console.log(attr);

attr.setAttribute('style', 'color:red');
attr.setAttribute('style', 'background-color:blue;') */

const title = document.getElementById("title");


/* console.log(title);
console.log(title.innerHTML);
console.log(title.innerText); */

const name = prompt("enter your name", "Use");
title.innerText += ` Welcome ${name}`;


const ctime = document.getElementById('time');

function clock() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
clock();
setInterval(clock, 1000);

const dmode = document.getElementById('dark');

dmode.onclick = function changeColor() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';

}