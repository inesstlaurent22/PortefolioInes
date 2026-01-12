/* =====================================================
   DEBUG – CONFIRMATION CHARGEMENT
===================================================== */
console.log("SCRIPT JS CHARGÉ");

/* =====================================================
   LANGUE
===================================================== */
let currentLang = "fr";

/* =====================================================
   TEXTES COMPLETS
===================================================== */
const translations = {
  fr: {
    presentation: {
      title: "Présentation",
      text: `
        <p><strong>
          Je m’appelle Inès Saint Laurent, freelance spécialisée dans le développement
          d’activités commerciales, aussi bien sur les marchés locaux qu’internationaux.
        </strong></p>

        <p><strong>
          Forte de plus de cinq années d’expérience en commerce international et marketing,
          j’accompagne les entreprises — de la startup à la grande structure —
          dans leurs phases clés de structuration, de croissance et de positionnement.
        </strong></p>

        <p><strong>
          J’interviens sur des missions stratégiques telles que le lancement de nouveaux produits,
          l’implantation sur de nouveaux marchés, la structuration d’offres,
          ainsi que le développement de la visibilité et des performances commerciales.
        </strong></p>

        <p><strong>
          Mon approche est humaine, stratégique et orientée résultats,
          avec une vision globale mêlant business, marketing et digital.
        </strong></p>
      `
    },

    programme: {
      title: "Processus d’accompagnement stratégique",
      steps: {
        1: `
          <p><strong>01 — Diagnostic & Vision</strong></p>
          <ul>
            <li>Analyse approfondie de votre activité et de votre vision</li>
            <li>Définition des objectifs business prioritaires</li>
            <li>Identification du marché ou pays cible</li>
            <li>Clarification du positionnement stratégique</li>
          </ul>
        `,
        2: `
          <p><strong>02 — Intelligence marché & Stratégie sur mesure</strong></p>
          <ul>
            <li>Études de marché détaillées</li>
            <li>Analyse concurrentielle et opportunités</li>
            <li>Recommandations produits et offres</li>
            <li>Construction de la stratégie commerciale et marketing</li>
            <li>Projection budgétaire et plan d’action</li>
          </ul>
        `,
        3: `
          <p><strong>03 — Déploiement & Pilotage stratégique</strong></p>
          <ul>
            <li>Mise en œuvre de la stratégie définie</li>
            <li>Réunions de pilotage régulières</li>
            <li>Analyse des performances et KPI</li>
            <li>Ajustements stratégiques continus</li>
            <li>Suivi des priorités et des actions</li>
          </ul>
        `
      }
    },

    academic: {
      title: "✦ Parcours académique",
      text: `
        <p><strong>Master Import-Export</strong><br>KEDGE Business School — Marseille</p>
        <p><strong>Bachelor International Business</strong><br>INSEEC Paris Business School — Paris</p>
        <p><strong>BTS Commerce International</strong><br>Lycée Jean Lurçat — Paris</p>
        <p><strong>Licence de Gestion</strong><br>Université Paris 1 Panthéon-Sorbonne</p>
        <p><strong>Diplôme de Comptabilité et de Gestion (DCG)</strong><br>École Nationale de Commerce — Paris</p>
      `
    }
  },

  en: {
    presentation: {
      title: "Presentation",
      text: `
        <p><strong>
          My name is Inès Saint Laurent, a freelance consultant specialized in business
          development for both local and international markets.
        </strong></p>

        <p><strong>
          With over five years of experience in international trade and marketing,
          I support companies — from startups to large organizations —
          during key phases of growth, structuring, and strategic positioning.
        </strong></p>

        <p><strong>
          I work on missions such as product launches, international market expansion,
          offer structuring, and the development of brand visibility and commercial performance.
        </strong></p>

        <p><strong>
          My approach is human-centered, strategic, and results-oriented,
          combining business, marketing, and digital expertise.
        </strong></p>
      `
    },

    programme: {
      title: "Strategic Support Process",
      steps: {
        1: `
          <p><strong>01 — Diagnosis & Vision</strong></p>
          <ul>
            <li>In-depth analysis of your activity and vision</li>
            <li>Definition of key business objectives</li>
            <li>Identification of target markets or countries</li>
            <li>Clarification of strategic positioning</li>
          </ul>
        `,
        2: `
          <p><strong>02 — Market Intelligence & Custom Strategy</strong></p>
          <ul>
            <li>Detailed market research</li>
            <li>Competitive analysis and opportunities</li>
            <li>Product and offer recommendations</li>
            <li>Commercial and marketing strategy development</li>
            <li>Budget projection and action plan</li>
          </ul>
        `,
        3: `
          <p><strong>03 — Deployment & Strategic Monitoring</strong></p>
          <ul>
            <li>Implementation of the defined strategy</li>
            <li>Regular steering meetings</li>
            <li>Performance and KPI analysis</li>
            <li>Continuous strategic adjustments</li>
            <li>Monitoring of priorities and actions</li>
          </ul>
        `
      }
    },

    academic: {
      title: "✦ Academic Background",
      text: `
        <p><strong>Master’s Degree in Import-Export</strong><br>KEDGE Business School — Marseille</p>
        <p><strong>Bachelor in International Business</strong><br>INSEEC Paris Business School — Paris</p>
        <p><strong>International Trade Diploma</strong><br>Lycée Jean Lurçat — Paris</p>
        <p><strong>Bachelor’s Degree in Management</strong><br>Paris 1 Panthéon-Sorbonne University</p>
        <p><strong>Accounting & Management Diploma (DCG)</strong><br>National School of Commerce — Paris</p>
      `
    }
  }
};

