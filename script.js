console.log("SCRIPT JS – PORTFOLIO MULTILANGUE FINAL");

/* ================= LANGUE COURANTE ================= */
let currentLang = "fr";

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= TEXTES MULTILANGUES ================= */
const T = {
  fr: {
    /* ========= OBJECTIF ========= */
    objectif: `
      <p>
        Transformer une idée ou une activité existante en un projet structuré,
        visible et rentable.<br><br>
        Si vous cherchez une approche humaine, stratégique et orientée résultats,
        échangeons.
      </p>
    `,

    /* ========= PRÉSENTATION ========= */
    presentation: `
      <h2 class="title animate-title">Présentation</h2>

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

      <p class="left"><strong>J’interviens notamment sur :</strong></p>

      <ul class="list-left">
        <li>le lancement de nouveaux produits</li>
        <li>l’implantation sur de nouveaux marchés</li>
        <li>la structuration d’offres</li>
        <li>le développement de la visibilité et des performances commerciales</li>
      </ul>

      <button class="primary-btn" id="openObjectif">Mon objectif</button>
    `,

    /* ========= MON OFFRE ========= */
    offreTitle: "Processus d’accompagnement stratégique",
    offre: {
      1: `
        <strong>01 — Diagnostic & Vision</strong>
        <p>
          Analyse globale du projet afin de poser des bases solides, réalistes
          et alignées avec vos ambitions.
        </p>
        <ul class="list-left">
          <li>Vision long terme</li>
          <li>Marché ou pays cible</li>
          <li>Objectifs business prioritaires</li>
          <li>Indicateurs de performance</li>
        </ul>
      `,
      2: `
        <strong>02 — Intelligence marché & stratégie</strong>
        <p>
          Études approfondies et recommandations stratégiques sur mesure,
          adaptées à votre positionnement.
        </p>
        <ul class="list-left">
          <li>Analyse concurrentielle</li>
          <li>Positionnement stratégique</li>
          <li>Recommandations produits</li>
          <li>Plan d’action structuré</li>
        </ul>
      `,
      3: `
        <strong>03 — Déploiement & pilotage</strong>
        <p>
          Mise en œuvre opérationnelle et suivi continu des actions
          afin de garantir des résultats concrets et mesurables.
        </p>
        <ul class="list-left">
          <li>Suivi des KPI</li>
          <li>Ajustements continus</li>
          <li>Réunions de pilotage</li>
          <li>Croissance durable</li>
        </ul>
      `
    },

    /* ========= CV & COMPÉTENCES ========= */
    competences: `
      <h2 class="title animate-title">CV & Compétences</h2>

      <div class="card-list">

        <button class="card-btn">
          <strong>Consultante en développement d’activité</strong><br>
          Gearbooker — Audiovisuel
          <div class="bubble hidden">
            • Accompagnement stratégique international<br>
            • Développement commercial BtoB / BtoC<br>
            • Analyse des performances et pilotage
          </div>
        </button>

        <button class="card-btn">
          <strong>Commerciale Marketing</strong><br>
          Pachamamaï — Cosmétique solide
          <div class="bubble hidden">
            • Études de marché internationales<br>
            • Lancement de produits<br>
            • Prospection et fidélisation clients
          </div>
        </button>

        <button class="card-btn">
          <strong>CEO & Community Manager</strong><br>
          PUFFRAP — Média musical
          <div class="bubble hidden">
            • Création et développement de média digital<br>
            • Gestion Instagram & TikTok<br>
            • Optimisation SEO et visibilité
          </div>
        </button>

        <button class="card-btn">
          <strong>CEO & Développeuse Web</strong><br>
          KIT IN — Formation entrepreneuriale
          <div class="bubble hidden">
            • Conception de plateformes éducatives<br>
            • HTML, CSS, JavaScript<br>
            • Vision produit, business et pédagogique
          </div>
        </button>

      </div>
    `,

    /* ========= COMPÉTENCES (OUTILS) ========= */
    skills: `
      <h2 class="title animate-title">Compétences</h2>

      <div class="card-list">

        <button class="card-btn">
          CRM
          <div class="bubble hidden">Notion, HubSpot, Salesforce</div>
        </button>

        <button class="card-btn">
          Gestion de projet
          <div class="bubble hidden">Trello, Google Workspace</div>
        </button>

        <button class="card-btn">
          Communication
          <div class="bubble hidden">Mailchimp, Zapier, Make</div>
        </button>

        <button class="card-btn">
          Analyse & data
          <div class="bubble hidden">
            Google Analytics, Google Search Console
          </div>
        </button>

        <button class="card-btn">
          Intelligence artificielle
          <div class="bubble hidden">
            ChatGPT, Claude, Midjourney
          </div>
        </button>

      </div>
    `,

    /* ========= PARCOURS ACADÉMIQUE ========= */
    academic: `
      <h2 class="title animate-title">Parcours Académique</h2>

      <p><strong>Master Import-Export</strong> — KEDGE Business School</p>
      <p><strong>Bachelor International Business</strong> — INSEEC Paris</p>
      <p><strong>BTS Commerce International</strong> — Lycée Jean Lurçat</p>
      <p><strong>Licence de Gestion</strong> — Université Paris 1 Panthéon-Sorbonne</p>
      <p><strong>Diplôme de Comptabilité et de Gestion</strong></p>
    `,

    /* ========= RÉSEAUX SOCIAUX ========= */
    socials: `
      <h2 class="title animate-title">Réseaux sociaux</h2>
      <p>Instagram · LinkedIn · Email</p>
    `
  }
};

