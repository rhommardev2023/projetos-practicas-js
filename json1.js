
//se transformara en JSON 

let invoice = {
    name : "Felipe",
    age : 28 , 
    products : {
       0: ["mouse 2xwm", 29.99],
       1: ["teclado mecanico", 129.99],
       2: ["monitor", 899.99]
    }
}


// se chama a funcao usando o json criado
generateInvoice(invoice);

function generateInvoice(invoice) {
    console.log("O comprador é "+ name);
    console.log(`A idade é ${age}`);
    console.log("---------------------");
    console.log("O produto é "+ products[0]);
    console.log("O valor do produto é "+ productsvalues[0]);
}