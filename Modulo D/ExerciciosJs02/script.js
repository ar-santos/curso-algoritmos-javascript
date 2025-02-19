function verificar() {
    var data = new Date;
    var ano = data.getFullYear();
    var fano = document.getElementById('txano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '50px'
        img.style.padding = '20px'

        if(fsex[0].checked) {
            gênero = 'Homem'

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-m.jpg')

            }else if(idade < 21){
                img.setAttribute('src', 'jovem-m.jpg')

            }else if(idade < 50){
                img.setAttribute('src', 'adulto-m.jpg')

            }else{
                img.setAttribute('src', 'idoso-m.jpg')
            }

        }else if(fsex[1].checked){
            gênero = 'Mulher'

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-f.jpg')

            }else if(idade < 21){
                img.setAttribute('src', 'jovem-f.jpg')

            }else if(idade < 50){
                img.setAttribute('src', 'adulto-f.jpg')

            }else{
                img.setAttribute('src', 'idoso-f.jpg')
                
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}