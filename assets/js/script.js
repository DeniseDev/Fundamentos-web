
/*
Case sensitive = reconhece letras maisculas e minusculas

por tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let comovocepodeajudar = document.querySelector('#comovocepodeajudar')
let nomeOk = false
let emailOk = false
let comovocêpodeajudarOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
 if (nome.value.length < 3) {
     txtNome.innerHTML = 'Nome Inválido'
     txtNome.style.color = 'red'
 } 
 else{
     txtNome.innerHTML = 'Nome Válido'
     txtNome.style.color = 'blue'
     nomeOk = true
 }

}

function validaEmail() {
let txtEmail = document.querySelector('#txtEmail')

if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
}
else{
    txtEmail.innerHTML = 'E-mail Válido'
    txtEmail.style.color = 'blue'
    emailOk = true
}

}

function validaComovocêpodeajudar(){
    let txtComovocêpodeajudar = document.querySelector('#txtcomovocepodeajudar')

    if(comovocêpodeajudar.value.length >= 100) {
        txtComovocêpodeajudar.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtComovocêpodeajudar.style.color = 'red'
        txtComovocêpodeajudar.style.display = 'block'
    }
    else{
        txtComovocêpodeajudar.style.display = 'none'
        comovocêpodeajudarOk = true
    }

}

function enviar() {
    if(nomeOk == true && emailOk == true && comovocêpodeajudarOk == true) {
        alert('Formulário enviado com sucesso!')
    }
    else {
        alert('Preencha os campos corretamente antes de enviar...')
    }
}

function mapaZoom() {
mapa.style.width = '800px'
mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}