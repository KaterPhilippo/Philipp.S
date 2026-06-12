/* =====================================================================
   PROJECTS.JS – Projekt-Karten und Detail-Modal
   =====================================================================
   Liest die Projekte aus js/data/projects-data.js (PROJECTS) und baut
   daraus die Karten. Ein Klick öffnet das Modal mit allen Fotos und
   der technischen Beschreibung. Zum Pflegen von Inhalten musst du hier
   nichts ändern – nur die Datendatei bearbeiten.
   ===================================================================== */

(function () {
  const grid = document.getElementById("projects-grid");

  const modal = document.getElementById("project-modal");
  const modalImg = document.getElementById("modal-img");
  const modalThumbs = document.getElementById("modal-thumbs");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalTags = document.getElementById("modal-tags");
  const modalDescription = document.getElementById("modal-description");
  const modalSpecs = document.getElementById("modal-specs");

  /* --------------------------------------------------
     Projekt-Karten aufbauen
     -------------------------------------------------- */
  function renderCards() {
    PROJECTS.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card reveal";
      card.tabIndex = 0; // per Tastatur fokussier- und öffenbar
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `${project.title} – Details öffnen`);

      card.innerHTML = `
        <div class="card-media">
          <img src="${project.cover}" alt="${project.title}" loading="lazy" decoding="async">
        </div>
        <div class="card-body">
          <ul class="tag-list">
            ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
          <h3>${project.title}</h3>
          <p>${project.short}</p>
          <span class="card-more">Mehr erfahren →</span>
        </div>
      `;

      card.addEventListener("click", () => openModal(project));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(project);
        }
      });

      grid.appendChild(card);
    });

    window.registerReveals(grid);
  }

  /* --------------------------------------------------
     Modal befüllen und öffnen
     -------------------------------------------------- */
  function openModal(project) {
    modalTitle.textContent = project.title;
    modalSubtitle.textContent = project.subtitle;

    modalTags.innerHTML = project.tags.map((tag) => `<li>${tag}</li>`).join("");

    modalDescription.innerHTML = project.description
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");

    modalSpecs.innerHTML = project.specs.map((spec) => `<li>${spec}</li>`).join("");

    /* Großes Bild + Vorschaubilder (Thumbs nur bei mehr als einem Bild) */
    setMainImage(project.images[0], project.title);
    modalThumbs.innerHTML = "";
    if (project.images.length > 1) {
      project.images.forEach((src, i) => {
        const thumb = document.createElement("img");
        thumb.src = src;
        thumb.alt = `${project.title} – Bild ${i + 1}`;
        thumb.loading = "lazy";
        if (i === 0) thumb.classList.add("active");
        thumb.addEventListener("click", () => {
          setMainImage(src, project.title);
          modalThumbs.querySelector(".active")?.classList.remove("active");
          thumb.classList.add("active");
        });
        modalThumbs.appendChild(thumb);
      });
    }

    modal.hidden = false;
    document.body.classList.add("no-scroll");
    document.getElementById("modal-close").focus();
  }

  function setMainImage(src, title) {
    modalImg.src = src;
    modalImg.alt = title;
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
  }

  document.getElementById("modal-close").addEventListener("click", closeModal);

  /* Klick auf den dunklen Hintergrund (außerhalb der Box) schließt */
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  /* Escape schließt das Modal */
  document.addEventListener("keydown", (event) => {
    if (!modal.hidden && event.key === "Escape") closeModal();
  });

  renderCards();
})();
