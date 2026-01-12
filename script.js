/* ===========================
   SÉLECTION DES ÉLÉMENTS
=========================== */
const buttons = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ===========================
   CONTENU PAR BOUTON
=========================== */
const contents = {

  /* ===== BLEU : MON OFFRE ===== */
  bleu1: `
    <p><strong>Présentation</strong></p>

    <p><strong>Je m’appelle Inès Saint Laurent</strong>, freelance spécialisée dans le développement d’activités commerciales, aussi bien sur les marchés locaux qu’internationaux.</p>

    <p>Forte de <strong>5 années d’expérience en commerce international et marketing</strong>, j’accompagne les entreprises — de la startup à la grande structure — dans leurs phases clés de croissance.</p>

    <p>J’interviens sur des missions stratégiques telles que le <strong>lancement de nouveaux produits</strong>, l’implantation sur de nouveaux marchés, ainsi que le développement de la visibilité et des performances commerciales des marques, notamment via les réseaux sociaux.</p>

    <p>Mon expertise repose sur une connaissance approfondie des <strong>marchés français, européens et asiatiques</strong>, et sur des collaborations dans des secteurs variés : cosmétique, alimentation, musique et audiovisuel.</p>

    <p>Curieuse et polyvalente, j’ai également développé des compétences en <strong>community management</strong> et en <strong>développement web</strong>, me permettant d’avoir une vision globale, stratégique et opérationnelle des projets que j’accompagne.</p>

    <p><strong>👉 Mon objectif :</strong><br>
    transformer une idée ou une activité existante en un projet structuré, visible et rentable.<br>
    Si vous cherchez une approche humaine, stratégique et orientée résultats, échangeons.</p>
  `,

  /* ===== ROSE : MON PROGRAMME ===== */
  rose1: `
    <p><strong>♟️ Processus d’accompagnement stratégique</strong></p>

    <p><strong>01 — Diagnostic & Vision</strong></p>

    <p>Un premier rendez-vous stratégique confidentiel permet de poser les bases de votre développement.</p>

    <p>Nous y définissons :</p>

    <ul>
      <li>votre vision long terme,</li>
      <li>le marché ou pays cible,</li>
      <li>vos objectifs business prioritaires,</li>
      <li>les délais et indicateurs de performance.</li>
    </ul>

    <p>Cette étape garantit un alignement clair et précis avant toute mise en œuvre.</p>

    <p><strong>02 — Intelligence marché & Stratégie sur mesure</strong><br>
    <em>(10 à 15 jours après le diagnostic)</em></p>

    <p>Je vous livre une analyse complète et structurée, comprenant :</p>

    <ul>
      <li>études de marché approfondies,</li>
      <li>analyse concurrentielle et positionnement,</li>
      <li>recommandations produits & opportunités,</li>
      <li>stratégie commerciale et marketing,</li>
      <li>projection budgétaire et plan d’action.</li>
    </ul>

    <p>Une réunion de restitution permet d’ajuster la stratégie si nécessaire et de valider le périmètre de la mission ainsi que le devis.</p>

    <p><strong>03 — Déploiement & Pilotage stratégique</strong></p>

    <p>Une fois la stratégie validée, l’accompagnement démarre avec une approche agile, mesurable et orientée résultats.</p>

    <ul>
      <li>Réunion de pilotage mensuelle</li>
      <li>Analyse des performances et KPI</li>
      <li>Ajustements stratégiques continus</li>
      <li>Suivi des actions et priorités</li>
    </ul>

    <p><strong>📅 Durée & rythme des missions</strong></p>

    <p>Accompagnements sur <strong>3, 6 ou 12 mois</strong>.</p>

    <p><strong>📈 Mon engagement</strong></p>

    <p>Structurer, accélérer et sécuriser votre croissance sur des marchés à fort potentiel.</p>
  `,

  /* ===== VIOLET : CV COMPÉTENCES ===== */
  violet1: `
    <p><strong>✦ Parcours professionnel — Timeline</strong></p>

    <p><strong>Consultante en développement d’activité</strong> — Gearbooker</p>
    <ul>
      <li>Implantation marché français</li>
      <li>Stratégie commerciale</li>
      <li>Prospection BtoB / BtoC</li>
    </ul>

    <p><strong>Commerciale Marketing</strong> — Pachamamai</p>
    <ul>
      <li>Lancement produits</li>
      <li>Études de marché Europe & Asie</li>
    </ul>

    <p><strong>CEO & Community Manager</strong> — PUFFRAP</p>
    <ul>
      <li>Création média</li>
      <li>SEO & réseaux sociaux</li>
    </ul>

    <p><strong>CEO & Développeuse Web</strong> — KIT IN</p>
    <ul>
      <li>Formation entrepreneuriale</li>
      <li>HTML / CSS / JS</li>
    </ul>

    <p><strong>Stagiaire Comptable</strong> — Pages Jaunes</p>
  `,

  /* ===== ORANGE : CV SCOLAIRE ===== */
  orange1: `
    <p><strong>✦ Parcours académique</strong></p>

    <p><strong>Master Import-Export</strong><br>KEDGE Business School — Marseille</p>
    <p><strong>Bachelor International Business</strong><br>INSEEC Paris — Paris</p>
    <p><strong>BTS Commerce International</strong><br>Lycée Jean Lurçat — Paris</p>
    <p><strong>Licence de Gestion</strong><br>Université Paris 1 Panthéon-Sorbonne</p>
    <p><strong>DCG</strong><br>École Nationale de Commerce — Paris</p>
  `
};

/* ===========================
   OUVERTURE AU CLIC
=========================== */
buttons.forEach(button => {
  button.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    colorBox.style.background = button.dataset.color;

    const key = [...button.classList].find(c => contents[c]);
    contentBox.innerHTML = contents[key] || "";

    overlay.classList.add("active");
  });
});

/* ===========================
   FERMETURE OVERLAY
=========================== */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  buttons.forEach(b => b.classList.remove("active"));
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());
