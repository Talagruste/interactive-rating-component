const submit_btn = document.querySelector('.submit-btn')
const default_content = document.getElementById('default-content')
const tks_content = document.getElementById('tks-content')
const ratings = document.querySelectorAll('.rating')
const score_rating = document.getElementById('score')
let score = 'A'

submit_btn.addEventListener('click', tksCard)

function tksCard() {
    if (score === 'A') {
        alert('Please, select a rating score.')
    } else {
        default_content.classList.add('hidden')
        score_rating.textContent = score
        tks_content.classList.remove('hidden')
    }
}

ratings.forEach(btn => {
    btn.addEventListener('click', ratingClick)
})

function ratingClick(click) {
    ratings.forEach(btn => {
        btn.classList.remove('active')
    })

    if (click.target.classList.contains('rating')) {
        click.target.classList.add('active')
    } else {
        click.target.parentElement.classList.add('active')
    }
    score = click.target.textContent
}
