const projects = [
  {
    slug: "soladex",
    title: "Soladex",
    type: "Real project",
    image: "assets/soladex.svg",
    summary:
      "AI-enhanced forecasting, monitoring, and optimization software for green technology and geospatial product workflows.",
    tags: ["Product design", "AI products", "Forecasting", "A/B testing"],
    role: "Product Designer, Web/App Designer, and Product Lead",
    timeline: "Startup product development",
    problem:
      "Green technology teams need clearer ways to understand forecasting, monitoring, optimization, and geographic data without being buried in technical complexity.",
    approach:
      "I led product development across research, interface design, technical planning, and iteration. The work included intuitive Figma interfaces, product strategy, analytics-informed decisions, financial forecasting, and contributions to NSF, DOE, and ECAMS research grant proposals.",
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
    image: "assets/synctron.svg",
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
  },
  {
    slug: "fintrack-mobile-app",
    title: "FinTrack Mobile App",
    type: "Supplemental concept",
    image: "assets/fintrack.svg",
    summary:
      "A personal finance app concept that helps users scan balances, understand spending, and complete transfers with fewer decision points.",
    tags: ["Product design", "Mobile app", "A/B testing", "Accessibility"],
    role: "Product Designer and Web/App Designer",
    timeline: "3 week concept sprint",
    problem:
      "Finance apps often overload users with dense tables and competing calls to action. The design challenge was to make common money tasks feel faster, clearer, and less stressful.",
    approach:
      "I mapped the core flow from login to transfer, designed a calm dashboard hierarchy, and planned A/B tests for quick-action placement, transaction filters, and spending insight labels.",
    outcome:
      "The concept presents a cleaner mobile dashboard, clearer money movement flow, and a measurement plan focused on task completion, time on task, and transfer confidence.",
    bullets: [
      "Designed dashboard, spending insights, transfer flow, and transaction detail states.",
      "Included A/B test variants for quick actions above vs. below account cards.",
      "Prioritized readable contrast, large tap targets, and plain-language financial labels."
    ]
  },
  {
    slug: "bloom-wellness-booking",
    title: "Bloom Wellness Booking",
    type: "Supplemental concept",
    image: "assets/bloom.svg",
    summary:
      "A responsive booking experience for wellness services, built around clear comparison, calendar selection, and low-friction confirmation.",
    tags: ["Web design", "Booking UX", "Responsive UI", "Research"],
    role: "Product Designer and Web/App Designer",
    timeline: "2 week concept sprint",
    problem:
      "Service marketplaces can make people compare too many details at once. The goal was to help users move from discovery to a confirmed appointment without losing trust.",
    approach:
      "I structured the experience around service cards, provider details, a calendar-first booking flow, and messaging that reduces uncertainty before checkout.",
    outcome:
      "The final direction gives users scannable service options, transparent availability, and a confirmation experience designed for confidence.",
    bullets: [
      "Designed service discovery, provider profile, booking calendar, and confirmation screens.",
      "Defined A/B test ideas for service card density and calendar default view.",
      "Balanced emotional warmth with practical booking clarity."
    ]
  },
  {
    slug: "studiocart-ecommerce-redesign",
    title: "StudioCart E-commerce Redesign",
    type: "Supplemental concept",
    image: "assets/studiocart.svg",
    summary:
      "A product page and checkout redesign focused on scanability, conversion clarity, and reduced cart hesitation.",
    tags: ["E-commerce", "Conversion UX", "A/B testing", "UI systems"],
    role: "Product Designer and Web/App Designer",
    timeline: "2 week concept sprint",
    problem:
      "Product pages lose shoppers when details, trust signals, and purchase actions compete for attention. This redesign clarifies the decision path.",
    approach:
      "I reorganized product information, emphasized reviews and shipping clarity, and designed a sticky add-to-cart path for mobile and desktop.",
    outcome:
      "The concept improves content hierarchy, purchase confidence, and checkout continuity while setting up measurable tests for conversion rate and cart completion.",
    bullets: [
      "Designed product detail page, cart drawer, and checkout preview.",
      "Included A/B tests for sticky purchase actions and review placement.",
      "Created reusable UI patterns for price, variants, shipping, and proof points."
    ]
  },
  {
    slug: "locallink-community-app",
    title: "LocalLink Community App",
    type: "Supplemental concept",
    image: "assets/locallink.svg",
    summary:
      "A local discovery app concept for events, services, and neighborhood resources, designed for quick filtering and repeat use.",
    tags: ["Mobile app", "Community UX", "Information architecture", "Prototyping"],
    role: "Product Designer and Web/App Designer",
    timeline: "3 week concept sprint",
    problem:
      "Local information is often scattered across social feeds, websites, and flyers. The product challenge was to make nearby opportunities easier to find and save.",
    approach:
      "I built a simple content model, category filters, saved items, and detail pages that make event and resource discovery feel organized.",
    outcome:
      "The concept creates a practical path from browse to save to attend, with room for personalization and community trust signals.",
    bullets: [
      "Designed discovery feed, filters, saved items, and event detail screens.",
      "Mapped user flows for browsing, saving, and sharing local resources.",
      "Defined success metrics around saved events, return visits, and filter engagement."
    ]
  }
];

const supportingExperience = [
  "Green tech and UX content: Industry writing and interface strategy connecting product education with user experience.",
  "Research grant support: NSF, DOE, and ECAMS proposal contributions with product strategy, forecasting, and technical documentation.",
  "What Makes Us Click?: Psychology-driven UI/UX writing that connects behavioral science with interface design.",
  "Google Analytics and A/B testing: Experiment planning and measurement practices used to guide product iteration."
];

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
            <h2>Real product work led by Soladex and Synctron.ai.</h2>
          </div>
          <p>
            The portfolio now leads with your real AI, product, and web/app design experience, with concept projects kept as supplemental range.
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
            Your positioning blends behavioral science, interface design, full-stack product exposure, analytics, and AI product development.
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
      <p class="lead">The current build leads with Soladex and Synctron.ai, then includes supplemental concept work to show range.</p>
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
            <p class="eyebrow">Supporting experience</p>
            <h2>Additional proof points for your design and product story.</h2>
          </div>
          <p>These can become additional case-study sections as you add screenshots, outcomes, and process notes.</p>
        </div>
        <div class="grid project-grid">
          ${supportingExperience.map((item) => `<div class="detail-card"><p>${item}</p></div>`).join("")}
        </div>
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
  const project = projects.find((item) => item.slug === slug);

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
