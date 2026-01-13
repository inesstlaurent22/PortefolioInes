console.log("SCRIPT JS FINAL – OK");

/* =====================================================
   SÉLECTEURS PRINCIPAUX
===================================================== */
const buttons = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* =====================================================
   CONTENUS DES BLOCS
===================================================== */
const contents = {

  /* ================= MON OFFRE ================= */
  bleu1: `
    <h2 class="animated-title">Présentation</h2>

    <p>
      Je m’appelle Inès Saint Laurent,
      <strong>freelance spécialisée dans le développement d’activités</strong>
      commerciales sur les marchés locaux et internationaux.
    </p>

    <p>
      Forte de <strong>cinq années d’expérience</strong>, j’accompagne les entreprises
      <strong>dans leurs phases clés de structuration, de croissance et de positionnement stratégique.</strong>
    </p>

    <p>
      J’interviens sur
      <strong>le lancement de nouveaux produits</strong>,
      <strong>l’implantation sur de nouveaux marchés</strong>,
      <strong>la structuration d’offres</strong>
      et le
      <strong>développement de la visibilité et des performances commerciales.</strong>
    </p>

    <button class="objectif-btn-large" id="openObjectif">
      Mon objectif
    </button>
  `,

  /* ================= MON PROGRAMME ================= */
  rose1: `
    <h2 class="animated-title">Processus d’accompagnement stratégique</h2>

    <div class="programme-buttons">
      <button class="step-btn" data-step="1">1</button>
      <button class="step-btn" data-step="2">2</button>
      <button class="step-btn" data-step="3">3</button>
    </div>

    <div id="programmeBubble" class="programme-bubble"></div>
  `,

  /* ================= CV & COMPÉTENCES ================= */
  violet1: `
    <h2 class="animated-title">CV & Compétences</h2>

    <div class="jobs-list">

      ${job(
        "job1",
        "Consultante en développement d’activité",
        "Gearbooker — Audiovisuel & international",
        [
          "Accompagnement stratégique d’une entreprise audiovisuelle internationale",
          "Développement commercial et prospection BtoB / BtoC",
          "Analyse des performances et pilotage des actions"
        ]
      )}

      ${job(
        "job2",
        "Commerciale Marketing",
        "Pachamamaï — Cosmétique solide",
        [
          "Prospection commerciale et développement clientèle",
          "Lancement de nouveaux produits",
          "Réalisation d’études de marché"
        ]
      )}

      ${job(
        "job3",
        "CEO & Community Manager",
        "PUFFRAP — Média musical",
        [
          "Création et développement du média",
          "Gestion et croissance des réseaux sociaux",
          "Optimisation SEO et partenariats"
        ]
      )}

      ${job(
        "job4",
        "CEO & Développeuse Web",
        "KIT IN — Formation entrepreneuriat (dès 10 ans)",
        [
          "Conception de projets web éducatifs",
          "Développement HTML, CSS, JavaScript",
          "Vision produit, pédagogie et business"
        ]
      )}

      ${job(
        "job5",
        "Vendeuse & Ambassadrice de marque",
        "Galeries Lafayette · Le Perchoir · Le Paradis du Fruit — Retail & restauration",
        [
          "Relation client premium",
          "Représentation et valorisation de l’image de marque",
          "Vente, conseil et expérience terrain"
        ]
      )}

    </div>
  `,

  /* ================= LOGICIELS ================= */
  violet2: `
    <h2 class="animated-title">Logiciels</h2>

    <div class="logiciels-list">

      ${tool("crm", "CRM", "Notion, HubSpot, Salesforce")}
      ${tool("gestion", "Gestion de projet", "Trello, Google Workspace")}
      ${tool("communication", "Communication", "Mailchimp, Zapier, Make")}
      ${tool("etude", "Étude de marché", "TradeMap, Kompass, World Bank Data")}
      ${tool("analyse", "Analyse", "LinkedIn Sales Navigator, Google Analytics, Google Search Console")}
      ${tool("ia", "Intelligence artificielle", "ChatGPT, Claude, MidJourney, Perplexity, Manus")}
      ${tool("microsoft", "Microsoft", "Azure, Copilot, OneNote")}
      ${tool("social", "Réseaux sociaux", "Meta Business Suite, Webflow, Wix, WordPress, Shopify")}
      ${tool("design", "Design", "Canva, Figma, CapCut, Photoshop")}
      ${tool("dev", "Développement web", "GitHub")}

    </div>
  `,

  /* ================= CV ACADÉMIQUE ================= */
  orange1: `
    <h2 class="animated-title">CV Académique</h2>

    <div class="scolaire-list">
      <p><strong>Master Import–Export</strong><br>KEDGE Business School — Marseille</p>
      <p><strong>Bachelor International Business</strong><br>INSEEC Paris Business School — Paris</p>
      <p><strong>BTS Commerce International</strong><br>Lycée Jean Lurçat — Paris</p>
      <p><strong>Licence de Gestion</strong><br>Université Paris 1 Panthéon-Sorbonne — Paris</p>
      <p><strong>Diplôme de Comptabilité et de Gestion</strong><br>École Nationale de Commerce — Paris</p>
    </div>
  `,

  /* ================= RÉSEAUX SOCIAUX ================= */
  jaune1: `
    <div class="socials-square">
      <a href="#"><img src="images/Instagram.PNG" alt="Instagram"></a>
      <a href="#"><img src="images/Linkedin.PNG" alt="LinkedIn"></a>
      <a href="mailto:contact@tonmail.com"><img src="images/Mail.PNG" alt="Email"></a>
    </div>
  `
};

