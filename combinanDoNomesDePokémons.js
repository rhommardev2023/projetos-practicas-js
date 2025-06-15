// TODO: Defina uma função chamada "combinandoNomesPokemons" que recebe um parâmetro chamado (palavra);
// TODO: Dentro da função, crie uma variável chamada "palavraPokemon" que é formada pela concatenação da "palavra" com a string "saur";  
// TODO: Após a váriavel, retorne a palavra pokemon; 
function combinandoNomesPokemons(palavra) {
    // Concatenando a palavra recebida com "saur" para formar o nome do Pokémon
    var palavraPokemon = palavra + "saur";
    
    // Retornando o nome do Pokémon gerado
    return palavraPokemon;
}


// Entrada da palavra usando o gets():
var nomeEntrada = "bulba" ;//gets("bulba");

// Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo a palavra gerada:
console.log(palavraGerada);