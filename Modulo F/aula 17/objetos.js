let amigo = {nome: 'José', 
    sexo: 'M', 
    peso: 75.5,
    engordar(p){
        console.log('Engordou')
        this.peso += p
}}

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)