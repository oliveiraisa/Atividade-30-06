function repetirValor (elemento, quantidade){
    let resultado = []
    for (let i = 0; i < quantidade; i++)
    resultado.push(elemento)
    return resultado;
};
console.log(repetirValor("codigo", 2)) //retorna ["codigo", "codigo"];
console.log(repetirValor(9, 3)) // retorna[9, 9, 9];

//Escreva uma função que recebe 2 parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto o segundo será o número de vezes que haverá repetição.
//Um array será retornado.
//Exemplo:
//repetir(“teste”, 2) // retorna [“teste”, “teste”]
//repetir( 4, 3 ) // retorna[4, 4, 4]