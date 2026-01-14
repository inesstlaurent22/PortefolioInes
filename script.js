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

  /* ===== MON OFFRE ===== */
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
      <p class="center-text">Formats de 3, 6 ou 12 mois selon vos ambitions.</p>
      <p class="center-text">J +15 : restitution stratégique & plan d’action.</p>
      <p class="center-text">Suivi mensuel et ajustements continus.</p>
    </div>
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
      <strong>Intelligence marché & Stratégie</strong><br><br>
      Études de marché<br>
      Analyse concurrentielle<br>
      Recommandations produits<br>
      Plan d’action
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

      <button class="card-btn">
        Consultante en développement d’activité<br>
        <strong>Gearbooker</strong><br>
        <em>Audiovisuel & international</em>
        <div class="bubble hidden bubble-violet">
          Accompagnement stratégique international<br>
          Développement commercial BtoB / BtoC<br>
          Pilotage de la performance
        </div>
      </button>

      <button class="card-btn">
        Commerciale Marketing<br>
        <strong>Pachamamaï</strong><br>
        <em>Cosmétique & marchés internationaux</em>
        <div class="bubble hidden bubble-violet">
          Prospection & lancements produits<br>
          Études de marché Europe & Asie<br>
          Fidélisation client
        </div>
      </button>

      <button class="card-btn">
        CEO & Community Manager<br>
        <strong>PUFFRAP</strong><br>
        <em>Média & culture musicale</em>
        <div class="bubble hidden bubble-violet">
          Création de média digital<br>
          Gestion Instagram & TikTok<br>
          SEO & visibilité
        </div>
      </button>

      <button class="card-btn">
        CEO & Développeuse Web<br>
        <strong>KIT IN</strong><br>
        <em>Entrepreneuriat & digital</em>
        <div class="bubble hidden bubble-violet">
          Plateforme éducative<br>
          HTML / CSS / JavaScript<br>
          Vision produit & business
        </div>
      </button>

      <button class="card-btn">
        Stagiaire Comptable<br>
        <strong>Pages Jaunes</strong><br>
        <em>Finance & structure d’entreprise</em>
        <div class="bubble hidden bubble-violet">
          Comptabilité clients & fournisseurs<br>
          Analyse des flux<br>
          Organisation financière
        </div>
      </button>

      <button class="card-btn">
        Vendeuse & Ambassadrice de marque<br>
        <strong>Le Perchoir</strong><br>
        <em>Restauration & événementiel</em>
        <div class="bubble hidden bubble-violet">
          Image de marque<br>
          Relation client terrain<br>
          Notoriété de l’enseigne
        </div>
      </button>

    </div>
  `,

  /* ===== LOGICIELS ===== */
  tools: `
    <h2 class="title animate-title">🧠 Logiciels</h2>

    <div class="card-list">

      <button class="card-btn"><strong>CRM</strong>
        <div class="bubble hidden bubble-violet2">Notion, HubSpot, Salesforce</div>
      </button>

      <button class="card-btn"><strong>Gestion de projet</strong>
        <div class="bubble hidden bubble-violet2">Trello, Google Workspace</div>
      </button>

      <button class="card-btn"><strong>Communication</strong>
        <div class="bubble hidden bubble-violet2">Mailchimp, Zapier, Make</div>
      </button>

      <button class="card-btn"><strong>Design</strong>
        <div class="bubble hidden bubble-violet2">Canva, Figma, CapCut, Photoshop</div>
      </button>

      <button class="card-btn"><strong>IA</strong>
        <div class="bubble hidden bubble-violet2">ChatGPT, Claude, MidJourney, Gemini</div>
      </button>

      <button class="card-btn"><strong>Développement Web</strong>
        <div class="bubble hidden bubble-violet2">GitHub</div>
      </button>

      <button class="card-btn"><strong>Sites en ligne</strong>
        <div class="bubble hidden bubble-violet2">Webflow, WordPress, Shopify, Wix</div>
      </button>

      <button class="card-btn"><strong>Analyse</strong>
        <div class="bubble hidden bubble-violet2">
          Google Analytics, Search Console, Meta Business Suite, LinkedIn Navigator
        </div>
      </button>

      <button class="card-btn"><strong>Études de marché</strong>
        <div class="bubble hidden bubble-violet2">
          TradeMap, Kompass, Euromonitor, Statista, World Bank Data
        </div>
      </button>

    </div>
  `,

  /* ===== RÉSEAUX ===== */
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

/* ================= FERMETURE ================= */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});
colorBox.addEventListener("click", e => e.stopPropagation());
