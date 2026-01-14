console.log("SCRIPT JS – PORTFOLIO MULTILINGUE FINAL CORRIGÉ");

/* ================= LANGUES ================= */
const LANGS = ["fr", "en", "es", "zh"];
let langIndex = 0;
let currentLang = LANGS[langIndex];

const langBtn = document.getElementById("lang-switch");

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= TEXTES ================= */
const T = {

  fr: {

    /* ===== PRÉSENTATION ===== */
    presentation: `
      <h2 class="title animate-title">Présentation</h2>

      <p>Je m’appelle Inès Saint Laurent, freelance spécialisée dans le développement d’activités commerciales sur les marchés locaux et internationaux.</p>

      <p>Forte de 5 années d’expérience en commerce international et marketing, j’accompagne les entreprises dans leurs phases clés de croissance.</p>

      <p>J’interviens sur le lancement de nouveaux produits, l’implantation sur de nouveaux marchés et le développement de la visibilité commerciale.</p>

      <p>Mon expertise couvre les marchés français, européens et asiatiques, avec des expériences dans le cosmétique, l’alimentation, la musique et l’audiovisuel.</p>

      <button class="primary-btn" id="openEngagement">👉 Mon engagement</button>
    `,

    engagement: `
      <p>Vous bénéficiez d’un accompagnement personnalisé, structuré et exigeant.</p>
      <p>✨ Vous avez une vision. Je vous aide à la transformer en croissance maîtrisée.</p>
    `,

    /* ===== MON OFFRE ===== */
    offre: `
      <h2 class="title animate-title">🤝 Processus d’accompagnement stratégique</h2>

      <div class="center-buttons">
        <button class="step-btn step-rose" data-step="1">01</button>
        <button class="step-btn step-rose" data-step="2">02</button>
        <button class="step-btn step-rose" data-step="3">03</button>
      </div>

      <div id="programmeBubble" class="bubble hidden center-text"></div>

      <p class="center-text"><strong>🗓️ Durée & rythme des missions</strong></p>
      <p class="center-text">Formats de 3, 6 ou 12 mois selon vos ambitions</p>
      <p class="center-text">J +15 restitution stratégique</p>
      <p class="center-text">Suivi mensuel et ajustements</p>
    `,

    offreSteps: {
      1: `
        <strong>Diagnostic & Vision</strong><br><br>
        Vision long terme<br>
        Marché cible<br>
        Objectifs business<br>
        Indicateurs de performance
      `,
      2: `
        <strong>Intelligence marché & stratégie</strong><br><br>
        Études de marché<br>
        Analyse concurrentielle<br>
        Positionnement<br>
        Plan d’action
      `,
      3: `
        <strong>Déploiement & pilotage</strong><br><br>
        Suivi KPI<br>
        Ajustements stratégiques<br>
        Réunions mensuelles<br>
        Croissance durable
      `
    },

    /* ===== PARCOURS PRO ===== */
    experience: `
      <h2 class="title animate-title">💻 Parcours professionnel</h2>

      <div class="card-list">

        <button class="card-btn">
          Consultante en développement d’activité<br>
          <strong>Gearbooker</strong><br>
          <em>Audiovisuel & international</em>
          <div class="bubble hidden bubble-violet">
            Accompagnement stratégique<br>
            Prospection BtoB et BtoC<br>
            Pilotage des performances
          </div>
        </button>

        <button class="card-btn">
          Commerciale Marketing<br>
          <strong>Pachamamaï</strong><br>
          <em>Cosmétique & marchés internationaux</em>
          <div class="bubble hidden bubble-violet">
            Études de marché internationales<br>
            Lancement de produits<br>
            Développement commercial
          </div>
        </button>

        <button class="card-btn">
          CEO & Community Manager<br>
          <strong>PUFFRAP</strong><br>
          <em>Média musical</em>
          <div class="bubble hidden bubble-violet">
            Création de média<br>
            Gestion réseaux sociaux<br>
            SEO et partenariats
          </div>
        </button>

        <button class="card-btn">
          CEO & Développeuse Web<br>
          <strong>KIT IN</strong><br>
          <em>Entrepreneuriat & digital</em>
          <div class="bubble hidden bubble-violet">
            Plateforme éducative<br>
            HTML CSS JavaScript<br>
            Vision produit
          </div>
        </button>

        <button class="card-btn">
          Vendeuse & Ambassadrice de marque<br>
          <strong>Galeries Lafayette · Le Perchoir · Paradis du Fruit</strong><br>
          <em>Retail & restauration</em>
          <div class="bubble hidden bubble-violet">
            Relation client<br>
            Valorisation de marque<br>
            Expérience terrain
          </div>
        </button>

      </div>
    `,

    /* ===== LOGICIELS ===== */
    tools: `
      <h2 class="title animate-title">🧠 Logiciels</h2>

      <div class="card-list">

        <button class="card-btn"><strong>CRM</strong>
          <div class="bubble hidden bubble-violet2">Notion · Hubspot · Salesforce</div>
        </button>

        <button class="card-btn"><strong>Gestion de projet</strong>
          <div class="bubble hidden bubble-violet2">Trello · Google Workspace</div>
        </button>

        <button class="card-btn"><strong>Analyse</strong>
          <div class="bubble hidden bubble-violet2">
            Google Analytics · Search Console · LinkedIn Sales Navigator · Meta Business Suite
          </div>
        </button>

        <button class="card-btn"><strong>Microsoft</strong>
          <div class="bubble hidden bubble-violet2">Azure · Copilot · Microsoft 360</div>
        </button>

        <button class="card-btn"><strong>Étude de marché</strong>
          <div class="bubble hidden bubble-violet2">
            TradeMap · Kompass · Euromonitor · Statista · World Bank Data
          </div>
        </button>

        <button class="card-btn"><strong>Communication</strong>
          <div class="bubble hidden bubble-violet2">Mailchimp · Zapier · Make</div>
        </button>

        <button class="card-btn"><strong>Design</strong>
          <div class="bubble hidden bubble-violet2">Canva · Figma · Capcut · Photoshop</div>
        </button>

        <button class="card-btn"><strong>IA</strong>
          <div class="bubble hidden bubble-violet2">
            ChatGPT · Claude · Manus · MidJourney · Google Gemini
          </div>
        </button>

        <button class="card-btn"><strong>Développement Web</strong>
          <div class="bubble hidden bubble-violet2">GitHub</div>
        </button>

      </div>
    `
  }
};

