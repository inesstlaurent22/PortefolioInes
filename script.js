console.log("SCRIPT JS – PORTFOLIO FINAL STABLE (VIOLET2 + ORANGE1 FIX)");

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= CONTENUS ================= */
const CONTENT = {

  /* ========= PRÉSENTATION ========= */
  presentation: `
    <h2 class="title animate-title">Présentation</h2>

    <p>
      Je m’appelle Inès Saint Laurent, freelance spécialisée dans le développement
      d’activités commerciales sur les marchés locaux et internationaux.
    </p>

    <p>
      Suite à mes 5 années d’expérience en commerce international et marketing,
      j’accompagne les entreprises dans leurs phases clés de croissance.
    </p>

    <p>
      J’interviens sur le lancement de nouveaux produits, l’implantation sur de nouveaux marchés
      et le développement de la visibilité et des performances commerciales.
    </p>

    <p>
      Mon expertise couvre les marchés français, européens et asiatiques,
      avec des expériences dans le cosmétique, l’alimentation, la musique et l’audiovisuel.
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

  /* ========= MON OFFRE ========= */
  offre: `
    <h2 class="title animate-title">🤝 Processus d’accompagnement stratégique</h2>

    <div class="center-buttons">
      <button class="step-btn step-rose" data-step="1">01</button>
      <button class="step-btn step-rose" data-step="2">02</button>
      <button class="step-btn step-rose" data-step="3">03</button>
    </div>

    <div id="programmeBubble" class="bubble hidden center-text"></div>

    <div style="margin-top:36px">
      <p class="center-text"><strong>🗓️ Durée & rythme des missions</strong></p>
      <p class="center-text">Formats de 3 mois, 6 mois ou jusqu’à 12 mois.</p>
      <p class="center-text">J +15 : restitution stratégique & validation du plan d’action.</p>
      <p class="center-text">Suivi mensuel et ajustements continus.</p>
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

  /* ========= CV EXPÉRIENCE ========= */
  experience: `
    <h2 class="title animate-title">💻 Parcours professionnel</h2>

    <div class="card-list">

      ${experienceCard(
        "Consultante en développement d’activité",
        "Gearbooker",
        "Audiovisuel & international",
        ["Accompagnement stratégique international", "Développement commercial BtoB & BtoC", "Pilotage de la performance"]
      )}

      ${experienceCard(
        "Commerciale Marketing",
        "Pachamamaï",
        "Cosmétique & marchés internationaux",
        ["Prospection commerciale", "Études de marché Europe & Asie", "Lancement de produits"]
      )}

      ${experienceCard(
        "CEO & Community Manager",
        "PUFFRAP",
        "Média & culture musicale",
        ["Création de média digital", "Gestion Instagram & TikTok", "SEO & partenariats"]
      )}

      ${experienceCard(
        "CEO & Développeuse Web",
        "KIT IN",
        "Entrepreneuriat & digital",
        ["Plateforme éducative", "HTML / CSS / JavaScript", "Vision produit & business"]
      )}

      ${experienceCard(
        "Stagiaire Comptable",
        "Pages Jaunes",
        "Finance & structure d’entreprise",
        ["Comptabilité clients/fournisseurs", "Analyse des flux financiers"]
      )}

      ${experienceCard(
        "Vendeuse & Ambassadrice",
        "Le Perchoir",
        "Restauration & événementiel",
        ["Valorisation de l’image de marque", "Relation client terrain"]
      )}

    </div>
  `,

  /* ========= PARCOURS ACADÉMIQUE ========= */
  academic: `
    <h2 class="title animate-title">🎓 Parcours Académique</h2>

    <div class="academic-item">
      <strong>Master Import-Export</strong><br><br>
      KEDGE Business School — Marseille
    </div>

    <div class="academic-item">
      <strong>Bachelor International Business</strong><br><br>
      INSEEC Paris Business School
    </div>

    <div class="academic-item">
      <strong>BTS Commerce International</strong><br><br>
      Lycée Jean Lurçat — Paris
    </div>

    <div class="academic-item">
      <strong>Licence de Gestion</strong><br><br>
      Université Paris 1 Panthéon-Sorbonne
    </div>

    <div class="academic-item">
      <strong>Diplôme de Comptabilité et de Gestion (DCG)</strong><br><br>
      École Nationale de Commerce — Paris
    </div>
  `,

  /* ========= LOGICIELS ========= */
  tools: `
    <h2 class="title animate-title">🧠 Logiciels</h2>

    <div class="card-list">

      ${toolCard("CRM", "Notion · HubSpot · Salesforce")}
      ${toolCard("Gestion de projet", "Trello · Google Workspace")}
      ${toolCard("Analyse", "Google Analytics · Search Console · LinkedIn Sales Navigator · Meta")}
      ${toolCard("Microsoft", "Azure · Copilot · Microsoft 360")}
      ${toolCard("Étude de marché", "TradeMap · Kompass · Euromonitor · Statista · World Bank Data")}
      ${toolCard("Communication", "Mailchimp · Zapier · Make")}
      ${toolCard("Design", "Canva · Figma · CapCut · Photoshop")}
      ${toolCard("IA", "ChatGPT · Claude · MidJourney · Gemini")}
      ${toolCard("Développement Web", "GitHub")}

    </div>
  `,

  /* ========= RÉSEAUX ========= */
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

function toolCard(title, items) {
  return `
    <button class="card-btn" style="color:#9C6BFF">
      <strong>${title}</strong>
      <div class="bubble hidden bubble-violet2">${items}</div>
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
    if (!bubble) return;
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

/* ================= FERMETURE ================= */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});
colorBox.addEventListener("click", e => e.stopPropagation());
