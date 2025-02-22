function comeca() {
    let inicio = Number(document.getElementById('inicio').value);
    let fim = Number(document.getElementById('fim').value);
    let passo = Number(document.getElementById('passo').value);
    let res = document.getElementById('res');

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
        res.innerHTML = "Por favor, preencha os campos corretamente.";
        return;
    }// Um numero maior que 0

    res.innerHTML = "Contando: <br>";  

    if (inicio < fim) {
        for (let i = inicio; i <= fim; i += passo) {
            res.innerHTML += `${i} 👉 `;
        }
    } else {
        for (let i = inicio; i >= fim; i -= passo) {
            res.innerHTML += `${i} 👉 `;
        }
    }

    res.innerHTML += "🏁"; 
}
