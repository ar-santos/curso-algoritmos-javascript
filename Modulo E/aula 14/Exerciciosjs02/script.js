function resultadotabuada() {
    let tabuada = Number(document.getElementById('tabuada').value);
    let res = document.getElementById('res')

    if (tabuada <= 0) {
        res.innerHTML = "Por favor, preencha os campos corretamente.";
        return;
    }// Um numero maior que 0

    res.innerHTML = "";

    for (let i = 0; i <= 10; i++){
        res.innerHTML += `${tabuada} x ${i} = ${tabuada * i} <br>`;
    }
}

let btnResult = document.getElementById('btnResult')

function limparInputTabuada() {
    document.getElementById('tabuada').value = "";
}

btnResult.addEventListener('click', limparInputTabuada);