// Keyboard

// textBox
let textBox = document.getElementById("textBox");

let btnBackspace = document.getElementById("btn-Backspace");
let btnSpace = document.getElementById("btn-space");
let btnTab = document.getElementById("btn-tab");
let btnIntro = document.getElementById("btn-intro");
let btnclear = document.getElementById("btn-clear");

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

let btna = document.getElementById("btn-a");
let btns = document.getElementById("btn-s");
let btnd = document.getElementById("btn-d");
let btnf = document.getElementById("btn-f");
let btng = document.getElementById("btn-g");
let btnh = document.getElementById("btn-h");
let btnj = document.getElementById("btn-j");
let btnk = document.getElementById("btn-k");
let btnl = document.getElementById("btn-l");
let btnñ = document.getElementById("btn-ñ");
let btnko = document.getElementById("btn-ko");
let btnkc = document.getElementById("btn-kc");

let btnlt = document.getElementById("btn-lt");
let btnz = document.getElementById("btn-z");
let btnx= document.getElementById("btn-x");
let btnc = document.getElementById("btn-c");
let btnv = document.getElementById("btn-v");
let btnb = document.getElementById("btn-b");
let btnn = document.getElementById("btn-n");
let btnm = document.getElementById("btn-m");
let btncomma = document.getElementById("btn-comma");
let btnpoint = document.getElementById("btn-point");
let btnhyphen = document.getElementById("btn-hyphen");
let btngt = document.getElementById("btn-gt");



// funciones
const writeInBox = (btnValue) =>{
    textBox.innerHTML += btnValue;    
}
const clearAll =() =>{
    textBox.innerHTML = "";
};
const backspace =() =>{
    textBox.innerHTML = textBox.innerHTML.substring(0,textBox.innerHTML.length  -1);
};

const space =() =>{
    textBox.innerHTML = textBox.innerHTML + " "; 
};

const tab = () =>{
    textBox.innerHTML = textBox.innerHTML + "    ";
};
const intro = () =>{
    textBox.innerHTML = textBox.innerHTML + "\n";
};



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

btna.onclick = () =>{
    writeInBox(btna.innerHTML);
}
btns.onclick = () =>{
    writeInBox(btns.innerHTML);
}
btnd.onclick = () =>{
    writeInBox(btnd.innerHTML);
}
btnf.onclick = () =>{
    writeInBox(btnf.innerHTML);
}
btng.onclick = () =>{
    writeInBox(btng.innerHTML);
}
btnh.onclick = () =>{
    writeInBox(btnh.innerHTML);
}
btnj.onclick = () =>{
    writeInBox(btnj.innerHTML);
}
btnk.onclick = () =>{
    writeInBox(btnk.innerHTML);
}
btnl.onclick = () =>{
    writeInBox(btnl.innerHTML);
}
btnñ.onclick = () =>{
    writeInBox(btnñ.innerHTML);
}
btnko.onclick = () =>{
    writeInBox(btnko.innerHTML);
}
btnkc.onclick = () =>{
    writeInBox(btnkc.innerHTML);
}


btnlt.onclick = () =>{
    writeInBox(btnlt.innerHTML);
}
btnz.onclick = () =>{
    writeInBox(btnz.innerHTML);
}
btnx.onclick = () =>{
    writeInBox(btnx.innerHTML);
}
btnc.onclick = () =>{
    writeInBox(btnc.innerHTML);
}
btnv.onclick = () =>{
    writeInBox(btnv.innerHTML);
}
btnb.onclick = () =>{
    writeInBox(btnb.innerHTML);
}
btnn.onclick = () =>{
    writeInBox(btnn.innerHTML);
}
btnm.onclick = () =>{
    writeInBox(btnm.innerHTML);
}
btncomma.onclick = () =>{
    writeInBox(btncomma.innerHTML);
}
btnpoint.onclick = () =>{
    writeInBox(btnpoint.innerHTML);
}
btnhyphen.onclick = () =>{
    writeInBox(btnhyphen.innerHTML);
}
btngt.onclick = () =>{
    writeInBox(btngt.innerHTML);
}



// Special Buttons
btnclear.onclick = () =>{
    clearAll();
    window.location.reload();
}
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