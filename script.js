console.log("SCRIPT JS – MULTILANGUE STABLE v3");

/* ================= LANGUES ================= */
const LANGS = ["fr", "en", "es", "zh"];
let currentLangIndex = 0;
let currentLang = LANGS[currentLangIndex];

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");
const langBtn = document.getElementById("lang-switch");

/* ================= TEXTES ================= */
const T = {
  fr: {
    labels: {
      bleu1: "PRÉSENTATION",
      rose1: "MON OFFRE",
      violet1: "CV COMPÉTENCES",
      violet2: "COMPÉTENCES",
      orange1: "PARCOURS ACADÉMIQUE",
      jaune1: "RÉSEAUX SOCIAUX"
    },

    presentation: `
      <h2 class="title animate-title">Présentation</h2>

      <p>
        Je m’appelle Inès Saint Laurent,
        <strong>freelance spécialisée dans le développement d’activités</strong>
        commerciales sur les marchés locaux et internationaux.
      </p>

      <p>
        Forte de <strong>cinq années d’expérience</strong>,
        j’accompagne les entreprises
        <strong>dans leurs phases clés de structuration, de croissance et de positionnement stratégique.</strong>
      </p>

      <p class="left"><strong>J’interviens notamment sur :</strong></p>

      <ul class="list-left">
        <li>le lancement de nouveaux produits</li>
        <li>l’implantation sur de nouveaux marchés</li>
        <li>la structuration d’offres</li>
        <li>le développement de la visibilité et des performances commerciales</li>
      </ul>

      <button class="primary-btn" id="openObjectif">Mon objectif</button>
    `,

    objectif: `
      Transformer une idée ou une activité existante en un projet structuré,
      visible et rentable.<br><br>
      Si vous cherchez une approche humaine, stratégique et orientée résultats,
      échangeons.
    `,

    offreTitle: "Processus d’accompagnement stratégique",
    offre: {
      1: `
        <strong>Diagnostic & Vision</strong>
        <ul class="list-left">
          <li>Vision long terme</li>
          <li>Marché cible</li>
          <li>Objectifs business</li>
          <li>KPI</li>
        </ul>
      `,
      2: `
        <strong>Intelligence marché</strong>
        <ul class="list-left">
          <li>Analyse concurrentielle</li>
          <li>Positionnement</li>
          <li>Stratégie commerciale</li>
        </ul>
      `,
      3: `
        <strong>Déploiement & pilotage</strong>
        <ul class="list-left">
          <li>Suivi des actions</li>
          <li>Ajustements continus</li>
          <li>Croissance durable</li>
        </ul>
      `
    },

    competences: `
      <h2 class="title animate-title">CV & Compétences</h2>

      <div class="card-list">
        <button class="card-btn">
          <strong>Consultante en développement d’activité</strong><br>
          Gearbooker — Audiovisuel
          <div class="bubble hidden">
            • Développement BtoB / BtoC<br>
            • Pilotage stratégique<br>
            • Analyse des performances
          </div>
        </button>

        <button class="card-btn">
          <strong>CEO & Développeuse Web</strong><br>
          KIT IN — Formation entrepreneuriale
          <div class="bubble hidden">
            • HTML / CSS / JS<br>
            • Vision produit<br>
            • Pédagogie digitale
          </div>
        </button>
      </div>
    `,

    skills: `
      <h2 class="title animate-title">Compétences</h2>
      <div class="card-list">
        <button class="card-btn">CRM<div class="bubble hidden">Notion, HubSpot</div></button>
        <button class="card-btn">IA<div class="bubble hidden">ChatGPT, Claude</div></button>
      </div>
    `,

    academic: `
      <h2 class="title animate-title">Parcours Académique</h2>
      <p><strong>Master Import-Export</strong> — KEDGE</p>
      <p><strong>Bachelor International Business</strong> — INSEEC</p>
      <p><strong>Licence de Gestion</strong> — Paris 1</p>
    `,

    socials: `
      <h2 class="title animate-title">Réseaux sociaux</h2>
      <p>Instagram · LinkedIn · Email</p>
    `
  }
};

/* ===== DUPLICATION TEMPORAIRE DES TEXTES POUR AUTRES LANGUES ===== */
["en", "es", "zh"].forEach(l => T[l] = T.fr);

/* ================= MAJ DES LABELS ================= */
function updateLabels() {
  blocs.forEach(bloc => {
    const key = [...bloc.classList].find(c => T[currentLang].labels[c]);
    if (!key) return;
    bloc.querySelector(".label").textContent = T[currentLang].labels[key];
  });

  langBtn.textContent = currentLang.toUpperCase();
}

/* ================= OUVERTURE DES BLOCS ================= */
blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {

    const cls = [...bloc.classList].find(c => T[currentLang].labels[c]);
    if (!cls) return;

    if (cls === "bleu1") contentBox.innerHTML = T[currentLang].presentation;
    if (cls === "rose1") {
      contentBox.innerHTML = `
        <h2 class="title animate-title">${T[currentLang].offreTitle}</h2>
        <div class="center-buttons">
          <button class="step-btn" data-step="1">01</button>
          <button class="step-btn" data-step="2">02</button>
          <button class="step-btn" data-step="3">03</button>
        </div>
        <div id="programmeBubble" class="bubble hidden"></div>
      `;
    }
    if (cls === "violet1") contentBox.innerHTML = T[currentLang].competences;
    if (cls === "violet2") contentBox.innerHTML = T[currentLang].skills;
    if (cls === "orange1") contentBox.innerHTML = T[currentLang].academic;
    if (cls === "jaune1") contentBox.innerHTML = T[currentLang].socials;

    colorBox.style.background = bloc.dataset.color || "#111";
    overlay.classList.add("active");
  });
});

/* ================= INTERACTIONS ================= */
contentBox.addEventListener("click", e => {

  if (e.target.id === "openObjectif") {
    contentBox.insertAdjacentHTML(
      "beforeend",
      `<div class="bubble">${T[currentLang].objectif}</div>`
    );
  }

  if (e.target.classList.contains("step-btn")) {
    const bubble = document.getElementById("programmeBubble");
    bubble.innerHTML = T[currentLang].offre[e.target.dataset.step];
    bubble.classList.remove("hidden");
  }

  const card = e.target.closest(".card-btn");
  if (card) {
    const bubble = card.querySelector(".bubble");
    document.querySelectorAll(".card-btn .bubble").forEach(b => {
      if (b !== bubble) b.classList.add("hidden");
    });
    bubble.classList.toggle("hidden");
  }
});

/* ================= FERMETURE ================= */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());

/* ================= BOUTON LANGUE UNIQUE ================= */
langBtn.addEventListener("click", () => {
  currentLangIndex = (currentLangIndex + 1) % LANGS.length;
  currentLang = LANGS[currentLangIndex];
  updateLabels();
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});

/* ================= INIT ================= */
updateLabels();
