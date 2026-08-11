(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.querySelector("[data-header]");
  const nav = document.getElementById("site-nav");
  const navToggle = document.querySelector(".nav-toggle");

  const setHeader = () => header && header.classList.toggle("is-scrolled", window.scrollY > 18);
  setHeader();
  window.addEventListener("scroll", setHeader, { passive: true });

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }

  const observeReveals = (items) => {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .08 });
    items.forEach((item) => observer.observe(item));
  };

  observeReveals(document.querySelectorAll(".reveal"));

  const grid = document.getElementById("project-grid");
  if (grid && window.CHIPBOARD_PROJECTS) {
    grid.innerHTML = window.CHIPBOARD_PROJECTS.map((project) => {
      const media = project.image
        ? `<img src="${project.image}" alt="BeamNG.Sky volumetric clouds above a coastal BeamNG.drive landscape" width="2048" height="1152" loading="lazy">`
        : `<div class="project-visual visual-${project.visual}" aria-hidden="true"></div>`;
      return `<article class="project-card reveal" data-tilt>
        <div class="project-card-media">
          ${media}
          <span class="project-number">${project.number}</span>
          <span class="project-media-label">${project.imageLabel || `${project.title} / system study`}</span>
        </div>
        <div class="project-card-copy">
          <div class="status-row"><span class="status">${project.status}</span><span>${project.platform}</span></div>
          <h3>${project.title}</h3>
          <p>${project.pitch}</p>
          <ul class="tag-list">${project.tags.slice(0, 4).map((tag) => `<li>${tag}</li>`).join("")}</ul>
          <a class="arrow-link" href="projects/${project.slug}/" aria-label="View ${project.title} case study">View case study <span aria-hidden="true">↗</span></a>
        </div>
      </article>`;
    }).join("");
    observeReveals(grid.querySelectorAll(".reveal"));
  }

  const videos = [
    ["DotBox App", "4sYrMCPOxpA"],
    ["Snake Showcase", "4u_lxAB6iGs"],
    ["Web Simulation", "OukxpNRXASM"],
    ["Sand Simulation", "DsNMvN0MICI"],
    ["S.R.S.S.", "g_NozRhFW30"],
    ["Audio Visualizer", "VKEzb3ORm5Y"],
    ["Buoyancy", "D_gYqEeNkRE"],
    ["Threaded Voxels", "Yl4a-1FtXqQ"],
    ["Threaded Cloth", "Jpsp65Wr-tk"],
    ["Lobby Relay Terrain", "5Ou-O2dpTqc"],
    ["Cloth / Body Interaction", "UGPHOqouk-A"],
    ["Stag Fight", "lKoINokJ-90"],
    ["Falling Sand", "fTMYQP9Rea4"],
    ["Anomalous", "XobjAQSGnLc"],
    ["Butter Duck", "e7f9kh0VXPE"]
  ];
  const videoGrid = document.getElementById("video-grid");
  if (videoGrid) {
    videoGrid.innerHTML = videos.map(([title, id], index) => `<a class="video-card reveal" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noreferrer" aria-label="Watch ${title} on YouTube">
      <div class="video-thumb">
        <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="${title} prototype video thumbnail" width="480" height="360" loading="lazy">
        <span class="video-play" aria-hidden="true">PLAY ↗</span>
        <span class="video-index">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="video-card-copy"><strong>${title}</strong><span>Prototype / YouTube</span></div>
    </a>`).join("");
    observeReveals(videoGrid.querySelectorAll(".reveal"));
  }

  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        card.style.transform = `perspective(1000px) rotateX(${y * -2.2}deg) rotateY(${x * 2.2}deg) translateY(-2px)`;
      });
      card.addEventListener("pointerleave", () => { card.style.transform = ""; });
    });
  }

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const label = button.querySelector("[data-copy-label]");
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        if (label) label.textContent = "Copied to clipboard";
      } catch (_) {
        if (label) label.textContent = button.dataset.copy;
      }
    });
  });

  document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
}());
