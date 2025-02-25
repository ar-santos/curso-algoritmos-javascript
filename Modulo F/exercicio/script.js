let input = document.getElementById('txano');
let res = document.getElementById('res');
let resFinalizar = document.getElementById('resFinalizar');

let lista = document.getElementById('flista');

let btnVerificar = document.getElementById('btnVerificar');
let btnFinalizar = document.getElementById('btn-finalizar');

let numeros = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function verificador() {

    if(isNumero(input.value) && !inlista(input.value, numeros)){
        numeros.push(Number(input.value))

        let item = document.createElement('option')
        item.text = `Valor ${input.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        alert('Valor inválido ou já encontrado na lista.')
    }

    input.value = ''
    input.focus()
}

function finalizaVerificador() {

    if (numeros.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else {
        let tot = numeros.length

        let maiorNumero = Math.max(...numeros);
        let menorNumero = Math.min(...numeros);

        let soma = 0;
        let media = 0;

        for(let pos in numeros){
            soma += numeros[pos]
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrado.</p>`
        res.innerHTML += `<p>O maior número adicionado foi ${maiorNumero}.</p>`
        res.innerHTML += `<p>O menor número adicionado foi ${menorNumero}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    
    }
}

btnVerificar.addEventListener('click', verificador)
btnFinalizar.addEventListener('click', finalizaVerificador)