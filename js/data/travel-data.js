/* =====================================================================
   REISEFOTOS – zentrale Datendatei
   =====================================================================
   So fügst du ein neues Foto hinzu:
     1. Bilddatei in den Ordner  images/travel/  legen
        (JPG/PNG/WebP – am besten auf ca. 1600 px Breite verkleinert)
     2. Unten einen neuen Eintrag in die Liste kopieren und anpassen.

   Felder:
     src     – Pfad zur Bilddatei (relativ zur index.html)
     title   – Bildunterschrift (wird beim Hover und in der Lightbox gezeigt)
     country – Land/Reiseziel. Daraus werden die Filter-Buttons
               automatisch erzeugt – gleiche Schreibweise = gleicher Filter!
     alt     – Kurze Bildbeschreibung für Screenreader & falls das Bild
               nicht lädt.

   Die Reihenfolge hier bestimmt die Reihenfolge in der Galerie.
   ===================================================================== */

const TRAVEL_PHOTOS = [
  {
    src: "images/travel/japan-1.svg",
    title: "Fushimi-Inari-Schrein, Kyoto",
    country: "Japan",
    alt: "Rote Torii-Tore des Fushimi-Inari-Schreins in Kyoto",
  },
  {
    src: "images/travel/japan-2.svg",
    title: "Shibuya bei Nacht, Tokio",
    country: "Japan",
    alt: "Leuchtreklamen an der Shibuya-Kreuzung in Tokio",
  },
  {
    src: "images/travel/island-1.svg",
    title: "Skógafoss, Südküste",
    country: "Island",
    alt: "Der Wasserfall Skógafoss an der Südküste Islands",
  },
  {
    src: "images/travel/island-2.svg",
    title: "Gletscherlagune Jökulsárlón",
    country: "Island",
    alt: "Eisberge in der Gletscherlagune Jökulsárlón",
  },
  {
    src: "images/travel/italien-1.svg",
    title: "Drei Zinnen, Dolomiten",
    country: "Italien",
    alt: "Die Drei Zinnen in den Dolomiten",
  },
  {
    src: "images/travel/italien-2.svg",
    title: "Positano, Amalfiküste",
    country: "Italien",
    alt: "Bunte Häuser am Hang von Positano an der Amalfiküste",
  },
  {
    src: "images/travel/norwegen_1.svg",
    title: "Hadangervida, Lofoten",
    country: "Norwegen",
    alt: "Hütte im Naturschutzgebiet",
  },
  {
    src: "images/travel/norwegen-2.svg",
    title: "Geirangerfjord",
    country: "Norwegen",
    alt: "Blick über den Geirangerfjord",
  },
];
