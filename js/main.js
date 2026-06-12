/* =====================================================================
   MAIN.JS – Grundfunktionen der Seite
   =====================================================================
   Enthält: Dark-Mode-Umschalter, mobiles Menü, Kopfzeilen-Schatten,
   Scroll-Einblendungen (Fade-in) und das Jahr im Footer.
   Zum Pflegen von Inhalten musst du hier nichts ändern.
   ===================================================================== */

/* --------------------------------------------------
   Dark-Mode-Umschalter
   Die Wahl wird in localStorage gespeichert und beim
   nächsten Besuch wiederhergestellt (siehe index.html).
   -------------------------------------------------- */
document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
});

/* --------------------------------------------------
   Mobiles Menü (Hamburger)
   -------------------------------------------------- */
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");

navToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

/* Menü schließen, sobald ein Link angeklickt wurde */
siteNav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* --------------------------------------------------
   Kopfzeile: Trennlinie einblenden, sobald gescrollt wird
   -------------------------------------------------- */
const header = document.querySelector(".site-header");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 8);
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

/* --------------------------------------------------
   Scroll-Einblendungen (Fade-in)
   Alles mit class="reveal" wird beobachtet und beim
   ersten Sichtbarwerden mit .visible eingeblendet.
   registerReveals() wird auch von gallery.js und
   projects.js für dynamisch erzeugte Elemente genutzt.
   -------------------------------------------------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target); // nur einmal animieren
      }
    }
  },
  { threshold: 0.12 }
);

function registerReveals(root = document) {
  root.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
    revealObserver.observe(el);
  });
}

registerReveals();
window.registerReveals = registerReveals; // für gallery.js / projects.js

/* --------------------------------------------------
   Aktuelles Jahr im Footer
   -------------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();
