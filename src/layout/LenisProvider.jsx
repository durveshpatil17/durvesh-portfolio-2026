import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }) {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({ 
      duration: 0.8, // faster, more app-like
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    window.__lenis = lenis;
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    lenis.scrollTo(0, {immediate: true});
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    // GSAP MatchMedia for safe mobile animations
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(el, { y: 36, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' }
        });
      });
      gsap.from('.skill-pill', {
        opacity: 0, y: 10, stagger: 0.04, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: '.skills-section', start: 'top 85%', toggleActions: 'play none none none' }
      });
    });
    mm.add("(max-width: 767px)", () => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(el, { opacity: 0 }, {
          opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
        });
      });
    });

    return () => { lenis.destroy(); mm.revert(); };
  }, [location.pathname]); // Re-init on route change

  return <>{children}</>;
}
