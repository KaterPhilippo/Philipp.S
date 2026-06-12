/* =====================================================================
   TECH-PROJEKTE – zentrale Datendatei
   =====================================================================
   So fügst du ein neues Projekt hinzu:
     1. Projektfotos in den Ordner  images/projects/  legen
     2. Unten einen neuen Eintrag in die Liste kopieren und anpassen.

   Felder:
     id          – eindeutiger Kurzname (nur Kleinbuchstaben/Bindestriche)
     title       – Projekttitel auf der Karte und im Detail-Fenster
     subtitle    – kurze Unterzeile im Detail-Fenster
     cover       – Bild für die Projekt-Karte (erstes Bild bietet sich an)
     tags        – Schlagwörter, werden als kleine Chips angezeigt
     short       – 1–2 Sätze für die Karte
     images      – alle Bilder fürs Detail-Fenster (Reihenfolge = Anzeige)
     description – Absätze der technischen Beschreibung
                   (jeder Listeneintrag = ein Absatz)
     specs       – technische Eckdaten als Stichpunktliste
   ===================================================================== */

const PROJECTS = [
  {
    id: "e-gokart",
    title: "DIY E-Go-Kart",
    subtitle: "Elektroantrieb mit Hoverboard-Motoren",
    cover: "images/projects/gokart-1.svg",
    tags: ["Elektronik", "Maschinenbau", "Schweißen"],
    short:
      "Selbstgebautes Elektro-Go-Kart, angetrieben von zwei Hoverboard-Radnabenmotoren – vom geschweißten Stahlrahmen bis zur angepassten Motorsteuerung.",
    images: [
      "images/projects/gokart-1.svg",
      "images/projects/gokart-2.svg",
      "images/projects/gokart-3.svg",
    ],
    description: [
      "Platzhaltertext: Beschreibe hier die Idee hinter dem Projekt. Zum Beispiel: Ausgangspunkt war ein defektes Hoverboard – Motoren und Akku waren noch top, also wurde daraus ein Go-Kart.",
      "Platzhaltertext: Hier ist Platz für den Bauprozess – Rahmen aus Stahlprofilen zugeschnitten und verschweißt, Lenkung aus Achsschenkeln konstruiert, Elektronik in ein spritzwassergeschütztes Gehäuse verpackt.",
      "Platzhaltertext: Und hier z. B. das Fazit – was funktioniert gut, was würdest du beim nächsten Mal anders machen, welche Ausbaustufen sind geplant?",
    ],
    specs: [
      "2× 350 W BLDC-Radnabenmotoren (aus Hoverboard)",
      "36-V-Li-Ion-Akku, 10S2P",
      "Hoverboard-Mainboard mit alternativer Firmware",
      "Rahmen: Stahl-Vierkantrohr 25 × 25 mm, MAG-geschweißt",
      "Daumengas mit Hall-Sensor",
      "Spitze: ca. 25 km/h",
    ],
  },
  {
    id: "werkstatttisch",
    title: "Schweißprojekt: Werkstatttisch",
    subtitle: "Stabiler Arbeitstisch aus Stahlprofilen",
    cover: "images/projects/schweissen-1.svg",
    tags: ["Schweißen", "Maschinenbau"],
    short:
      "Massiver Werkstatttisch aus Stahlprofilen mit Lochplatte zum Spannen – komplett selbst zugeschnitten, verschweißt und lackiert.",
    images: [
      "images/projects/schweissen-1.svg",
      "images/projects/schweissen-2.svg",
    ],
    description: [
      "Platzhaltertext: Warum dieser Tisch? Z. B.: Ein ebener, massiver Schweißtisch ist die Grundlage für alle weiteren Metallprojekte – also war das der logische erste Schritt für die Werkstatt.",
      "Platzhaltertext: Details zum Bau – Profile auf Gehrung geschnitten, Verzug beim Schweißen durch Heften und wechselseitiges Durchschweißen minimiert, Tischplatte plangeschliffen.",
    ],
    specs: [
      "Gestell: Stahl-Vierkantrohr 40 × 40 × 3 mm",
      "Platte: 8-mm-Stahlplatte mit 16-mm-Lochraster",
      "Verfahren: MAG (Schutzgas CO₂/Argon-Mix)",
      "Höhenverstellbare Maschinenfüße",
      "Tragkraft: > 500 kg",
    ],
  },
  {
    id: "objekterkennung-pi",
    title: "Objekterkennung am Raspberry Pi",
    subtitle: "Machine-Learning-Experiment mit Kameramodul",
    cover: "images/projects/ml-1.svg",
    tags: ["Machine Learning", "Elektronik"],
    short:
      "Kleines ML-Projekt: Ein Raspberry Pi mit Kameramodul erkennt Objekte in Echtzeit – Modelltraining am PC, Inferenz direkt am Pi.",
    images: ["images/projects/ml-1.svg", "images/projects/ml-2.svg"],
    description: [
      "Platzhaltertext: Worum geht es? Z. B.: Einstieg ins Thema Edge-ML – wie viel Objekterkennung schafft ein Raspberry Pi ohne Cloud-Anbindung?",
      "Platzhaltertext: Technischer Ablauf – eigenen Datensatz fotografiert und annotiert, Modell am PC trainiert, anschließend quantisiert und auf dem Pi mit TensorFlow Lite ausgeführt.",
    ],
    specs: [
      "Raspberry Pi 4 (4 GB) mit Kameramodul v3",
      "TensorFlow Lite, quantisiertes MobileNet-SSD",
      "Eigener Datensatz, annotiert mit LabelImg",
      "ca. 8–10 FPS bei 640 × 480",
    ],
  },
];
