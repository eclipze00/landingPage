let email = document.querySelector('#exampleFormControlInput1')
let assunto = document.querySelector('#exampleFormControlTextarea1')
let emailOk = false
let assuntoOk = false
let contador = document.querySelector('#contador')
contador.innerHTML = "0 / 100"


function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'E-mail inválido - preciso de um @ e de um . ❌';
    txtEmail.style.color = '#732626';
    } else {
    txtEmail.innerHTML = 'E-mail válido ✔';
    txtEmail.style.color = '#26733a';
    emailOk = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');

    contador.innerHTML = `${assunto.value.length} / 100`


    if (assunto.value.length >= 100) {
    txtAssunto.innerHTML =
    'Texto é muito grande, digite no máximo 100 caracteres ❌';
    txtAssunto.style.color = '#732626';
    txtAssunto.style.display = 'block';
    } else {
    txtAssunto.style.display = 'none';
    assuntoOk = true;
    }
}

function enviar() {
    if (emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert('Preencha  o formulário corretamente antes de enviar...')
    }
}

function count(){
    let contador = document.querySelector('#contador')
    contador.innerHTML = `${assunto.value.length} / 144`
}