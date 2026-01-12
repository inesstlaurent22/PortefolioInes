/* ===========================
   SÉLECTION DES ÉLÉMENTS
=========================== */
const buttons = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");
const objectifOverlay = document.getElementById("objectifOverlay");
const iphoneBox = document.querySelector(".iphoneBox");

/* ===========================
   BULLE FLOTTANTE (SUPERPOSITION)
=========================== */
function showFloatingBubble(html, theme = "default") {
  removeFloatingBubble();

  const bubble = document.createElement("div");
  bubble.className = `floating-bubble floating-${theme}`;
  bubble.innerHTML = html;

  bubble.addEventListener("click", e => e.stopPropagation());

  contentBox.appendChild(bubble);

  requestAnimationFrame(() => {
    bubble.classList.add("active");
  });
}

function removeFloatingBubble() {
  const bubble = document.querySelector(".floating-bubble");
  if (bubble) bubble.remove();
}

/* ===========================
   CONTENU PAR BLOC
=========================== */
const contents = {

  /* ================= MON OFFRE ================= */
  bleu1: `
    <h2 class="presentation-title">Présentation</h2>

    <p><strong>
      Je m’appelle Inès Saint Laurent, freelance spécialisée dans le développement
      d’activités commerciales, aussi bien sur les marchés locaux qu’internationaux.
    </strong></p>

    <p><strong>
      Forte de plus de cinq années d’expérience en commerce international et marketing,
      j’accompagne les entreprises — de la startup à la grande structure —
      dans leurs phases clés de croissance, de structuration et de positionnement.
    </strong></p>

    <p><strong>
      J’interviens sur des missions stratégiques telles que le lancement de nouveaux produits,
      l’implantation sur de nouveaux marchés, la structuration de l’offre,
      ainsi que le développement de la visibilité et des performances commerciales,
      notamment via les réseaux sociaux.
    </strong></p>

    <p><strong>
      Mon approche est humaine, stratégique et orientée résultats.
      Elle repose sur une vision globale mêlant analyse, organisation,
      exécution opérationnelle et compréhension fine des enjeux business et digitaux.
    </strong></p>

    <button class="objectif-btn objectif-btn-large" id="openObjectif">
      Mon objectif
    </button>
  `,

  /* ================= MON PROGRAMME ================= */
  rose1: `
    <h2 class="programme-title">Processus d’accompagnement stratégique</h2>

    <div class="programme-buttons">
      <button class="step-btn" data-step="1">01 — Diagnostic & Vision</button>
      <button class="step-btn" data-step="2">02 — Intelligence marché & Stratégie</button>
      <button class="step-btn" data-step="3">03 — Déploiement & Pilotage</button>
    </div>
  `,

  /* ================= CV COMPÉTENCES ================= */
  violet1: `
    <h2 class="competences-title">✦ Parcours professionnel — Timeline</h2>

    <div class="competences-buttons">
      <button class="competence-btn" data-comp="1">Consultante en développement d’activité</button>
      <button class="competence-btn" data-comp="2">Commerciale Marketing</button>
      <button class="competence-btn" data-comp="3">CEO & Community Manager</button>
      <button class="competence-btn" data-comp="4">CEO & Développeuse Web</button>
      <button class="competence-btn" data-comp="5">Stagiaire Comptable</button>
      <button class="competence-btn" data-comp="6">Vendeuse & Ambassadrice de marque</button>
    </div>
  `,

  /* ================= CV SCOLAIRE ================= */
  orange1: `
    <h2 class="scolaire-title animated-title">✦ Parcours académique</h2>

    <p><strong>Master Import-Export</strong><br>
    KEDGE Business School — Marseille</p>

    <p><strong>Bachelor International Business</strong><br>
    INSEEC Paris Business School — Paris</p>

    <p><strong>BTS Commerce International</strong><br>
    Lycée Jean Lurçat — Paris</p>

    <p><strong>Licence de Gestion</strong><br>
    Université Paris 1 Panthéon-Sorbonne</p>

    <p><strong>Diplôme de Comptabilité et de Gestion (DCG)</strong><br>
    École Nationale de Commerce — Paris</p>
  `,

  /* ================= RÉSEAUX ================= */
  jaune1: `
    <div class="socials socials-small">
      <a href="https://www.instagram.com/" target="_blank">
        <img src="images/Instagram.PNG" alt="Instagram">
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <img src="images/Linkedin.PNG" alt="LinkedIn">
      </a>
      <a href="mailto:contact@tonmail.com">
        <img src="images/Mail.PNG" alt="Email">
      </a>
    </div>
  `
};

