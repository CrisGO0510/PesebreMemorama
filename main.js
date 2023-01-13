// variables for modal intro
let button = document.querySelector('.button');
let background = document.querySelector('.background');
let popup = document.querySelector('.pop-up');
let body = document.querySelector('body');
let audiointro = document.querySelector('#audio-intro');
let correcta = document.querySelector('#correcta');
let incorrecta = document.querySelector('#incorrecta');
let pair1 = document.querySelector('#pair1');
let pair2 = document.querySelector('#pair2');
let pair3 = document.querySelector('#pair3');
let pair4 = document.querySelector('#pair4');
let pair5 = document.querySelector('#pair5');
let pair6 = document.querySelector('#pair6');
let pair7 = document.querySelector('#pair7');
let pair8 = document.querySelector('#pair8');
var ending = 0;

// event for the modal intro
button.addEventListener('click',() => {
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
    var cards = [];
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
    let card = document.querySelector('#card'+i)
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
        let rear0 = document.querySelector('#rear'+selections[0]);
        let rear1 = document.querySelector('#rear'+selections[1]);
        if (rear0.innerHTML != rear1.innerHTML) {
            let card0 = document.querySelector('#card'+selections[0]);
            let card1 = document.querySelector('#card'+selections[1]);
            card0.style.transform = "rotateY(0deg)";
            card1.style.transform = "rotateY(0deg)";
            incorrecta.play();
        } else {
            correcta.play();
            let comprobar = rear0.innerHTML;
            console.log(comprobar);
            if (comprobar == '<img src="./img/parejas-001.png">') {
                ending += 1;
                pair1.play();
                personNum(1);
            } else if (comprobar == '<img src="./img/parejas-002.png">') {
                ending += 1;
                pair2.play();
                personNum(2);
            } else if (comprobar == '<img src="./img/parejas-003.png">') {
                ending += 1;
                pair3.play();
                personNum(3);
            } else if (comprobar == '<img src="./img/parejas-004.png">') {
                ending += 1;
                pair4.play();
                personNum(4);
            } else if (comprobar == '<img src="./img/parejas-005.png">') {
                ending += 1;
                pair5.play();
                personNum(5);
            } else if (comprobar == '<img src="./img/parejas-006.png">') {
                ending += 1;
                pair6.play();
                personNum(6);
            } else if (comprobar == '<img src="./img/parejas-007.png">') {
                ending += 1;
                pair7.play();
                personNum(7);
            } else if (comprobar == '<img src="./img/parejas-008.png">') {
                ending += 1;
                pair8.play();
                personNum(8);
            }
        }
    }, 1000);
}



// modal final details

// Función para para el audio

function stopper() {
    correcta.pause();
    incorrecta.pause();
    pair1.pause();
    pair2.pause();
    pair3.pause();
    pair4.pause();
    pair5.pause();
    pair6.pause();
    pair7.pause();
    pair8.pause();
}

// Función para cerrar la ventana modal

function cerrarModal() {
    document.querySelector('.content-modal').classList.add('fade-in-up');
    setTimeout(() => {
        document.getElementById("contenedor").style.display = "none";
    }, 1000);
    if (ending == 8) {
        ending = 0;
        final.play();
        abrirModalFinal();
    }
}

// Función para abrir la ventana modal, siendo la variable texto el mensaje que irá a la derecha

function abrirModal(texto) {
    if (ending == 8) {
        document.getElementById('btn-cerrar').setAttribute('value', "Finalizar")
    }
    audiointro.pause();
    document.querySelector('.content-modal').classList.remove('fade-in-up');
    document.getElementById("modal_texto").textContent = texto;
    document.getElementById("contenedor").style.display = "flex";
}

// Función para revelar un personaje, siendo x el nombre entre comillas

function caida(x) {
    let personaje = document.getElementById(`${x}`)
    personaje.classList.add('showItem');
}

// Función para borrar un personaje, siendo x el nombre entre comillas

