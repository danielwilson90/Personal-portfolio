const projects = [
  {
    slug: "soladex",
    title: "Soladex",
    type: "Real project",
    image: "assets/soladex-current-landing-page.jpg",
    summary:
      "AI-enhanced forecasting, monitoring, and optimization software for green technology and geospatial product workflows.",
    tags: ["Product design", "AI products", "Forecasting", "A/B testing"],
    role: "Product Designer, Web/App Designer, and UI/UX Designer",
    timeline: "Startup product development",
    problem:
      "Soladex was born from a simple question that every solar panel owner asks: should I sell, store, or use the energy my system generates? With over 25 years of experience in solar installations and a passion for renewable energy, we built the Solar Power Index to finally answer that question. Our vendor-agnostic software combines real-time weather data, local grid conditions, and AI-driven forecasting, Soladex empowers homeowners, installers, and energy providers to get the most out of every ray of sunlight.",
    approach:
      "I co-led product development across research, interface design, technical planning, and iterative implementation. My contributions included designing intuitive user experiences in Figma, developing web applications, managing client-side and API integrations, overseeing server infrastructure and system management, shaping product strategy, leveraging analytics-driven decision-making, conducting financial forecasting, supporting machine learning database development, and contributing to research grant proposals submitted to the NSF, DOE, and ECAMS.",
    outcome:
      "Soladex demonstrates my ability to connect product design with technical execution, AI-enhanced forecasting, GIS workflows, and cross-functional startup delivery.",
    bullets: [
      "Designed user-centered interfaces for forecasting, monitoring, and optimization workflows.",
      "Applied A/B testing, analytics, and psychological principles to product strategy.",
      "Worked across Node.js, React, Java, Python, GIS technologies, research writing, and product planning."
    ]
  },
  {
    slug: "synctron-ai",
    title: "Synctron.ai",
    type: "Real project",
    image: "assets/synctron-current-landing-page.jpg",
    summary:
      "An AI-enhanced React Flow nodal interface supported by Python libraries for real-time data parsing, API integration, and stock trading analysis.",
    tags: ["AI interface design", "React Flow", "Python", "LLM logic"],
    role: "Product Designer, Web/App Designer, and Technical Product Builder",
    timeline: "Startup product development",
    problem:
      "Stock trading analysis can become opaque when data streams, API responses, and AI-generated reasoning are separated across disconnected tools.",
    approach:
      "I designed Python libraries for real-time data parsing and API integration while shaping an AI-enhanced nodal interface in React Flow. The product connected custom LLM logic with clearer visual workflows for analyzing trading signals.",
    outcome:
      "Synctron.ai shows my ability to design product experiences for complex technical systems, making AI-supported analysis more visual, modular, and usable.",
    bullets: [
      "Designed an AI-enhanced nodal interface for stock trading analysis workflows.",
      "Built Python libraries for real-time parsing and API integration.",
      "Connected UX decisions with LLM logic, data flow clarity, and iterative product development."
    ]
  }
];

const currentProjects = [
  {
    slug: "simpoli",
    title: "Simpoli",
    type: "Current Development Project",
    image: "assets/simpoli-landing-page.jpg",
    summary:
      "Predictive intelligence for municipal regulation, helping teams model political uncertainty before committing capital or launching.",
    tags: ["Product design", "Predictive intelligence", "Policy tech", "Dashboard UX"],
    role: "Product Designer and Web/App Designer",
    timeline: "Current development",
    problem:
      "Municipal regulation is increasingly unpredictable as cities regulate AI, housing tech, mobility systems, labor practices, and data use with little warning. Existing tools monitor legislation after it is introduced, leaving teams with limited time to adjust strategy.",
    approach:
      "Simpoli models legislative behavior as a probabilistic system, generating forward-looking predictions for probability of passage, swing vote identification, amendment risk, and timeline estimation before teams commit resources.",
    outcome:
      "The product is being shaped to help technology companies, real estate developers, and regulated industry operators navigate municipal regulation with greater confidence.",
    bullets: [
      "Frames municipal legislative risk as a predictive product experience rather than a reactive monitoring workflow.",
      "Highlights core metrics including prediction accuracy, jurisdiction coverage, legislative actions analyzed, and average time saved.",
      "Supports strategic planning for market entry, product launches, policy initiatives, and capital allocation."
    ]
  },
  {
    slug: "ancestreats",
    title: "Ancestreats",
    type: "Current Development Project",
    image: "assets/ancestreats-landing-page.jpg",
    summary:
      "A genealogy-informed nutrition product that turns ancestry data into personalized meal plans and ancestral food discovery.",
    tags: ["Product design", "AI nutrition", "Genealogy", "Personalization"],
    role: "Product Designer and Web/App Designer",
    timeline: "Current development",
    problem:
      "People interested in ancestry often receive genealogical insights without a practical way to connect them to everyday habits like food, nutrition, and traditional eating patterns.",
    approach:
      "Ancestreats lets users upload genealogy reports, explore ancestral foods by country, and chat with an AI nutrition expert about traditional foods, recipes, nutrition, and historical eating patterns.",
    outcome:
      "The product is being developed to translate ancestral regions and genetic predispositions into personalized diet recommendations featuring foods indigenous to a user's genealogical regions.",
    bullets: [
      "Builds a flow from genealogy report upload to AI analysis to personalized ancestral meal recommendations.",
      "Includes an AI chat experience for exploring traditional foods, staple ingredients, and health benefits by country.",
      "Connects cultural food discovery with practical meal planning and personalized nutrition."
    ]
  }
];

