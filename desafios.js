//DESAFIO DIO LOGICA DE PROGRMACAO "CAPTURANDO POKEMONS INICIAIS"

// Entrada de dados:
let escolhaDoTreinador =5;
let pokemonEscolhido;

// Exibe a escolha numérica
// 


// Estrutura de decisão para verificar qual Pokémon foi escolhido
if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else if (escolhaDoTreinador === 5) {
    pokemonEscolhido = "Mewtwo";
} else {
    pokemonEscolhido = null;
}

// Exibe a mensagem final
if (pokemonEscolhido) {
    console.log("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
} else {
   console.log("Opcao invalida. Escolha entre 1, 2, 4 ou 5."); }