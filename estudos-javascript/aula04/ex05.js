//length

let nome = window.prompt("Qual é o seu nome? ")
document.write(`Seu nome tem ${nome.length} letras<br/>`)

//toUpperCase() and toLowerCase()

document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}<br/>`)
document.write(`Seu nome em minusculas é ${nome.toLowerCase()}`)

//toFixed

let n = 10.345
document.write(n.toFixed(2))

//troca de elementos com replace

let n = 10.5
document.write(n.toFixed(2).replace(".", ",")) 

//Formatando números

let n = 1234.56
document.write(n.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}))
