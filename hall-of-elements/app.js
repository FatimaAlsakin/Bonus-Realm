const bellBtn = document.querySelector('#bell-button')
const message = document.querySelector('#royal-message')

function bellRinging(){
    message.textContent = "🔔 The Royal Bell is ringing! Codoria has been warned!"
    // Bonus 
    bellBtn.textContent = 'Bell Activated!'
    bellBtn.disabled = true 
}

bellBtn.addEventListener('click', bellRinging)

