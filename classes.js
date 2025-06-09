//criacao da clase
//exemplo de fazer um bolo de diferentes sabores onde a classe representara 
//a forma onde sera assado o bolo 
//CLASSE
class formaDeBolo {
    constructor(saborDaMassa, saborRecheio){
//propiedades this
this.saborDaMassa = saborDaMassa
this.saborRecheio = saborRecheio
    }
}
//OBJETO
//aqui representa a criacao do sabor de um primer bolo onde se describira o sabor da massa e sabor do recheio
//instancia
let boloFesta = new formaDeBolo ("massa de chocolate", "recheio de nutella")

//exemplo se quizer trazer so uma propriedade
console.log(boloFesta.saborDaMassa)

