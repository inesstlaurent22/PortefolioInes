document.addEventListener("DOMContentLoaded", () => {

console.log("SCRIPT JS – PORTFOLIO FINAL STABLE (LANG SWITCH FIXED)");

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= LANGUAGE SWITCH ================= */
const langBtn = document.getElementById("lang-current");
const langMenu = document.getElementById("lang-menu");
let currentLang = "fr";

if (langBtn && langMenu) {
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("active");
  });

  document.addEventListener("click", () => {
    langMenu.classList.remove("active");
  });

  langMenu.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      langMenu.classList.remove("active");
      overlay.classList.remove("active");
      contentBox.innerHTML = "";
    });
  });
}

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

  presentation: `
    <h2 class="title animate-title">Présentation</h2>

    <p>
      Je m’appelle Inès Saint Laurent, freelance spécialisée dans
      <strong>le développement d’activités commerciales</strong>
      sur les marchés locaux et internationaux.
    </p>

    <p>
      Suite à <strong>5 années d’expérience</strong> en commerce
      <strong>international et marketing</strong>,
      j’accompagne les entreprises – de la startup à la grande structure –
      dans leurs phases clés de croissance.
    </p>

    <p>
      J’interviens sur <strong>le lancement de nouveaux produits,
      l’implantation sur de nouveaux marchés
      et le développement de la visibilité et des performances commerciales</strong>.
    </p>

    <p>
      <strong>Curieuse et polyvalente,</strong> j’ai également développé
      des compétences en <strong>community management</strong> et
      <strong>en développement web</strong>,
      me permettant d’avoir
      <strong>une vision globale, stratégique et opérationnelle</strong>
      des projets que j’accompagne.
    </p>

    <button class="primary-btn" id="openEngagement">👉 Mon engagement</button>
  `,

  engagement: `
    <p>
      Vous bénéficiez d’un accompagnement personnalisé et exigeant,
      pensé pour structurer, accélérer et sécuriser votre développement.
    </p>
    <p>
      <strong>✨ Vous avez une vision. Je vous aide à la transformer en croissance maîtrisée.</strong>
    </p>
  `,

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
      <p class="center-text"><strong>J +15</strong> : restitution stratégique et validation du plan d’action</p>
      <p class="center-text"><strong>Pilotage mensuel & ajustements continus</strong></p>
    </div>
  `,

/* ⬇️ OFFRESTEPS — TEXTES CONSERVÉS ⬇️ */
  offreSteps: {
    1: `
      <strong>Diagnostic & Vision</strong><br><br>
      <strong>Un premier rendez-vous stratégique confidentiel permet de poser les bases de votre développement.</strong><br><br>
      Cette étape permet de définir :<br>
      Vision <strong>long terme</strong><br>
      Marché <strong>cible</strong><br>
      <strong>Objectifs</strong> business<br>
      <strong>Délai et indicateurs de performances</strong>
    `,
    2: `
      <strong>Intelligence marché & Stratégie</strong><br>
      <em>(10 à 15 jours après le diagnostic)</em><br><br>
      À l’issue de la phase d’analyse, je vous livre :<br>
      <strong>Études de marché approfondis</strong><br>
      <strong>Analyse concurrentielle et position</strong><br>
      <strong>Recommandations produits & opportunités</strong><br>
      <strong>Projection budgétaire et plan d’action</strong>
    `,
    3: `
      <strong>Déploiement & Pilotage</strong><br><br>
      Après validation, la mission est lancée avec un accompagnement structuré et progressif.<br><br>
      Un point de suivi mensuel est organisé afin de :<br>
      <strong>Analyser les résultats (KPI & performance)</strong><br>
      <strong>Ajustements stratégiques</strong><br>
      <strong>Valider l’évolution par rapport aux objectifs fixés.</strong>
    `
  },


  experience: `
    <h2 class="title animate-title">💻 Parcours professionnel</h2>

    <div class="card-list">
      ${experienceCard(
        "Consultante en développement d’activité",
        "Gearbooker",
        "Audiovisuel & international",
        [
          "→ Accompagnement d’une entreprise néerlandaise dans son implantation sur le marché français",
          "→ Élaboration de stratégies de développement commercial",
          "→ Prospection BtoB & BtoC",
          "→ Analyse des performances et réunions de pilotage avec les associés"
        ]
      )}

      ${experienceCard(
        "Commerciale Marketing",
        "Pachamamaï",
        "Cosmétique & marchés internationaux",
        [
          "→ Prospection commerciale et lancement de nouveaux produits",
          "→ Réalisation d’études de marché (Portugal, Espagne, Asie)",
          "→ Suivi et fidélisation de la clientèle",
          "→ Participation à des salons internationaux"
        ]
      )}

      ${experienceCard(
        "CEO & Community Manager",
        "PUFFRAP",
        "Média musical",
        [
          "→ Création et développement du magazine en ligne",
          "→ Gestion et croissance des réseaux sociaux (Instagram & TikTok)",
          "→ Optimisation du SEO et de la visibilité digitale",
          "→ Mise en place de partenariats stratégiques"
        ]
      )}

      ${experienceCard(
        "CEO & Développeuse Web",
        "KIT IN",
        "Entrepreneuriat & digital",
        [
          "→ Conception et développement d’une formation en ligne dédiée à la création d’entreprise",
          "→ Projet éducatif destiné aux jeunes de 10 à 17 ans",
          "→ Développement technique en HTML, CSS et JavaScript",
          "→ Vision globale : produit, pédagogie, business et technologie"
        ]
      )}

      ${experienceCard(
        "Stagiaire Comptable",
        "Pages Jaunes",
        "Annuaires digitaux",
        [
          "→ Comptabilité clients et fournisseurs",
          "→ Compréhension des flux financiers",
          "→ Rigueur, organisation et vision analytique"
        ]
      )}

      ${experienceCard(
        "Vendeuse & Ambassadrice de marque",
        "Galeries Lafayette – Le Paradis du Fruit – Le Perchoir",
        "Restauration & Retail",
        [
          "→ Représentation et valorisation de l’image de marque",
          "→ Relation client",
          "→ Expérience terrain"
        ]
      )}
    </div>
  `,

  tools: `
    <h2 class="title animate-title">🧠 Logiciels</h2>

    <div class="card-list">
      ${toolCard("CRM", "Notion, HubSpot, Salesforce")}
      ${toolCard("Gestion de projet", "Trello, Google Workspace")}
      ${toolCard("Analyse", "Google Analytics, Search Console, LinkedIn Navigator")}
      ${toolCard("Communication", "Mailchimp, Zapier, Make")}
      ${toolCard("Design", "Canva, Figma, CapCut, Photoshop")}
      ${toolCard("IA", "ChatGPT, Claude, MidJourney, Gemini")}
      ${toolCard("Développement Web", "GitHub")}
      ${toolCard("Étude de marché", "TradeMap, Kompass, World Bank Data, Statista, Euromonitor")}
      ${toolCard("Microsoft", "Azure, Microsoft 365, Copilot")}
    </div>
  `,

  academic: `
    <h2 class="title animate-title">🎓 Parcours académique</h2>

    <p><strong>Master Import-Export</strong><br>KEDGE Business School — Marseille</p>
    <p><strong>Bachelor International Business</strong><br>INSEEC — Paris</p>
    <p><strong>BTS Commerce International</strong><br>Lycée Jean Lurçat - Paris</p>
    <p><strong>Licence de Gestion</strong><br>Paris 1 Panthéon-Sorbonne</p>
    <p><strong>Diplôme de Comptabilité et de Gestion</strong><br>École Nationale de Commerce — Paris</p>
  `,

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
    if (!bubble) return;

    bubble.innerHTML = CONTENT.offreSteps[e.target.dataset.step];
    bubble.style.background = "#fff";
    bubble.style.color = "#FF4FD8";
    bubble.classList.remove("hidden");
  }
});

/* ================= FERMETURE ================= */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});
colorBox.addEventListener("click", e => e.stopPropagation());

});
