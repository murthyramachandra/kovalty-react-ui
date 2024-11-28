import Lenis from "@studio-freight/lenis";
import { gsap, ScrollTrigger } from "gsap/all";

export function myLenis(){

    if (typeof window !== "undefined") {
        const lenis = new Lenis();
        
        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 700);
        });

        gsap.ticker.lagSmoothing(0);
    }
    
}