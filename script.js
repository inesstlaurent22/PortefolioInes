console.log("SCRIPT JS – PORTFOLIO FINAL STABLE");

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= CONTENUS ================= */
const CONTENT = {

  /* ===== PRÉSENTATION ===== */
  presentation: `
    <h2 class="title animate-title">Présentation</h2>

    <p>
      Je m’appelle Inès Saint Laurent, freelance spécialisée dans le développement
      d’activités commerciales sur les marchés locaux et internationaux.
    </p>

    <p>
      Forte de 5 années d’expérience en commerce international et marketing,
      j’accompagne les entreprises dans leurs phases clés de croissance.
    </p>

    <p>
      J’interviens sur le lancement de nouveaux produits, l’implantation sur de nouveaux marchés
      et le développement de la visibilité et des performances commerciales.
    </p>

    <button class="primary-btn" id="openEngagement">👉 Mon engagement</button>
  `,

  engagement: `
    <p>
      Vous bénéficiez d’un accompagnement personnalisé, discret et exigeant,
      pensé pour structurer, accélérer et sécuriser votre développement.
    </p>
    <p>
      ✨ Vous avez une vision. Je vous aide à la transformer en croissance maîtrisée.
    </p>
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

    <div style="margin-top:32px">
      <p class="center-text"><strong>🗓️ Durée & rythme des missions</strong></p>
      <p class="center-text">
        Accompagnements de 3 mois, 6 mois ou jusqu’à 12 mois selon vos ambitions.
      </p>
      <p class="center-text">
        J +15 : restitution stratégique, validation du plan d’action.
      </p>
      <p class="center-text">
        Suivi mensuel, ajustements continus et pilotage de la performance.
      </p>
    </div>
  `,

  offreSteps: {
    1: `
      <strong>Diagnostic & Vision</strong><br><br>
      Vision long terme<br>
      Marché ou pays cible<br>
      Objectifs business prioritaires<br>
      Indicateurs de performance
    `,
    2: `
      <strong>Intelligence marché & Stratégie</strong><br><br>
      Études de marché approfondies<br>
      Analyse concurrentielle<br>
      Recommandations produits<br>
      Plan d’action structuré
    `,
    3: `
      <strong>Déploiement & Pilotage</strong><br><br>
      Réunions mensuelles<br>
      Analyse KPI<br>
      Ajustements continus<br>
      Croissance durable
    `
  },

  /* ===== PARCOURS PROFESSIONNEL ===== */
  experience: `
    <h2 class="title animate-title">💻 Parcours professionnel</h2>

    <div class="card-list">

      ${experienceCard(
        "Consultante en développement d’activité",
        "Gearbooker",
        "Audiovisuel & international",
        [
          "Accompagnement stratégique international",
          "Développement commercial BtoB / BtoC",
          "Pilotage de la performance"
        ]
      )}

      ${experienceCard(
        "Commerciale Marketing",
        "Pachamamaï",
        "Cosmétique & marchés internationaux",
        [
          "Prospection commerciale et lancements produits",
          "Études de marché Europe & Asie",
          "Fidélisation client"
        ]
      )}

      ${experienceCard(
        "CEO & Community Manager",
        "PUFFRAP",
        "Média & culture musicale",
        [
          "Création de média digital",
          "Gestion Instagram & TikTok",
          "SEO & visibilité"
        ]
      )}

      ${experienceCard(
        "CEO & Développeuse Web",
        "KIT IN",
        "Entrepreneuriat & digital",
        [
          "Plateforme éducative",
          "HTML / CSS / JavaScript",
          "Vision produit & business"
        ]
      )}

      ${experienceCard(
        "Stagiaire Comptable",
        "Pages Jaunes",
        "Finance & structure d’entreprise",
        [
          "Comptabilité clients & fournisseurs",
          "Analyse des flux financiers",
          "Organisation & rigueur"
        ]
      )}

      ${experienceCard(
        "Vendeuse & Ambassadrice de marque",
        "Le Perchoir",
        "Restauration & événementiel",
        [
          "Valorisation de l’image de marque",
          "Relation client terrain",
          "Développement de la notoriété"
        ]
      )}

    </div>
  `,

  /* ===== LOGICIELS ===== */
  tools: `
    <h2 class="title animate-title">🧠 Logiciels</h2>

    <div class="card-list">
      ${toolCard("CRM", "Notion, HubSpot, Salesforce")}
      ${toolCard("Gestion de projet", "Trello, Google Workspace")}
      ${toolCard("Communication", "Mailchimp, Zapier, Make")}
      ${toolCard("Design", "Canva, Figma, CapCut, Photoshop")}
      ${toolCard("IA", "ChatGPT, Claude, MidJourney, Gemini")}
      ${toolCard("Développement Web", "GitHub")}
      ${toolCard("Sites en ligne", "Webflow, WordPress, Shopify, Wix")}
      ${toolCard(
        "Analyse",
        "Google Analytics, Search Console, Meta Business Suite, LinkedIn Navigator"
      )}
      ${toolCard(
        "Études de marché",
        "TradeMap, Kompass, Euromonitor, Statista, World Bank Data"
      )}
    </div>
  `,

  /* ===== PARCOURS ACADÉMIQUE ===== */
  academic: `
    <h2 class="title animate-title">🎓 Parcours Académique</h2>

    <p><strong>Master Import-Export</strong><br>KEDGE Business School — Marseille</p>
    <p><strong>Bachelor International Business</strong><br>INSEEC Paris Business School</p>
    <p><strong>BTS Commerce International</strong><br>Lycée Jean Lurçat — Paris</p>
    <p><strong>Licence de Gestion</strong><br>Université Paris 1 Panthéon-Sorbonne</p>
    <p><strong>Diplôme de Comptabilité et de Gestion (DCG)</strong><br>
       École Nationale de Commerce — Paris</p>
  `,

  /* ===== RÉSEAUX SOCIAUX ===== */
  socials: `
    <h2 class="title animate-title">Réseaux sociaux</h2>

    <div class="socials">
      <a href="https://www.instagram.com/" target="_blank">
        <img src="images/Instagram.PNG" alt="Instagram">
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <img src="images/Linkedin.PNG" alt="LinkedIn">
      </a>
      <a href="mailto:contact@email.com">
        <img src="images/Mail.PNG" alt="Email">
      </a>
    </div>
  `
};