/* ================= OUVERTURE DES BLOCS ================= */
blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {

    blocs.forEach(b => b.classList.remove("rotate"));
    bloc.classList.add("rotate");

    setTimeout(() => {

      if (bloc.classList.contains("bleu1")) {
        contentBox.innerHTML = T[currentLang].presentation;
      }

      if (bloc.classList.contains("rose1")) {
        contentBox.innerHTML = `
          <h2 class="title animate-title">${T[currentLang].offreTitle}</h2>

          <div class="center-buttons">
            <button class="step-btn" data-step="1">01</button>
            <button class="step-btn" data-step="2">02</button>
            <button class="step-btn" data-step="3">03</button>
          </div>

          <div id="programmeBubble" class="bubble hidden"></div>
        `;
      }

      if (bloc.classList.contains("violet1")) {
        contentBox.innerHTML = T[currentLang].competences;
      }

      if (bloc.classList.contains("violet2")) {
        contentBox.innerHTML = T[currentLang].skills;
      }

      if (bloc.classList.contains("orange1")) {
        contentBox.innerHTML = T[currentLang].academic;
      }

      if (bloc.classList.contains("jaune1")) {
        contentBox.innerHTML = T[currentLang].socials;
      }

      colorBox.style.background = bloc.dataset.color || "#111";
      overlay.classList.add("active");
      contentBox.scrollTop = 0;

    }, 450);
  });
});

/* ================= INTERACTIONS INTERNES ================= */
contentBox.addEventListener("click", e => {

  /* OBJECTIF */
  if (e.target.id === "openObjectif") {
    contentBox.insertAdjacentHTML(
      "beforeend",
      `<div class="bubble">${T[currentLang].objectif}</div>`
    );
  }

  /* OFFRE 01 / 02 / 03 */
  if (e.target.classList.contains("step-btn")) {
    const bubble = document.getElementById("programmeBubble");
    bubble.innerHTML = T[currentLang].offre[e.target.dataset.step];
    bubble.classList.remove("hidden");
  }

  /* CARTES CV / SKILLS */
  const card = e.target.closest(".card-btn");
  if (card) {
    const bubble = card.querySelector(".bubble");
    document.querySelectorAll(".card-btn .bubble").forEach(b => {
      if (b !== bubble) b.classList.add("hidden");
    });
    if (bubble) bubble.classList.toggle("hidden");
  }
});

/* ================= FERMETURE OVERLAY ================= */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
  blocs.forEach(b => b.classList.remove("rotate"));
});

colorBox.addEventListener("click", e => e.stopPropagation());

/* ================= LANGUAGE SWITCH ================= */
document.querySelectorAll("#lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    overlay.classList.remove("active");
    contentBox.innerHTML = "";
    blocs.forEach(b => b.classList.remove("rotate"));
  });
});
