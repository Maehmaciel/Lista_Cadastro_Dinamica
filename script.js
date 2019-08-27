
function ave(){
        alert('inclui')
        const inputs=document.querySelectorAll('input')
        const body=document.querySelector('body')
        const ul= document.createElement('ul')
        const id_cad= document.createElement('li')
        const li_um= document.createElement('li')
        const li_dois= document.createElement('li')
        const li_tres= document.createElement('li')
        const excluir= document.createElement('button')
        const editar= document.createElement('button')
        li_um.innerHTML=inputs[0].value
        li_um.setAttribute('pos',`${inputs[0].value}`)
        li_dois.innerHTML=inputs[1].value
        li_dois.setAttribute('pos',`telefone`)
        li_tres.innerHTML=inputs[2].value
        li_tres.setAttribute('pos',`endereco`)
        excluir.id="ex_"+inputs[0].value
        excluir.innerText="Excluir"
        editar.id="ed_"+inputs[0].value
        editar.innerText="Editar"
        excluir.setAttribute('onclick',`excluir('${excluir.id}')`)
        editar.setAttribute('onclick',`editar('${editar.id}')`)
        ul.appendChild(li_um)
        ul.appendChild(li_dois)
        ul.appendChild(li_tres)
        ul.appendChild(excluir)
        ul.appendChild(editar)
        body.appendChild(ul)
        limpar()
}
function limpar(){
        const inputs=document.querySelectorAll('input')
        for(let i=0;i<inputs.length-1;i++){
                inputs[i].value=""
        }
}
function excluir(a){
        document.querySelector('body').removeChild(document.getElementById(a).parentElement)
       
}








function ed(a){
        alert('editou')
        const inputs=document.querySelectorAll('input')
        //const novo=a.cloneNode(true)
        alert(document.querySelector('envia').onclick)
        li=document.getElementById(a)
        ul=li.parentElement
        li_um=ul.childNodes[0]
        li_dois=ul.childNodes[1]
        li_tres=ul.childNodes[2]
        li_um.innerHTML=inputs[0].value
        li_dois.innerHTML=inputs[1].value
        li_tres.innerHTML=inputs[2].value
        excluir.id="ex_"+inputs[0].value
        excluir.innerText="Excluir"
        editar.id="ed_"+inputs[0].value
        editar.innerText="Editar"
        excluir.setAttribute('onclick',`excluir('${excluir.id}')`)
        editar.setAttribute('onclick',`editar('${editar.id}')`)
        limpar()
}







function editar(a){
        li=document.getElementById(a)
        ul=li.parentElement
//        alert(ul.childNodes[0].getAttribute('pos'))
        const inputs=document.querySelectorAll('input')
                for(i=0;i<3;i++){

                inputs[i].value=ul.childNodes[i].textContent
                }
               ed(a)
            
       
}

onload=limpar

