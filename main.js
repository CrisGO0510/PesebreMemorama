// variables for modal intro
let button = document.querySelector('.button');
let background = document.querySelector('.background');
let popup = document.querySelector('.pop-up');
let body = document.querySelector('body');
let audiointro = document.querySelector('#audio-intro');

// event for the modal intro
button.addEventListener('click', () => {
    button.classList.add('hidden');
    popup.classList.add('hidden');
    background.classList.add('hidden');
    body.classList.remove('body');
    audiointro.play();
})

// images storage
const backimages = () => {
    images = [
        '<img src="./img/parejas-001.png">',
        '<img src="./img/parejas-002.png">',
        '<img src="./img/parejas-003.png">',
        '<img src="./img/parejas-004.png">',
        '<img src="./img/parejas-005.png">',
        '<img src="./img/parejas-006.png">',
        '<img src="./img/parejas-007.png">',
        '<img src="./img/parejas-008.png">'
    ]
}

// game generate
const gamegenerate = () => {
    backimages();
    let game = document.querySelector('#game');
    let cards = [];
    for (let i = 0; i < 16; i++) {
        cards.push(`
        <div class="card-area" onclick="selectcard(${i})">
          <div class="card" id="card${i}">
            <div class="rear face" id="rear${i}">${images[0]}</div>
            <div class="top face"><img src="./img/tarjeta_cubierta.png" alt=""></div>
          </div>
        </div>`);
        if (i % 2 == 1) {
            images.splice(0, 1);
        }
    }
    cards.sort(() => Math.random() - 0.5)
    game.innerHTML = cards.join(" ");
}
gamegenerate();

// array with the selected cards
let selections = [];

// select card game
const selectcard = (i) => {
    let card = document.querySelector('#card' + i)
    if (card.style.transform != "rotateY(180deg)") {
        card.style.transform = "rotateY(180deg)";
        selections.push(i);
    }
    if (selections.length == 2) {
        deselectcard(selections);
        selections = [];
    }
}

// deselec card game
const deselectcard = (selections) => {
    setTimeout(() => {
        let rear0 = document.querySelector('#rear' + selections[0]);
        let rear1 = document.querySelector('#rear' + selections[1]);
        if (rear0.innerHTML != rear1.innerHTML) {
            let card0 = document.querySelector('#card' + selections[0]);
            let card1 = document.querySelector('#card' + selections[1]);
            card0.style.transform = "rotateY(0deg)";
            card1.style.transform = "rotateY(0deg)";
        }
    }, 1000);
}