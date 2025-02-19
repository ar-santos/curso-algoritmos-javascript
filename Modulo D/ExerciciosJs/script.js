function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    // var hora = 9;

    msg.innerHTML= `Agora são ${hora}hrs`

    if(hora >= 0 && hora < 12){

        img.src = 'manha.jpg'
        document.body.style.background = '#87CEEB';

    }else if(hora >= 12 && hora <= 18 ){

        img.src = 'tarde.jpg'
        document.body.style.background = '#8B4513';

    }else {

        img.src = 'noite.jpg'
        document.body.style.background = '#191970';

    }
}

var msg = document.getElementById('msg')
var img = document.getElementById('img-manha')