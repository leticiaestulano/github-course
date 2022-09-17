function imprimir(argumento) {
    console.log(argumento);
    
}
function mesmoNome(primeiroNome, segundoNome) {
    return primeiroNome == segundoNome
}
cwi = "CWI"
reset = "Reset"
imprimir(mesmoNome(cwi, cwi))   
imprimir(mesmoNome(cwi, reset)) 

function mesmoNome(a, b) {
    return (a == b)
}
a = "nomeDoFulano"
b = "nomeDeBeltrano"
imprimir(mesmoNome(a,b))

function maiorDeIdade(idade) {
    return (idade >= 18)
}
imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

function valorComJuros(boleto) {
    return (boleto * 1.1)
}
imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

function mediaAritmetica(itens) {
    soma = 0

    // somar todos os itens do array
    for (index = 0; index < itens.length; index++) {
        soma += itens[index]
    }

    // dividir o somatório pela quantidade de elementos
    return soma / itens.length
}
itens = (1, 2, 3, 4, 5)
imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3
