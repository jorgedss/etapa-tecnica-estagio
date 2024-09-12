function stringCounter( letter, word){

    if (!isNaN(letter)) {
        return "Erro: Números nã são aceitos";
    }

    return word.split(letter).length - 1
}


//Exemplo

console.log(stringCounter('a','banana'))