function erase(x) {
    let personaje = document.getElementById(`${x}`)
    personaje.classList.add("disnone");
}

// Función cuando se gana

function win() {
    document.getElementById("modal_titulo").textContent = "Armaste tu pesebre";
    document.getElementById("modal_texto").textContent = "Y junto con la esperanza de la llegada del Niño Dios te deseamos de todo corazón que ese regalo que tanto has anhelado llegue a ti en esta navidad."

}

// El setTimeOut es para darle tiempo al programa para que cargue la animación antes de ocultar la imagen 

function personNum(x) {
    switch (x) {
        case 1:
            abrirModal("La primera celebración navideña en la que se montó un pesebre para la conmemoración del nacimiento de Jesús, fue en la nochebuena del año 1223, realizada por San Francisco de Asís.");
            caida("maria");
            setTimeout(() => {
                erase("maria");
            }, 5000);
            break;
        case 2:
            abrirModal("En Ecuador, México, Colombia, Guatemala, El Salvador, Venezuela, Perú, Argentina, Chile y Canarias,  la figura del Niño Jesús se coloca después de la llegada de la Navidad.");
            caida("jose");
            setTimeout(() => {
                erase("jose");
            }, 5000);
            break;
        case 3:
            abrirModal("El villancico es un género de canción cuya letra hace referencia a la Navidad.")
            caida("jesus");
            setTimeout(() => {
                erase("jesus");
            }, 5000);
            break;
        case 4:
            abrirModal("El villancico es un género de canción cuya letra hace referencia a la Navidad.");
            caida("melchor");
            setTimeout(() => {
                erase("melchor");
            }, 5000);
            break;
        case 5:
            abrirModal("La palabra Tutaina es utilizada en Perú para referirse coloquialmente a una fiesta pequeña, por lo que el título de este villancico se refiere a la celebración de la tradicional novena de aguinaldos.");
            caida("gaspar");
            setTimeout(() => {
                erase("gaspar");
            }, 5000);
            break;
        case 6:
            abrirModal("A la nanita nana es un villancico compuesto por Jeremías Quintero, oriundo de Barbacoas, Nariño.");
            caida("baltazar");
            setTimeout(() => {
                erase("baltazar");
            }, 5000);
            break;
        case 7:
            abrirModal("A las novenas se les llama “Las Posadas” y  son fiestas populares en México, Honduras, Guatemala, El Salvador, Costa Rica, Nicaragua y Panamá.")
            caida("pastor");
            setTimeout(() => {
                erase("pastor");
            }, 5000);
            break;
        case 8:
            abrirModal("En las posadas, cada uno de los nueve días representa un valor, como humildad, fortaleza, desapego, caridad, confianza, justicia, pureza, alegría y generosidad.");
            caida("mula-buey");
            setTimeout(() => {
                erase("mula-buey");
            }, 5000);
            break;   
        default:
            console.log("Error en el switch de person");
            break;1
    }
}

// Función para ejecutar la ventana final

function abrirModalFinal() {
    document.getElementById("final-contenedor").style.display = "flex";
}

// Función para cerrar la ventana modal final

function cerrarModalFinal() {
    document.getElementById('container-final').classList.add('fade-in-up');
    setTimeout(() => {
        document.getElementById("final-contenedor").style.display = "none";
        document.getElementById('container-final').classList.remove('fade-in-up');
    }, 1000);
    document.getElementById('btn-cerrar').setAttribute('value', "Continuar");
}

// Función para agregarle la silueta a los personajes

function silueta() {
    let sil = ['baltazar', 'gaspar', 'melchor', 'pastor', 'jose', 'maria', 'jesus', 'mula-buey'];
    sil.map((nombre)=>{
        let personaje = document.getElementById(`${nombre}`);
        console.log(nombre);
        personaje.classList.remove("disnone");
        console.log(personaje);
    });
}

// Función para refrescar la pantalla y dirigirla al punto origen

function refrescar() {
    location.reload();
    location.reload();
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
