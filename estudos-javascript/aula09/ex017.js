var agora = new Date()
var time = agora.getHours();
if (time < 12) {
    console.log(`Agora são ${time}h, bom dia`)
} else if (time <= 18) {
    console.log(`Agora são ${time}h, boa tarde`)
} else {
    console.log(`Agora são ${time}h, boa noite`)
}