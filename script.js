const inputChute = document.getElementById('inputNumber')
const button = document.querySelector('.btnChutar')
const mostrarResultado = document.querySelector('.resultado > p')
const tentativasRestantes = document.querySelector('.tentativas > span')

let tentativas = 3
let numeroAleatorio = Math.floor(Math.random()*11)

button.addEventListener('click', ()=> {
    
    if ( inputChute.value == numeroAleatorio ) {
        mostrarResultado.innerHTML = 'Parabéns, Você acertou!'
        mostrarResultado.classList.add('acertou')
        mostrarResultado.classList.remove('errou')
        button.setAttribute('disabled', '')
    } else {
        mostrarResultado.innerHTML = 'Que pena, você errou!'
        mostrarResultado.classList.add('errou')
        mostrarResultado.classList.remove('acertou')
    }
    
    tentativas--

        if (tentativas <= 0) {
            tentativasRestantes.innerHTML = 0
            button.setAttribute('disabled', '')
            mostrarResultado.innerHTML = 'Você perdeu, tente outra vez!'
            mostrarResultado.classList.add('errou')
            mostrarResultado.classList.remove('acertou')
            
        } else {
            tentativasRestantes.innerHTML = tentativas
        }
})