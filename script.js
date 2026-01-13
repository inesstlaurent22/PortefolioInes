console.log("SCRIPT JS – PORTFOLIO MULTILANGUE COMPLET");

/* ================= LANGUE ================= */
let currentLang = "fr";

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= TEXTES MULTILANGUES ================= */
const T = {
  fr: {
    objectif: `
      Transformer une idée ou une activité existante en un projet structuré,
      visible et rentable.<br><br>
      Si vous cherchez une approche humaine, stratégique et orientée résultats,
      échangeons.
    `,
    offre: `
      <h2 class="title">Présentation</h2>

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

      <p class="left strong"><strong>J’interviens notamment sur :</strong></p>

      <ul class="list-left">
        <li>le lancement de nouveaux produits</li>
        <li>l’implantation sur de nouveaux marchés</li>
        <li>la structuration d’offres</li>
        <li>le développement de la visibilité et des performances commerciales</li>
      </ul>

      <button class="primary-btn" id="openObjectif">Mon objectif</button>
    `,
    programmeTitle: "Processus d’accompagnement stratégique",
    programme: {
      1: `
        <strong>01 — Diagnostic & Vision</strong>
        <p>Analyse globale du projet afin de poser des bases solides.</p>
        <ul class="list-left">
          <li>Vision long terme</li>
          <li>Marché ou pays cible</li>
          <li>Objectifs business</li>
          <li>Indicateurs de performance</li>
        </ul>
      `,
      2: `
        <strong>02 — Intelligence marché & stratégie</strong>
        <p>Études approfondies et recommandations sur mesure.</p>
        <ul class="list-left">
          <li>Analyse concurrentielle</li>
          <li>Positionnement stratégique</li>
          <li>Recommandations produits</li>
          <li>Plan d’action structuré</li>
        </ul>
      `,
      3: `
        <strong>03 — Déploiement & pilotage</strong>
        <p>Mise en œuvre et suivi des actions.</p>
        <ul class="list-left">
          <li>Suivi des KPI</li>
          <li>Ajustements continus</li>
          <li>Réunions de pilotage</li>
          <li>Croissance durable</li>
        </ul>
      `
    }
  },

  en: {
    objectif: `
      Transform an idea or an existing activity into a structured,
      visible and profitable project.<br><br>
      If you are looking for a human, strategic and results-oriented approach,
      let’s connect.
    `,
    offre: `
      <h2 class="title">Presentation</h2>

      <p>
        My name is Inès Saint Laurent,
        <strong>a freelance specialist in business development</strong>
        for local and international markets.
      </p>

      <p>
        With <strong>five years of experience</strong>,
        I support companies
        <strong>during key phases of structuring, growth and strategic positioning.</strong>
      </p>

      <p class="left strong"><strong>I mainly work on:</strong></p>

      <ul class="list-left">
        <li>new product launches</li>
        <li>market expansion</li>
        <li>offer structuring</li>
        <li>brand visibility and commercial performance</li>
      </ul>

      <button class="primary-btn" id="openObjectif">My goal</button>
    `,
    programmeTitle: "Strategic support process",
    programme: {
      1: `
        <strong>01 — Diagnosis & Vision</strong>
        <p>Overall analysis of the project.</p>
        <ul class="list-left">
          <li>Long-term vision</li>
          <li>Target market</li>
          <li>Business objectives</li>
          <li>Performance indicators</li>
        </ul>
      `,
      2: `
        <strong>02 — Market intelligence & strategy</strong>
        <p>In-depth studies and tailored recommendations.</p>
        <ul class="list-left">
          <li>Competitive analysis</li>
          <li>Strategic positioning</li>
          <li>Product recommendations</li>
          <li>Action plan</li>
        </ul>
      `,
      3: `
        <strong>03 — Deployment & monitoring</strong>
        <p>Implementation and follow-up.</p>
        <ul class="list-left">
          <li>KPI tracking</li>
          <li>Continuous adjustments</li>
          <li>Steering meetings</li>
          <li>Sustainable growth</li>
        </ul>
      `
    }
  },

  es: {
    objectif: `
      Transformar una idea o una actividad existente en un proyecto estructurado,
      visible y rentable.<br><br>
      Si buscas un enfoque humano, estratégico y orientado a resultados,
      hablemos.
    `,
    offre: `
      <h2 class="title">Presentación</h2>

      <p>
        Me llamo Inès Saint Laurent,
        <strong>freelance especializada en desarrollo de negocios</strong>
        en mercados locales e internacionales.
      </p>

      <p>
        Con <strong>cinco años de experiencia</strong>,
        acompaño a las empresas
        <strong>en sus fases clave de estructuración, crecimiento y posicionamiento estratégico.</strong>
      </p>

      <p class="left strong"><strong>Intervengo principalmente en:</strong></p>

      <ul class="list-left">
        <li>lanzamiento de nuevos productos</li>
        <li>expansión a nuevos mercados</li>
        <li>estructuración de ofertas</li>
        <li>visibilidad y rendimiento comercial</li>
      </ul>

      <button class="primary-btn" id="openObjectif">Mi objetivo</button>
    `,
    programmeTitle: "Proceso de acompañamiento estratégico",
    programme: {
      1: `
        <strong>01 — Diagnóstico y visión</strong>
        <p>Análisis global del proyecto.</p>
        <ul class="list-left">
          <li>Visión a largo plazo</li>
          <li>Mercado objetivo</li>
          <li>Objetivos de negocio</li>
          <li>Indicadores de rendimiento</li>
        </ul>
      `,
      2: `
        <strong>02 — Inteligencia de mercado</strong>
        <p>Estrategia personalizada.</p>
        <ul class="list-left">
          <li>Análisis competitivo</li>
          <li>Posicionamiento estratégico</li>
          <li>Recomendaciones de producto</li>
          <li>Plan de acción</li>
        </ul>
      `,
      3: `
        <strong>03 — Implementación y seguimiento</strong>
        <p>Ejecución y control.</p>
        <ul class="list-left">
          <li>Seguimiento de KPI</li>
          <li>Ajustes continuos</li>
          <li>Reuniones de control</li>
          <li>Crecimiento sostenible</li>
        </ul>
      `
    }
  },

  zh: {
    objectif: `
      将一个想法或现有活动转变为一个结构清晰、
      可见且可盈利的项目。<br><br>
      如果您正在寻找以人为本、具有战略性并注重结果的方法，
      欢迎联系我。
    `,
    offre: `
      <h2 class="title">介绍</h2>

      <p>
        我叫 Inès Saint Laurent，
        <strong>是一名专注于业务发展的自由顾问</strong>，
        涉及本地及国际市场。
      </p>

      <p>
        拥有 <strong>五年工作经验</strong>，
        我协助企业
        <strong>完成结构化、增长和战略定位等关键阶段。</strong>
      </p>

      <p class="left strong"><strong>我主要从事：</strong></p>

      <ul class="list-left">
        <li>新产品上市</li>
        <li>市场拓展</li>
        <li>业务方案结构化</li>
        <li>品牌曝光与商业绩效提升</li>
      </ul>

      <button class="primary-btn" id="openObjectif">我的目标</button>
    `,
    programmeTitle: "战略支持流程",
    programme: {
      1: `
        <strong>01 — 诊断与愿景</strong>
        <p>项目整体分析。</p>
        <ul class="list-left">
          <li>长期愿景</li>
          <li>目标市场</li>
          <li>商业目标</li>
          <li>绩效指标</li>
        </ul>
      `,
      2: `
        <strong>02 — 市场情报与战略</strong>
        <p>定制化建议。</p>
        <ul class="list-left">
          <li>竞争分析</li>
          <li>战略定位</li>
          <li>产品建议</li>
          <li>行动计划</li>
        </ul>
      `,
      3: `
        <strong>03 — 执行与监控</strong>
        <p>实施与跟踪。</p>
        <ul class="list-left">
          <li>KPI 跟踪</li>
          <li>持续优化</li>
          <li>管理会议</li>
          <li>可持续增长</li>
        </ul>
      `
    }
  }
};

