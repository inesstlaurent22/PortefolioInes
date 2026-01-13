console.log("SCRIPT JS – VERSION STABLE AVEC TEXTES COMPLETS");

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= CONTENUS DES BLOCS ================= */
const contents = {

  /* ========= MON OFFRE ========= */
  bleu1: `
    <h2 class="title">Présentation</h2>

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

    <p>
      J’interviens notamment sur :
    </p>

    <ul class="list-left">
      <li>le lancement de nouveaux produits</li>
      <li>l’implantation sur de nouveaux marchés</li>
      <li>la structuration d’offres</li>
      <li>le développement de la visibilité et des performances commerciales</li>
    </ul>

    <button class="primary-btn" id="openObjectif">Mon objectif</button>
  `,

  /* ========= MON PROGRAMME ========= */
  rose1: `
    <h2 class="title">Processus d’accompagnement stratégique</h2>

    <div class="center-buttons">
      <button class="step-btn" data-step="1">01</button>
      <button class="step-btn" data-step="2">02</button>
      <button class="step-btn" data-step="3">03</button>
    </div>

    <div id="programmeBubble" class="bubble hidden"></div>
  `,

  /* ========= CV / COMPÉTENCES ========= */
  violet1: `
    <h2 class="title">CV & Compétences</h2>

    <div class="card-list">

      ${job(
        "Consultante en développement d’activité",
        "Gearbooker — Audiovisuel & international",
        [
          "Accompagnement stratégique d’une entreprise audiovisuelle internationale",
          "Développement commercial et prospection BtoB / BtoC",
          "Analyse des performances et pilotage des actions"
        ]
      )}

      ${job(
        "Commerciale Marketing",
        "Pachamamaï — Cosmétique solide",
        [
          "Prospection commerciale et développement de la clientèle",
          "Lancement de nouveaux produits",
          "Réalisation d’études de marché"
        ]
      )}

      ${job(
        "CEO & Community Manager",
        "PUFFRAP — Média musical",
        [
          "Création et développement du média",
          "Gestion et croissance des réseaux sociaux",
          "Optimisation SEO et partenariats stratégiques"
        ]
      )}

      ${job(
        "CEO & Développeuse Web",
        "KIT IN — Formation à la création d’entreprise (dès 10 ans)",
        [
          "Conception de projets web éducatifs",
          "Développement HTML, CSS et JavaScript",
          "Vision produit, pédagogie et business"
        ]
      )}

      ${job(
        "Vendeuse & Ambassadrice de marque",
        "Galeries Lafayette · Le Perchoir · Le Paradis du Fruit",
        [
          "Relation client premium",
          "Représentation et valorisation de l’image de marque",
          "Vente, conseil et expérience terrain"
        ]
      )}

    </div>
  `,

  /* ========= LOGICIELS ========= */
  violet2: `
    <h2 class="title">Logiciels</h2>

    <div class="card-list">
      ${tool("CRM", "Notion, HubSpot, Salesforce")}
      ${tool("Gestion de projet", "Trello, Google Workspace")}
      ${tool("Communication", "Mailchimp, Zapier, Make")}
      ${tool("Étude de marché", "TradeMap, Kompass, World Bank Data")}
      ${tool("Analyse", "LinkedIn Sales Navigator, Google Analytics, Google Search Console")}
      ${tool("Intelligence artificielle", "ChatGPT, Claude, MidJourney, Perplexity")}
      ${tool("Microsoft", "Azure, Copilot, OneNote")}
      ${tool("Réseaux sociaux", "Meta Business Suite, Webflow, Wix, WordPress, Shopify")}
      ${tool("Design", "Canva, Figma, CapCut, Photoshop")}
      ${tool("Développement web", "GitHub")}
    </div>
  `,

  /* ========= CV ACADÉMIQUE ========= */
  orange1: `
    <h2 class="title">CV Académique</h2>

    <div class="academic-list">
      <p><strong>Master Import–Export</strong><br>KEDGE Business School — Marseille</p>
      <p><strong>Bachelor International Business</strong><br>INSEEC Paris Business School — Paris</p>
      <p><strong>BTS Commerce International</strong><br>Lycée Jean Lurçat — Paris</p>
      <p><strong>Licence de Gestion</strong><br>Université Paris 1 Panthéon-Sorbonne — Paris</p>
      <p><strong>Diplôme de Comptabilité et de Gestion (DCG)</strong><br>École Nationale de Commerce — Paris</p>
    </div>
  `,

  /* ========= RÉSEAUX SOCIAUX ========= */
  jaune1: `
    <div class="socials">
      <img src="images/Instagram.PNG" alt="Instagram">
      <img src="images/Linkedin.PNG" alt="LinkedIn">
      <img src="images/Mail.PNG" alt="Email">
    </div>
  `
};

/* ================= TEXTES – PROGRAMME ================= */
const programmeTexts = {
  1: `
    <strong>01 — Diagnostic & Vision</strong>
    <p>Analyse globale de votre projet afin de poser des bases solides.</p>
    <ul class="list-left">
      <li>Vision long terme</li>
      <li>Marché ou pays cible</li>
      <li>Objectifs business</li>
      <li>Indicateurs de performance</li>
    </ul>
  `,
  2: `
    <strong>02 — Intelligence marché & stratégie</strong>
    <p>Études approfondies et recommandations sur mesure.</p>
    <ul class="list-left">
      <li>Analyse concurrentielle</li>
      <li>Positionnement stratégique</li>
      <li>Recommandations produits</li>
      <li>Plan d’action structuré</li>
    </ul>
  `,
  3: `
    <strong>03 — Déploiement & pilotage</strong>
    <p>Mise en œuvre et suivi des actions.</p>
    <ul class="list-left">
      <li>Suivi des KPI</li>
      <li>Ajustements continus</li>
      <li>Réunions de pilotage</li>
      <li>Croissance durable</li>
    </ul>
  `
};

/* ================= FONCTIONS ================= */
function job(title, meta, items) {
  return `
    <div class="card">
      <button class="card-btn">
        ${title}
        <span>${meta}</span>
      </button>
      <div class="bubble hidden">
        <ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

function tool(title, text) {
  return `
    <div class="card">
      <button class="card-btn">${title}</button>
      <div class="bubble hidden">${text}</div>
    </div>
  `;
}

/* ================= OUVERTURE DES BLOCS ================= */
blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {
    const key = [...bloc.classList].find(c => contents[c]);
    if (!key) return;

    contentBox.innerHTML = contents[key];
    colorBox.style.background = bloc.dataset.color || "#000";
    overlay.classList.add("active");
  });
});

/* ================= INTERACTIONS INTERNES ================= */
contentBox.addEventListener("click", e => {

  /* OBJECTIF */
  if (e.target.id === "openObjectif") {
    if (!document.querySelector(".bubble.objective")) {
      contentBox.insertAdjacentHTML("beforeend", `
        <div class="bubble objective">
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
    bubble.classList.remove("hidden");
  }

  /* CARTES (CV & LOGICIELS) */
  if (e.target.classList.contains("card-btn")) {
    const bubble = e.target.nextElementSibling;
    document.querySelectorAll(".bubble").forEach(b => {
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
