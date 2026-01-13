console.log("SCRIPT JS – BULLES DIFFÉRENCIÉES OK");

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

  /* ================= CV / COMPÉTENCES ================= */
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

  /* ================= TARIFS / LOGICIELS ================= */
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
      <div class="job-bubble cv-bubble">
        <ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

function tool(id, title, text) {
  return `
    <div class="tool-wrapper" data-id="${id}">
      <div class="logiciel-btn">${title}</div>
      <div class="logiciel-bubble logiciel-bubble-violet">
        ${text}
      </div>
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

  /* JOBS – TOGGLE (CV COMPÉTENCES) */
  const job = e.target.closest(".job-wrapper");
  if (job) {
    const isOpen = job.classList.contains("open");
    document.querySelectorAll(".job-wrapper").forEach(j => j.classList.remove("open"));
    if (!isOpen) job.classList.add("open");
  }

  /* LOGICIELS – TOGGLE */
  const tool = e.target.closest(".tool-wrapper");
  if (tool) {
    const isOpen = tool.classList.contains("open");
    document.querySelectorAll(".tool-wrapper").forEach(t => t.classList.remove("open"));
    if (!isOpen) tool.classList.add("open");
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
