altura = 1.59
peso = 58

imc = peso / (altura * altura)
console.log(imc)

classificacao = ""
grau = 0

if (imc < 18.5) {
    classificacao = "magro"

} else if (imc < 25) {
    classificacao = "normal"

} else if (imc < 30) {
    classificacao = "com sobrepeso"
    grau = 1

} else if (imc < 40) {
    classificacao = "obeso"
    grau = 2

}

console.log("Seu IMC é", imc)
console.log("Você é considerado", classificacao)

if (grau > 0) {
    console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
  }
