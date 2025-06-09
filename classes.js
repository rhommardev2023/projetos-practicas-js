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

    //criando um metodo o mesmo que funcion mas nao e precisso escrever a paavra function
    escrever(){
        //messangem usando interpolacao de string 
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
    //  mais otro metodo mensagem 
    assar(){ 
        console.log("bolo assado de " + this.saborDaMassa)

    }
}
//OBJETO
//aqui representa a criacao do sabor de um primer bolo onde se describira o sabor da massa e sabor do recheio
//instancia
let boloFesta = new formaDeBolo ("massa de chocolate", "recheio de nutella")
//creando otro sabor de bolo
let boloPremium = new formaDeBolo("baunilha , coco")

//chamado do metoto para mostrar menssagem
boloFesta.escrever()
//chamado de otro metodo exemplo otro sabor de bolo

//chamado do metodo assar
boloFesta.assar()