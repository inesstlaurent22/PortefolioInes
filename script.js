console.log("SCRIPT JS – PORTFOLIO FINAL STABLE (CORRIGÉ)");

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= CONTENUS ================= */
const CONTENT = {

  /* ================= PRÉSENTATION ================= */
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

  /* ================= MON OFFRE ================= */
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
      <p class="center-text">
        Formats de 3 mois, 6 mois ou jusqu’à 12 mois selon vos ambitions.
      </p>
      <p class="center-text">
        J +15 : restitution stratégique et validation du plan d’action.
      </p>
      <p class="center-text">
        Chaque mois : suivi et ajustements continus.
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

  /* ================= PARCOURS PRO ================= */
  experience: `
    <h2 class="title animate-title">💻 Parcours professionnel</h2>

    <div class="card-list">

      <button class="card-btn" style="color:#7C4DFF">
        Consultante en développement d’activité<br>
        <strong>Gearbooker</strong><br>
        <em style="font-size:13px">Audiovisuel & international</em>
        <div class="bubble hidden bubble-violet">
          Accompagnement stratégique international<br>
          Développement commercial BtoB / BtoC<br>
          Pilotage de la performance
        </div>
      </button>

      <button class="card-btn" style="color:#7C4DFF">
        Commerciale Marketing<br>
        <strong>Pachamamaï</strong><br>
        <em style="font-size:13px">Cosmétique & marchés internationaux</em>
        <div class="bubble hidden bubble-violet">
          Prospection et lancement de produits<br>
          Études de marché internationales<br>
          Fidélisation clientèle
        </div>
      </button>

    </div>
  `,

  /* ================= PARCOURS ACADÉMIQUE ================= */
  academic: `
    <h2 class="title animate-title">🎓 Parcours Académique</h2>

    <div style="margin-bottom:26px">
      <strong>Master Import-Export</strong><br>
      KEDGE Business School — Marseille
    </div>

    <div style="margin-bottom:26px">
      <strong>Bachelor International Business</strong><br>
      INSEEC Paris Business School
    </div>

    <div style="margin-bottom:26px">
      <strong>BTS Commerce International</strong><br>
      Lycée Jean Lurçat — Paris
    </div>

    <div style="margin-bottom:26px">
      <strong>Licence de Gestion</strong><br>
      Université Paris 1 Panthéon-Sorbonne
    </div>

    <div>
      <strong>Diplôme de Comptabilité et de Gestion (DCG)</strong><br>
      École Nationale de Commerce — Paris
    </div>
  `,

  /* ================= LOGICIELS ================= */
  tools: `
    <h2 class="title animate-title">🧠 Logiciels</h2>

    <div class="card-list">

      <button class="card-btn" style="color:#9C6BFF">
        <strong>CRM</strong>
        <div class="bubble hidden bubble-violet2">
          Notion · HubSpot · Salesforce
        </div>
      </button>

      <button class="card-btn" style="color:#9C6BFF">
        <strong>Gestion de projet</strong>
        <div class="bubble hidden bubble-violet2">
          Trello · Google Workspace
        </div>
      </button>

      <button class="card-btn" style="color:#9C6BFF">
        <strong>Analyse</strong>
        <div class="bubble hidden bubble-violet2">
          Google Analytics · Search Console · LinkedIn Sales Navigator · Meta Business Suite
        </div>
      </button>

      <button class="card-btn" style="color:#9C6BFF">
        <strong>IA</strong>
        <div class="bubble hidden bubble-violet2">
          ChatGPT · Claude · MidJourney · Gemini
        </div>
      </button>

    </div>
  `
};

/* ================= OUVERTURE DES BLOCS ================= */
blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {

    if (bloc.classList.contains("bleu1")) contentBox.innerHTML = CONTENT.presentation;
    if (bloc.classList.contains("rose1")) contentBox.innerHTML = CONTENT.offre;
    if (bloc.classList.contains("violet1")) contentBox.innerHTML = CONTENT.experience;
    if (bloc.classList.contains("violet2")) contentBox.innerHTML = CONTENT.tools;
    if (bloc.classList.contains("orange1")) contentBox.innerHTML = CONTENT.academic;

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