/* =====================================================
   SÉLECTION DES ÉLÉMENTS
===================================================== */
const buttons = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* =====================================================
   GÉNÉRATION CONTENU
===================================================== */
function getContents() {
  const t = translations[currentLang];

  return {
    bleu1: `
      <h2 class="presentation-title animated-title">${t.presentation.title}</h2>
      <div class="centered-text">${t.presentation.text}</div>
    `,

    rose1: `
      <h2 class="programme-title animated-title">${t.programme.title}</h2>

      <div class="programme-buttons">
        <button class="step-btn" data-step="1">01</button>
        <button class="step-btn" data-step="2">02</button>
        <button class="step-btn" data-step="3">03</button>
      </div>

      <div id="programmeResult" class="programme-result"></div>
    `,

    orange1: `
      <h2 class="scolaire-title animated-title">${t.academic.title}</h2>
      <div class="centered-text">${t.academic.text}</div>
    `,

    jaune1: `
      <div class="socials-card">
        <a href="#"><img src="images/Instagram.PNG" alt="Instagram"></a>
        <a href="#"><img src="images/Linkedin.PNG" alt="LinkedIn"></a>
        <a href="#"><img src="images/Mail.PNG" alt="Email"></a>
      </div>
    `
  };
}

/* =====================================================
   OUVERTURE DES BLOCS (GARANTIE)
===================================================== */
buttons.forEach(button => {
  button.addEventListener("click", e => {
    e.stopPropagation();

    const key = [...button.classList].find(c => getContents()[c]);
    if (!key) return;

    contentBox.innerHTML = getContents()[key];
    colorBox.style.background = button.dataset.color || "#111";

    overlay.classList.add("active");
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
  });
});

/* =====================================================
   INTERACTIONS PROGRAMME
===================================================== */
contentBox.addEventListener("click", e => {
  if (e.target.classList.contains("step-btn")) {
    const step = e.target.dataset.step;
    const result = document.getElementById("programmeResult");
    result.innerHTML = translations[currentLang].programme.steps[step];
    result.classList.add("active");
  }
});

/* =====================================================
   FERMETURE
===================================================== */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());

/* =====================================================
   SWITCH LANGUE
===================================================== */
const langBtn = document.createElement("button");
langBtn.className = "lang-switch";
langBtn.textContent = "EN";
document.body.appendChild(langBtn);

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  langBtn.textContent = currentLang === "fr" ? "EN" : "FR";

  if (overlay.classList.contains("active")) {
    contentBox.innerHTML = "";
  }
});
