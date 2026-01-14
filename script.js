console.log("SCRIPT JS – PORTFOLIO MULTILINGUE GLOBAL");

/* ================= LANGUES ================= */
const LANGS = ["fr", "en", "es", "zh"];
let langIndex = 0;
let currentLang = LANGS[langIndex];

const langBtn = document.getElementById("lang-switch");

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= TEXTES MULTILINGUES ================= */
const T = {

  /* =====================================================
     🇫🇷 FRANÇAIS
  ===================================================== */
  fr: {

    presentation: `
      <h2 class="title animate-title">Présentation</h2>

      <p>
        Je m’appelle Inès Saint Laurent, freelance spécialisée dans le développement
        d’activités commerciales, aussi bien sur les marchés locaux qu’internationaux.
      </p>

      <p>
        Forte de 5 années d’expérience en commerce international et marketing,
        j’accompagne les entreprises — de la startup à la grande structure —
        dans leurs phases clés de croissance.
      </p>

      <p>
        J’interviens sur des missions stratégiques telles que le lancement de nouveaux produits,
        l’implantation sur de nouveaux marchés, ainsi que le développement de la visibilité
        et des performances commerciales des marques, notamment via les réseaux sociaux.
      </p>

      <p>
        Mon expertise s’appuie sur une connaissance approfondie des marchés français,
        européens et asiatiques, et sur des collaborations dans des secteurs variés
        tels que le cosmétique, l’alimentation, la musique et l’audiovisuel.
      </p>

      <p>
        Curieuse et polyvalente, j’ai également développé des compétences en community management
        et en développement web, me permettant d’avoir une vision globale, stratégique
        et opérationnelle des projets que j’accompagne.
      </p>

      <button class="primary-btn" id="openEngagement">👉 Mon engagement</button>
    `,

    engagement: `
      <p>
        Vous bénéficiez d’un accompagnement personnalisé, discret et exigeant,
        pensé pour structurer, accélérer et sécuriser votre développement
        sur des marchés à fort potentiel.
      </p>
      <p>
        ✨ Vous avez une vision. Je vous aide à la transformer en croissance maîtrisée.
      </p>
    `,

    offre: `
      <h2 class="title animate-title">🤝 Processus d’accompagnement stratégique</h2>

      <div class="center-buttons">
        <button class="step-btn step-rose" data-step="1">01</button>
        <button class="step-btn step-rose" data-step="2">02</button>
        <button class="step-btn step-rose" data-step="3">03</button>
      </div>

      <div id="programmeBubble" class="bubble hidden"></div>

      <p><strong>🗓️ Durée & rythme des missions</strong></p>
      <p>Formats de 3, 6 ou 12 mois selon vos ambitions.</p>
      <ul>
        <li>J +15 : restitution stratégique et validation du plan d’action</li>
        <li>Chaque mois : comité de pilotage et ajustements</li>
      </ul>
    `,

    offreSteps: {
      1: `
        <strong>Diagnostic & Vision</strong>
        <ul>
          <li>Vision long terme</li>
          <li>Marché cible</li>
          <li>Objectifs business</li>
          <li>KPI</li>
        </ul>
      `,
      2: `
        <strong>Intelligence marché & stratégie</strong>
        <ul>
          <li>Études de marché</li>
          <li>Analyse concurrentielle</li>
          <li>Positionnement</li>
          <li>Plan d’action</li>
        </ul>
      `,
      3: `
        <strong>Déploiement & pilotage</strong>
        <ul>
          <li>Suivi KPI</li>
          <li>Ajustements continus</li>
          <li>Réunions mensuelles</li>
          <li>Croissance durable</li>
        </ul>
      `
    },

    experience: `
      <h2 class="title animate-title">💻 Parcours professionnel</h2>

      <div class="card-list">

        <button class="card-btn">
          Consultante en développement d’activité<br>
          <strong>Gearbooker</strong><br>
          <small><em>Audiovisuel & international</em></small>
          <div class="bubble hidden bubble-violet">
            • Stratégie d’implantation France<br>
            • Prospection BtoB / BtoC<br>
            • Pilotage de la performance
          </div>
        </button>

        <button class="card-btn">
          CEO & Community Manager<br>
          <strong>PUFFRAP</strong><br>
          <small><em>Média musical</em></small>
          <div class="bubble hidden bubble-violet">
            • Création de média<br>
            • Gestion Instagram & TikTok<br>
            • SEO & partenariats
          </div>
        </button>

        <button class="card-btn">
          CEO & Développeuse Web<br>
          <strong>KIT IN</strong><br>
          <small><em>Entrepreneuriat & digital</em></small>
          <div class="bubble hidden bubble-violet">
            • Plateforme éducative<br>
            • HTML / CSS / JS<br>
            • Vision produit
          </div>
        </button>

      </div>
    `,

    academic: `
      <h2 class="title animate-title">🎓 Parcours académique</h2>

      <p><strong>Master Import-Export</strong><br>KEDGE Business School — Marseille</p><br>
      <p><strong>Bachelor International Business</strong><br>INSEEC Paris</p><br>
      <p><strong>BTS Commerce International</strong><br>Lycée Jean Lurçat — Paris</p><br>
      <p><strong>Licence de Gestion</strong><br>Université Paris 1 Panthéon-Sorbonne</p><br>
      <p><strong>Diplôme de Comptabilité et de Gestion (DCG)</strong><br>
      École Nationale de Commerce — Paris</p>
    `,

    tools: `
      <h2 class="title animate-title">🧠 Logiciels</h2>

      <div class="card-list">
        <button class="card-btn"><strong>CRM</strong>
          <div class="bubble hidden bubble-violet2">Notion, HubSpot, Salesforce</div>
        </button>

        <button class="card-btn"><strong>Gestion de projet</strong>
          <div class="bubble hidden bubble-violet2">Trello, Google Workspace</div>
        </button>

        <button class="card-btn"><strong>Analyse</strong>
          <div class="bubble hidden bubble-violet2">
            Google Analytics, Search Console, LinkedIn Sales Navigator
          </div>
        </button>

        <button class="card-btn"><strong>IA</strong>
          <div class="bubble hidden bubble-violet2">
            ChatGPT, Claude, MidJourney, Gemini
          </div>
        </button>
      </div>
    `,

    socials: `
      <h2 class="title animate-title">Réseaux sociaux</h2>
      <div class="socials">
        <a href="https://www.instagram.com" target="_blank">
          <img src="images/Instagram.png" alt="Instagram">
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <img src="images/LinkedIn.png" alt="LinkedIn">
        </a>
        <a href="mailto:contact@kit-in.fr">
          <img src="images/Mail.png" alt="Email">
        </a>
      </div>
    `
  },

  /* =====================================================
     🇬🇧 ENGLISH
  ===================================================== */
  en: {
    presentation: `
      <h2 class="title animate-title">Presentation</h2>

      <p>
        My name is Inès Saint Laurent, a freelance business development consultant
        working with both local and international markets.
      </p>

      <p>
        With 5 years of experience in international trade and marketing,
        I support companies — from startups to large organizations —
        through their key growth phases.
      </p>

      <p>
        I work on strategic missions such as product launches, market expansion,
        and improving brand visibility and commercial performance,
        especially through social media.
      </p>

      <p>
        My expertise is based on in-depth knowledge of European and Asian markets,
        and collaborations in cosmetics, food, music and audiovisual industries.
      </p>

      <p>
        Curious and versatile, I also developed skills in community management
        and web development, allowing a global and operational vision.
      </p>

      <button class="primary-btn" id="openEngagement">👉 My commitment</button>
    `,

    engagement: `
      <p>
        You benefit from a personalized, discreet and demanding support,
        designed to structure, accelerate and secure your growth
        in high-potential markets.
      </p>
      <p>
        ✨ You have a vision. I help you turn it into controlled growth.
      </p>
    `,

    offre: `
      <h2 class="title animate-title">🤝 Strategic support process</h2>

      <div class="center-buttons">
        <button class="step-btn step-rose" data-step="1">01</button>
        <button class="step-btn step-rose" data-step="2">02</button>
        <button class="step-btn step-rose" data-step="3">03</button>
      </div>

      <div id="programmeBubble" class="bubble hidden"></div>

      <p><strong>🗓️ Duration & rhythm</strong></p>
      <p>3, 6 or 12 months depending on your ambitions.</p>
      <ul>
        <li>D+15: strategic restitution</li>
        <li>Monthly steering committee</li>
      </ul>
    `,

    offreSteps: {
      1: `
        <strong>Diagnosis & Vision</strong>
        <ul>
          <li>Long-term vision</li>
          <li>Target market</li>
          <li>Business goals</li>
          <li>KPI</li>
        </ul>
      `,
      2: `
        <strong>Market intelligence & strategy</strong>
        <ul>
          <li>Market studies</li>
          <li>Competitive analysis</li>
          <li>Positioning</li>
          <li>Action plan</li>
        </ul>
      `,
      3: `
        <strong>Deployment & monitoring</strong>
        <ul>
          <li>KPI tracking</li>
          <li>Adjustments</li>
          <li>Monthly meetings</li>
          <li>Sustainable growth</li>
        </ul>
      `
    },

    experience: `
      <h2 class="title animate-title">💻 Professional experience</h2>

      <div class="card-list">

        <button class="card-btn">
          Business development consultant<br>
          <strong>Gearbooker</strong><br>
          <small><em>Audiovisual & international</em></small>
          <div class="bubble hidden bubble-violet">
            • Market entry strategy<br>
            • B2B / B2C prospecting<br>
            • Performance monitoring
          </div>
        </button>

        <button class="card-btn">
          CEO & Community Manager<br>
          <strong>PUFFRAP</strong><br>
          <small><em>Music media</em></small>
          <div class="bubble hidden bubble-violet">
            • Media creation<br>
            • Instagram & TikTok management<br>
            • SEO & partnerships
          </div>
        </button>

        <button class="card-btn">
          CEO & Web Developer<br>
          <strong>KIT IN</strong><br>
          <small><em>Entrepreneurship & digital</em></small>
          <div class="bubble hidden bubble-violet">
            • Educational platform<br>
            • HTML / CSS / JS<br>
            • Product vision
          </div>
        </button>

      </div>
    `,

    academic: `
      <h2 class="title animate-title">🎓 Academic background</h2>

      <p><strong>Master in Import-Export</strong><br>KEDGE Business School — Marseille</p><br>
      <p><strong>Bachelor in International Business</strong><br>INSEEC Paris</p><br>
      <p><strong>BTS International Trade</strong><br>Lycée Jean Lurçat — Paris</p><br>
      <p><strong>Bachelor in Management</strong><br>Paris 1 Panthéon-Sorbonne</p><br>
      <p><strong>DCG</strong><br>National School of Commerce — Paris</p>
    `,

    tools: `
      <h2 class="title animate-title">🧠 Tools & Software</h2>

      <div class="card-list">
        <button class="card-btn"><strong>CRM</strong>
          <div class="bubble hidden bubble-violet2">Notion, HubSpot, Salesforce</div>
        </button>
        <button class="card-btn"><strong>Project management</strong>
          <div class="bubble hidden bubble-violet2">Trello, Google Workspace</div>
        </button>
        <button class="card-btn"><strong>Analytics</strong>
          <div class="bubble hidden bubble-violet2">Google Analytics, Search Console</div>
        </button>
        <button class="card-btn"><strong>AI</strong>
          <div class="bubble hidden bubble-violet2">ChatGPT, Claude, MidJourney</div>
        </button>
      </div>
    `,

    socials: `
      <h2 class="title animate-title">Social networks</h2>
      <div class="socials">
        <a href="https://www.instagram.com" target="_blank"><img src="images/Instagram.png"></a>
        <a href="https://www.linkedin.com" target="_blank"><img src="images/LinkedIn.png"></a>
        <a href="mailto:contact@kit-in.fr"><img src="images/Mail.png"></a>
      </div>
    `
  },

  /* =====================================================
     🇪🇸 ESPAÑOL
  ===================================================== */
  es: {
    presentation: `
      <h2 class="title animate-title">Presentación</h2>

      <p>
        Me llamo Inès Saint Laurent, consultora freelance especializada
        en el desarrollo de actividades comerciales en mercados locales e internacionales.
      </p>

      <p>
        Con 5 años de experiencia en comercio internacional y marketing,
        acompaño a empresas — desde startups hasta grandes estructuras —
        en sus fases clave de crecimiento.
      </p>

      <p>
        Trabajo en misiones estratégicas como lanzamientos de productos,
        expansión a nuevos mercados y mejora de la visibilidad y el rendimiento comercial,
        especialmente a través de redes sociales.
      </p>

      <p>
        Mi experiencia se basa en un profundo conocimiento de los mercados europeos y asiáticos,
        y colaboraciones en sectores como cosmética, alimentación, música y audiovisual.
      </p>

      <p>
        Curiosa y polivalente, también he desarrollado competencias en community management
        y desarrollo web, lo que me permite una visión global y operativa.
      </p>

      <button class="primary-btn" id="openEngagement">👉 Mi compromiso</button>
    `,

    engagement: `
      <p>
        Te beneficias de un acompañamiento personalizado, discreto y exigente,
        diseñado para estructurar, acelerar y asegurar tu crecimiento
        en mercados con alto potencial.
      </p>
      <p>
        ✨ Tienes una visión. Te ayudo a transformarla en crecimiento controlado.
      </p>
    `,

    offre: `
      <h2 class="title animate-title">🤝 Proceso de acompañamiento estratégico</h2>

      <div class="center-buttons">
        <button class="step-btn step-rose" data-step="1">01</button>
        <button class="step-btn step-rose" data-step="2">02</button>
        <button class="step-btn step-rose" data-step="3">03</button>
      </div>

      <div id="programmeBubble" class="bubble hidden"></div>

      <p><strong>🗓️ Duración y ritmo</strong></p>
      <p>3, 6 o 12 meses según tus objetivos.</p>
      <ul>
        <li>Día +15: restitución estratégica</li>
        <li>Seguimiento mensual</li>
      </ul>
    `,

    offreSteps: {
      1: `
        <strong>Diagnóstico y visión</strong>
        <ul>
          <li>Visión a largo plazo</li>
          <li>Mercado objetivo</li>
          <li>Objetivos comerciales</li>
          <li>KPI</li>
        </ul>
      `,
      2: `
        <strong>Inteligencia de mercado y estrategia</strong>
        <ul>
          <li>Estudios de mercado</li>
          <li>Análisis competitivo</li>
          <li>Posicionamiento</li>
          <li>Plan de acción</li>
        </ul>
      `,
      3: `
        <strong>Despliegue y seguimiento</strong>
        <ul>
          <li>Seguimiento KPI</li>
          <li>Ajustes continuos</li>
          <li>Reuniones mensuales</li>
          <li>Crecimiento sostenible</li>
        </ul>
      `
    },

    experience: `
      <h2 class="title animate-title">💻 Experiencia profesional</h2>

      <div class="card-list">

        <button class="card-btn">
          Consultora de desarrollo de negocio<br>
          <strong>Gearbooker</strong><br>
          <small><em>Audiovisual e internacional</em></small>
          <div class="bubble hidden bubble-violet">
            • Estrategia de implantación<br>
            • Prospección B2B / B2C<br>
            • Seguimiento del rendimiento
          </div>
        </button>

        <button class="card-btn">
          CEO y Community Manager<br>
          <strong>PUFFRAP</strong><br>
          <small><em>Medio musical</em></small>
          <div class="bubble hidden bubble-violet">
            • Creación de medio digital<br>
            • Gestión de redes sociales<br>
            • SEO y colaboraciones
          </div>
        </button>

        <button class="card-btn">
          CEO y Desarrolladora Web<br>
          <strong>KIT IN</strong><br>
          <small><em>Emprendimiento y digital</em></small>
          <div class="bubble hidden bubble-violet">
            • Plataforma educativa<br>
            • HTML / CSS / JS<br>
            • Visión producto
          </div>
        </button>

      </div>
    `,

    academic: `
      <h2 class="title animate-title">🎓 Formación académica</h2>

      <p><strong>Máster en Import-Exportación</strong><br>KEDGE Business School — Marsella</p><br>
      <p><strong>Grado en Negocios Internacionales</strong><br>INSEEC París</p><br>
      <p><strong>BTS Comercio Internacional</strong><br>Liceo Jean Lurçat — París</p><br>
      <p><strong>Licenciatura en Gestión</strong><br>Universidad Paris 1</p><br>
      <p><strong>DCG</strong><br>Escuela Nacional de Comercio — París</p>
    `,

    tools: `
      <h2 class="title animate-title">🧠 Software y herramientas</h2>

      <div class="card-list">
        <button class="card-btn"><strong>CRM</strong>
          <div class="bubble hidden bubble-violet2">Notion, HubSpot, Salesforce</div>
        </button>
        <button class="card-btn"><strong>Gestión de proyectos</strong>
          <div class="bubble hidden bubble-violet2">Trello, Google Workspace</div>
        </button>
        <button class="card-btn"><strong>Análisis</strong>
          <div class="bubble hidden bubble-violet2">Google Analytics, Search Console</div>
        </button>
        <button class="card-btn"><strong>IA</strong>
          <div class="bubble hidden bubble-violet2">ChatGPT, Claude, MidJourney</div>
        </button>
      </div>
    `,

    socials: `
      <h2 class="title animate-title">Redes sociales</h2>
      <div class="socials">
        <a href="https://www.instagram.com" target="_blank"><img src="images/Instagram.png"></a>
        <a href="https://www.linkedin.com" target="_blank"><img src="images/LinkedIn.png"></a>
        <a href="mailto:contact@kit-in.fr"><img src="images/Mail.png"></a>
      </div>
    `
  },

  /* =====================================================
     🇨🇳 中文（普通话）
  ===================================================== */
  zh: {
    presentation: `
      <h2 class="title animate-title">个人介绍</h2>

      <p>
        我叫 Inès Saint Laurent，是一名专注于商业发展
        的自由顾问，服务于本地及国际市场。
      </p>

      <p>
        拥有 5 年国际贸易与市场营销经验，
        我协助企业在关键成长阶段实现结构化发展。
      </p>

      <p>
        我的工作包括新产品上市、市场拓展，
        以及品牌曝光和商业绩效提升，尤其通过社交媒体。
      </p>

      <p>
        我对欧洲和亚洲市场有深入了解，
        并在化妆品、食品、音乐和视听行业有合作经验。
      </p>

      <p>
        我同时具备社区管理与网页开发能力，
        能提供全面且具有战略性的解决方案。
      </p>

      <button class="primary-btn" id="openEngagement">👉 我的承诺</button>
    `,

    engagement: `
      <p>
        我提供个性化、严谨且高标准的陪伴式服务，
        帮助您在高潜力市场中实现安全、快速的发展。
      </p>
      <p>
        ✨ 您有愿景，我帮助您将其转化为可持续增长。
      </p>
    `,

    offre: `
      <h2 class="title animate-title">🤝 战略支持流程</h2>

      <div class="center-buttons">
        <button class="step-btn step-rose" data-step="1">01</button>
        <button class="step-btn step-rose" data-step="2">02</button>
        <button class="step-btn step-rose" data-step="3">03</button>
      </div>

      <div id="programmeBubble" class="bubble hidden"></div>

      <p><strong>🗓️ 项目周期</strong></p>
      <p>根据目标提供 3、6 或 12 个月的陪伴服务。</p>
      <ul>
        <li>第 15 天：战略回顾</li>
        <li>每月：项目跟进与优化</li>
      </ul>
    `,

    offreSteps: {
      1: `
        <strong>诊断与愿景</strong>
        <ul>
          <li>长期愿景</li>
          <li>目标市场</li>
          <li>商业目标</li>
          <li>KPI</li>
        </ul>
      `,
      2: `
        <strong>市场情报与战略</strong>
        <ul>
          <li>市场研究</li>
          <li>竞争分析</li>
          <li>定位策略</li>
          <li>行动计划</li>
        </ul>
      `,
      3: `
        <strong>执行与管理</strong>
        <ul>
          <li>KPI 跟踪</li>
          <li>持续优化</li>
          <li>月度会议</li>
          <li>可持续增长</li>
        </ul>
      `
    },

    experience: `
      <h2 class="title animate-title">💻 职业经历</h2>

      <div class="card-list">

        <button class="card-btn">
          商业发展顾问<br>
          <strong>Gearbooker</strong><br>
          <small><em>视听与国际市场</em></small>
          <div class="bubble hidden bubble-violet">
            • 市场进入战略<br>
            • B2B / B2C 客户开发<br>
            • 绩效管理
          </div>
        </button>

        <button class="card-btn">
          CEO 与 社区经理<br>
          <strong>PUFFRAP</strong><br>
          <small><em>音乐媒体</em></small>
          <div class="bubble hidden bubble-violet">
            • 媒体创建<br>
            • 社交平台管理<br>
            • SEO 与合作
          </div>
        </button>

        <button class="card-btn">
          CEO 与 网页开发者<br>
          <strong>KIT IN</strong><br>
          <small><em>创业与数字化</em></small>
          <div class="bubble hidden bubble-violet">
            • 教育平台开发<br>
            • HTML / CSS / JS<br>
            • 产品战略
          </div>
        </button>

      </div>
    `,

    academic: `
      <h2 class="title animate-title">🎓 教育背景</h2>

      <p><strong>进出口硕士</strong><br>KEDGE 商学院 — 马赛</p><br>
      <p><strong>国际商务学士</strong><br>INSEEC 巴黎</p><br>
      <p><strong>国际贸易文凭</strong><br>Jean Lurçat 中学 — 巴黎</p><br>
      <p><strong>管理学学士</strong><br>巴黎第一大学</p><br>
      <p><strong>会计与管理文凭 (DCG)</strong><br>国家商学院 — 巴黎</p>
    `,

    tools: `
      <h2 class="title animate-title">🧠 软件与工具</h2>

      <div class="card-list">
        <button class="card-btn"><strong>CRM</strong>
          <div class="bubble hidden bubble-violet2">Notion, HubSpot, Salesforce</div>
        </button>
        <button class="card-btn"><strong>项目管理</strong>
          <div class="bubble hidden bubble-violet2">Trello, Google Workspace</div>
        </button>
        <button class="card-btn"><strong>数据分析</strong>
          <div class="bubble hidden bubble-violet2">Google Analytics, Search Console</div>
        </button>
        <button class="card-btn"><strong>人工智能</strong>
          <div class="bubble hidden bubble-violet2">ChatGPT, Claude, MidJourney</div>
        </button>
      </div>
    `,

    socials: `
      <h2 class="title animate-title">社交网络</h2>
      <div class="socials">
        <a href="https://www.instagram.com" target="_blank"><img src="images/Instagram.png"></a>
        <a href="https://www.linkedin.com" target="_blank"><img src="images/LinkedIn.png"></a>
        <a href="mailto:contact@kit-in.fr"><img src="images/Mail.png"></a>
      </div>
    `
  }
};

