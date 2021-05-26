// Keyboard

// textBox
let textBox = document.getElementById("textBox");

let btnBackspace = document.getElementById("btn-Backspace");
let btnSpace = document.getElementById("btn-space");
let btnTab = document.getElementById("btn-tab");
let btnIntro = document.getElementById("btn-intro");

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

let btnq = document.getElementById("btn-q");
let btnw = document.getElementById("btn-w");
let btne = document.getElementById("btn-e");
let btnr = document.getElementById("btn-r");
let btnt = document.getElementById("btn-t");
let btny = document.getElementById("btn-y");
let btnu = document.getElementById("btn-u");
let btni = document.getElementById("btn-i");
let btno = document.getElementById("btn-o");
let btnp = document.getElementById("btn-p");
let btnAcent = document.getElementById("btn-acent");
let btnPlus = document.getElementById("btn-plus");
// let btn = document.getElementById("btn-q");



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

const tab = () =>{
    textBox.innerHTML = textBox.innerHTML + "    ";
}
const intro = () =>{
    textBox.innerHTML = textBox.innerHTML + "\n";
}



// Eventos

btnPipe.onclick = () =>{
    writeInBox(btnPipe.innerHTML);
}
btn1.onclick = () =>{
    writeInBox(btn1.innerHTML);
}
btn2.onclick = () =>{
    writeInBox(btn2.innerHTML);
}
btn3.onclick = () =>{
    writeInBox(btn3.innerHTML);
}
btn4.onclick = () =>{
    writeInBox(btn4.innerHTML);
}
btn5.onclick = () =>{
    writeInBox(btn5.innerHTML);
}
btn6.onclick = () =>{
    writeInBox(btn6.innerHTML);
}
btn7.onclick = () =>{
    writeInBox(btn7.innerHTML);
}
btn8.onclick = () =>{
    writeInBox(btn8.innerHTML);
}
btn9.onclick = () =>{
    writeInBox(btn9.innerHTML);
}
btn0.onclick = () =>{
    writeInBox(btn0.innerHTML);
}
btnqo.onclick = () =>{
    writeInBox(btnqo.innerHTML);
}
btnqc.onclick = () =>{
    writeInBox(btnqc.innerHTML);
}
btnq.onclick = () =>{
    writeInBox(btnq.innerHTML);
}
btnw.onclick = () =>{
    writeInBox(btnw.innerHTML);
}
btne.onclick = () =>{
    writeInBox(btne.innerHTML);
}
btnr.onclick = () =>{
    writeInBox(btnr.innerHTML);
}
btnt.onclick = () =>{
    writeInBox(btnt.innerHTML);
}
btny.onclick = () =>{
    writeInBox(btny.innerHTML);
}
btnu.onclick = () =>{
    writeInBox(btnu.innerHTML);
}
btni.onclick = () =>{
    writeInBox(btni.innerHTML);
}
btno.onclick = () =>{
    writeInBox(btno.innerHTML);
}
btnp.onclick = () =>{
    writeInBox(btnp.innerHTML);
}
btnAcent.onclick = () =>{
    writeInBox(btnAcent.innerHTML);
}
btnPlus.onclick = () =>{
    writeInBox(btnPlus.innerHTML);
}


// Special Buttons

btnBackspace.onclick =() =>{
    backspace();
};
btnSpace.onclick = () =>{
    space();
}
btnTab.onclick = () =>{
    tab();
}
btnIntro.onclick = () =>{
    intro();
}