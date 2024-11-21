
function submit(){
    var usuario_num = document.getElementById("user").value;
    var mensagem = document.getElementById("user-men");
    var mensagemSenha = document.getElementById("senha-men");
    var senha_num = document.getElementById("senha").value;
    var check_user = document.getElementById("checkUser");
    var check_senha = document.getElementById("checkSenha");
    if (usuario_num != ("adm")){
        mensagem.style.visibility = "visible";
        check_user.style.visibility = "hidden";
    }
    else{
         mensagem.style.visibility = 'hidden';
         check_user.style.visibility = "visible";
    }
    if(senha_num != ("adm123")){
        mensagemSenha.style.visibility = "visible";
        check_senha.style.visibility = "hidden";
    }
    else{
        mensagemSenha.style.visibility = "hidden";
        check_senha.style.visibility = "visible";
        
    }
    if(usuario_num == ("adm") && senha_num == ("adm123")){
        window.location.href="quiz.html"
    }
}
    