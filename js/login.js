
function logar() {
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

   


    if(email.value !="" && senha.value != ""){

        setTimeout(function(){
            window.location.href = "menu.html"
        },1);
        
    }else {
        alert("usuario ou senha não preenchidos")

    }
}
