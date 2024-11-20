function btn1_true(){
    document.body.style.backgroundColor = "rgba(231, 92, 41, 0.658)";
}
function btn2_true(){
    document.body.style.backgroundColor = "#f7c081";
}
function btn3_true(){
    document.body.style.backgroundColor = "#f7f6e4";
}
function enviar() {
    var check1 = document.getElementById("r1b");
    var check2 = document.getElementById("r2b");
    var check3 = document.getElementById("r3a");
    var check4 = document.getElementById("r4a");
    var check5 = document.getElementById("r5b");
    var check6 = document.getElementById("r6a");
    var check7 = document.getElementById("r7a");
    var check8 = document.getElementById("r8a");
    var check9 = document.getElementById("r9b");
    var check10 = document.getElementById("r10a");

    var pontos = 0;
    
    if(check1 && check1.checked){
        pontos++;
    }
    if(check2 && check2.checked){
        pontos++;
    }
    if(check3 && check3.checked){
        pontos++;
    }
    if(check4 && check4.checked){
        pontos++;
    }
    if(check5 && check5.checked){
        pontos++;
    }
    if(check6 && check6.checked){
        pontos++;
    }
    if(check7 && check7.checked){
        pontos++;
    }
    if(check8 && check8.checked){
        pontos++;
    }
    if(check9 && check9.checked){
        pontos++;
    }
    if(check10 && check10.checked){
        pontos++;
    }
    
    alert('Pontos: ' + pontos );
    pontos = 0;
}
