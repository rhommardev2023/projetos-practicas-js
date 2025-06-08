//OPERADORES LOGICOS

// AND ( && )
let idade = 18
let vistoVerificado = false
let resultado =  (idade >= 18) && (vistoVerificado === true) 
console.log(resultado)

// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair)

// NOT  ( !) - nega uma afirmação
let tempo1 = "chuva"
let resultado1 = tempo1 === "chuva"
console.log(!!resultado1)

// NOT  ( !) - nega uma afirmação
let tempo2 = "chuva"
let horario2 = 8
let resultado2 = !((tempo2 !== "chuva") && (horario2 > 6))
console.log(resultado2)

//ESTRUTURAS DE CONTROLE // IF // ELSE IF // ELSE

let possuiOvos = true
let itensComprados = ""

if(possuiOvos){
itensComprados = "Leite"
}
else{
console.log("passou na sessão de congelados")
itensComprados = "Lasanha congelada"
}

console.log("item comprado: " + itensComprados)

//**Como Funciona o Switch Case?**

//O Switch Case é uma maneira legal que o JavaScript tem de fazer escolhas. É como se o computador tivesse várias opções e escolhesse uma com base em um valor que você dá a ele. Vamos ver como isso funciona:1. Primeiro, você diz ao computador o valor que quer verificar.
//2. Depois, o computador olha para todas as opções que você forneceu e escolhe a opção certa.
//**Palavras-Chave Importantes do Switch Case**

//- `switch`: É a palavra que diz ao computador que estamos começando a escolher com base em um valor.
//- `case`: São as opções que você dá ao computador para escolher.
//- `break`: Esta é uma palavra que diz ao computador para parar de verificar opções depois que encontra a correta.
//- `default`: É a opção que o computador escolhe se nenhuma das opções anteriores combina com o valor que você deu.

let dia = "quinta"; // Você pode mudar isso para outros dias

switch (dia) {
  case "segunda":
    console.log("Dia de começar a semana com energia!");
    break;
  case "terça":
    console.log("Hora de aprender coisas novas!");
    break;
  case "quarta":
    console.log("Metade da semana, continue firme!");
    break;
  case "quinta":
    console.log("Quase lá, um pouco mais de esforço!");
    break;
  case "sexta":
    console.log("Dia de comemorar, o fim de semana está chegando!");
    break;
  default:
    console.log("Final de semana! Descanse e divirta-se!");
}

//## Exemplo de for em JavaScript

//O laço `for` é utilizado para executar um bloco de código várias vezes, de acordo com uma condição específica. O exemplo abaixo percorre um array de números e imprime cada elemento no console:

//```jsx
newFunction()
function newFunction() {
  const numeros2 = [1, 2, 3, 4, 5]

  for (let i = 0; i < numeros2.length; i++) {
    console.log(numeros2[i])
  }
}
//Na primeira linha, criamos um array de números. Dentro do laço `for`, declaramos uma variável de controle `i` e a inicializamos com `0`. A condição para continuar a execução é `i < numeros.length`, ou seja, enquanto `i` for menor que o tamanho do array `numeros`. Na última linha do loop, incrementamos `i` em `1` com `i++`.