/* ================= OUVERTURE DES BLOCS ================= */
blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {

    if (bloc.classList.contains("bleu1")) contentBox.innerHTML = T[currentLang].presentation;
    if (bloc.classList.contains("rose1")) contentBox.innerHTML = T[currentLang].offre;
    if (bloc.classList.contains("violet1")) contentBox.innerHTML = T[currentLang].experience;
    if (bloc.classList.contains("violet2")) contentBox.innerHTML = T[currentLang].tools;
    if (bloc.classList.contains("orange1")) contentBox.innerHTML = T[currentLang].academic;
    if (bloc.classList.contains("jaune1")) contentBox.innerHTML = T[currentLang].socials;

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
      `<div class="bubble" style="background:#fff;color:#3A6EFF;">
        ${T[currentLang].engagement}
      </div>`
    );
  }

  if (e.target.classList.contains("step-btn")) {
    const bubble = document.getElementById("programmeBubble");
    bubble.innerHTML = T[currentLang].offreSteps[e.target.dataset.step];
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

/* ================= SWITCH LANGUE ================= */
langBtn.addEventListener("click", () => {
  langIndex = (langIndex + 1) % LANGS.length;
  currentLang = LANGS[langIndex];
  langBtn.textContent = currentLang.toUpperCase();
  overlay.classList.remove("active");
});
