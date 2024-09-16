let sliderInner = document.querySelector('.slider--inner');

let intervalID = null;
let translate = 0;
let speed = 10;

const btn_l = document.getElementById('btn-l');
const btn_r = document.getElementById('btn-r');

function startMovingLeft(){
    intervalID = setInterval(()=> {
        if (translate < 0){
            translate += 1;
            sliderInner.style.transform = `translateX(${translate}%)`;
        }
        console.log(translate);
        
    },speed) 
}

function startMovingRight() {
    intervalID = setInterval(()=>{
        if (translate >= -150){
            translate -= 1;
            sliderInner.style.transform = `translateX(${translate}%)`;
        }
        console.log(translate);

    },speed)
}
  
function stopMoving() { 
    clearInterval(intervalID);
}
btn_l.addEventListener('mousedown', () => {
    startMovingLeft();
});

btn_l.addEventListener('mouseup', () => {
    stopMoving();
});

btn_r.addEventListener('mousedown', () => {
    startMovingRight();
});

btn_r.addEventListener('mouseup', () => {
    stopMoving();
});

// Detener el movimiento si el usuario sale del área del botón
btn_l.addEventListener('mouseleave', () => {
    stopMoving();
});

btn_r.addEventListener('mouseleave', () => {
    stopMoving();
});