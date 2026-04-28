// Também temos dois outros tipos específicos de conversão, além do Number(): parseInt() e parseFloat()

let n1 = Number.parseInt(window.prompt("Digite um número: "))
let n2 = Number.parseFloat(window.prompt("Digite outro número: "))

let total = n1 + n2

window.alert("O número " + n1 + " + o número " + n2 + " resulta em " + total)