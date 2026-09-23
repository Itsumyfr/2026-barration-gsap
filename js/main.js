/* Imports ----------- */
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

/* Variables --------- */

/* Fonctions --------- */

/* Animation premier block - ScrollTo 
gsap.to("#movingBlock1", {
    x: '400px',
    rotation: 360,
    duration: 2,
}) */

/* Animation deuxième block - ScollTrigger 
gsap.from("#movingBlock2", {

    scrollTrigger: {
        trigger: "#section2",
        start: 'top 50%',
        scrub: 1,
        //markers: true,
        id : 'Section2',
        toggleActions: 'play none reverse reset', 
    },

    y: '50vh',
    rotation: 1200,
    duration: 2,
})*/

/* Animation troisième block - Timeline 
let tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
})

tl.to("#movingBlock3",{x: 100, })
.to("#movingBlock3",{y: 100, })
.to("#movingBlock3",{x: -100, })
.to("#movingBlock3",{y: -100, })*/

/* Animation quatrième block - Draggable 
Draggable.create("#movingBlock4", {
    //type: 'y',
    bounds: '#section4',
    dragResistance: 0.5,
})*/