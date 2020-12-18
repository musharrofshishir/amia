AOS.init();

// GSAP

var tl = gsap.timeline();

    tl.from(".left",{width: "0%", duration: 1.4, ease: "circ.inOut"})
    // tl.from(".right",{ duration:3, x:-3000, width: "0%", ease: "power3.out"})
    tl.from(".small", {duration: .6, y: -40, opacity: 0})
    tl.from(".small2", {duration: .6, y: -20, opacity: 0})
    tl.from(".header-content-wrap .main-heading", {duration: .6, y: -20, opacity: 0})
    tl.from(".header-btn", {duration: .6,opacity: 0})
    tl.from(".shape",{ duration:1, x:-50, opacity: 0})

gsap.from(".header-img",{
    duration: 3,
    ease: "power2.out",
    scale: 0.7,
    opacity: 0
});

// gsap.to(".about-img",{
//     scrollTrigger: ".about-img"    

// });

    