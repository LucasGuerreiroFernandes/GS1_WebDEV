let count = 1;
let timeNextSlide = 4000
document.getElementById("radio1").checked = true;

alert("Seja Bem-Vindo")
setInterval( function(){
    nextImage();
},timeNextSlide)

if(document.getElementById("btn1")==true){
    
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