

function envia() {
        //acesssando os inputs e o body
        const inputs = document.querySelectorAll('input')
        const body = document.querySelector('body')
        //criando a lista
        const ul = document.createElement('ul')
        const li_nome = document.createElement('li')
        const li_telefone = document.createElement('li')
        const li_endereco = document.createElement('li')
        const excluir = document.createElement('button')
        const editar = document.createElement('button')
        li_nome.innerHTML = inputs[0].value
        li_telefone.innerHTML = inputs[1].value
        li_endereco.innerHTML = inputs[2].value
        excluir.innerText = "Excluir"
        editar.innerText = "Editar"
        excluir.addEventListener("click", excluirFormulario);
        editar.addEventListener("click", editarFormulario);
        ul.appendChild(li_nome)
        ul.appendChild(li_telefone)
        ul.appendChild(li_endereco)
        ul.appendChild(excluir)
        ul.appendChild(editar)
        body.appendChild(ul)
        limpar()
}
function limpar() {
        const inputs = document.querySelectorAll('input')
        for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = ""
        }
}
function excluirFormulario(e) {
        const body = document.querySelector('body')
        body.removeChild(e.target.parentElement)
}

function editarFormulario(e) {
        ul = e.target.parentElement
        const inputs = document.querySelectorAll('input')
        for (i = 0; i < 3; i++) {
                inputs[i].value = ul.childNodes[i].textContent
        }
        const editar = document.querySelector('#editar')
        document.querySelector('#envia').classList.add('esconder')
        editar.classList.remove('esconder')

        editar.onclick = function () {
                for (i = 0; i < 3; i++) {
                        ul.childNodes[i].innerHTML = inputs[i].value
                }
                document.querySelector('#envia').classList.remove('esconder')
                editar.classList.add('esconder')
                limpar()
        }
}

onload = limpar