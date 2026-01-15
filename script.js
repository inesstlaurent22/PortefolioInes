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

  /* ================= FR ================= */
  fr: {
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
en: {
  presentation: `
    <h2 class="title animate-title">Presentation</h2>

    <p>
      My name is Inès Saint Laurent, a freelance specialist in
      <strong>business development</strong>
      across local and international markets.
    </p>

    <p>
      With <strong>5 years of experience</strong> in
      <strong>international trade and marketing</strong>,
      I support companies – from startups to large organizations –
      through their key growth phases.
    </p>

    <p>
      I work on <strong>new product launches,
      expansion into new markets,
      and the development of commercial visibility and performance</strong>.
    </p>

    <p>
      <strong>Curious and versatile,</strong> I have also developed
      skills in <strong>community management</strong> and
      <strong>web development</strong>,
      enabling me to bring
      <strong>a global, strategic, and operational vision</strong>
      to the projects I support.
    </p>

    <button class="primary-btn" id="openEngagement">👉 My commitment</button>
  `,

  engagement: `
    <p>
      You benefit from personalized and demanding support,
      designed to structure, accelerate, and secure your development.
    </p>
    <p>
      <strong>✨ You have a vision. I help you turn it into controlled growth.</strong>
    </p>
  `,

  offre: `
    <h2 class="title animate-title">🤝 Strategic Support Process</h2>

    <div class="center-buttons">
      <button class="step-btn step-rose" data-step="1">01</button>
      <button class="step-btn step-rose" data-step="2">02</button>
      <button class="step-btn step-rose" data-step="3">03</button>
    </div>

    <div id="programmeBubble" class="bubble hidden center-text"></div>

    <div style="margin-top:40px">
      <p class="center-text"><strong>🗓️ Duration & Pace of Missions</strong></p>
      <p class="center-text">Engagements from 3 to 12 months depending on your ambitions</p>
      <p class="center-text"><strong>Day +15</strong>: strategic review and validation of the action plan</p>
      <p class="center-text"><strong>Monthly steering & continuous adjustments</strong></p>
    </div>
  `,

  /* ⬇️ OFFRESTEPS — TRANSLATED ⬇️ */
  offreSteps: {
    1: `
      <strong>Diagnosis & Vision</strong><br><br>
      <strong>A first confidential strategic meeting lays the foundations for your development.</strong><br><br>
      This step allows us to define:<br>
      <strong>Long-term</strong> vision<br>
      <strong>Target</strong> market<br>
      Business <strong>objectives</strong><br>
      <strong>Timeline and performance indicators</strong>
    `,
    2: `
      <strong>Market Intelligence & Strategy</strong><br>
      <em>(10 to 15 days after the diagnosis)</em><br><br>
      At the end of the analysis phase, I deliver:<br>
      <strong>In-depth market studies</strong><br>
      <strong>Competitive analysis and positioning</strong><br>
      <strong>Product recommendations & opportunities</strong><br>
      <strong>Budget projection and action plan</strong>
    `,
    3: `
      <strong>Deployment & Steering</strong><br><br>
      After validation, the mission begins with structured and progressive support.<br><br>
      A monthly follow-up is organized to:<br>
      <strong>Analyze results (KPIs & performance)</strong><br>
      <strong>Strategic adjustments</strong><br>
      <strong>Validate progress against defined objectives.</strong>
    `
  },

  experience: `
    <h2 class="title animate-title">💻 Professional Experience</h2>

    <div class="card-list">
      ${experienceCard(
        "Business Development Consultant",
        "Gearbooker",
        "Audiovisual & international",
        [
          "→ Supporting a Dutch company in its expansion into the French market",
          "→ Designing business development strategies",
          "→ B2B & B2C prospecting",
          "→ Performance analysis and steering meetings with partners"
        ]
      )}

      ${experienceCard(
        "Marketing & Sales Executive",
        "Pachamamaï",
        "Cosmetics & international markets",
        [
          "→ Sales prospecting and new product launches",
          "→ Market research (Portugal, Spain, Asia)",
          "→ Client follow-up and loyalty",
          "→ Participation in international trade shows"
        ]
      )}

      ${experienceCard(
        "CEO & Community Manager",
        "PUFFRAP",
        "Music media",
        [
          "→ Creation and development of the online magazine",
          "→ Management and growth of social media (Instagram & TikTok)",
          "→ SEO optimization and digital visibility",
          "→ Implementation of strategic partnerships"
        ]
      )}

      ${experienceCard(
        "CEO & Web Developer",
        "KIT IN",
        "Entrepreneurship & digital",
        [
          "→ Design and development of an online training program dedicated to business creation",
          "→ Educational project for young people aged 10 to 17",
          "→ Technical development in HTML, CSS, and JavaScript",
          "→ Global vision: product, pedagogy, business, and technology"
        ]
      )}

      ${experienceCard(
        "Accounting Intern",
        "Pages Jaunes",
        "Digital directories",
        [
          "→ Customer and supplier accounting",
          "→ Understanding financial flows",
          "→ Accuracy, organization, and analytical mindset"
        ]
      )}

      ${experienceCard(
        "Sales Associate & Brand Ambassador",
        "Galeries Lafayette – Le Paradis du Fruit – Le Perchoir",
        "Hospitality & Retail",
        [
          "→ Brand representation and enhancement",
          "→ Customer relations",
          "→ On-site experience"
        ]
      )}
    </div>
  `,

  tools: `
    <h2 class="title animate-title">🧠 Tools & Software</h2>

    <div class="card-list">
      ${toolCard("CRM", "Notion, HubSpot, Salesforce")}
      ${toolCard("Project Management", "Trello, Google Workspace")}
      ${toolCard("Analytics", "Google Analytics, Search Console, LinkedIn Navigator")}
      ${toolCard("Communication", "Mailchimp, Zapier, Make")}
      ${toolCard("Design", "Canva, Figma, CapCut, Photoshop")}
      ${toolCard("AI", "ChatGPT, Claude, MidJourney, Gemini")}
      ${toolCard("Web Development", "GitHub")}
      ${toolCard("Market Research", "TradeMap, Kompass, World Bank Data, Statista, Euromonitor")}
      ${toolCard("Microsoft", "Azure, Microsoft 365, Copilot")}
    </div>
  `,

  academic: `
    <h2 class="title animate-title">🎓 Academic Background</h2>

    <p><strong>Master’s Degree in Import–Export</strong><br>KEDGE Business School — Marseille</p>
    <p><strong>Bachelor in International Business</strong><br>INSEEC — Paris</p>
    <p><strong>BTS International Trade</strong><br>Lycée Jean Lurçat — Paris</p>
    <p><strong>Bachelor’s Degree in Management</strong><br>Paris 1 Panthéon-Sorbonne</p>
    <p><strong>Diploma in Accounting and Management</strong><br>École Nationale de Commerce — Paris</p>
  `,

  socials: `
    <h2 class="title animate-title">Social Media</h2>

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
es: {
  presentation: `
    <h2 class="title animate-title">Presentación</h2>

    <p>
      Me llamo Inès Saint Laurent, freelance especializada en
      <strong>el desarrollo de actividades comerciales</strong>
      en mercados locales e internacionales.
    </p>

    <p>
      Tras <strong>5 años de experiencia</strong> en
      <strong>comercio internacional y marketing</strong>,
      acompaño a las empresas – desde startups hasta grandes estructuras –
      en sus fases clave de crecimiento.
    </p>

    <p>
      Intervengo en <strong>el lanzamiento de nuevos productos,
      la implantación en nuevos mercados
      y el desarrollo de la visibilidad y el rendimiento comercial</strong>.
    </p>

    <p>
      <strong>Curiosa y polivalente,</strong> también he desarrollado
      competencias en <strong>community management</strong> y
      <strong>desarrollo web</strong>,
      lo que me permite aportar
      <strong>una visión global, estratégica y operativa</strong>
      a los proyectos que acompaño.
    </p>

    <button class="primary-btn" id="openEngagement">👉 Mi compromiso</button>
  `,

  engagement: `
    <p>
      Te beneficias de un acompañamiento personalizado y exigente,
      diseñado para estructurar, acelerar y asegurar tu desarrollo.
    </p>
    <p>
      <strong>✨ Tienes una visión. Te ayudo a transformarla en un crecimiento controlado.</strong>
    </p>
  `,

  offre: `
    <h2 class="title animate-title">🤝 Proceso de acompañamiento estratégico</h2>

    <div class="center-buttons">
      <button class="step-btn step-rose" data-step="1">01</button>
      <button class="step-btn step-rose" data-step="2">02</button>
      <button class="step-btn step-rose" data-step="3">03</button>
    </div>

    <div id="programmeBubble" class="bubble hidden center-text"></div>

    <div style="margin-top:40px">
      <p class="center-text"><strong>🗓️ Duración y ritmo de las misiones</strong></p>
      <p class="center-text">Acompañamientos de 3 a 12 meses según tus objetivos</p>
      <p class="center-text"><strong>Día +15</strong>: restitución estratégica y validación del plan de acción</p>
      <p class="center-text"><strong>Seguimiento mensual y ajustes continuos</strong></p>
    </div>
  `,

  /* ⬇️ OFFRESTEPS — TRADUCIDOS ⬇️ */
  offreSteps: {
    1: `
      <strong>Diagnóstico y Visión</strong><br><br>
      <strong>Una primera reunión estratégica y confidencial permite sentar las bases de tu desarrollo.</strong><br><br>
      Esta etapa permite definir:<br>
      Visión a <strong>largo plazo</strong><br>
      Mercado <strong>objetivo</strong><br>
      <strong>Objetivos</strong> de negocio<br>
      <strong>Plazos e indicadores de rendimiento</strong>
    `,
    2: `
      <strong>Inteligencia de mercado y Estrategia</strong><br>
      <em>(10 a 15 días después del diagnóstico)</em><br><br>
      Al finalizar la fase de análisis, entrego:<br>
      <strong>Estudios de mercado en profundidad</strong><br>
      <strong>Análisis competitivo y posicionamiento</strong><br>
      <strong>Recomendaciones de producto y oportunidades</strong><br>
      <strong>Proyección presupuestaria y plan de acción</strong>
    `,
    3: `
      <strong>Despliegue y Seguimiento</strong><br><br>
      Tras la validación, la misión comienza con un acompañamiento estructurado y progresivo.<br><br>
      Se organiza un seguimiento mensual para:<br>
      <strong>Analizar los resultados (KPI y rendimiento)</strong><br>
      <strong>Ajustes estratégicos</strong><br>
      <strong>Validar la evolución respecto a los objetivos establecidos.</strong>
    `
  },

  experience: `
    <h2 class="title animate-title">💻 Trayectoria profesional</h2>

    <div class="card-list">
      ${experienceCard(
        "Consultora en desarrollo de negocio",
        "Gearbooker",
        "Audiovisual e internacional",
        [
          "→ Acompañamiento de una empresa neerlandesa en su implantación en el mercado francés",
          "→ Elaboración de estrategias de desarrollo comercial",
          "→ Prospección B2B y B2C",
          "→ Análisis de resultados y reuniones de seguimiento con socios"
        ]
      )}

      ${experienceCard(
        "Comercial de Marketing",
        "Pachamamaï",
        "Cosmética y mercados internacionales",
        [
          "→ Prospección comercial y lanzamiento de nuevos productos",
          "→ Estudios de mercado (Portugal, España, Asia)",
          "→ Seguimiento y fidelización de clientes",
          "→ Participación en ferias internacionales"
        ]
      )}

      ${experienceCard(
        "CEO & Community Manager",
        "PUFFRAP",
        "Medio musical",
        [
          "→ Creación y desarrollo de la revista digital",
          "→ Gestión y crecimiento de redes sociales (Instagram y TikTok)",
          "→ Optimización SEO y visibilidad digital",
          "→ Desarrollo de alianzas estratégicas"
        ]
      )}

      ${experienceCard(
        "CEO & Desarrolladora Web",
        "KIT IN",
        "Emprendimiento y digital",
        [
          "→ Diseño y desarrollo de una formación online dedicada a la creación de empresas",
          "→ Proyecto educativo dirigido a jóvenes de 10 a 17 años",
          "→ Desarrollo técnico en HTML, CSS y JavaScript",
          "→ Visión global: producto, pedagogía, negocio y tecnología"
        ]
      )}

      ${experienceCard(
        "Practicante de Contabilidad",
        "Pages Jaunes",
        "Directorios digitales",
        [
          "→ Contabilidad de clientes y proveedores",
          "→ Comprensión de los flujos financieros",
          "→ Rigor, organización y visión analítica"
        ]
      )}

      ${experienceCard(
        "Vendedora y Embajadora de Marca",
        "Galeries Lafayette – Le Paradis du Fruit – Le Perchoir",
        "Restauración y Retail",
        [
          "→ Representación y valorización de la imagen de marca",
          "→ Atención al cliente",
          "→ Experiencia en terreno"
        ]
      )}
    </div>
  `,

  tools: `
    <h2 class="title animate-title">🧠 Herramientas y Software</h2>

    <div class="card-list">
      ${toolCard("CRM", "Notion, HubSpot, Salesforce")}
      ${toolCard("Gestión de proyectos", "Trello, Google Workspace")}
      ${toolCard("Análisis", "Google Analytics, Search Console, LinkedIn Navigator")}
      ${toolCard("Comunicación", "Mailchimp, Zapier, Make")}
      ${toolCard("Diseño", "Canva, Figma, CapCut, Photoshop")}
      ${toolCard("IA", "ChatGPT, Claude, MidJourney, Gemini")}
      ${toolCard("Desarrollo Web", "GitHub")}
      ${toolCard("Estudio de mercado", "TradeMap, Kompass, World Bank Data, Statista, Euromonitor")}
      ${toolCard("Microsoft", "Azure, Microsoft 365, Copilot")}
    </div>
  `,

  academic: `
    <h2 class="title animate-title">🎓 Formación académica</h2>

    <p><strong>Máster en Importación y Exportación</strong><br>KEDGE Business School — Marsella</p>
    <p><strong>Grado en Negocios Internacionales</strong><br>INSEEC — París</p>
    <p><strong>BTS Comercio Internacional</strong><br>Lycée Jean Lurçat — París</p>
    <p><strong>Licenciatura en Gestión</strong><br>Paris 1 Panthéon-Sorbonne</p>
    <p><strong>Diploma en Contabilidad y Gestión</strong><br>École Nationale de Commerce — París</p>
  `,

  socials: `
    <h2 class="title animate-title">Redes sociales</h2>

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
},
zh: {
  presentation: `
    <h2 class="title animate-title">个人介绍</h2>

    <p>
      我叫 Inès Saint Laurent，是一名专注于
      <strong>商业活动发展</strong>
      的自由职业顾问，服务于本地及国际市场。
    </p>

    <p>
      拥有 <strong>5 年</strong>
      <strong>国际贸易与市场营销</strong> 经验，
      我协助企业——从初创公司到大型企业——
      在其关键增长阶段实现发展。
    </p>

    <p>
      我的工作涵盖
      <strong>新产品发布、
      新市场拓展，
      以及商业可见度与业绩表现的提升</strong>。
    </p>

    <p>
      <strong>富有好奇心且多才多艺，</strong>
      我还具备
      <strong>社群管理</strong> 与
      <strong>网页开发</strong> 能力，
      能够为所参与的项目提供
      <strong>全面、战略性与执行层面的整体视角</strong>。
    </p>

    <button class="primary-btn" id="openEngagement">👉 我的承诺</button>
  `,

  engagement: `
    <p>
      您将获得严谨且个性化的陪伴式支持，
      旨在系统化、加速并保障您的业务发展。
    </p>
    <p>
      <strong>✨ 您有愿景，我帮助您将其转化为可控且可持续的增长。</strong>
    </p>
  `,

  offre: `
    <h2 class="title animate-title">🤝 战略陪伴流程</h2>

    <div class="center-buttons">
      <button class="step-btn step-rose" data-step="1">01</button>
      <button class="step-btn step-rose" data-step="2">02</button>
      <button class="step-btn step-rose" data-step="3">03</button>
    </div>

    <div id="programmeBubble" class="bubble hidden center-text"></div>

    <div style="margin-top:40px">
      <p class="center-text"><strong>🗓️ 项目周期与节奏</strong></p>
      <p class="center-text">根据您的目标，陪伴周期为 3 至 12 个月</p>
      <p class="center-text"><strong>第 15 天</strong>：战略总结与行动计划确认</p>
      <p class="center-text"><strong>每月管理与持续优化</strong></p>
    </div>
  `,

  offreSteps: {
    1: `
      <strong>诊断与愿景</strong><br><br>
      <strong>首次保密的战略会议将为您的发展奠定基础。</strong><br><br>
      此阶段用于明确：<br>
      <strong>长期</strong>愿景<br>
      <strong>目标</strong>市场<br>
      商业<strong>目标</strong><br>
      <strong>时间规划与绩效指标</strong>
    `,
    2: `
      <strong>市场洞察与战略</strong><br>
      <em>（诊断后 10 至 15 天）</em><br><br>
      在分析阶段结束后，您将获得：<br>
      <strong>深入的市场研究</strong><br>
      <strong>竞争分析与市场定位</strong><br>
      <strong>产品建议与发展机会</strong><br>
      <strong>预算预测与行动计划</strong>
    `,
    3: `
      <strong>执行与管理</strong><br><br>
      在确认后，项目将正式启动，并提供结构化、循序渐进的陪伴支持。<br><br>
      每月将进行一次跟进，以便：<br>
      <strong>分析结果（KPI 与绩效）</strong><br>
      <strong>战略调整</strong><br>
      <strong>验证目标达成情况。</strong>
    `
  },

  experience: `
    <h2 class="title animate-title">💻 职业经历</h2>

    <div class="card-list">
      ${experienceCard(
        "商业发展顾问",
        "Gearbooker",
        "视听行业与国际市场",
        [
          "→ 协助一家荷兰公司进入法国市场",
          "→ 制定商业发展战略",
          "→ B2B 与 B2C 客户开发",
          "→ 绩效分析及与合伙人的管理会议"
        ]
      )}

      ${experienceCard(
        "市场与销售专员",
        "Pachamamaï",
        "化妆品与国际市场",
        [
          "→ 商业拓展与新产品上市",
          "→ 市场调研（葡萄牙、西班牙、亚洲）",
          "→ 客户跟进与客户忠诚度管理",
          "→ 参加国际展会"
        ]
      )}

      ${experienceCard(
        "CEO & 社群经理",
        "PUFFRAP",
        "音乐媒体",
        [
          "→ 创建并发展线上音乐媒体",
          "→ 管理并增长社交媒体（Instagram 与 TikTok）",
          "→ SEO 优化与数字曝光提升",
          "→ 建立战略合作伙伴关系"
        ]
      )}

      ${experienceCard(
        "CEO & 网页开发者",
        "KIT IN",
        "创业与数字化",
        [
          "→ 设计并开发企业创建相关的在线培训项目",
          "→ 面向 10 至 17 岁青少年的教育项目",
          "→ HTML、CSS 与 JavaScript 技术开发",
          "→ 全局视角：产品、教学、商业与技术"
        ]
      )}

      ${experienceCard(
        "会计实习生",
        "Pages Jaunes",
        "数字目录",
        [
          "→ 客户与供应商会计",
          "→ 理解财务流动",
          "→ 严谨性、组织能力与分析思维"
        ]
      )}

      ${experienceCard(
        "销售员与品牌大使",
        "老佛爷百货 – Le Paradis du Fruit – Le Perchoir",
        "餐饮与零售",
        [
          "→ 品牌形象的展示与提升",
          "→ 客户关系管理",
          "→ 一线实务经验"
        ]
      )}
    </div>
  `,

  tools: `
    <h2 class="title animate-title">🧠 软件与工具</h2>

    <div class="card-list">
      ${toolCard("CRM", "Notion, HubSpot, Salesforce")}
      ${toolCard("项目管理", "Trello, Google Workspace")}
      ${toolCard("数据分析", "Google Analytics, Search Console, LinkedIn Navigator")}
      ${toolCard("沟通工具", "Mailchimp, Zapier, Make")}
      ${toolCard("设计", "Canva, Figma, CapCut, Photoshop")}
      ${toolCard("人工智能", "ChatGPT, Claude, MidJourney, Gemini")}
      ${toolCard("网页开发", "GitHub")}
      ${toolCard("市场调研", "TradeMap, Kompass, World Bank Data, Statista, Euromonitor")}
      ${toolCard("Microsoft", "Azure, Microsoft 365, Copilot")}
    </div>
  `,

  academic: `
    <h2 class="title animate-title">🎓 学术背景</h2>

    <p><strong>进出口硕士</strong><br>KEDGE 商学院 — 马赛</p>
    <p><strong>国际商务学士</strong><br>INSEEC — 巴黎</p>
    <p><strong>国际贸易 BTS</strong><br>Jean Lurçat 高中 — 巴黎</p>
    <p><strong>管理学学士</strong><br>巴黎第一大学（先贤祠-索邦）</p>
    <p><strong>会计与管理文凭</strong><br>国家商业学院 — 巴黎</p>
  `,

  socials: `
    <h2 class="title animate-title">社交网络</h2>

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
},

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
