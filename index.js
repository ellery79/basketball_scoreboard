let homescore=document.getElementById("home-score")
let guestscore=document.getElementById("guest-score")

function addHomeScore(increment) {
    let score = parseInt(homescore.textContent) + increment
    homescore.textContent = score
}

function addGuestScore(increment) {
    let score = parseInt(guestscore.textContent) + increment
    guestscore.textContent = score
}

function reset() {
    homescore.textContent = 0
    guestscore.textContent = 0
}