/* ================= OUVERTURE DES BLOCS ================= */
blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {

    if (bloc.classList.contains("bleu1")) contentBox.innerHTML = T[currentLang].presentation;
    if (bloc.classList.contains("rose1")) contentBox.innerHTML = T[currentLang].offre;
    if (bloc.classList.contains("violet1")) contentBox.innerHTML = T[currentLang].experience;
    if (bloc.classList.contains("violet2")) contentBox.innerHTML = T[currentLang].tools;

    colorBox.style.background = bloc.dataset.color || "#111";
    overlay.classList.add("active");
    contentBox.scrollTop = 0;
  });
});

/* ================= INTERACTIONS ================= */
contentBox.addEventListener("click", e => {

  if (e.target.id === "openEngagement") {
    contentBox.insertAdjacentHTML(
      "beforeend",
      `<div class="bubble" style="background:#fff;color:#3A6EFF;">
        ${T[currentLang].engagement}
      </div>`
    );
  }

  if (e.target.classList.contains("step-btn")) {
    const bubble = document.getElementById("programmeBubble");
    bubble.innerHTML = T[currentLang].offreSteps[e.target.dataset.step];
    bubble.style.background = "#fff";
    bubble.style.color = "#FF4FD8";
    bubble.classList.remove("hidden");
  }

  const card = e.target.closest(".card-btn");
  if (card) {
    const bubble = card.querySelector(".bubble");
    document.querySelectorAll(".card-btn .bubble").forEach(b => {
      if (b !== bubble) b.classList.add("hidden");
    });
    if (bubble) bubble.classList.toggle("hidden");
  }
});

/* ================= FERMETURE ================= */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});
colorBox.addEventListener("click", e => e.stopPropagation());

/* ================= LANGUE ================= */
langBtn.addEventListener("click", () => {
  langIndex = (langIndex + 1) % LANGS.length;
  currentLang = LANGS[langIndex];
  langBtn.textContent = currentLang.toUpperCase();
  overlay.classList.remove("active");
});
