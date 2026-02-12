/* ===============================
   APNA DHABA – SCRIPT.JS
   Smooth • Subtle • Premium
   =============================== */

(function () {
  /* -----------------------------
     Header scroll behavior
     ----------------------------- */
  const header = document.querySelector(".site-header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  /* -----------------------------
     Fade-up animation on scroll
     ----------------------------- */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  document.querySelectorAll(".fade-up").forEach((el) => {
    observer.observe(el);
  });
})();
