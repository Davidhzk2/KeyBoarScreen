// Keyboard

// textBox
let textBox = document.getElementById("textBox");

let btnBackspace = document.getElementById("btn-Backspace");
let btnSpace = document.getElementById("btn-space");

//  caracters
let btnPipe = document.getElementById("btnPipe");
let btn1 = document.getElementById("btn-one");
let btn2 = document.getElementById("btn-two");
let btn3= document.getElementById("btn-three");
let btn4 = document.getElementById("btn-four");
let btn5 = document.getElementById("btn-five");
let btn6 = document.getElementById("btn-six");
let btn7 = document.getElementById("btn-seven");
let btn8 = document.getElementById("btn-eight");
let btn9 = document.getElementById("btn-nine");
let btn0 = document.getElementById("btn-zero");
let btnqo = document.getElementById("btn-qo");
let btnqc = document.getElementById("btn-qc");



// funciones
const writeInBox = (btnValue) =>{
    textBox.innerHTML += btnValue;    
}
const backspace =() =>{
    textBox.innerHTML = textBox.innerHTML.substring(0,textBox.innerHTML.length  -1);
}

const space =() =>{
    textBox.innerHTML = textBox.innerHTML + " "; 
}



// Eventos

btnPipe.onclick = () =>{
    // console.log("|");
    writeInBox(btnPipe.innerHTML);
}
btn1.onclick = () =>{
    // console.log("|");
    writeInBox(btn1.innerHTML);
}
btn2.onclick = () =>{
    // console.log("|");
    writeInBox(btn2.innerHTML);
}
btn3.onclick = () =>{
    // console.log("|");
    writeInBox(btn3.innerHTML);
}
btn4.onclick = () =>{
    // console.log("|");
    writeInBox(btn4.innerHTML);
}
btn5.onclick = () =>{
    // console.log("|");
    writeInBox(btn5.innerHTML);
}
btn6.onclick = () =>{
    // console.log("|");
    writeInBox(btn6.innerHTML);
}
btn7.onclick = () =>{
    // console.log("|");
    writeInBox(btn7.innerHTML);
}
btn8.onclick = () =>{
    // console.log("|");
    writeInBox(btn8.innerHTML);
}
btn9.onclick = () =>{
    // console.log("|");
    writeInBox(btn9.innerHTML);
}
btn0.onclick = () =>{
    // console.log("|");
    writeInBox(btn0.innerHTML);
}
btnqo.onclick = () =>{
    // console.log("|");
    writeInBox(btnqo.innerHTML);
}
btnqc.onclick = () =>{
    // console.log("|");
    writeInBox(btnqc.innerHTML);
}

btnBackspace.onclick =() =>{
    backspace();
};
btnSpace.onclick = () =>{
    space();
}