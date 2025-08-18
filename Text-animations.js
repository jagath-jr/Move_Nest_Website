// Wait for the document to be fully loaded before running the animations
document.addEventListener("DOMContentLoaded", function() {

  // IMPORTANT: Register the GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // --- 1. FADE-IN AND SLIDE-UP ---
  gsap.utils.toArray(".animate-fade-up").forEach(element => {
    gsap.from(element, { y: 50, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play none none none" } });
  });

  // --- 2. STAGGERED CHARACTER REVEAL ---
  gsap.utils.toArray(".animate-char-stagger").forEach(element => {
    const text = element.textContent;
    element.textContent = "";
    for (let char of text) {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = char === " " ? "inline" : "inline-block";
      element.appendChild(span);
    }
    gsap.from(element.querySelectorAll("span"), { y: 40, opacity: 0, duration: 0.8, ease: "back.out(1.7)", stagger: 0.05, scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play none none none" } });
  });

  // --- 3. TYPING EFFECT (CLIP PATH) ---
  gsap.utils.toArray(".animate-typewriter").forEach(element => {
    gsap.from(element, { clipPath: "inset(0 100% 0 0)", duration: 2, ease: "steps(30)", scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play none none none" } });
  });

  // --- 4. BOUNCY WORDS DROP-IN ---
  gsap.utils.toArray(".animate-bounce-in").forEach(element => {
    const text = element.textContent;
    element.innerHTML = text.split(" ").map(word => `<span>${word}</span>`).join(" ");
    gsap.from(element.querySelectorAll("span"), { y: -80, opacity: 0, duration: 1.5, ease: "bounce.out", stagger: 0.1, scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play none none none" } });
  });

  // --- 5. BLUR-IN EFFECT ---
  gsap.utils.toArray(".animate-blur-in").forEach(element => {
    gsap.from(element, { filter: "blur(20px)", opacity: 0, duration: 1.2, ease: "power1.inOut", scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play none none none" } });
  });

  // --- 6. 3D FLIP-IN CHARACTERS ---
 gsap.utils.toArray(".animate-flip-in").forEach(element => {
    gsap.set(element.parentElement, { perspective: 800 });
    const text = element.textContent;
    element.textContent = "";
    for (let char of text) {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = char === " " ? "inline" : "inline-block";
      element.appendChild(span);
    }
    gsap.from(element.querySelectorAll("span"), { 
      rotationX: -90, 
      opacity: 0, 
      transformOrigin: "50% 50%", 
      duration: 0.3, // Decreased for faster animation (was 0.5)
      ease: "power2.inOut", 
      stagger: 0.04, // Decreased for faster stagger (was 0.05)
      scrollTrigger: { 
        trigger: element, 
        start: "top 85%", 
        toggleActions: "play none none none" 
      } 
    });
});


  // --- 7. "FROM NOTHING" SCALE-UP ---
  gsap.utils.toArray(".animate-scale-up").forEach(element => {
    const text = element.textContent;
    element.textContent = "";
    for (let char of text) {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = char === " " ? "inline" : "inline-block";
      element.appendChild(span);
    }
    gsap.from(element.querySelectorAll("span"), { scale: 0, opacity: 0, duration: 1, ease: "back.out(2)", stagger: 0.04, scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play none none none" } });
  });

  /*-------------- WAVE ANIMATION --------------*/
gsap.utils.toArray(".animate-wave").forEach(element => {
    const text = element.textContent;
    element.textContent = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = char === " " ? "inline" : "inline-block";
        element.appendChild(span);
    }
    
    gsap.from(element.querySelectorAll("span"), {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: {
            amount: 0.6,
            from: "random"  // This creates a more wave-like effect
        },
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});
  // --- 8. SKEW AND UN-SKEW SLIDE-IN ---
  gsap.utils.toArray(".animate-skew-in").forEach(element => {
    gsap.from(element, { skewX: 20, x: -100, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play none none none" } });
  });
gsap.utils.toArray(".animate-skew-in-opposite").forEach(element => {
    gsap.from(element, { skewX: -20, x: 100, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play none none none" } });
  });

  // --- 9. "EXPLODE-IN" CHARACTERS ---
  gsap.utils.toArray(".animate-explode-in").forEach(element => {
    const text = element.textContent;
    element.textContent = "";
    for (let char of text) {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = char === " " ? "inline" : "inline-block";
      element.appendChild(span);
    }
    gsap.from(element.querySelectorAll("span"), { x: () => gsap.utils.random(-200, 200), y: () => gsap.utils.random(-150, 150), opacity: 0, duration: 1.5, ease: "power2.out", stagger: 0.03, scrollTrigger: { trigger: element, start: "top 90%", toggleActions: "play none none none" } });
  });

});