const allProjects = [...projects, ...currentProjects];

function projectCard(project) {
  return `
    <a class="project-card" href="#/work/${project.slug}">
      <img class="project-image" src="${project.image}" alt="${project.title} interface preview">
      <div class="project-body">
        <p class="eyebrow">${project.type}</p>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="tags">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
    </a>
  `;
}

function homePage() {
  return `
    <section class="container hero">
      <div>
        <p class="eyebrow">Product Designer & Web/App Designer</p>
        <h1>Designing useful products with human insight and technical depth.</h1>
        <p class="lead">
          I create user-centered web and app experiences shaped by psychology, product strategy,
          software engineering, AI systems, analytics, and A/B testing.
        </p>
        <div class="actions">
          <a class="button primary" href="#/work">View work</a>
          <a class="button secondary" href="#/about">Read my journey</a>
        </div>
      </div>
      <div class="hero-panel" aria-label="Portfolio interface preview">
        <div class="interface-board">
          <div class="screen-card">
            <div class="screen-top">
              <span class="dot coral"></span>
              <span class="dot gold"></span>
              <span class="dot green"></span>
            </div>
            <div class="bar long"></div>
            <div class="bar mid"></div>
            <div class="bar short"></div>
          </div>
          <div class="metric-row">
            <div class="metric"><strong>UX</strong><span>Research</span></div>
            <div class="metric"><strong>A/B</strong><span>Testing</span></div>
            <div class="metric"><strong>AI</strong><span>Products</span></div>
          </div>
          <div class="flow-card">
            <div class="flow-step"><span>Research</span></div>
            <div class="flow-step"><span>Flow</span></div>
            <div class="flow-step"><span>Prototype</span></div>
            <div class="flow-step"><span>Measure</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="container">
        <div class="section-header">
          <div>
            <p class="eyebrow">Featured work</p>
            <h2>Real product work across Soladex and Synctron.ai.</h2>
          </div>
          <p>
            These case studies focus on your AI, product, and web/app design experience through real startup product work.
          </p>
        </div>
        <div class="grid project-grid">${projects.map(projectCard).join("")}</div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <div>
            <p class="eyebrow">Design process</p>
            <h2>Product thinking from discovery through measurement.</h2>
          </div>
          <p>
            Blending behavioral science, interface design, full-stack product exposure, analytics, and AI product development.
          </p>
        </div>
        <div class="grid process-grid">
          <div class="process-card"><b>01</b><h3>Understand</h3><p>Use psychology, user research, analytics, and product goals to define the real design problem.</p></div>
          <div class="process-card"><b>02</b><h3>Structure</h3><p>Map user flows, information architecture, wireframes, and interaction states before visual polish.</p></div>
          <div class="process-card"><b>03</b><h3>Prototype</h3><p>Create responsive UI systems and realistic web/app experiences that can be tested and improved.</p></div>
          <div class="process-card"><b>04</b><h3>Measure</h3><p>Use A/B testing, task completion, engagement, and conversion signals to guide iteration.</p></div>
        </div>
      </div>
    </section>
  `;
}

function workPage() {
  return `
    <section class="container page-hero">
      <p class="eyebrow">Work</p>
      <h1>Product, web, and app design case studies.</h1>
      <p class="lead">The current build focuses on Soladex and Synctron.ai as core case studies, with current development projects below.</p>
    </section>
    <section class="section">
      <div class="container">
        <div class="grid project-grid">${projects.map(projectCard).join("")}</div>
      </div>
    </section>
    <section class="section alt">
      <div class="container">
        <div class="section-header">
          <div>
            <p class="eyebrow">Current Development Projects</p>
            <h2>Active product builds in predictive intelligence and AI personalization.</h2>
          </div>
          <p>
            Simpoli and Ancestreats are current development projects expanding the portfolio into civic intelligence, policy forecasting, genealogy, and AI-guided nutrition.
          </p>
        </div>
        <div class="grid project-grid">${currentProjects.map(projectCard).join("")}</div>
      </div>
    </section>
  `;
}

