//Script Galerie Photos & Couleurs
const couleur1 = document.querySelector('.couleur1');
couleur1.addEventListener("click", change1);
const couleur2 = document.querySelector('.couleur2');
couleur2.addEventListener("click", change2);
const couleur3 = document.querySelector('.couleur3');
couleur3.addEventListener("click", change3);

function FadeIn () {
    current.classList.add('fade-in');
    setTimeout (function (){
        current.classList.remove('fade-in');
    },300);
}
function change1() {
    // Switch source image
    var image = document.getElementById('current');
    image.src="img/tanjiro3.jpg";
    FadeIn();
}
function change2() {
    var image = document.getElementById('current');
    image.src="img/zenitsu.jpg";
    FadeIn();

}
function change3() {
    var image = document.getElementById('current');
    image.src="img/inosuke.jpg";
    FadeIn();
}



//Script 2 Galerie Photos
const current2 = document.getElementById('current2');
const thumbnails = document.querySelectorAll('.thumbnail');

//Opacité pour voir la vignette select
thumbnails[0].style.opacity = 0.6;
//Boucle sur les vignettes
for (let i = 0; i < thumbnails.length; i++){
thumbnails[i].addEventListener('click', show);
};

function show() {
thumbnails.forEach(function (img){
    img.style.opacity = 1;
})
//Swich source current image
let imgSource = this.getAttribute('src');
current2.setAttribute('src', imgSource);

//Effet fade in
current2.classList.add('fade-in');
this.style.opacity = 0.6;
setTimeout (function (){
    current2.classList.remove('fade-in');
},300);
}



// Script 3 Slider
const current3 = document.getElementById('slide');

let slide = new Array("chihiro3.jpg", "chihiro2.jpg", "chihiro4.jpg", "chihiro1.jpg");
let i = 0;

function ChangeSlide(sens) {
    i = i + sens;
    if (i < 0)
        i = slide.length - 1;
    if (i > slide.length - 1)
        i = 0;
    document.getElementById("slide").src = "img/" + slide[i];
    //Effet fade in
    current3.classList.add('fade-in');
    setTimeout (function (){
        current3.classList.remove('fade-in');
    },300);
}
  

// Code à revoir
// Variables globales
let compteur = 0 // Compteur qui permettra de savoir sur quelle slide nous sommes
let timer, elements, slides, slideWidth

// window.onload = () => {

// On récupère le conteneur principal du diaporama
const diapo = document.querySelector(".diapo")

// On récupère le conteneur de tous les éléments
elements = document.querySelector(".elements")

// On récupère un tableau contenant la liste des diapos
slides = Array.from(elements.children)

// On récupère les deux flèches
let next = document.querySelector("#nav-droite")
let prev = document.querySelector("#nav-gauche")



// On calcule la largeur visible du diaporama
slideWidth = diapo.getBoundingClientRect().width

// On met en place les écouteurs d'évènements sur les flèches
next.addEventListener("click", slideNext)
prev.addEventListener("click", slidePrev)

    // Automatiser le diaporama
    timer = setInterval(slideNext, 4000)

    // Gérer le survol de la souris
    diapo.addEventListener("mouseover", stopTimer)
     diapo.addEventListener("mouseout", startTimer)

    // Mise en oeuvre du "responsive"
    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width
        slideNext()
    })
//}
/**
 * Cette fonction fait défiler le diaporama vers la droite
 */
function slideNext(){
    // On incrémente le compteur
    compteur++

    // Si on dépasse la fin du diaporama, on "rembobine"
    if(compteur == slides.length){
        compteur = 0
    }

    // On calcule la valeur du décalage
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

/**
 * Cette fonction fait défiler le diaporama vers la gauche
 */
function slidePrev(){
    // On décrémente le compteur
    compteur--

    // Si on dépasse le début du diaporama, on repart à la fin
    if(compteur < 0){
        compteur = slides.length - 1
    }

    // On calcule la valeur du décalage
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}



/**
 * On stoppe le défilement
 */
function stopTimer(){
    clearInterval(timer)
}

/**
 * On redémarre le défilement
 */
function startTimer(){
    timer = setInterval(slideNext, 4000)
}
