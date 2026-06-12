# Persönliche Portfolio-Website

Statische Single-Page-Website ohne Backend und ohne Build-Schritt:
reines HTML, CSS und Vanilla JavaScript. Einfach den Ordner hochladen – fertig.

## Lokal ansehen

`index.html` doppelklicken – die Seite läuft direkt im Browser, ein lokaler
Server ist nicht nötig (die Daten liegen bewusst in `.js`-Dateien statt in
JSON, damit kein `fetch` und damit kein Server gebraucht wird).

## Ordnerstruktur

```
portfolio/
├── index.html              ← Struktur & Texte (Hero, Footer, …)
├── css/style.css           ← Design (Farben oben in der Datei anpassbar)
├── js/
│   ├── data/
│   │   ├── travel-data.js    ← ★ HIER Reisefotos pflegen
│   │   └── projects-data.js  ← ★ HIER Projekte pflegen
│   ├── main.js             ← Dark Mode, Menü, Scroll-Animationen
│   ├── gallery.js          ← Galerie + Lightbox (Logik)
│   └── projects.js         ← Projekt-Karten + Modal (Logik)
└── images/
    ├── portrait.svg        ← Platzhalter fürs eigene Foto
    ├── travel/             ← Reisefotos
    └── projects/           ← Projektfotos
```

Die mit ★ markierten Dateien sind die einzigen, die du für neue Inhalte
anfassen musst. Alle `.svg`-Dateien in `images/` sind Platzhalter – einfach
durch echte Fotos (JPG/PNG/WebP) ersetzen und die Pfade in den Datendateien
anpassen.

## Reisefoto hinzufügen

1. Foto in `images/travel/` legen (Tipp: vorher auf ca. 1600 px Breite
   verkleinern, das hält die Seite schnell).
2. In `js/data/travel-data.js` einen Eintrag ergänzen:

```js
{
  src: "images/travel/portugal-1.jpg",
  title: "Klippen an der Algarve",
  country: "Portugal",          // neues Land = neuer Filter-Button, automatisch
  alt: "Steilküste an der Algarve bei Sonnenuntergang",
},
```

Das war's – Filter-Buttons, Masonry-Layout und Lightbox aktualisieren sich
von selbst.

## Projekt hinzufügen

1. Fotos in `images/projects/` legen.
2. In `js/data/projects-data.js` einen Eintrag ergänzen (am einfachsten:
   bestehenden Block kopieren und anpassen):

```js
{
  id: "cnc-fraese",
  title: "DIY CNC-Fräse",
  subtitle: "Portalfräse aus Aluprofilen",
  cover: "images/projects/cnc-1.jpg",       // Bild auf der Karte
  tags: ["Maschinenbau", "Elektronik"],
  short: "Kurztext für die Karte (1–2 Sätze).",
  images: ["images/projects/cnc-1.jpg", "images/projects/cnc-2.jpg"],
  description: [
    "Erster Absatz der Beschreibung.",
    "Zweiter Absatz – jeder Listeneintrag wird ein eigener Absatz.",
  ],
  specs: [
    "Arbeitsbereich 600 × 400 mm",
    "NEMA-23-Schrittmotoren",
  ],
},
```

## Eigene Texte & Daten

- **Über-mich-Text, Name, Footer (E-Mail, Social Links):** direkt in
  `index.html` – die Stellen sind mit Kommentaren markiert.
- **Eigenes Porträtfoto:** Bild in `images/` legen und in `index.html`
  den `src` des Hero-Bildes ändern.
- **Akzentfarbe / Farbschema:** ganz oben in `css/style.css`
  (`--accent` für hell und dunkel getrennt einstellbar).

## Veröffentlichen

**GitHub Pages:** Repository anlegen, Inhalt dieses Ordners pushen, dann
unter *Settings → Pages → Branch: main* aktivieren. Die Seite erscheint
unter `https://DEIN-NAME.github.io/REPO-NAME/`.

**Netlify:** Auf [app.netlify.com/drop](https://app.netlify.com/drop) den
ganzen Ordner per Drag & Drop hochladen – online in unter einer Minute.

Da es keinen Build-Schritt gibt, sind keine weiteren Einstellungen nötig.
