console.log("SCRIPT JS – PORTFOLIO FINAL STABLE (CORRIGÉ)");

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= HELPERS ================= */
function experienceCard(role, company, sector, tasks) {
  return `
    <button class="card-btn" style="color:#7C4DFF">
      ${role}<br>
      <strong>${company}</strong><br>
      <em style="font-size:13px;">${sector}</em>
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

    <div style="margin-top:40px">
      <p class="center-text"><strong>🗓️ Durée & rythme des missions</strong></p>
      <p class="center-text">Accompagnements de 3 à 12 mois selon vos ambitions</p>
      <p class="center-text">J +15 : restitution stratégique et validation du plan d’action</p>
      <p class="center-text">Pilotage mensuel & ajustements continus</p>
    </div>
  `,

  offreSteps: {
    1: `
      <strong>Diagnostic & Vision</strong><br><br>
      Vision long terme<br>
      Marché cible<br>
      Objectifs business<br>
      Indicateurs clés
    `,
    2: `
      <strong>Intelligence marché & Stratégie</strong><br><br>
      Études de marché<br>
      Analyse concurrentielle<br>
      Recommandations<br>
      Plan d’action
    `,
    3: `
      <strong>Déploiement & Pilotage</strong><br><br>
      Réunions mensuelles<br>
      KPI & performance<br>
      Ajustements<br>
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
          "Prospection commerciale",
          "Études de marché Europe & Asie",
          "Fidélisation client"
        ]
      )}

      ${experienceCard(
        "CEO & Community Manager",
        "PUFFRAP",
        "Média musical",
        [
          "Création de média",
          "Gestion réseaux sociaux",
          "SEO & partenariats"
        ]
      )}

      ${experienceCard(
        "CEO & Développeuse Web",
        "KIT IN",
        "Entrepreneuriat & digital",
        [
          "Plateforme éducative",
          "HTML / CSS / JavaScript",
          "Vision produit"
        ]
      )}

      ${experienceCard(
        "Vendeuse & Ambassadrice de marque",
        "Le Perchoir",
        "Restauration & événementiel",
        [
          "Relation client",
          "Valorisation de l’image",
          "Notoriété de marque"
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
      ${toolCard("Analyse", "Google Analytics, Search Console, LinkedIn Navigator")}
    </div>
  `,

  /* ===== PARCOURS ACADÉMIQUE (CORRIGÉ) ===== */
  academic: `
    <h2 class="title animate-title">🎓 Parcours Académique</h2>

    <p style="margin-bottom:20px;">
      <strong>Master Import-Export</strong><br>
      KEDGE Business School — Marseille
    </p>

    <p style="margin-bottom:20px;">
      <strong>Bachelor International Business</strong><br>
      INSEEC Paris Business School
    </p>

    <p style="margin-bottom:20px;">
      <strong>BTS Commerce International</strong><br>
      Lycée Jean Lurçat — Paris
    </p>

    <p style="margin-bottom:20px;">
      <strong>Licence de Gestion</strong><br>
      Université Paris 1 Panthéon-Sorbonne
    </p>

    <p style="margin-bottom:10px;">
      <strong>Diplôme de Comptabilité et de Gestion</strong><br>
      École Nationale de Commerce — Paris
    </p>
  `,

  /* ===== RÉSEAUX SOCIAUX ===== */
  socials: `
    <h2 class="title animate-title">Réseaux sociaux</h2>
    <div class="socials">
      <a href="https://www.instagram.com/" target="_blank">
        <img src="images/Instagram.PNG">
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <img src="images/Linkedin.PNG">
      </a>
      <a href="mailto:contact@email.com">
        <img src="images/Mail.PNG">
      </a>
    </div>
  `
};

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
    if (!bubble) return;
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