/* ================= HELPERS ================= */
function experienceCard(role, company, sector, tasks) {
  return `
    <button class="card-btn" style="color:#7C4DFF">
      ${role}<br>
      <strong>${company}</strong><br>
      <em>${sector}</em>
      <div class="bubble hidden bubble-violet">
        ${tasks.join("<br>")}
      </div>
    </button>
  `;
}

function toolCard(title, tools) {
  return `
    <button class="card-btn" style="color:#9C6BFF;font-weight:700">
      <strong>${title}</strong>
      <div class="bubble hidden bubble-violet2" style="font-weight:400">
        ${tools}
      </div>
    </button>
  `;
}

/* ================= OUVERTURE BLOCS ================= */
blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {

    if (bloc.classList.contains("bleu1")) contentBox.innerHTML = CONTENT.presentation;
    if (bloc.classList.contains("rose1")) contentBox.innerHTML = CONTENT.offre;
    if (bloc.classList.contains("violet1")) contentBox.innerHTML = CONTENT.experience;
    if (bloc.classList.contains("violet2")) contentBox.innerHTML = CONTENT.tools;
    if (bloc.classList.contains("orange1")) contentBox.innerHTML = CONTENT.academic;
    if (bloc.classList.contains("jaune1")) contentBox.innerHTML = CONTENT.socials;

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
      `<div class="bubble" style="background:#fff;color:#3A6EFF;margin-top:20px;">
        ${CONTENT.engagement}
      </div>`
    );
  }

  if (e.target.classList.contains("step-btn")) {
    const bubble = document.getElementById("programmeBubble");
    bubble.innerHTML = CONTENT.offreSteps[e.target.dataset.step];
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

/* ================= LANGUAGE SWITCH ================= */
let currentLang = "fr";

const langBtn = document.getElementById("lang-current");
const langMenu = document.getElementById("lang-menu");

langBtn.addEventListener("click", e => {
  e.stopPropagation();
  langMenu.classList.toggle("hidden");
});

document.addEventListener("click", () => {
  langMenu.classList.add("hidden");
});

langMenu.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;

    // fermeture menu
    langMenu.classList.add("hidden");

    // reset overlay
    overlay.classList.remove("active");
    contentBox.innerHTML = "";

    console.log("Langue sélectionnée :", currentLang);
  });
});

/* ================= FERMETURE ================= */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});
colorBox.addEventListener("click", e => e.stopPropagation());
