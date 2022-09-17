alunos = ["Giovana", "Carlos", "José", "Antônia", "Gabriel"]
notas = [[5.8, 9.3], [8.7, 4.5], [9.5, 8.7], [10, 9.6], [8.7, 7.5]]

for(num = 0; num < alunos.length; num++) {
alunoSelecionado = num

nomeDoAluno = alunos[num]
notasDoAluno = notas[num]

nota1 = notasDoAluno[0]
nota2 = notasDoAluno[1]

media = (nota1 + nota2) / 2

console.log(nomeDoAluno)
console.log("A primeira nota foi", nota1)
console.log("A segunda nota foi", nota2)
console.log(nomeDoAluno, "Teve média", media)
}