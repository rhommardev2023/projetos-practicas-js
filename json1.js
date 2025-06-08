// significado de JSON  javascript object notation


// criamos uma funciion que despues sera transformada en um JSON

let name = "Felipe";
let age = 28 ;
let products = ["mouse 2xwm", "teclado mecanico ", "monitor"];
let productsvalues = [29.99,129.99,899.99];

//chamada da funcion
generateInvoice(name, products, productsvalues , age);

function generateInvoice(name, products, productsvalues , age ) {
    console.log("O comprador é "+ name);
    console.log(`A idade é ${age}`);
    console.log("---------------------");
    console.log("O produto é "+ products[0]);
    console.log("O valor do produto é "+ productsvalues[0]);
}
