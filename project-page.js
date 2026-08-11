(function () {
  "use strict";
  const slug = document.body.dataset.project;
  const project = window.CHIPBOARD_PROJECT_MAP && window.CHIPBOARD_PROJECT_MAP[slug];
  if (!project) return;

  document.title = `${project.title} — Chipboard`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = project.pitch;
  const setMeta = (attribute, name, content) => {
    let node = document.head.querySelector(`meta[${attribute}="${name}"]`);
    if (!node) { node = document.createElement("meta"); node.setAttribute(attribute, name); document.head.appendChild(node); }
    node.content = content;
  };
  setMeta("property", "og:type", "article");
  setMeta("property", "og:title", `${project.title} — Chipboard`);
  setMeta("property", "og:description", project.pitch);
  setMeta("property", "og:url", `https://chipboard.github.io/projects/${project.slug}/`);
  setMeta("property", "og:image", "https://chipboard.github.io/assets/og.png");
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:image", "https://chipboard.github.io/assets/og.png");
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
  canonical.href = `https://chipboard.github.io/projects/${project.slug}/`;

  const media = project.image
    ? `<img src="../../${project.image}" alt="BeamNG.Sky volumetric clouds above a coastal BeamNG.drive landscape" width="2048" height="1152">`
    : `<div class="project-media-placeholder"><div class="project-visual visual-${project.visual}" aria-hidden="true"></div></div>`;
  const video = project.video ? `<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${project.video}" title="${project.title} video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>` : "";
  const next = window.CHIPBOARD_PROJECT_MAP[project.next];

  document.getElementById("project-content").innerHTML = `
    <section class="project-hero section-shell">
      <div class="project-hero-grid">
        <div>
          <p class="eyebrow"><span></span>${project.kicker}</p>
          <h1>${project.title}</h1>
          <p class="project-hero-lede">${project.pitch}</p>
        </div>
        <div class="project-facts" aria-label="Project facts">
          <div class="project-fact"><span>Status</span><strong>${project.status}</strong></div>
          <div class="project-fact"><span>Platform</span><strong>${project.platform}</strong></div>
          <div class="project-fact"><span>Focus</span><strong>${project.tags[0]}</strong></div>
          <div class="project-fact"><span>Project index</span><strong>${project.number} / 04</strong></div>
        </div>
      </div>
    </section>
    <div class="project-media-wide">
      ${media}
      <div class="project-media-overlay"><span>${project.imageLabel || `${project.title} / technical study`}</span><span>${project.platform}</span></div>
    </div>
    <section class="project-story section-shell section-block">
      <aside class="story-nav" aria-label="Case study sections">
        <span>01 / What it is</span><span>02 / Constraint</span><span>03 / Approach</span><span>04 / Technical focus</span>
      </aside>
      <div class="story-copy">
        <section><p class="eyebrow"><span></span>01 / What it is</p><h2>An experiment with a real system behind it.</h2><p>${project.overview}</p></section>
        <section><p class="eyebrow"><span></span>02 / The constraint</p><h2>Make the difficult part belong.</h2><p>${project.problem}</p></section>
        <section><p class="eyebrow"><span></span>03 / The approach</p><h2>Build through the engine, not around it.</h2><p>${project.implementation}</p>${video}</section>
        <section><p class="eyebrow"><span></span>04 / Technical focus</p><h2>Systems in the loop.</h2><ul>${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul></section>
      </div>
    </section>
    <a class="project-next section-shell" href="../${next.slug}/" aria-label="Next project: ${next.title}"><small>Next project<strong>${next.title}</strong></small><span aria-hidden="true">↗</span></a>`;

  document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
}());
