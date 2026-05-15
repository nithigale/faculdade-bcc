// Uso do operador && para combinar condições

let idade = Number(window.prompt("Qual é a sua idade?"))

if(idade >=6 && idade <= 14){
    window.alert("Você deve estar no ensino fundamental")
}
else if(idade >=15 && idade <= 17){
    window.alert("Você deve estar no ensino médio")
}
else{
    window.alert("Você provavelmente deve estar na faculdade")
}

// Usando o operador || (OU): basta uma condição ser verdadeira

let idade = Number(window.prompt("Qual é a sua idade?"))
let temCarteira = true

if (idade >= 18 || temCarteira) {
    window.alert("Você pode dirigir")
} else {
    window.alert("Você não pode dirigir")
}

// Usando o operador ! para inverter o valor lógico

let logado = false

if (!logado) {
    window.alert("Você precisa fazer login")
} else {
    window.alert("Bem-vindo!")
}

//ternário

let media = Number(window.prompt("Qual foi a sua média desse bimestre?"))
window.alert(media > 5 ? "Aprovado" : "Reprovado")