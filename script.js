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

    <div class="programme-result text-left" id="programmeResult"></div>
  `,

  /* ================= CV COMPÉTENCES ================= */
  violet1: `
    <h2 class="competences-title">✦ Parcours professionnel — Timeline</h2>

    <div class="competences-buttons">

      <button class="competence-btn" data-comp="1">
        <span class="competence-title-big">Consultante en développement d’activité</span>
        <span class="competence-company"><strong>Gearbooker</strong></span>
        <span class="competence-sector"><em>Audiovisuel</em></span>
      </button>
      <div class="competence-detail" data-detail="1"></div>

      <button class="competence-btn" data-comp="2">
        <span class="competence-title-big">Commerciale Marketing</span>
        <span class="competence-company"><strong>Pachamamaï</strong></span>
        <span class="competence-sector"><em>Cosmétique solide</em></span>
      </button>
      <div class="competence-detail" data-detail="2"></div>

      <button class="competence-btn" data-comp="3">
        <span class="competence-title-big">CEO & Community Manager</span>
        <span class="competence-company"><strong>PUFFRAP</strong></span>
        <span class="competence-sector"><em>Média musique</em></span>
      </button>
      <div class="competence-detail" data-detail="3"></div>

      <button class="competence-btn" data-comp="4">
        <span class="competence-title-big">CEO & Développeuse Web</span>
        <span class="competence-company"><strong>KIT IN</strong></span>
        <span class="competence-sector"><em>Formation à la création d’entreprise pour les jeunes dès 10 ans</em></span>
      </button>
      <div class="competence-detail" data-detail="4"></div>

      <button class="competence-btn" data-comp="5">
        <span class="competence-title-big">Stagiaire Comptable</span>
        <span class="competence-company"><strong>Pages Jaunes</strong></span>
        <span class="competence-sector"><em>Annuaire en ligne</em></span>
      </button>
      <div class="competence-detail" data-detail="5"></div>

      <button class="competence-btn" data-comp="6">
        <span class="competence-title-big">Vendeuse & Ambassadrice de marque</span>
        <span class="competence-company"><strong>Galeries Lafayette, Le Perchoir, Le Paradis du Fruit</strong></span>
        <span class="competence-sector"><em>Retail & Restauration</em></span>
      </button>
      <div class="competence-detail" data-detail="6"></div>

    </div>
  `,

  /* ================= CV SCOLAIRE ================= */
  orange1: `
    <h2 class="scolaire-title animated-title">✦ Parcours académique</h2>

    <p><strong>Master Import-Export</strong><br>KEDGE Business School — Marseille</p>
    <p><strong>Bachelor International Business</strong><br>INSEEC Paris Business School — Paris</p>
    <p><strong>BTS Commerce International</strong><br>Lycée Jean Lurçat — Paris</p>
    <p><strong>Licence de Gestion</strong><br>Université Paris 1 Panthéon-Sorbonne</p>
    <p><strong>Diplôme de Comptabilité et de Gestion (DCG)</strong><br>École Nationale de Commerce — Paris</p>
  `,

  /* ================= RÉSEAUX ================= */
  jaune1: `
    <div class="socials socials-small">
      <a href="https://www.instagram.com/" target="_blank"><img src="images/Instagram.PNG"></a>
      <a href="https://www.linkedin.com/" target="_blank"><img src="images/Linkedin.PNG"></a>
      <a href="mailto:contact@tonmail.com"><img src="images/Mail.PNG"></a>
    </div>
  `
};

/* ===========================
   TEXTES PROGRAMME
=========================== */
const programmeTexts = {
  1: `
    <ul>
      <li>Analyse approfondie de votre vision long terme et de vos ambitions</li>
      <li>Définition précise du marché ou du pays cible</li>
      <li>Clarification des objectifs business prioritaires</li>
      <li>Mise en place des indicateurs de performance</li>
    </ul>
  `,
  2: `
    <ul>
      <li>Études de marché approfondies</li>
      <li>Analyse concurrentielle et positionnement stratégique</li>
      <li>Identification des opportunités business</li>
      <li>Construction de la stratégie commerciale et marketing</li>
      <li>Plan d’action structuré</li>
    </ul>
  `,
  3: `
    <ul>
      <li>Mise en œuvre opérationnelle de la stratégie</li>
      <li>Suivi des performances et des KPI</li>
      <li>Ajustements stratégiques continus</li>
      <li>Croissance maîtrisée et durable</li>
    </ul>
  `
};

/* ===========================
   TEXTES CV COMPÉTENCES
=========================== */
const competencesTexts = {
  1: `
    <ul>
      <li>Accompagnement stratégique d’une entreprise audiovisuelle internationale</li>
      <li>Développement commercial et prospection BtoB / BtoC</li>
      <li>Analyse des performances et pilotage des actions</li>
    </ul>
  `,
  2: `
    <ul>
      <li>Lancement et développement de produits cosmétiques solides</li>
      <li>Études de marché et expansion internationale</li>
      <li>Suivi et fidélisation client</li>
    </ul>
  `,
  3: `
    <ul>
      <li>Création et développement d’un média musical</li>
      <li>Gestion et croissance des communautés digitales</li>
      <li>Optimisation de la visibilité et partenariats stratégiques</li>
    </ul>
  `,
  4: `
    <ul>
      <li>Conception de formations entrepreneuriales pour les jeunes</li>
      <li>Développement web (HTML, CSS, JavaScript)</li>
      <li>Vision produit, pédagogie et structuration business</li>
    </ul>
  `,
  5: `
    <ul>
      <li>Gestion de la comptabilité clients et fournisseurs</li>
      <li>Analyse des flux financiers</li>
      <li>Organisation et rigueur comptable</li>
    </ul>
  `,
  6: `
    <ul>
      <li>Représentation et valorisation de marques</li>
      <li>Relation client premium et expérience terrain</li>
      <li>Contribution à la notoriété des enseignes</li>
    </ul>
  `
};

/* ===========================
   OUVERTURE OVERLAY
=========================== */
buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const key = [...button.classList].find(c => contents[c]);
    if (!key) return;

    contentBox.innerHTML = contents[key];
    colorBox.style.background = button.dataset.color || "transparent";
    overlay.classList.add("active");
  });
});

/* ===========================
   INTERACTIONS INTERNES
=========================== */
contentBox.addEventListener("click", e => {

  /* objectif */
  if (e.target.id === "openObjectif") {
    e.stopPropagation();
    objectifOverlay.classList.add("active");
  }

  /* programme */
  if (e.target.classList.contains("step-btn")) {
    const step = e.target.dataset.step;
    document.getElementById("programmeResult").innerHTML = programmeTexts[step];
  }

  /* compétences */
  if (e.target.closest(".competence-btn")) {
    const btn = e.target.closest(".competence-btn");
    const key = btn.dataset.comp;

    document
      .querySelectorAll(".competence-detail")
      .forEach(el => el.innerHTML = "");

    const detail = document.querySelector(`.competence-detail[data-detail="${key}"]`);
    detail.innerHTML = competencesTexts[key];
  }
});

/* ===========================
   FERMETURES
=========================== */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  objectifOverlay.classList.remove("active");
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());
iphoneBox.addEventListener("click", e => e.stopPropagation());

objectifOverlay.addEventListener("click", () => {
  objectifOverlay.classList.remove("active");
});
