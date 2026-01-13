console.log("SCRIPT JS CHARGÉ");

/* =====================================================
   CONTENU DES BLOCS
===================================================== */

const contents = {

  /* ================= MON OFFRE ================= */
  bleu1: `
    <h2 class="presentation-title animated-title">Présentation</h2>

    <div class="centered-text">
      <p>
        Je m’appelle Inès Saint Laurent,
        <strong>freelance spécialisée dans le développement d’activités</strong>
        commerciales, aussi bien sur les marchés locaux qu’internationaux.
      </p>

      <p>
        Forte de <strong>cinq années d’expérience</strong>,
        j’accompagne les entreprises
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
    </div>
  `,

  /* ================= MON PROGRAMME ================= */
  rose1: `
    <h2 class="programme-title animated-title">
      Processus d’accompagnement stratégique
    </h2>

    <div class="programme-buttons">
      <button class="step-btn" data-step="1">01</button>
      <button class="step-btn" data-step="2">02</button>
      <button class="step-btn" data-step="3">03</button>
    </div>

    <div id="programmeResult" class="programme-result"></div>
  `,

  /* ================= CV / COMPÉTENCES ================= */
  violet1: `
    <h2 class="programme-title animated-title">CV & Compétences</h2>

    <div class="jobs-list">

      <button class="job-btn" data-job="consultante">
        Consultante en développement d’activité
      </button>
      <div class="job-content" id="consultante">
        <p><strong>Gearbooker</strong> — <em>Audiovisuel & international</em></p>
        <ul>
          <li>Accompagnement stratégique d’entreprises internationales</li>
          <li>Développement commercial BtoB / BtoC</li>
          <li>Pilotage des performances</li>
        </ul>
      </div>

      <button class="job-btn" data-job="commerciale">
        Commerciale Marketing
      </button>
      <div class="job-content" id="commerciale">
        <p><strong>Pachamamaï</strong> — <em>Cosmétique solide</em></p>
        <ul>
          <li>Lancement de produits à l’international</li>
          <li>Études de marché</li>
          <li>Développement clients</li>
        </ul>
      </div>

      <button class="job-btn" data-job="vendeuse">
        Vendeuse & Ambassadrice de marque
      </button>
      <div class="job-content" id="vendeuse">
        <p>
          <strong>Galeries Lafayette, Le Perchoir, Le Paradis du Fruit</strong><br>
          <em>Retail & restauration</em>
        </p>
        <ul>
          <li>Relation client premium</li>
          <li>Valorisation de l’image de marque</li>
        </ul>
      </div>

    </div>
  `,

  /* ================= LOGICIELS ================= */
  violet2: `
    <h2 class="programme-title animated-title">Logiciels</h2>

    <div class="logiciels-list">

      <button class="logiciel-btn" data-tool="crm">CRM</button>
      <div class="logiciel-content" id="crm">
        Notion, HubSpot, Salesforce
      </div>

      <button class="logiciel-btn" data-tool="gestion">Gestion de projet</button>
      <div class="logiciel-content" id="gestion">
        Trello, Google Workspace
      </div>

      <button class="logiciel-btn" data-tool="communication">Communication</button>
      <div class="logiciel-content" id="communication">
        Mailchimp, Zapier, Make
      </div>

      <button class="logiciel-btn" data-tool="etude">Étude de marché</button>
      <div class="logiciel-content" id="etude">
        TradeMap, Kompass, Euromonitor, World Bank Data
      </div>

      <button class="logiciel-btn" data-tool="analyse">Analyse</button>
      <div class="logiciel-content" id="analyse">
        LinkedIn Sales Navigator, Google Analytics, Google Search Console
      </div>

      <button class="logiciel-btn" data-tool="ia">Intelligence artificielle</button>
      <div class="logiciel-content" id="ia">
        ChatGPT, Claude, MidJourney, Perplexity, Manus
      </div>

      <button class="logiciel-btn" data-tool="microsoft">Microsoft</button>
      <div class="logiciel-content" id="microsoft">
        Azure, Copilot, OneNote
      </div>

      <button class="logiciel-btn" data-tool="social">Réseaux sociaux</button>
      <div class="logiciel-content" id="social">
        Meta Business Suite, Webflow, Wix, WordPress, Shopify
      </div>

      <button class="logiciel-btn" data-tool="design">Design</button>
      <div class="logiciel-content" id="design">
        Canva, Figma, CapCut, Photoshop
      </div>

      <button class="logiciel-btn" data-tool="dev">Développement web</button>
      <div class="logiciel-content" id="dev">
        GitHub
      </div>

    </div>
  `,

  /* ================= CV ACADÉMIQUE ================= */
  orange1: `
    <h2 class="scolaire-title animated-title">CV Académique</h2>

    <div class="centered-text scolaire-list">
      <p>
        <strong>Master Import–Export</strong><br>
        KEDGE Business School — Marseille
      </p>

      <p>
        <strong>Bachelor International Business</strong><br>
        INSEEC Paris Business School — Paris
      </p>

      <p>
        <strong>BTS Commerce International</strong><br>
        Lycée Jean Lurçat — Paris
      </p>

      <p>
        <strong>Licence de Gestion</strong><br>
        Université Paris 1 Panthéon-Sorbonne — Paris
      </p>
    </div>
  `,

  /* ================= RÉSEAUX SOCIAUX ================= */
  jaune1: `
    <div class="socials-card compact">
      <a href="#"><img src="images/Instagram.PNG" alt="Instagram"></a>
      <a href="#"><img src="images/Linkedin.PNG" alt="LinkedIn"></a>
      <a href="mailto:contact@tonmail.com"><img src="images/Mail.PNG" alt="Email"></a>
    </div>
  `
};

/* =====================================================
   SÉLECTION DES ÉLÉMENTS
===================================================== */

const buttons    = document.querySelectorAll(".bloc");
const overlay    = document.getElementById("overlay");
const colorBox   = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* =====================================================
   OUVERTURE DES BLOCS
===================================================== */

buttons.forEach(button => {
  button.addEventListener("click", e => {
    e.stopPropagation();

    const key = [...button.classList].find(c => contents[c]);
    if (!key) return;

    contentBox.innerHTML = contents[key];
    colorBox.style.background = button.dataset.color || "#111";

    overlay.classList.add("active");
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
  });
});

/* =====================================================
   INTERACTIONS INTERNES
===================================================== */

contentBox.addEventListener("click", e => {

  /* ===== MON OBJECTIF ===== */
  if (e.target.id === "openObjectif") {
    e.stopPropagation();

    const existing = document.querySelector(".objectif-bubble");
    if (existing) existing.remove();

    const bubble = document.createElement("div");
    bubble.className = "objectif-bubble";
    bubble.innerHTML = `
      <p>
        Transformer une idée ou une activité existante en un projet structuré,
        visible et rentable.
      </p>
      <p>
        Si vous cherchez une approche humaine, stratégique et orientée résultats,
        échangeons.
      </p>
    `;

    contentBox.appendChild(bubble);
  }

  /* ===== JOBS ===== */
  if (e.target.classList.contains("job-btn")) {
    const id = e.target.dataset.job;
    document.getElementById(id).classList.toggle("active");
  }

  /* ===== LOGICIELS ===== */
  if (e.target.classList.contains("logiciel-btn")) {
    const id = e.target.dataset.tool;
    document.getElementById(id).classList.toggle("active");
  }
});

/* =====================================================
   FERMETURE OVERLAY
===================================================== */

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());
