const btn = document.querySelector('button');
let canvas = document.querySelector('#canvas');

const randomColor = () => {
    const val = "0123456789ABCDEF";

    let c = "#";

    for(let i=0;i<6;i++){
        c = c + val[Math.floor(Math.random()*16)];
    } 
    console.log(c);
    return c;
} 

function changeColor(){
    canvas.style.backgroundColor = randomColor();
}


btn.addEventListener("click",changeColor);