var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: 'smooth'
    })
}

//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();
    
    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    } else {
        alert("Acesso Negado. Dados incorretos")
    }
}

//Ativar alert no botão cadastrar
