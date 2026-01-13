console.log("SCRIPT JS – PORTFOLIO MULTILINGUE GLOBAL");

/* ================= LANGUE ================= */
let currentLang = "fr";

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= TEXTES ================= */
const T = {

  /* ================= FR ================= */
  fr: {
    presentation: `
      <h2 class="title">Présentation</h2>
      <p>
        Je m’appelle Inès Saint Laurent,
        <strong>freelance spécialisée dans le développement d’activités</strong>
        commerciales en France et à l’international.
      </p>
      <p>
        Forte de <strong>cinq années d’expérience</strong>, j’accompagne les entreprises
        <strong>dans leurs phases clés de structuration, de croissance et de positionnement stratégique.</strong>
      </p>
      <p class="left strong">J’interviens notamment sur :</p>
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

    programme: `
      <h2 class="title">Processus d’accompagnement stratégique</h2>
      <div class="center-buttons">
        <button class="step-btn" data-step="1">01</button>
        <button class="step-btn" data-step="2">02</button>
        <button class="step-btn" data-step="3">03</button>
      </div>
      <div id="programmeBubble" class="bubble hidden"></div>
    `,
    programmeSteps: {
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
        <strong>Intelligence marché & stratégie</strong>
        <ul class="list-left">
          <li>Études de marché</li>
          <li>Analyse concurrentielle</li>
          <li>Positionnement</li>
          <li>Plan d’action</li>
        </ul>
      `,
      3: `
        <strong>Déploiement & pilotage</strong>
        <ul class="list-left">
          <li>Suivi des performances</li>
          <li>Ajustements stratégiques</li>
          <li>Réunions mensuelles</li>
        </ul>
      `
    },

    competences: `
      <h2 class="title">CV & Compétences</h2>
      <div class="card-list">
        <div class="card-btn">Consultante en développement d’activité<br><span>Gearbooker — Audiovisuel</span></div>
        <div class="card-btn">Commerciale Marketing<br><span>Pachamamaï — Cosmétique solide</span></div>
        <div class="card-btn">CEO & Community Manager<br><span>PUFFRAP — Média musical</span></div>
        <div class="card-btn">CEO & Développeuse Web<br><span>KIT IN — Formation entrepreneuriale</span></div>
      </div>
    `,

    logiciels: `
      <h2 class="title">Logiciels</h2>
      <ul class="list-left">
        <li>CRM : Notion, HubSpot, Salesforce</li>
        <li>Gestion de projet : Trello, Google Workspace</li>
        <li>Communication : Mailchimp, Zapier, Make</li>
        <li>IA : ChatGPT, Claude, MidJourney</li>
      </ul>
    `,

    academique: `
      <h2 class="title">CV Académique</h2>
      <p>Master Import-Export — KEDGE Business School</p>
      <p>Bachelor International Business — INSEEC</p>
      <p>BTS Commerce International — Lycée Jean Lurçat</p>
      <p>Licence de Gestion — Université Paris 1 Panthéon-Sorbonne</p>
      <p>Diplôme de Comptabilité et de Gestion</p>
    `,

    reseaux: `
      <h2 class="title">Réseaux sociaux</h2>
      <div class="socials">
        <img src="images/Instagram.png" alt="Instagram">
        <img src="images/Linkedin.png" alt="LinkedIn">
        <img src="images/Mail.png" alt="Email">
      </div>
    `
  },

  /* ================= EN / ES / ZH ================= */
  en: { ...sameStructure("English") },
  es: { ...sameStructure("Español") },
  zh: { ...sameStructure("中文") }
};

/* ================= OUVERTURE DES BLOCS ================= */
blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {

    if (bloc.classList.contains("bleu1")) contentBox.innerHTML = T[currentLang].presentation;
    if (bloc.classList.contains("rose1")) contentBox.innerHTML = T[currentLang].programme;
    if (bloc.classList.contains("violet1")) contentBox.innerHTML = T[currentLang].competences;
    if (bloc.classList.contains("violet2")) contentBox.innerHTML = T[currentLang].logiciels;
    if (bloc.classList.contains("orange1")) contentBox.innerHTML = T[currentLang].academique;
    if (bloc.classList.contains("jaune1")) contentBox.innerHTML = T[currentLang].reseaux;

    colorBox.style.background = bloc.dataset.color;
    overlay.classList.add("active");
  });
});

/* ================= INTERACTIONS ================= */
contentBox.addEventListener("click", e => {

  if (e.target.id === "openObjectif") {
    contentBox.insertAdjacentHTML(
      "beforeend",
      `<div class="bubble objective">${T[currentLang].objectif}</div>`
    );
  }

  if (e.target.classList.contains("step-btn")) {
    const bubble = document.getElementById("programmeBubble");
    bubble.innerHTML = T[currentLang].programmeSteps[e.target.dataset.step];
    bubble.classList.remove("hidden");
  }
});

/* ================= FERMETURE ================= */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());

/* ================= LANG SWITCH ================= */
document.querySelectorAll("#lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    overlay.classList.remove("active");
    contentBox.innerHTML = "";
  });
});

/* ================= HELPERS ================= */
function sameStructure(label) {
  return {
    presentation: `<h2 class="title">${label} version – Presentation</h2>`,
    objectif: `${label} – Goal text`,
    programme: `<h2 class="title">${label} – Program</h2>`,
    programmeSteps: {1:"",2:"",3:""},
    competences: `<h2 class="title">${label} – Skills</h2>`,
    logiciels: `<h2 class="title">${label} – Tools</h2>`,
    academique: `<h2 class="title">${label} – Education</h2>`,
    reseaux: `<h2 class="title">${label} – Socials</h2>`
  };
}
