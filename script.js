console.log("SCRIPT JS – PORTFOLIO SEO INTERNATIONAL FINAL");

/* ================= LANGUES ================= */
const LANGS = ["fr", "en", "es", "zh"];
let langIndex = 0;
let currentLang = LANGS[langIndex];

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");
const langBtn = document.getElementById("lang-switch");

/* ================= SEO DYNAMIQUE ================= */
function updateSEO(lang) {
  const seo = SEO[lang];
  document.documentElement.lang = lang;
  document.title = seo.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", seo.description);
}

/* ================= SEO TEXTES ================= */
const SEO = {
  fr: {
    title: "Inès Saint Laurent – Stratégie commerciale & développement international",
    description:
      "Consultante en développement d’activité, stratégie commerciale et marketing international. Portfolio professionnel d’Inès Saint Laurent."
  },
  en: {
    title: "Inès Saint Laurent – Business Strategy & International Development",
    description:
      "Business development consultant specialized in international strategy, commercial growth and digital positioning."
  },
  es: {
    title: "Inès Saint Laurent – Estrategia empresarial y desarrollo internacional",
    description:
      "Consultora en desarrollo de negocios, estrategia comercial y expansión internacional."
  },
  zh: {
    title: "Inès Saint Laurent – 国际商业战略与业务发展",
    description:
      "专注于国际市场的商业发展顾问，提供战略、营销与增长支持。"
  }
};

/* ================= TEXTES MULTILINGUES NATIFS ================= */
const T = {
  fr: {
    labels: {
      bleu1: "PRÉSENTATION",
      rose1: "MON OFFRE",
      violet1: "CV EXPÉRIENCE",
      violet2: "LOGICIELS",
      orange1: "PARCOURS ACADÉMIQUE",
      jaune1: "RÉSEAUX SOCIAUX"
    },

    presentation: `
      <h2 class="title animate-title">Présentation</h2>
      <p>Je m’appelle Inès Saint Laurent, freelance spécialisée dans le développement d’activités commerciales, sur les marchés locaux et internationaux.</p>
      <p>Forte de 5 années d’expérience en commerce international et marketing, j’accompagne les entreprises dans leurs phases clés de croissance.</p>
      <p>J’interviens sur le lancement de nouveaux produits, l’implantation sur de nouveaux marchés et le développement de la performance commerciale.</p>
      <p>Mon expertise couvre les marchés français, européens et asiatiques, dans des secteurs tels que le cosmétique, l’alimentation, la musique et l’audiovisuel.</p>
      <p>Polyvalente, j’intègre également le community management et le développement web pour une vision stratégique globale.</p>
      <button class="primary-btn" id="openObjectif">👉 Mon engagement</button>
    `,

    engagement: `
      <p style="color:#3A6EFF;font-weight:600">
        Accompagnement stratégique personnalisé, discret et exigeant.<br><br>
        ✨ Vous avez une vision. Je vous aide à la transformer en croissance maîtrisée.
      </p>
    `,

    offreTitle: "🤝 Processus d’accompagnement stratégique",

    offre: {
      1: `
        <strong>Diagnostic & Vision</strong>
        <ul class="list-left">
          <li>Vision long terme</li>
          <li>Marché cible</li>
          <li>Objectifs business</li>
          <li>Indicateurs de performance</li>
        </ul>
      `,
      2: `
        <strong>Intelligence marché & stratégie</strong>
        <ul class="list-left">
          <li>Études de marché</li>
          <li>Analyse concurrentielle</li>
          <li>Positionnement stratégique</li>
          <li>Plan d’action</li>
        </ul>
      `,
      3: `
        <strong>Déploiement & pilotage</strong>
        <ul class="list-left">
          <li>Suivi KPI</li>
          <li>Ajustements continus</li>
          <li>Comités mensuels</li>
        </ul>
      `
    },

    experience: `
      <h2 class="title animate-title">💻 Parcours professionnel</h2>
      <p><strong>Consultante développement d’activité</strong> – Gearbooker</p>
      <p><strong>Commerciale Marketing</strong> – Pachamamaï</p>
      <p><strong>CEO & Community Manager</strong> – PUFFRAP</p>
      <p><strong>CEO & Développeuse Web</strong> – KIT IN</p>
      <p><strong>Stagiaire Comptable</strong> – Pages Jaunes</p>
      <p><strong>Vendeuse & ambassadrice</strong> – Le Perchoir</p>
    `,

    academic: `
      <h2 class="title animate-title">🎓 Parcours académique</h2>
      <p>Master Import-Export – KEDGE</p>
      <p>Bachelor International Business – INSEEC</p>
      <p>BTS Commerce International – Jean Lurçat</p>
      <p>Licence de Gestion – Paris 1</p>
      <p>DCG – École Nationale de Commerce</p>
    `,

    softwares: `
      <h2 class="title animate-title">🛠️ Logiciels</h2>
      <ul class="list-left">
        <li>Notion, HubSpot, Salesforce</li>
        <li>Trello, Google Workspace</li>
        <li>Mailchimp, Zapier, Make</li>
        <li>ChatGPT, Claude, Midjourney</li>
        <li>Canva, Figma, Photoshop</li>
      </ul>
    `
  }
};

/* ===== DUPLICATION STRUCTURE POUR EN / ES / ZH ===== */
["en", "es", "zh"].forEach(l => T[l] = T.fr);

/* ================= LABELS ================= */
function updateLabels() {
  blocs.forEach(bloc => {
    const key = [...bloc.classList].find(c => T[currentLang].labels[c]);
    if (key) bloc.querySelector(".label").textContent = T[currentLang].labels[key];
  });
  langBtn.textContent = currentLang.toUpperCase();
}

/* ================= OUVERTURE BLOCS ================= */
blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {
    if (bloc.classList.contains("bleu1")) contentBox.innerHTML = T[currentLang].presentation;
    if (bloc.classList.contains("rose1")) {
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
    if (bloc.classList.contains("violet1")) contentBox.innerHTML = T[currentLang].experience;
    if (bloc.classList.contains("violet2")) contentBox.innerHTML = T[currentLang].softwares;
    if (bloc.classList.contains("orange1")) contentBox.innerHTML = T[currentLang].academic;

    colorBox.style.background = bloc.dataset.color || "#111";
    overlay.classList.add("active");
  });
});

/* ================= INTERACTIONS ================= */
contentBox.addEventListener("click", e => {
  if (e.target.id === "openObjectif") {
    contentBox.insertAdjacentHTML("beforeend", `<div class="bubble">${T[currentLang].engagement}</div>`);
  }
  if (e.target.classList.contains("step-btn")) {
    document.getElementById("programmeBubble").innerHTML =
      T[currentLang].offre[e.target.dataset.step];
    document.getElementById("programmeBubble").classList.remove("hidden");
  }
});

/* ================= FERMETURE ================= */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});
colorBox.addEventListener("click", e => e.stopPropagation());

/* ================= CHANGEMENT LANGUE ================= */
langBtn.addEventListener("click", () => {
  langIndex = (langIndex + 1) % LANGS.length;
  currentLang = LANGS[langIndex];
  updateLabels();
  updateSEO(currentLang);
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});

/* ================= INIT ================= */
updateLabels();
updateSEO(currentLang);
