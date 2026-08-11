(function () {
  "use strict";

  const projects = [
    {
      slug: "beamng-sky",
      number: "01",
      title: "BeamNG.Sky",
      kicker: "Atmosphere / graphics R&D",
      pitch: "A custom volumetric cloud and atmospheric graphics system for BeamNG.drive.",
      description: "Multiple cloud layers, self-shadowing, fog integration, lighting improvements, ground shadows, light rays, and performance-focused iteration.",
      status: "Experimental",
      platform: "BeamNG.drive",
      tags: ["Volumetrics", "Shaders", "Lighting", "Optimization"],
      image: "assets/beamng-sky.jpg",
      imageLabel: "BeamNG.Sky / In-engine capture",
      visual: "sky",
      overview: "BeamNG.Sky explores how far BeamNG.drive’s atmosphere can be pushed with a custom real-time cloud and lighting system. The goal is not a single visual trick; it is a connected atmosphere where clouds, fog, light, and the ground respond as one scene.",
      problem: "Volumetric atmosphere has to feel large, layered, and alive without losing the real-time responsiveness a driving simulator demands. Every visual improvement competes for the same frame-time budget.",
      implementation: "The system combines multiple cloud layers with self-shadowing, fog integration, lighting changes, ground shadows, and light-ray work. The project is shaped through continuous visual and performance iteration inside the running engine.",
      highlights: ["Multiple volumetric cloud layers", "Cloud self-shadowing", "Atmospheric fog integration", "Ground shadows and light rays", "Lighting and performance iteration"],
      video: "AOBsuxTKMUI",
      next: "revision"
    },
    {
      slug: "revision",
      number: "02",
      title: "ReVision",
      kicker: "Real-time visual effects suite",
      pitch: "A broad graphics toolkit for reshaping the look and feel of BeamNG.drive.",
      description: "SSGI, tone mapping, Panini projection, CRT effects, dynamic FOV, voxelization, velocity lines, impact effects, rim lighting, presets, and more.",
      status: "Experimental suite",
      platform: "BeamNG.drive",
      tags: ["Post FX", "SSGI", "Voxelization", "Tools"],
      visual: "revision",
      overview: "ReVision is a large visual-effects suite built as a practical graphics laboratory. It brings a wide range of rendering, projection, motion, color, and stylization ideas into one place so they can be tuned and used in motion.",
      problem: "A collection this broad has two problems: each effect must survive the constraints of a real-time game, and the effects need to coexist without turning the experience into an incoherent stack of filters.",
      implementation: "The suite spans screen-space global illumination, tone mapping, Panini projection, CRT treatment, dynamic field of view, driving inertia, voxelization, velocity lines, HSV tools, impact effects, rim lighting, and reusable presets.",
      highlights: ["Screen-space lighting and tone mapping", "Projection and field-of-view tools", "Voxelization and motion effects", "Stylization and color controls", "Reusable effect presets"],
      next: "syngine"
    },
    {
      slug: "syngine",
      number: "03",
      title: "Syngine",
      kicker: "Procedural audio research",
      pitch: "A synthetic engine-sound generation project built around procedural response.",
      description: "An exploration of how convincing engine character can emerge from generated audio systems instead of a fixed recording pipeline.",
      status: "R&D",
      platform: "Procedural audio",
      tags: ["Synthesis", "Audio systems", "Procedural"],
      visual: "syngine",
      overview: "Syngine investigates procedural and synthetic engine sound generation. It treats audio as a responsive system to be generated, shaped, and controlled—not simply as a collection of clips to be played back.",
      problem: "Engine sound is continuous, reactive, and full of overlapping mechanical character. A procedural approach has to create convincing change across operating states without revealing a repetitive sample structure.",
      implementation: "The work focuses on the system design behind synthetic engine sound: controllable layers, responsive parameters, and generated behavior that can follow a simulated machine.",
      highlights: ["Procedural engine sound", "Responsive audio parameters", "Synthetic mechanical character", "System-driven rather than clip-driven behavior"],
      next: "physbrick"
    },
    {
      slug: "physbrick",
      number: "04",
      title: "PhysBrick",
      kicker: "Physics / game systems",
      pitch: "A physics-focused Blockland project and add-on built around interactive systems.",
      description: "An engine experiment that treats a familiar brick world as a starting point for deeper physical behavior and interaction.",
      status: "Experimental",
      platform: "Blockland",
      tags: ["Physics", "Game systems", "Modding"],
      visual: "physbrick",
      overview: "PhysBrick is a physics-focused Blockland project and add-on. It comes from the same impulse behind the rest of this work: find an engine’s assumptions, then use them as the starting point for a different kind of system.",
      problem: "Extending an established game means working with its existing world model, scripting boundaries, and interaction rules while introducing physical behavior that still feels native to the experience.",
      implementation: "The project concentrates on physics-driven interaction and mod-level integration inside Blockland, using the game as a platform for technical experimentation.",
      highlights: ["Physics-driven interaction", "Game scripting", "Mod integration", "Experimental system design"],
      next: "beamng-sky"
    }
  ];

  window.CHIPBOARD_PROJECTS = projects;
  window.CHIPBOARD_PROJECT_MAP = Object.fromEntries(projects.map((project) => [project.slug, project]));
}());
