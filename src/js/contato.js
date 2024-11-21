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
    var nome = document.getElementById("nome_contato").value;
    var telefone = document.getElementById("telefone_contato").value;
    var email = document.getElementById("email_contato").value;

    let e_val = 0;

    if (email.indexOf('@'&&'.') === -1) {
        alert("Email não válido");  
        document.getElementById("email_contato").style.borderColor = "red";
        document.getElementById("email_label").style.color = "red";
    } else {
        e_val++;
        document.getElementById("email_contato").style.borderColor = "";
        document.getElementById("email_label").style.color = "";
    }

    
    if (!nome.match(/^[a-zA-Z\s]+$/)) {
        alert("O nome deve conter apenas letras");
        document.getElementById("nome_contato").style.borderColor = "red";
        document.getElementById("nome_label").style.color = "red";
    }
    else{
        e_val++;
        document.getElementById("nome_contato").style.borderColor = "";
        document.getElementById("nome_label").style.color = "";
    }
    if (telefone.match(/^[0-9\s]+$/)){
        e_val++;
        document.getElementById("telefone_contato").style.borderColor = "";
        document.getElementById("tel_label").style.color = "";
    }
    else{
        alert("Telefone Inválido")
        document.getElementById("telefone_contato").style.borderColor = "red";
        document.getElementById("tel_label").style.color = "red";
    }

    if (e_val === 3) {
        alert("Formulário enviado!");
    }
       

}
