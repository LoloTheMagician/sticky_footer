import Lenis from 'lenis'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Listen for the 'scroll' event and log the event data to the console
// lenis.on('scroll', (e) => {
//     console.log(e);
// });

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);


gsap.from('.shadow__footer', {
    y: 200,
    ease: 'circ.out',
    scrollTrigger: {
        start: '40% center',
        scrub: 1,
        // markers: true,
        fastScrollEnd: true,
    }
})


// gsap.to('main', {
//     backgroundColor: '#BEFF0D',
//     ease: 'circ.out',
//     scrollTrigger: {
//         trigger: 'footer',
//         scrub: 1,
//         markers: true,
//         start: 'start center',
//         end: 'center center',
//     }
// })


// gsap.from('.main__callToAction__talk span', {
//     opacity: 0,
//     stagger: .25,
//     ease: 'sine.out',
//     scrollTrigger: {
//         scrub: 1,
//         markers: true,
//         start: 'center center',
//     }
// })