/* =====================================================
   TEXTES – MON PROGRAMME
===================================================== */
const programmeTexts = {
  1: `
    <p><strong>Diagnostic & Vision</strong></p>
    <p>Un rendez-vous stratégique pour poser les bases du projet.</p>
    <ul class="left-points">
      <li>Vision long terme</li>
      <li>Marché ou pays cible</li>
      <li>Objectifs business</li>
      <li>Indicateurs de performance</li>
    </ul>
  `,
  2: `
    <p><strong>Intelligence marché & stratégie</strong></p>
    <p>Analyse approfondie et recommandations sur mesure.</p>
    <ul class="left-points">
      <li>Études de marché</li>
      <li>Analyse concurrentielle</li>
      <li>Positionnement stratégique</li>
      <li>Plan d’action</li>
    </ul>
  `,
  3: `
    <p><strong>Déploiement & pilotage</strong></p>
    <p>Mise en œuvre et suivi de la stratégie.</p>
    <ul class="left-points">
      <li>Réunions de pilotage</li>
      <li>Analyse des KPI</li>
      <li>Ajustements continus</li>
      <li>Croissance durable</li>
    </ul>
  `
};

/* =====================================================
   FONCTIONS HTML
===================================================== */
function job(id, title, meta, items) {
  return `
    <div class="job-wrapper" data-id="${id}">
      <div class="job-btn">
        <div class="job-title">${title}</div>
        <div class="job-meta">${meta}</div>
      </div>
      <div class="job-bubble">
        <ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

function tool(id, title, text) {
  return `
    <div class="tool-wrapper" data-id="${id}">
      <div class="logiciel-btn">${title}</div>
      <div class="logiciel-bubble">${text}</div>
    </div>
  `;
}

/* =====================================================
   OUVERTURE DES BLOCS PRINCIPAUX
===================================================== */
buttons.forEach(button => {
  button.addEventListener("click", e => {
    e.stopPropagation();
    const key = [...button.classList].find(c => contents[c]);
    if (!key) return;

    contentBox.innerHTML = contents[key];
    colorBox.style.background = button.dataset.color || "#111";
    overlay.classList.add("active");
  });
});

/* =====================================================
   INTERACTIONS INTERNES
===================================================== */
contentBox.addEventListener("click", e => {

  /* OBJECTIF */
  if (e.target.id === "openObjectif") {
    if (!document.querySelector(".objectif-bubble")) {
      contentBox.insertAdjacentHTML("beforeend", `
        <div class="objectif-bubble">
          Transformer une idée ou une activité existante en un projet structuré,
          visible et rentable.<br><br>
          Si vous cherchez une approche humaine, stratégique et orientée résultats,
          échangeons.
        </div>
      `);
    }
  }

  /* PROGRAMME */
  if (e.target.classList.contains("step-btn")) {
    const bubble = document.getElementById("programmeBubble");
    bubble.innerHTML = programmeTexts[e.target.dataset.step];
    bubble.classList.add("active");
  }

  /* JOBS – TOGGLE */
  const job = e.target.closest(".job-wrapper");
  if (job) {
    job.classList.toggle("open");
    document.querySelectorAll(".job-wrapper").forEach(j => {
      if (j !== job) j.classList.remove("open");
    });
  }

  /* LOGICIELS – TOGGLE */
  const tool = e.target.closest(".tool-wrapper");
  if (tool) {
    tool.classList.toggle("open");
    document.querySelectorAll(".tool-wrapper").forEach(t => {
      if (t !== tool) t.classList.remove("open");
    });
  }
});

/* =====================================================
   FERMETURE OVERLAY
===================================================== */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());
