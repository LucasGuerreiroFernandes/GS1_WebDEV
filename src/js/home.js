let count = 1;
let timeNextSlide = 4000
document.getElementById("radio1").checked = true;

alert("Seja Bem-Vindo")
setInterval( function(){
    nextImage();
},timeNextSlide)

function btn1_true(){
    document.body.style.backgroundColor = "rgba(231, 92, 41, 0.658)"
}
function btn2_true(){
    document.body.style.backgroundColor = "#f7c081"
}
function btn3_true(){
    document.body.style.backgroundColor = "#f7f6e4"
}

function nextImage(){
    if (document.getElementById("radio1").checked) {
        count=2
    }
    if (document.getElementById("radio2").checked) {
        count=3
    }
    if (document.getElementById("radio3").checked) {
        count=4
    }
    if (document.getElementById("radio4").checked) {
        count=1
    }
    document.getElementById("radio"+count).checked = true;
}