/* ================= OUVERTURE DES BLOCS ================= */
blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {
    if (bloc.classList.contains("bleu1")) {
      contentBox.innerHTML = T[currentLang].offre;
    }

    if (bloc.classList.contains("rose1")) {
      contentBox.innerHTML = `
        <h2 class="title">${T[currentLang].programmeTitle}</h2>
        <div class="center-buttons">
          <button class="step-btn" data-step="1">01</button>
          <button class="step-btn" data-step="2">02</button>
          <button class="step-btn" data-step="3">03</button>
        </div>
        <div id="programmeBubble" class="bubble hidden"></div>
      `;
    }

    colorBox.style.background = bloc.dataset.color || "#000";
    overlay.classList.add("active");
  });
});

/* ================= INTERACTIONS ================= */
contentBox.addEventListener("click", e => {

  if (e.target.id === "openObjectif") {
    contentBox.insertAdjacentHTML(
      "beforeend",
      `<div class="bubble objective">${T[currentLang].objectif}</div>`
    );
  }

  if (e.target.classList.contains("step-btn")) {
    const bubble = document.getElementById("programmeBubble");
    bubble.innerHTML = T[currentLang].programme[e.target.dataset.step];
    bubble.classList.remove("hidden");
  }
});

/* ================= FERMETURE ================= */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());

/* ================= LANGUAGE SWITCH ================= */
document.querySelectorAll("#lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    overlay.classList.remove("active");
    contentBox.innerHTML = "";
  });
});
