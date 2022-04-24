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
  