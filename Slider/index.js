//Script Galerie Photos & Couleurs
const couleur1 = document.querySelector('.couleur1');
couleur1.addEventListener("click", change1);
const couleur2 = document.querySelector('.couleur2');
couleur2.addEventListener("click", change2);
const couleur3 = document.querySelector('.couleur3');
couleur3.addEventListener("click", change3);


function change1() {
    // Switch source image
    var image = document.getElementById('current');
    image.src="img/tanjiro3.jpg";

    // 
    this.style.opacity = 0.6;
    // Effet FadeIn
    current.classList.add('fade-in');
    setTimeout (function (){
        current.classList.remove('fade-in');
    },300);
}
function change2() {
    var image = document.getElementById('current');
    image.src="img/zenitsu.jpg";

    current.classList.add('fade-in');
    this.style.opacity = 0.6;
    setTimeout (function (){
        current.classList.remove('fade-in');
    },300);
}
function change3() {
    var image = document.getElementById('current');
    image.src="img/inosuke.jpg";

    current.classList.add('fade-in');
    this.style.opacity = 0.6;
    setTimeout (function (){
        current.classList.remove('fade-in');
    },300);
}