/* ===========================
   TEXTES DES BULLES – PROGRAMME
=========================== */
const programmeTexts = {
  1: `
    <h3>Diagnostic & Vision</h3>
    <p>
      Un premier rendez-vous stratégique permet d’analyser votre situation actuelle,
      de comprendre votre vision long terme et de clarifier vos ambitions.
    </p>
    <ul>
      <li>Analyse de votre vision et de vos objectifs</li>
      <li>Définition du marché ou du pays cible</li>
      <li>Identification des priorités business</li>
      <li>Mise en place des indicateurs de performance</li>
    </ul>
  `,
  2: `
    <h3>Intelligence marché & Stratégie</h3>
    <p>
      Cette phase consiste à construire une stratégie sur mesure,
      fondée sur une compréhension fine de votre marché et de votre environnement concurrentiel.
    </p>
    <ul>
      <li>Études de marché approfondies</li>
      <li>Analyse concurrentielle et positionnement</li>
      <li>Identification des opportunités business</li>
      <li>Construction de la stratégie commerciale et marketing</li>
      <li>Élaboration d’un plan d’action structuré</li>
    </ul>
  `,
  3: `
    <h3>Déploiement & Pilotage stratégique</h3>
    <p>
      La stratégie est mise en œuvre de manière opérationnelle,
      avec un suivi régulier afin d’assurer une croissance maîtrisée et durable.
    </p>
    <ul>
      <li>Mise en œuvre des actions définies</li>
      <li>Réunions de pilotage mensuelles</li>
      <li>Analyse des performances et des KPI</li>
      <li>Ajustements stratégiques continus</li>
    </ul>
  `
};

/* ===========================
   TEXTES DES BULLES – CV COMPÉTENCES
=========================== */
const competencesTexts = {
  1: `
    <h3>Consultante en développement d’activité</h3>
    <ul>
      <li><em>Accompagnement d’une entreprise internationale dans son implantation sur le marché français</em></li>
      <li><em>Élaboration et pilotage de stratégies de développement commercial</em></li>
      <li><em>Prospection BtoB et BtoC sur des marchés ciblés</em></li>
      <li><em>Analyse des performances et reporting stratégique</em></li>
    </ul>
  `,
  2: `
    <h3>Commerciale Marketing</h3>
    <ul>
      <li><em>Lancement et développement de nouveaux produits</em></li>
      <li><em>Réalisation d’études de marché internationales</em></li>
      <li><em>Suivi, fidélisation et développement de la clientèle</em></li>
      <li><em>Participation à des salons professionnels</em></li>
    </ul>
  `,
  3: `
    <h3>CEO & Community Manager</h3>
    <ul>
      <li><em>Création, structuration et développement d’un média musical</em></li>
      <li><em>Gestion et croissance des réseaux sociaux</em></li>
      <li><em>Optimisation du SEO et de la visibilité digitale</em></li>
      <li><em>Mise en place de partenariats stratégiques</em></li>
    </ul>
  `,
  4: `
    <h3>CEO & Développeuse Web</h3>
    <ul>
      <li><em>Conception et développement de projets entrepreneuriaux digitaux</em></li>
      <li><em>Développement web en HTML, CSS et JavaScript</em></li>
      <li><em>Vision globale produit, pédagogie et business</em></li>
    </ul>
  `,
  5: `
    <h3>Stagiaire Comptable</h3>
    <ul>
      <li><em>Gestion de la comptabilité clients et fournisseurs</em></li>
      <li><em>Analyse et compréhension des flux financiers</em></li>
      <li><em>Rigueur, organisation et fiabilité des données</em></li>
    </ul>
  `,
  6: `
    <h3>Vendeuse & Ambassadrice de marque</h3>
    <ul>
      <li><em>Représentation et valorisation de l’image de marque</em></li>
      <li><em>Relation client premium et expérience terrain</em></li>
      <li><em>Contribution directe à la notoriété des enseignes</em></li>
    </ul>
  `
};

/* ===========================
   OUVERTURE OVERLAY PRINCIPAL
=========================== */
buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const key = [...button.classList].find(c => contents[c]);
    if (!key) return;

    contentBox.innerHTML = contents[key];
    removeFloatingBubble();
    colorBox.style.background = button.dataset.color || "transparent";
    overlay.classList.add("active");
  });
});

/* ===========================
   INTERACTIONS INTERNES
=========================== */
contentBox.addEventListener("click", e => {

  if (e.target.id === "openObjectif") {
    e.stopPropagation();
    objectifOverlay.classList.add("active");
  }

  if (e.target.classList.contains("step-btn")) {
    e.stopPropagation();
    showFloatingBubble(programmeTexts[e.target.dataset.step], "rose");
  }

  if (e.target.classList.contains("competence-btn")) {
    e.stopPropagation();
    showFloatingBubble(competencesTexts[e.target.dataset.comp], "violet");
  }
});

/* ===========================
   FERMETURES
=========================== */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  objectifOverlay.classList.remove("active");
  removeFloatingBubble();
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());

iphoneBox.addEventListener("click", e => e.stopPropagation());
objectifOverlay.addEventListener("click", () => {
  objectifOverlay.classList.remove("active");
});
