/* =====================================================================
   GALLERY.JS – Reise-Galerie mit Filter und Lightbox
   =====================================================================
   Liest die Fotos aus js/data/travel-data.js (TRAVEL_PHOTOS) und baut
   daraus die Filter-Buttons und das Masonry-Grid. Zum Pflegen von
   Inhalten musst du hier nichts ändern – nur die Datendatei bearbeiten.
   ===================================================================== */

(function () {
  const grid = document.getElementById("gallery-grid");
  const filterBar = document.getElementById("gallery-filters");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxCounter = document.getElementById("lightbox-counter");

  /* Aktuell sichtbare Fotos (abhängig vom gewählten Filter).
     Die Lightbox blättert immer nur durch diese Auswahl. */
  let visiblePhotos = [...TRAVEL_PHOTOS];
  let currentIndex = 0;

  /* --------------------------------------------------
     Filter-Buttons: "Alle" + ein Button pro Land.
     Die Länder werden automatisch aus den Daten gelesen.
     -------------------------------------------------- */
  function renderFilters() {
    const countries = [...new Set(TRAVEL_PHOTOS.map((p) => p.country))];

    ["Alle", ...countries].forEach((label, i) => {
      const btn = document.createElement("button");
      btn.className = "filter-btn" + (i === 0 ? " active" : "");
      btn.textContent = label;
      btn.addEventListener("click", () => {
        filterBar.querySelector(".active")?.classList.remove("active");
        btn.classList.add("active");
        visiblePhotos =
          label === "Alle"
            ? [...TRAVEL_PHOTOS]
            : TRAVEL_PHOTOS.filter((p) => p.country === label);
        renderGrid();
      });
      filterBar.appendChild(btn);
    });
  }

  /* --------------------------------------------------
     Galerie-Grid aufbauen
     -------------------------------------------------- */
  function renderGrid() {
    grid.innerHTML = "";

    visiblePhotos.forEach((photo, index) => {
      const figure = document.createElement("figure");
      figure.className = "gallery-item reveal";
      figure.tabIndex = 0; // per Tastatur fokussier- und öffenbar
      figure.setAttribute("role", "button");
      figure.setAttribute("aria-label", `${photo.title} – Großansicht öffnen`);

      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.alt;
      img.loading = "lazy";    // Bilder erst laden, wenn sie ins Bild scrollen
      img.decoding = "async";

      const caption = document.createElement("figcaption");
      caption.innerHTML = `${photo.title}<small>${photo.country}</small>`;

      figure.append(img, caption);
      figure.addEventListener("click", () => openLightbox(index));
      figure.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(index);
        }
      });

      grid.appendChild(figure);
    });

    window.registerReveals(grid); // Fade-in auch für neue Elemente
  }

  /* --------------------------------------------------
     Lightbox: öffnen, blättern, schließen
     -------------------------------------------------- */
  function showPhoto(index) {
    // Am Ende angekommen? Dann vorne weitermachen (und umgekehrt).
    currentIndex = (index + visiblePhotos.length) % visiblePhotos.length;
    const photo = visiblePhotos[currentIndex];

    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.alt;
    lightboxCaption.textContent = `${photo.title} – ${photo.country}`;
    lightboxCounter.textContent = `${currentIndex + 1} / ${visiblePhotos.length}`;
  }

  function openLightbox(index) {
    showPhoto(index);
    lightbox.hidden = false;
    document.body.classList.add("no-scroll");
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.classList.remove("no-scroll");
  }

  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", () => showPhoto(currentIndex - 1));
  document.getElementById("lightbox-next").addEventListener("click", () => showPhoto(currentIndex + 1));

  /* Klick auf den dunklen Hintergrund (nicht aufs Bild) schließt ebenfalls */
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  /* Tastatur: Pfeiltasten zum Blättern, Escape zum Schließen */
  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "ArrowLeft") showPhoto(currentIndex - 1);
    if (event.key === "ArrowRight") showPhoto(currentIndex + 1);
    if (event.key === "Escape") closeLightbox();
  });

  renderFilters();
  renderGrid();
})();
