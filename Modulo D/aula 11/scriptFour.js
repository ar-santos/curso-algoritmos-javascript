let origem = document.getElementById('pais');
let resultado = document.getElementById('res');

function verificarPais(){
    if(origem.value === 'Brasil'){
        resultado.innerHTML = 'Você é Brasileiro!'
    }else{
        resultado.innerHTML = 'Você é estrágerio!'
    }
}