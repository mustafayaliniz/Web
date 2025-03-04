document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    // Madeni para efekti gibi döndürme animasyonu
    tl.to("#logo", { opacity: 1, scale: 1.1, rotationY: 360, duration: 4 }) // Y ekseni etrafında döner
      .to("h1", { opacity: 1, y: 0, duration: 1 }, "+=0.5") // Yavaşça yukarı gelir
      .to("p", { opacity: 1, y: 0, duration: 1 }, "+=0.5")  // Yavaşça yukarı gelir
      .to("h2", { opacity: 1, x: 0, duration: 1 }, "+=0.5") // Yavaşça sağa gelir
      .to("p.mt-2", { opacity: 1, x: 0, duration: 1 }, "+=0.5"); // Yavaşça sağa gelir
});
