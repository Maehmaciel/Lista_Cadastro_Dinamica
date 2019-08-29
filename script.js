let cad_id=0
function envia(){
        //acesssando os inputs e o body
        const inputs=document.querySelectorAll('input')
        const body=document.querySelector('body')
        //criando a lista
        const ul= document.createElement('ul')
        const li_nome= document.createElement('li')
        const li_telefone= document.createElement('li')
        const li_endereco= document.createElement('li')
        const excluir= document.createElement('button')
        const editar= document.createElement('button')
        cad_id++
        ul.id=cad_id
        li_nome.innerHTML=inputs[0].value
        li_telefone.innerHTML=inputs[1].value
        li_endereco.innerHTML=inputs[2].value
        excluir.id="ex_"+cad_id
        excluir.innerText="Excluir"
        editar.id="ed_"+cad_id
        editar.innerText="Editar"
        excluir.setAttribute('onclick',`excluir('${excluir.id}')`)
        editar.setAttribute('onclick',`editar('${editar.id}')`)
        ul.appendChild(li_nome)
        ul.appendChild(li_telefone)
        ul.appendChild(li_endereco)
        ul.appendChild(excluir)
        ul.appendChild(editar)
        body.appendChild(ul)
        limpar()
}
function limpar(){
        const inputs=document.querySelectorAll('input')
        for(let i=0;i<inputs.length;i++){
                inputs[i].value=""
        }
}
function excluir(a){
        document.querySelector('body').removeChild(document.getElementById(a).parentElement)
       
}

function editar(a){
        li=document.getElementById(a)
        ul=li.parentElement
        const inputs=document.querySelectorAll('input')
                for(i=0;i<3;i++){
                inputs[i].value=ul.childNodes[i].textContent
                }   
        const editar= document.querySelector('#editar')
                document.querySelector('#envia').classList.add('esconder')
               editar.classList.remove('esconder')
                
                editar.onclick=function(){
                        for(i=0;i<3;i++){
                                ul.childNodes[i].innerHTML=inputs[i].value
                                }
                                document.querySelector('#envia').classList.remove('esconder')
                                editar.classList.add('esconder')
                                limpar()
                }
}
       
onload=limpar