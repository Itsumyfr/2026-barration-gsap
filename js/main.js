/* Imports ----------- */
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

/* Variables --------- */

/* Fonctions --------- */

/* Animation première section - ScrollTo - La f1 ouvre le site */
/* Source : CLaude */
const tl = gsap.timeline();

tl.fromTo("#formulaMoving",
    /* xPercent c'est pour que la f1 sorte de l'écrant */
  { xPercent: -150 }, 
  { xPercent: 150, duration: 1.4, ease: "none" }, 0 /* Pour indiquer quand commence l'animation dans la timeline */
)
.fromTo("#revealText",
    /* clipPath c'est un effet masck dynamique qui permet de dévoilé le texte en mode rideau et si le 100% arrive en deuxième position c'est pour dire que le texte se dévoile de gauche à droite comme le mouvement de la voiture*/
  { clipPath: "inset(0 100% 0 0)" }, 
  { clipPath: "inset(0 0% 0 0)", duration: 0.6, ease: "none" }, 0.3
);

/* Animation deuxième section - ScollTrigger - seul les div compétence bouge au scroll*/

function katchow(){ //easter egg cars
    var audio = new Audio('assets/son/katchow.mp3');
    audio.play();
}


// Source Gémini
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#sectionPres',
        strat: 'top top',
        end: "+=800", // distance de scroll nécessaire pour finir la transition
        pin: true,
        scrub: 1,
    }
});

tl2
//On fait disparaitre le block déjà présent
    .to('#boxText', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power1.inOut" //Cette ligne définit la courbe d'accélération (l'atténuation) de ton animation dans GSAP.
        //power1 c'est le niveau de l'accelération de l'annimation et inout c'est comment est le moment
    })

//On fait appraitre le bloc compétence
    .fromTo('#boxCompetences',{
        opacity: 0, 
        y: 50
    },
    {
        opacity: 1, 
        y: -140, 
        duration: 1,
        ease: "power1.inOut",
        onStart: () => { document.querySelector('#boxCompetences').style.pointerEvents = 'all'; }
    },
    0.5) // Chevauchement léger pour une transition plus fluide

    // 3. (Optionnel) Effet d'apparition en cascade sur les carrés de compétences
    .from("#boxCompetences .card", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5
    }, 0.5);

/* Animation troisième section - Draggable */
const CORRECT_ORDER = ["1", "2", "3"]; // ordre attendu

Draggable.create("#card_projet", {
    type: 'x',
    bounds: '#sectionProjets',
    dragResistance: 0.65,

    onDragStart() { //S'exécute au moment où tu cliquesl'élément 
    gsap.to(this.target, { scale: 1.05, zIndex: 10, duration: 0.2 });
  },
    onDragEnd() {//S'exécute au moment où tu lâches le clic
    gsap.to(this.target, { scale: 1, zIndex: 1, duration: 0.2 });
  }
})


