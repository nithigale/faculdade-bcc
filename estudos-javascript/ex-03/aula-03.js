// Também temos dois outros tipos específicos de conversão, além do Number(): parseInt() e parseFloat()

let n1 = Number.parseInt(window.prompt("Digite um número: "))
let n2 = Number.parseFloat(window.prompt("Digite outro número: "))

let total = n1 + n2

window.alert("O número " + n1 + " + o número " + n2 + " resulta em " + total)

// Conversão de número para String

let idade = 18

window.alert("Olá sou o Chris e tenho " + String(idade) + " anos")

//Template String

let curso = "CursoemVideo"
let tema = "TemplateString"

window.alert(`Queria dizer que aprendi sobre ${tema} assistindo os videos do ${curso}`)

window.alert(`A soma entre o número ${n1} e o ${n2} é igual a ${total}`)