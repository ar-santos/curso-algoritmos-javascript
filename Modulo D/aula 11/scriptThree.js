let velocidade = document.getElementById('input-velon');
let resultado = document.getElementById('res');

function calculoVelocidade() {
    let vel = Number(velocidade.value)
    resultado.innerHTML = `<p>Sua velocidade atual é: <strong>${vel}Km/h</strong></p>`
    
    if(vel > 60){
        resultado.innerHTML += `<p> Você foi <strong>MUTADO</strong> </p>`
    }
    
    resultado.innerHTML += 'Dirija sempre com segurança!'
}
