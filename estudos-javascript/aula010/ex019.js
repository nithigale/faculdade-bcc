var time = Number(window.prompt('Que horas são?'))


if (time < 12) {
    var fun = document.getElementById('fundo')
    fun.style.background = 'wheat'

    var img = document.getElementById('main')

    img.innerHTML = `
    <p>Agora são ${time} horas</p>
    <img src="imagens/manha.avif">
    `
} else if (time >= 12 && time < 17) {
    var fun = document.getElementById('fundo')
    fun.style.background = 'rgb(255, 81, 0)'

    var img = document.getElementById('main')

    img.innerHTML = `
    <p>Agora são ${time} horas</p>
    <img src="imagens/tarde.jpg">
    `
} else {
    var fun = document.getElementById('fundo')
    fun.style.background = 'gray'

    var img = document.getElementById('main')

    img.innerHTML = `
    <p>Agora são ${time} horas</p>
    <img src="imagens/noite.jpg">
    `
}