function aboutPage() {
  return `
    <section class="container page-hero">
      <p class="eyebrow">About</p>
      <h1>A design path shaped by psychology, software, and AI.</h1>
      <p class="lead">
        My journey into product design, computer science, and artificial intelligence comes from a unique fusion of psychological insight and hands-on technical experience.
      </p>
    </section>
    <section class="section">
      <div class="container grid story-grid">
        <article class="story-card">
          <h2>My Journey</h2>
          <p>
            With a B.A. in Psychology from San Francisco State University, I developed a deep understanding of human behavior,
            cognitive processes, and user motivation. That foundation now drives my work at the intersection of technology,
            design, and AI.
          </p>
          <p>
            Before completing my degree, I earned Meta Front-End and Back-End Development Professional Certificates, along with
            Google UI/UX Design and Google Analytics Professional Certificates. These credentials gave me immediate technical
            foundations while I launched and developed Soladex and Synctron.ai during my time at SF State.
          </p>
          <p>
            Across those ventures, I managed product lifecycles that included user research, A/B testing, financial forecasting,
            cross-functional execution, version pushes, and interface design. I applied psychological principles directly to
            product strategy while navigating startup constraints, iteration, and demanding coursework.
          </p>
          <p>
            At Synctron.ai, I designed Python libraries for real-time data parsing and API integration, powering an AI-enhanced
            React Flow nodal interface with custom LLM logic for stock trading analysis. At Soladex, I led development of
            AI-enhanced forecasting, monitoring, and optimization software using Node.js, React, Java, Python, and GIS technologies.
          </p>
          <p>
            I am also the author of <em>What Makes Us Click? The Psychology of UI/UX Design</em>, which bridges behavioral
            science with interface principles, and I was a finalist for the National Science Foundation SBIR Grant.
          </p>
        </article>
        <aside class="story-card">
          <h3>Core strengths</h3>
          <ul class="timeline">
            <li><strong>Product design</strong><span>User flows, wireframes, prototypes, and responsive UI systems.</span></li>
            <li><strong>A/B testing</strong><span>Experiment planning, variant strategy, analytics, and iteration.</span></li>
            <li><strong>AI products</strong><span>LLM workflows, real-time data parsing, forecasting, and optimization tools.</span></li>
            <li><strong>Psychology</strong><span>Human motivation, behavior, cognition, and interface decision-making.</span></li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function contactPage() {
  return `
    <section class="container page-hero">
      <p class="eyebrow">Contact</p>
      <h1>Let us build something clear, useful, and measurable.</h1>
    </section>
    <section class="section">
      <div class="container contact-layout">
        <div class="contact-card">
          <h2>Available for product, web, and app design opportunities.</h2>
          <p>
            I am especially interested in AI-enabled products, SaaS tools, analytics-driven interfaces, and experiences where
            behavioral insight can improve how people understand and use technology.
          </p>
          <div class="actions">
            <a class="button primary" href="mailto:danielawilson90@gmail.com">Email Daniel</a>
            <a class="button secondary" href="#/work">View work</a>
          </div>
        </div>
        <div class="contact-card">
          <h3>Focus areas</h3>
          <div class="tags">
            <span class="tag">Product design</span>
            <span class="tag">Web/app design</span>
            <span class="tag">A/B testing</span>
            <span class="tag">UX research</span>
            <span class="tag">AI interfaces</span>
            <span class="tag">Analytics</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

function projectDetailPage(slug) {
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) {
    return notFoundPage();
  }

  return `
    <section class="container page-hero detail-hero">
      <div>
        <p class="eyebrow">${project.type}</p>
        <h1>${project.title}</h1>
        <p class="lead">${project.summary}</p>
        <div class="tags">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
      <div class="detail-image">
        <img src="${project.image}" alt="${project.title} interface preview">
      </div>
    </section>
    <section class="section">
      <div class="container grid detail-grid">
        <div class="detail-card"><h3>Role</h3><p>${project.role}</p></div>
        <div class="detail-card"><h3>Timeline</h3><p>${project.timeline}</p></div>
        <div class="detail-card"><h3>Focus</h3><p>${project.tags.join(", ")}</p></div>
        <div class="detail-card wide"><h3>Problem</h3><p>${project.problem}</p></div>
        <div class="detail-card"><h3>Outcome</h3><p>${project.outcome}</p></div>
        <div class="detail-card wide"><h3>Approach</h3><p>${project.approach}</p></div>
        <div class="detail-card">
          <h3>Design decisions</h3>
          <ul class="list">${project.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
    </section>
  `;
}

function notFoundPage() {
  return `
    <section class="container page-hero">
      <p class="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p class="lead">This route does not exist yet.</p>
      <a class="button primary" href="#/">Back home</a>
    </section>
  `;
}

const routes = {
  "/": homePage,
  "/work": workPage,
  "/about": aboutPage,
  "/contact": contactPage
};

function currentPath() {
  const hash = window.location.hash.replace(/^#/, "");
  return hash || "/";
}

function updateActiveNav(path) {
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const navPath = link.getAttribute("data-nav");
    link.classList.toggle("active", navPath === path || (navPath === "/work" && path.startsWith("/work/")));
  });
}

function render() {
  const path = currentPath();
  const app = document.querySelector("#app");
  const projectMatch = path.match(/^\/work\/(.+)$/);

  app.innerHTML = projectMatch
    ? projectDetailPage(projectMatch[1])
    : (routes[path] ? routes[path]() : notFoundPage());

  updateActiveNav(path);
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
