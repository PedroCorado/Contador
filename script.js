const inicioStr = document.getElementById('inicio')
const fimStr = document.getElementById('fim')
const puloStr = document.getElementById('pulo')
const resposta = document.getElementById('resposta')
function clickar(){
    const inicio = Number(inicioStr.value)
    const fim = Number(fimStr.value)
    const pulo = Number(puloStr.value)
    resposta.innerText = ''
    if(inicio == 0 || fim == 0 || pulo == 0){
        alert('Voce digitou algo de errado')
    }
    else if(inicio < fim){
        for(var c = inicio;c <= fim; c += pulo){
            resposta.innerHTML += ` ${c} \u{1F449}`
        }
    }
    else if(inicio > fim){
        for (var c = inicio;c >= fim; c-= pulo){
        resposta.innerHTML += ` ${c} \u{1F449}`
        
    }
    }
    
}