media = (1 + 2 + 3 + 5 + 8 + 13 + 21 + 23 + 34 + 55) / 10
console.log(media)

meuNome = "Leticia"
nomeComum = false

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

for(nome = 0; nome < nomesComuns.length; nome++) {
    if(meuNome == nomesComuns[nome]) {
        nomeComum = true
        break
    }
}
if(nomeComum) {
    console.log("É nome comum :)")
} else {
    console.log("É diferente :)")
}
