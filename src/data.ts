export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string[];
}

export interface ArsenalItem {
  id: string;
  name: string;
  logo: string;
  proficiency: number; // 0-100
  category: string;
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  roles: string[];
  duration: string;
  client: string;
  embedColor: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "unifying-the-pipeline",
    slug: "unifying-the-pipeline",
    title: "Sculpting the Machine - Hard Surface Modeling & Texturing Pipelines",
    date: "June 24, 2026",
    readTime: "7 min read",
    category: "Technical Pipeline",
    summary: "How to bridge the gap between Autodesk Maya, Substance Painter, and Unreal Engine 5 to create hyper-detailed sci-fi vehicles and mechanical props with fully optimized low-poly meshes.",
    content: [
      "In modern 3D game and cinematic workflows, creating hyper-detailed mechanical models requires a seamless pipeline. Transitioning from high-poly sculpts to game-ready, low-poly assets with flawless UV unwrapping is the ultimate test of a hard-surface artist.",
      "In my personal workflow, I utilize Autodesk Maya for precise sub-divisional hard-surface modeling, before bringing the meshes into Substance 3D Painter for hyper-realistic procedural weathering and texturing. The final assets are then assembled and lit in Unreal Engine 5.",
      "The key to photorealistic rendering lies in micro-details: heat staining on metallic thrusters, edge wear on painted metal panels, and emissive screen glows. Using customized smart materials in Substance Painter allows me to bake rich detail without bloating file sizes.",
      "By mastering optimal texel density, custom vertex normals, and modular rigging, we can build expansive futuristic scenes. These optimized prop sets render at high frame rates in real-time, bridging the gap between high-fidelity visual quality and smooth performance."
    ]
  },
  {
    id: "motion-north-takeaways",
    slug: "motion-north-takeaways",
    title: "Key Takeaways from Motion North",
    date: "May 12, 2026",
    readTime: "5 min read",
    category: "Industry & Events",
    summary: "Reflecting on the latest trends in procedural animation, real-time kinetic typography, and the blending boundaries between offline rendering and native Unreal Engine viewport compositions.",
    content: [
      "Attending Motion North this year was an absolute revelation. After seasons of digital isolation, being surrounded by directors, creative technologists, and 3D generalists sparked several key realizations about where the industry is moving over the next few years.",
      "The dominant theme of the event was 'Fluid Boundaries'. It is no longer enough to be solely a keyframe animator or a procedural simulator. The most outstanding studios are actively blending real-time game engines like Unreal Engine 5 with procedural systems like Houdini to create interactive, reactive installations.",
      "Another highlight was the focus on sensory animation—animating not just for visual appeal, but focusing on the kinetic physics of sound and weight. Speakers showed incredible procedural physics systems where geometry deformed organically based on spatial sound signatures.",
      "What became extremely clear is that the tools we use are becoming secondary to the motion philosophy. The modern designer must study physical motion, secondary animation, and procedural nodes. It’s an exciting time to be an animator, and these takeaways are already finding their way into my procedural simulation workflows."
    ]
  },
  {
    id: "harnessing-houdini-pyro",
    slug: "harnessing-houdini-pyro",
    title: "Harnessing Houdini Pyro for Kinematic Volumetrics",
    date: "April 05, 2026",
    readTime: "9 min read",
    category: "VFX / Simulation",
    summary: "A technical dive into configuring custom velocity fields inside Houdini's Pyro Solver to sculpt smoke and fire simulations into custom choreographies.",
    content: [
      "Volumetric simulations are usually unpredictable by nature. In commercial animation, however, directors often ask for highly specific shapes—such as a cloud curling exactly around a character's face, or fire twisting into a corporate logo.",
      "Achieving this degree of simulation control requires diving deep into custom VEX scripts and gas microsolvers. By building a custom 'pop wind' node with custom curl-noise math, we can feed targeted velocity vectors into the Pyro Solver's velocity field (vel). This allows us to guide the simulation along a defined Bezier curve while retaining realistic density expansion and heat diffusion.",
      "In this write-up, we outline how to setup custom collision boundaries and how to use openvdb pipelines to export these massive simulations as highly optimized VDB sequences ready for Arnold or Karma renderers."
    ]
  }
];

export const ARSENAL_ITEMS: ArsenalItem[] = [
  {
    id: "blender",
    name: "Blender",
    logo: "blender",
    proficiency: 95,
    category: "Modeling & Animation",
    description: "Specialized in complex hard-surface visualization, procedural asset generation, & rapid spatial composition. Proficient in managing complex cinematic pipelines & executing high-end, Spectral lighting & lookdev for ultra-crisp visual delivery.",
    tags: ["Octane Renderer", "Geometry Nodes", "FlipFluid", "Hard-Surface Design", "USD"]
  },
  {
    id: "houdini",
    name: "SideFX Houdini",
    logo: "houdini",
    proficiency: 90,
    category: "Procedural VFX & Physics",
    description: "The crown jewel of my procedural workflow. Advanced expertise in procedural asset generation, complex simulation workflows, and high-fidelity environment design. Focused on architecting scalable pipelines and managing intricate data streams to drive precise, production-ready cinematic outcomes.",
    tags: ["VEX/Python", "Vellum Simulation", "Pyro Solver", "Karma Renderer", "Solaris", "USD"]
  },
  {
    id: "maya",
    name: "Autodesk Maya",
    logo: "maya",
    proficiency: 85,
    category: "Industry-Standard Rigging",
    description: "The core engine for industry-standard character rigging and professional keyframe animation. Advanced proficiency in high-fidelity asset creation, complex scene assembly, and industry-standard layout organization. Expertly optimized for seamless integration into lookdevelopment pipelines and driving precise, production-ready cinematic environments.",
    tags: ["Character Rigging", "Keyframe Animation", "Arnold Renderer", "MEL / Python", "USD" , "Octane Renderer", "Asset Development"]
  },
  {
    id: "unreal",
    name: "Unreal Engine 5",
    logo: "unreal",
    proficiency: 88,
    category: "Real-Time Environments",
    description: "My framework of choice for real-time assembly, cinematic lighting, and virtual production. Harnessing Lumen and Nanite to render high-fidelity films instantly, real-time scene layout, high-fidelity environment assembly, and cinematic sequence orchestration. Expertly tuned for managing complex data pipelines, driving dynamic lookdevelopment, and executing high-end, atmospheric lighting in real time.",
    tags: ["Lumen Lighting", "Nanite Virtualization", "Niagara Particles", "Sequencer Cinematic", "metahuman", "Virtual Production"]
  }
];

export interface MediaGalleryItem {
  type: "image" | "video";
  url: string;
  title: string;
  subtitle: string;
}

export interface CaseStudyDetails {
  tagline: string;
  client: string;
  role: string;
  services: string;
  platforms: string;
  challenge: string;
  approach: string;
  outcome: string;
  whatWeDid: string;
  missionTitle: string;
  missionDesc: string;
  missionImg: string;
  visionTitle: string;
  visionDesc: string;
  visionImg: string;
  specVertices: string;
  specTriangles: string;
  specTexelDensity: string;
  specMaps: string[];
  mediaGallery?: MediaGalleryItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  categories: string[];
  image: string;
  artstationUrl: string;
  description: string;
  year: string;
  
  // Custom case study / project details fields for easy editing
  tagline?: string;
  client?: string;
  role?: string;
  services?: string;
  platforms?: string;
  challenge?: string;
  approach?: string;
  outcome?: string;
  whatWeDid?: string;
  missionTitle?: string;
  missionDesc?: string;
  missionImg?: string;
  visionTitle?: string;
  visionDesc?: string;
  visionImg?: string;
  specVertices?: string;
  specTriangles?: string;
  specTexelDensity?: string;
  specMaps?: string[];
  mediaGallery?: MediaGalleryItem[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    "id": "sunny-rays-unreal-engine-motion-design-study",
    "title": "Sunny Rays // Unreal Engine Motion Design Study",
    "categories": ["Unreal Motion Graphics", "3D Asset Design"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/095/208/902/20260108175133/smaller_square/aayush-choudhary-maxresdefault.jpg?1767916294",
    "artstationUrl": "https://www.artstation.com/artwork/P63Pmo",
    "description": "Professional look-development and staging showcase for Sunny Rays // Unreal Engine Motion Design Study. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2026",
    "tagline": "Choreographing dynamic light behavior and real-time motion graphs.",
    "client": "Sickrit Studio Research",
    "role": "Lead Motion Designer & Lookdev Artist",
    "services": "Procedural shader mapping, Sequencer layout, environmental volumetric design",
    "platforms": "Unreal Engine 5.4, Cinema 4D, Adobe After Effects",
    "challenge": "Synthesizing dynamic solar flares and real-time volumetric atmospheric light rays while maintaining high viewport frames during heavy sequence tracking.",
    "approach": "Constructed custom high-frequency solar noise graphs with panning nodes. Utilized Unreal Engine's native volumetric fog combined with dynamic particle grids.",
    "outcome": "Achieved photorealistic layout compositions running smoothly in real-time viewports, drastically collapsing pipeline delivery metrics.",
    "whatWeDid": "Procedural material design, volumetric light tuning, Sequencer choreography, atmospheric grading.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/095/208/902/20260108175133/smaller_square/aayush-choudhary-maxresdefault.jpg?1767916294", "title": "Real-time Volumetric Playback", "subtitle": "Viewport performance metrics captured under active engine loads" }
    ]
  },
  {
    "id": "24-hour-animation-contest-flip-your-perspective",
    "title": "24 Hour - Animation Contest Flip Your Perspective!",
    "categories": ["3D Asset Design", "Unreal Motion Graphics"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/094/151/148/20251201150128/smaller_square/aayush-choudhary-maxresdefault.jpg?1764622888",
    "artstationUrl": "https://www.artstation.com/artwork/NqRRnP",
    "description": "Professional look-development and staging showcase for 24 Hour - Animation Contest Flip Your Perspective!. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2025",
    "tagline": "A race against time to execute flawless kinetic spatial transitions.",
    "client": "Community Live Challenge",
    "role": "Solo 3D Generalist",
    "services": "Rapid environment staging, mechanical concept layout, keyframe animation",
    "platforms": "Blender, Substance 3D Painter, Unreal Engine 5",
    "challenge": "Delivering a highly stylized, structurally intricate sequence containing gravity-defying camera pans within a strict 24-hour delivery constraints framework.",
    "approach": "Deployed a modular structural blockout pipeline, assigning multi-layered smart materials within Substance Painter to bypass tedious manual painting passes.",
    "outcome": "Successfully completed submission with minutes to spare, demonstrating strong capability to iterate cinematic quality assets under extreme constraints.",
    "whatWeDid": "Structural asset assembly, rapid material styling, camera choreography, color layout.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/094/151/148/20251201150128/smaller_square/aayush-choudhary-maxresdefault.jpg?1764622888", "title": "Kinetic Layout Progression", "subtitle": "Final camera trajectory sequence generated under 24 hours" }
    ]
  },
  {
    "id": "porsche-911-gt3-rs-wheel-render",
    "title": "Porsche 911 GT3 RS Wheel Render",
    "categories": ["Automotive Lighting", "3D Asset Design"],
    "image": "https://cdna.artstation.com/p/assets/images/images/080/211/252/large/aayush-choudhary-2-min.jpg?1726992661",
    "artstationUrl": "https://www.artstation.com/artwork/rlJDo5",
    "description": "Professional look-development and staging showcase for Porsche 911 GT3 RS Wheel Render. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2026",
    "tagline": "Capturing micro-mechanical details and industrial texture parities.",
    "client": "Automotive Visualization Study",
    "role": "Look-Development & Lighting TD",
    "services": "Alloy material mapping, studio softbox alignment, ray-traced shadow design",
    "platforms": "Autodesk Maya, Blender, Octane Render Edition",
    "challenge": "Achieving crisp, grain-free reflections along the highly complex, interlocking carbon-weave and magnesium spoke boundaries of the GT3 RS wheel hub.",
    "approach": "Configured custom multi-layered anisotropic alloy shaders and isolated individual vertex normal distributions. Employed high-density spectral softbox light sheets.",
    "outcome": "Delivered print-ready commercial grade render showcasing pristine material micro-abrasions and perfect specular glare falloff behavior.",
    "whatWeDid": "Anisotropic alloy look-dev, high-density studio softbox calibration, macro assembly modeling, composition.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdna.artstation.com/p/assets/images/images/080/211/252/large/aayush-choudhary-2-min.jpg?1726992661", "title": "Macro Specular Highlights", "subtitle": "Anisotropic reflection behavior along magnesium spokes" }
    ]
  },
  {
    "id": "razer-basilisk-v3-product-asset-development-high-fidelity-cgi-asset-creation",
    "title": "Razer Basilisk V3 | Product Asset Development",
    "categories": ["Product Advertisement", "3D Asset Design"],
    "image": "https://cdna.artstation.com/p/assets/images/images/078/795/894/large/aayush-choudhary-comp-front-side.jpg?1723104117",
    "artstationUrl": "https://www.artstation.com/artwork/x3zNG4",
    "description": "Professional look-development and staging showcase for Razer Basilisk V3 | Product Asset Development | High-Fidelity CGI Asset Creation. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2026",
    "tagline": "Replicating consumer electronics ergonomics through hyper-realistic texturing.",
    "client": "Commercial Prop Study",
    "role": "Lead CGI Asset Generalist",
    "services": "Poly-surface optimization, texture breakdown, multi-zone RGB shader engineering",
    "platforms": "Autodesk Maya, Substance 3D Painter, Arnold Renderer",
    "challenge": "Balancing the visual dualities of injection-molded matte plastics against highly reflective rubberized textures, while preserving vibrant, un-bloomed internal LED arrays.",
    "approach": "Utilized custom texel density layouts to preserve structural fidelity on micro-ribbed side grips, combined with custom light path expressions inside the render engine.",
    "outcome": "Produced a flawless marketing asset package featuring real-world material responses across multiple product lighting angles.",
    "whatWeDid": "High-poly mesh optimization, injection-mold plastic look-dev, multi-channel emissive mapping.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdna.artstation.com/p/assets/images/images/078/795/894/large/aayush-choudhary-comp-front-side.jpg?1723104117", "title": "Front Orthographic Composition", "subtitle": "Textural parity evaluation under high-contrast lighting arrays" }
    ]
  },
  {
    "id": "lenovo-display-tech-minutes-true-split",
    "title": "Lenovo Display Tech Minutes-True Split",
    "categories": ["Product Advertisement", "3D Asset Design"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/078/581/266/20240801035257/smaller_square/aayush-choudhary-maxresdefault.jpg?1722502378",
    "artstationUrl": "https://www.artstation.com/artwork/vbAV5A",
    "description": "Professional look-development and staging showcase for Lenovo Display Tech Minutes-True Split. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Visually decoding complex display engineering panels through structural motion.",
    "client": "Lenovo Visual Production Team",
    "role": "3D Technical Animator",
    "services": "Exploded view engineering, internal panel look-dev, automated scene layout assembly",
    "platforms": "Autodesk Maya, SideFX Houdini, Octane Render",
    "challenge": "Animating thousands of microscopic matrix layers smoothly while tracking crisp display panel edge profiles and zero-glare screen behaviors.",
    "approach": "Designed a node-driven procedural transformation graph within Houdini to handle component separation loops seamlessly based on parameter values.",
    "outcome": "Delivered high-clarity technical marketing content that cleanly communicates complex internal engineering hardware properties.",
    "whatWeDid": "Procedural assembly animation, panel glare look-development, high-contrast studio layout mapping.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/078/581/266/20240801035257/smaller_square/aayush-choudhary-maxresdefault.jpg?1722502378", "title": "True Split Internal Sequence", "subtitle": "Procedural component separation displaying inner panel arrays" }
    ]
  },
  {
    "id": "lenovo-thinkpad-t-series-2024-gold-standard-in-commercial-laptops",
    "title": "Lenovo ThinkPad T series (2024) - Commercial Standard",
    "categories": ["Product Advertisement", "Unreal Motion Graphics"],
    "image": "https://cdnb.artstation.com/p/assets/videos/images/078/426/989/smaller_square/aayush-choudhary-maxresdefault.jpg?1722072255",
    "artstationUrl": "https://www.artstation.com/artwork/Jra3rm",
    "description": "Professional look-development and staging showcase for Lenovo ThinkPad T series (2024) - Gold standard in commercial laptops. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Preserving the legacy form factor of an enterprise icon.",
    "client": "Lenovo Commercial Brand Team",
    "role": "Lead Lookdevelopment Generalist",
    "services": "Matte finish color matching, chassis mechanical animation, layout assembly",
    "platforms": "Autodesk Maya, Unreal Engine 5, Octane Render",
    "challenge": "Replicating the iconic carbon-fiber reinforced plastic texture without introducing unwanted pattern repeats or low-frequency aliasing.",
    "approach": "Developed custom micro-noise shaders that adapt non-destructively to surface scaling, utilizing custom studio lighting sets to define silhouette lines.",
    "outcome": "Supplied ultra-crisp promotional asset arrays deployed globally across core commercial product launch channels.",
    "whatWeDid": "Carbon-composite texture synthesis, custom hinge mechanical orchestration, enterprise lighting setups.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdnb.artstation.com/p/assets/videos/images/078/426/989/smaller_square/aayush-choudhary-maxresdefault.jpg?1722072255", "title": "ThinkPad Studio Sequence", "subtitle": "High-fidelity material response across matte composite panels" }
    ]
  },
  {
    "id": "lenovo-thinkpad-t14-gen-5-amd-empowering-excellence-at-performance-and-repairability",
    "title": "Lenovo ThinkPad T14 Gen 5 (AMD) - Performance & Repairability",
    "categories": ["Product Advertisement"],
    "image": "https://cdnb.artstation.com/p/assets/videos/images/078/426/981/smaller_square/aayush-choudhary-maxresdefault.jpg?1722072175",
    "artstationUrl": "https://www.artstation.com/artwork/Zlgxl1",
    "description": "Professional look-development and staging showcase for Lenovo ThinkPad T14 Gen 5 (AMD) - Empowering excellence at performance and repairability. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Showcasing structural modularity and user-repairable engineering systems.",
    "client": "Lenovo Hardware Engineering Division",
    "role": "Lead Technical Asset Artist",
    "services": "Motherboard component modeling, exploded structural staging, texturing",
    "platforms": "Autodesk Maya, Substance 3D Painter, Octane Render",
    "challenge": "Accurately conveying internal repair paths, screw slots, and modular tracking components within a compelling marketing frame constraint.",
    "approach": "Engineered segmented component hierarchies that map out internal logic paths, utilizing high-contrast color highlights on user-serviceable hooks.",
    "outcome": "Produced a highly educational, striking commercial tour video tracking modular laptop repair capabilities.",
    "whatWeDid": "Internal chassis hardware mapping, automated transform tracks, technical lighting maps.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdnb.artstation.com/p/assets/videos/images/078/426/981/smaller_square/aayush-choudhary-maxresdefault.jpg?1722072175", "title": "Repairability Matrix Sequence", "subtitle": "Exploded chassis system highlighting hot-swappable hardware blocks" }
    ]
  },
  {
    "id": "introducing-the-first-copilot-pc-from-thinkpad",
    "title": "Introducing the first Copilot+ PC from ThinkPad",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/078/426/812/smaller_square/aayush-choudhary-maxresdefault.jpg?1722071525",
    "artstationUrl": "https://www.artstation.com/artwork/2BlZ9Y",
    "description": "Professional look-development and staging showcase for Introducing the first Copilot+ PC from ThinkPad. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Visualizing advanced artificial intelligence integrations within modern hardware.",
    "client": "Lenovo Corporate Launch Division",
    "role": "3D Generalist & Pipeline Lead",
    "services": "Keyboard layout lighting design, premium chassis shading, motion graphics execution",
    "platforms": "Blender, USD Pipeline, Octane Render Edition",
    "challenge": "Creating an abstract visual language that represents neural processor calculations passing seamlessly into clean physical keyboard matrices.",
    "approach": "Deployed dynamic emissive data strings across key cap channels via custom geometry node setups, matching sleek professional metallic surface colors.",
    "outcome": "Successfully launched a cohesive visual product tour driving widespread early engagement across global press distributions.",
    "whatWeDid": "Neural light effect design, high-end metallic finish look-dev, product sequence arrangement.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/078/426/812/smaller_square/aayush-choudhary-maxresdefault.jpg?1722071525", "title": "Copilot Integration Pass", "subtitle": "Dynamic light maps interacting with updated key configurations" }
    ]
  },
  {
    "id": "introducing-the-latest-lenovo-legion-pro-7i",
    "title": "Introducing the latest Lenovo Legion Pro 7i",
    "categories": ["Product Advertisement"],
    "image": "https://cdnb.artstation.com/p/assets/videos/images/075/710/025/smaller_square/aayush-choudhary-maxresdefault.jpg?1715234760",
    "artstationUrl": "https://www.artstation.com/artwork/zPgABw",
    "description": "Professional look-development and staging showcase for Introducing the latest Lenovo Legion Pro 7i. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Unleashing high-performance raw computing power through atmospheric visual sets.",
    "client": "Lenovo Legion Gaming Portfolio",
    "role": "Lead Lookdevelopment Generalist",
    "services": "Thermal vent structural shading, customizable RGB setup engineering, environmental styling",
    "platforms": "Autodesk Maya, SideFX Houdini, Octane Render",
    "challenge": "Balancing complex thermal dissipation visual effects against highly detailed aluminum frame silhouettes under active studio configurations.",
    "approach": "Integrated custom volumetric hot-air gas simulations from Houdini directly into an interactive Octane material layout, optimizing surface specular parity.",
    "outcome": "Delivered a striking high-fidelity commercial visual showcase capturing premium performance design properties.",
    "whatWeDid": "Thermal airflow node synthesis, macro alloy look-dev, high-contrast gaming environment assembly.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdnb.artstation.com/p/assets/videos/images/075/710/025/smaller_square/aayush-choudhary-maxresdefault.jpg?1715234760", "title": "Legion Pro Thermal Sequence", "subtitle": "High-intensity performance render tracing structural frame components" }
    ]
  },
  {
    "id": "lenovo-usb-c-slim-travel-dock",
    "title": "Lenovo USB-C Slim Travel Dock",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/078/427/064/smaller_square/aayush-choudhary-maxresdefault.jpg?1722072585",
    "artstationUrl": "https://www.artstation.com/artwork/8BWZvm",
    "description": "Professional look-development and staging showcase for Lenovo USB-C Slim Travel Dock. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Highlighting streamlined portable expansion capabilities through macro look-dev.",
    "client": "Lenovo Accessories Team",
    "role": "3D Asset Artist",
    "services": "Matte finish texturing, cable flex trajectory animation, port interface design",
    "platforms": "Autodesk Maya, Substance 3D Painter, Arnold Renderer",
    "challenge": "Maintaining ultra-realistic finish continuity across highly dynamic, flexible rubber cables and hard injection-molded plastic boxes.",
    "approach": "Utilized custom blended material properties tracking real-world plastic texture samples, controlling vertex distribution variables across cable bends.",
    "outcome": "Produced crisp, clear marketing visual packages tracking essential physical device details for digital catalogs.",
    "whatWeDid": "Matte surface synthesis, cable transition mapping, high-contrast product staging.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/078/427/064/smaller_square/aayush-choudhary-maxresdefault.jpg?1722072585", "title": "Slim Travel Dock Layout", "subtitle": "Macro interface evaluation tracking port structures" }
    ]
  },
  {
    "id": "lenovo-thinkcentre-neo-50t-gen-4-tailored-to-optimize-performance",
    "title": "Lenovo ThinkCentre neo 50t Gen 4 - Optimize Performance",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/078/426/764/smaller_square/aayush-choudhary-maxresdefault.jpg?1722071314",
    "artstationUrl": "https://www.artstation.com/artwork/AZwXrN",
    "description": "Professional look-development and staging showcase for Lenovo ThinkCentre neo 50t Gen 4 - Tailored to optimize performance. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Visualizing industrial desktop design workflows for professional workspaces.",
    "client": "Lenovo Enterprise Desktop Team",
    "role": "3D Production Generalist",
    "services": "Front panel mesh asset design, modern chassis texturing, commercial staging",
    "platforms": "Autodesk Maya, Blender, Octane Render",
    "challenge": "Rendering intricate patterns across complex desktop ventilation holes without inducing texture moiré or pattern stretching along chassis bends.",
    "approach": "Implemented procedurally driven alpha maps that scale cleanly across different structural scales, utilizing studio style spotlight setups.",
    "outcome": "Delivered clean commercial asset visual lists showcasing industrial product details for client reviews.",
    "whatWeDid": "Ventilation pattern mapping, metal case look-dev, multi-angle studio layout staging.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/078/426/764/smaller_square/aayush-choudhary-maxresdefault.jpg?1722071314", "title": "Neo 50t Desktop Tour", "subtitle": "High-contrast render loop showcasing clean ventilation designs" }
    ]
  },
  {
    "id": "lenovo-legion-k510-mini-pro-gaming-keyboard-product-tour",
    "title": "Lenovo Legion K510 Mini Pro Gaming Keyboard Product Tour",
    "categories": ["Product Advertisement"],
    "image": "https://cdnb.artstation.com/p/assets/videos/images/078/426/809/smaller_square/aayush-choudhary-maxresdefault.jpg?1722071464",
    "artstationUrl": "https://www.artstation.com/artwork/Nqwoyq",
    "description": "Professional look-development and staging showcase for Lenovo Legion K510 Mini Pro Gaming Keyboard Product Tour. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Capturing macro key layouts and specialized mechanical switch arrays.",
    "client": "Lenovo Gaming Accessories Division",
    "role": "Lead Visualizer & Animator",
    "services": "Macro switch tracking, customized key cap styling, light map animation",
    "platforms": "Blender, Substance 3D Painter, Octane Render Edition",
    "challenge": "Creating smooth light transitions across tightly packed mini key configurations while preserving crisp translucent laser-etched font maps.",
    "approach": "Utilized advanced layered subsurface scattering nodes combined with dynamic RGB illumination tracks, generating natural diffuse lighting balances.",
    "outcome": "Produced a highly engaging product video showcasing essential performance details for core marketing channels.",
    "whatWeDid": "Subsurface light mapping, key switch tracking animation, fine plastic surface look-dev.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdnb.artstation.com/p/assets/videos/images/078/426/809/smaller_square/aayush-choudhary-maxresdefault.jpg?1722071464", "title": "Keyboard Key Cap Sequence", "subtitle": "Macro tracking loop evaluating translucent layout responses" }
    ]
  },
  {
    "id": "lenovo-usb-c-dual-display-travel-dock-product-tour",
    "title": "Lenovo USB-C Dual Display Travel Dock Product Tour",
    "categories": ["Product Advertisement"],
    "image": "https://cdnb.artstation.com/p/assets/videos/images/078/426/585/smaller_square/aayush-choudhary-maxresdefault.jpg?1722070757",
    "artstationUrl": "https://www.artstation.com/artwork/3ElZdY",
    "description": "Professional look-development and staging showcase for Lenovo USB-C Dual Display Travel Dock Product Tour. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Detailing absolute workspace connectivity options for dynamic professionals.",
    "client": "Lenovo Visual Marketing Division",
    "role": "3D Asset Animator",
    "services": "Interface structural development, smooth camera path animation, asset staging",
    "platforms": "Autodesk Maya, Arnold Renderer, After Effects",
    "challenge": "Visually communicating multiple concurrent data streams passing through a single compact hardware interface hub.",
    "approach": "Paired clean, calculated camera path vectors with subtle animated emissive port signals, creating clear feature highlights.",
    "outcome": "Successfully built useful visual documentation tools explaining vital hardware connectivity properties.",
    "whatWeDid": "Camera trajectory layout design, connector component mapping, studio lighting setup.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdnb.artstation.com/p/assets/videos/images/078/426/585/smaller_square/aayush-choudhary-maxresdefault.jpg?1722070757", "title": "Dual Display Component View", "subtitle": "Product sequence tracing multi-port adapter operations" }
    ]
  },
  {
    "id": "lenovo-thinkcentre-neo-50a-gen-5-built-for-the-future-workplace",
    "title": "Lenovo ThinkCentre neo 50a Gen 5 - Future Workplace",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/078/426/560/smaller_square/aayush-choudhary-maxresdefault.jpg?1722070674",
    "artstationUrl": "https://www.artstation.com/artwork/L45x3w",
    "description": "Professional look-development and staging showcase for Lenovo ThinkCentre neo 50a Gen 5 - Built for the Future Workplace. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Presenting absolute hardware integration through refined all-in-one product visual grids.",
    "client": "Lenovo Enterprise Solutions",
    "role": "Lead Look-Dev Generalist",
    "services": "Chassis stand styling, frame geometry alignment, display asset mapping",
    "platforms": "Autodesk Maya, Octane Render, Premiere Pro",
    "challenge": "Managing complex reflection values along an integrated system frame without obscuring important workspace layout elements.",
    "approach": "Set up customized linear polarizer maps within the virtual camera layout, filtering away messy specular clutter while preserving sharp edge details.",
    "outcome": "Supplied clean, balanced product visuals that perfectly present high-end computing components.",
    "whatWeDid": "Virtual camera polarization calibration, stand component look-dev, high-contrast workspace arrangement.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/078/426/560/smaller_square/aayush-choudhary-maxresdefault.jpg?1722070674", "title": "All-in-One Frame Staging", "subtitle": "Cinematic camera path exploring display edge profiles" }
    ]
  },
  {
    "id": "introducing-the-new-lenovo-loq-15irx9",
    "title": "Introducing the new Lenovo LOQ 15IRX9",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/covers/images/075/709/824/large/aayush-choudhary-aayush-choudhary-thumb-2.jpg?1715234050",
    "artstationUrl": "https://www.artstation.com/artwork/xDgzoX",
    "description": "Professional look-development and staging showcase for Introducing the new Lenovo LOQ 15IRX9. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Visualizing accessible next-generation mainstream gaming capabilities.",
    "client": "Lenovo LOQ Launch Portfolio",
    "role": "3D Production Generalist",
    "services": "Angular case asset shading, thermal layout tracking, high-end product arrangement",
    "platforms": "Autodesk Maya, Blender, Octane Render",
    "challenge": "Accurately representing specialized rear-facing thermal blocks while presenting a light, modern overall equipment structure profile.",
    "approach": "Employed targeted hard-edge light paths to track unique product geometry corners, avoiding generic lighting washes across key features.",
    "outcome": "Delivered striking launch asset collections utilized globally across multiple commercial platform campaigns.",
    "whatWeDid": "Chassis edge detail tracking, specialized component look-dev, product visual assembly.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdna.artstation.com/p/assets/covers/images/075/709/824/large/aayush-choudhary-aayush-choudhary-thumb-2.jpg?1715234050", "title": "LOQ 15IRX9 Design Setup", "subtitle": "Angular look-development render exploring rear thermal grids" }
    ]
  },
  {
    "id": "introducing-the-new-lenovo-legion-5i",
    "title": "Introducing the new Lenovo Legion 5i",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/covers/images/075/709/814/large/aayush-choudhary-aayush-choudhary-thumb-3.jpg?1715233917",
    "artstationUrl": "https://www.artstation.com/artwork/aoWRBJ",
    "description": "Professional look-development and staging showcase for Introducing the new Lenovo Legion 5i. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Refining balanced form factors for high-performance visual loops.",
    "client": "Lenovo Core Gaming Portfolio",
    "role": "Lead Look-Dev Generalist",
    "services": "Logo reflections engineering, anodized aluminum color calibration, pipeline assembly",
    "platforms": "Autodesk Maya, Octane Render, After Effects",
    "challenge": "Achieving perfect color consistency across custom anodized aluminum laptop shells under volatile studio configuration settings.",
    "approach": "Configured a centralized spectral lookup table across the asset pipeline, managing hue shifts under high reflection intensities.",
    "outcome": "Delivered clean commercial asset visualizations showcasing precise product properties for core brand updates.",
    "whatWeDid": "Anodized surface synthesis, iridescent logo mapping, unified pipeline look-dev.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdna.artstation.com/p/assets/covers/images/075/709/814/large/aayush-choudhary-aayush-choudhary-thumb-3.jpg?1715233917", "title": "Legion 5i Profile Showcase", "subtitle": "Refined specular feedback loop along top shell assemblies" }
    ]
  },
  {
    "id": "introducing-the-latest-lenovo-legion-pro-5i",
    "title": "Introducing the latest Lenovo Legion Pro 5i",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/covers/images/075/709/766/large/aayush-choudhary-aayush-choudhary-thum1.jpg?1715233780",
    "artstationUrl": "https://www.artstation.com/artwork/EvkV44",
    "description": "Professional look-development and staging showcase for Introducing the latest Lenovo Legion Pro 5i. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Visualizing advanced gaming hardware power layouts with complete data precision.",
    "client": "Lenovo Premium Gaming Division",
    "role": "3D Generalist & Shader TD",
    "services": "Component layout design, high-end texture application, automated scene tracking",
    "platforms": "Autodesk Maya, Substance 3D Painter, Octane Render",
    "challenge": "Presenting deep, crisp product shapes across dark aluminum frames without losing intricate edge configurations in black render zones.",
    "approach": "Set up fine rim-lighting paths targeting complex model edge profiles, ensuring solid visual separation from dark studio background panels.",
    "outcome": "Produced high-quality launch visual assets driving solid visibility across multiple target media channels.",
    "whatWeDid": "Rim light path setup, fine structural look-dev, automated composition tracking.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdna.artstation.com/p/assets/covers/images/075/709/766/large/aayush-choudhary-aayush-choudhary-thum1.jpg?1715233780", "title": "Legion Pro 5i Design Array", "subtitle": "High-contrast edge separation tracking dark aluminum component forms" }
    ]
  },
  {
    "id": "engineering-the-impossible-kqi-air-x",
    "title": "Engineering the Impossible. KQi Air X",
    "categories": ["3D Asset Design"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/067/227/602/smaller_square/aayush-choudhary-maxresdefault.jpg?1694856381",
    "artstationUrl": "https://www.artstation.com/artwork/n0Ow3e",
    "description": "Professional look-development and staging showcase for Engineering the Impossible. KQi Air X. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Presenting advanced carbon fiber execution across urban mobility concepts.",
    "client": "Urban Mobility Visual Exploration",
    "role": "Lead 3D Generalist",
    "services": "Carbon fiber weave layout design, high-poly structural alignment, dynamic staging",
    "platforms": "Blender, Substance 3D Painter, Unreal Engine 5",
    "challenge": "Correctly wrapping multi-directional carbon fiber textures across highly organic, fluid steering column links without visible texture seam breaks.",
    "approach": "Utilized advanced tri-planar texture projection methods inside Substance Painter, linking orientation tracking metrics back to target surface contours.",
    "outcome": "Produced hyper-realistic mobility visual designs perfectly tracking complex composite material responses.",
    "whatWeDid": "Tri-planar texture setup, structural link modeling, high-contrast dynamic environment composition.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/067/227/602/smaller_square/aayush-choudhary-maxresdefault.jpg?1694856381", "title": "KQi Air X Motion Sequence", "subtitle": "Turntable progression tracking seamless carbon material boundaries" }
    ]
  },
  {
    "id": "mercedes-benz-amg-gt-magnetite-black",
    "title": "Mercedes-Benz AMG GT - Magnetite black",
    "categories": ["3D Asset Design"],
    "image": "https://cdnb.artstation.com/p/assets/covers/images/074/380/377/large/aayush-choudhary-aayush-choudhary-thumbnail.jpg?1711950866",
    "artstationUrl": "https://www.artstation.com/artwork/KeKOEx",
    "description": "Professional look-development and staging showcase for Mercedes-Benz AMG GT - Magnetite black. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Capturing deep metallic clear coat flake distributions under strict studio conditions.",
    "client": "Automotive Aesthetics Study",
    "role": "Lighting & Shading TD",
    "services": "Metallic clear coat synthesis, automotive studio layout, reflection optimization",
    "platforms": "Autodesk Maya, Octane Render, Adobe Photoshop",
    "challenge": "Replicating genuine multi-layered car paint properties containing micro-metallic flakes that react realistically to moving light fields.",
    "approach": "Designed a custom layered material node stack controlling flake density, layer thickness, and clear coat absorption parameters.",
    "outcome": "Achieved photorealistic automotive visual assets showcasing crisp surface reflection handling properties.",
    "whatWeDid": "Layered paint node creation, custom car studio staging, reflection pattern calibration.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdnb.artstation.com/p/assets/covers/images/074/380/377/large/aayush-choudhary-aayush-choudhary-thumbnail.jpg?1711950866", "title": "Magnetite Black Evaluation", "subtitle": "Flake visibility assessment under targeted softbox illumination passes" }
    ]
  },
  {
    "id": "the-wish-shorts-india-program-2023",
    "title": "The Wish | Shorts India Program 2023",
    "categories": ["3D Asset Design"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/074/377/946/20240331225453/smaller_square/aayush-choudhary-maxresdefault.jpg?1711943693",
    "artstationUrl": "https://www.artstation.com/artwork/Za4e5G",
    "description": "Professional look-development and staging showcase for The Wish | Shorts India Program 2023. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Crafting rich environmental visual setups for cinematic storytelling platforms.",
    "client": "Shorts India Initiative",
    "role": "Cinematic Layout & Environment Artist",
    "services": "Prop placement design, atmospheric color layout, custom asset staging",
    "platforms": "Blender, Unreal Engine 5, After Effects",
    "challenge": "Maintaining proper visual narrative focus across a heavily dressed cinematic environment while balancing complex global illumination details.",
    "approach": "Utilized strong color theory choices paired with precise lighting paths, guiding user focus toward primary storytelling anchors.",
    "outcome": "Delivered beautiful cinematic short environment layouts widely praised for deep atmospheric presentation qualities.",
    "whatWeDid": "Storytelling layout orchestration, global illumination layout, thematic asset grading.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/074/377/946/20240331225453/smaller_square/aayush-choudhary-maxresdefault.jpg?1711943693", "title": "The Wish Production Pass", "subtitle": "Cinematic sequence exploring ambient atmosphere options" }
    ]
  },
  {
    "id": "mclaren-artura-stealth-360",
    "title": "Mclaren Artura Stealth 360",
    "categories": ["Automotive Lighting", "Product Advertisement"],
    "image": "https://cdnb.artstation.com/p/assets/images/images/074/838/863/large/aayush-choudhary-website.jpg?1713111567",
    "artstationUrl": "https://www.artstation.com/artwork/EvevWe",
    "description": "Professional look-development and staging showcase for Mclaren Artura Stealth 360. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Managing low-reflection matte surfaces along intricate automotive designs.",
    "client": "Automotive Studio Research",
    "role": "Lighting Technical Director",
    "services": "Matte finish look-dev, 360 turntable setup, light gradient calibration",
    "platforms": "Autodesk Maya, Blender, Octane Render",
    "challenge": "Highlighting subtle car body curves on ultra-matte dark finishes without washing out essential component details.",
    "approach": "Positioned custom long, narrow gradient light strips along key body lines, generating smooth edge transitions across low-reflection surfaces.",
    "outcome": "Produced print-ready 360-degree commercial visualization assets highlighting clean automotive structural properties.",
    "whatWeDid": "Matte surface synthesis, custom gradient lighting configuration, 360 camera path setup.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdnb.artstation.com/p/assets/images/images/074/838/863/large/aayush-choudhary-website.jpg?1713111567", "title": "Turntable Mid-Angle View", "subtitle": "Matte finish body contours tracked under linear light setups" }
    ]
  },
  {
    "id": "turbocharged-luminescence-porsche-911-turbo-s-in-digital-desert-oasis",
    "title": "Turbocharged Luminescence: Porsche 911 Turbo S",
    "categories": ["Automotive Lighting"],
    "image": "https://cdna.artstation.com/p/assets/images/images/073/876/454/large/aayush-choudhary-v01.jpg?1710706109",
    "artstationUrl": "https://www.artstation.com/artwork/obk4Bz",
    "description": "Professional look-development and staging showcase for Turbocharged Luminescence: Porsche 911 Turbo S in Digital Desert Oasis. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Blending high-end automotive aesthetics with complex natural desert sets.",
    "client": "Conceptual Environmental Staging",
    "role": "Lead CGI Generalist",
    "services": "Natural environment design, vehicle shader integration, warm sky matching",
    "platforms": "Blender, Substance 3D Painter, Octane Render",
    "challenge": "Successfully matching high-frequency environment elements like desert sand grains with highly reflective, clean vehicle clear coats.",
    "approach": "Utilized advanced environment projection maps linked directly to virtual vehicle paint node settings, generating realistic lighting feedback loop parity.",
    "outcome": "Delivered beautiful high-contrast promotional visuals demonstrating excellent integration across digital landscape assets.",
    "whatWeDid": "Desert terrain asset modeling, integrated clear coat shading, sunset light matching.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdna.artstation.com/p/assets/images/images/073/876/454/large/aayush-choudhary-v01.jpg?1710706109", "title": "Desert Oasis Master Frame", "subtitle": "Integrated vehicle reflection mapping under golden hour lighting setups" }
    ]
  },
  {
    "id": "thinkvision-voip-stack-mc60-and-ms30-product-tour",
    "title": "ThinkVision VoIP Stack MC60 and MS30 Product Tour",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/072/830/998/20240218232133/smaller_square/aayush-choudhary-maxresdefault.jpg?1708320093",
    "artstationUrl": "https://www.artstation.com/artwork/rJrwQL",
    "description": "Professional look-development and staging showcase for ThinkVision VoIP Stack MC60 and MS30 Product Tour. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Presenting modular workspace component interactions with clean structural layouts.",
    "client": "Lenovo Display Accessories",
    "role": "3D Technical Animator",
    "services": "Snap connector mechanics, acoustic mesh shading, macro lens design",
    "platforms": "Autodesk Maya, SideFX Houdini, Octane Render",
    "challenge": "Detailing fine material changes across tight webcam and speaker stack connections within standard presentation loops.",
    "approach": "Set up dedicated macro camera tracking nodes linked to parameter triggers, ensuring sharp focus across fine design properties.",
    "outcome": "Delivered high-clarity promotional tools communicating essential accessory properties cleanly.",
    "whatWeDid": "Macro tracking loop configuration, multi-material optimization, snap animation rigging.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/072/830/998/20240218232133/smaller_square/aayush-choudhary-maxresdefault.jpg?1708320093", "title": "VoIP Component Stack Tour", "subtitle": "Camera path detailing connector layouts and acoustic mesh finishes" }
    ]
  },
  {
    "id": "lenovo-legion-7i-2024-product-tour",
    "title": "Lenovo Legion 7i (2024) Product Tour",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/072/830/808/20240218231508/smaller_square/aayush-choudhary-maxresdefault.jpg?1708319708",
    "artstationUrl": "https://www.artstation.com/artwork/DvR6eA",
    "description": "Professional look-development and staging showcase for Lenovo Legion 7i (2024) Product Tour. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Orchestrating premium launch animations for a high-performance gaming staple.",
    "client": "Lenovo Legion Global Launch",
    "role": "Lead Look-Dev Generalist",
    "services": "Chassis edge profiling, keyboard illumination tracking, automated scene setup",
    "platforms": "Autodesk Maya, Unreal Engine 5, Octane Render",
    "challenge": "Preserving sharp visual definition across dark metal cases under clean commercial studio light fields.",
    "approach": "Implemented specialized linear gradient cards targeting outer frame paths, preventing design lines from washing into deep shadow areas.",
    "outcome": "Supplied ultra-crisp marketing visual arrays deployed across core international launch networks successfully.",
    "whatWeDid": "Gradient reflection mapping, chassis geometry look-dev, launch sequence layout design.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/072/830/808/20240218231508/smaller_square/aayush-choudhary-maxresdefault.jpg?1708319708", "title": "Legion 7i Cinematic Loop", "subtitle": "High-contrast render sequence tracking frame details and layout properties" }
    ]
  },
  {
    "id": "lenovo-tab-m11-2024-product-tour",
    "title": "Lenovo Tab M11 (2024) Product Tour",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/072/830/788/20240218231245/smaller_square/aayush-choudhary-hqdefault.jpg?1708319565",
    "artstationUrl": "https://www.artstation.com/artwork/ble4yE",
    "description": "Professional look-development and staging showcase for Lenovo Tab M11 (2024) Product Tour. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Detailing mobile equipment efficiency through fluid layout animations.",
    "client": "Lenovo Mobile Product Division",
    "role": "3D Asset Artist & Animator",
    "services": "Tablet casing shading, smooth camera transitions, material finish matching",
    "platforms": "Blender, Octane Render Edition, After Effects",
    "challenge": "Rendering realistic screen refractions and smooth case textures without slowing down fast product tour playback scripts.",
    "approach": "Utilized optimized display glass shader layers paired with precise normal map applications, maintaining fast rendering workflows.",
    "outcome": "Produced clean, professional visual tours tracking core design elements effectively.",
    "whatWeDid": "Display refractivity styling, casing normal map setup, product presentation assembly.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/072/830/788/20240218231245/smaller_square/aayush-choudhary-hqdefault.jpg?1708319565", "title": "Tab M11 Operational Sequence", "subtitle": "Product animation loop displaying frame finishes and display profiles" }
    ]
  },
  {
    "id": "lenovo-thinkbook-13x-gen-4-nothing-can-weigh-you-down",
    "title": "Lenovo ThinkBook 13x Gen 4 - Nothing can weigh you down",
    "categories": ["Product Advertisement"],
    "image": "https://cdnb.artstation.com/p/assets/videos/images/072/830/199/20240218224719/smaller_square/aayush-choudhary-hqdefault.jpg?1708318040",
    "artstationUrl": "https://www.artstation.com/artwork/vDqKqa",
    "description": "Professional look-development and staging showcase for Lenovo ThinkBook 13x Gen 4 - Nothing can weigh you down. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Communicating extreme lightweight portable structures through clean layout art.",
    "client": "Lenovo ThinkBook Brand Portfolio",
    "role": "Lead Visualizer & Shader TD",
    "services": "Slim shell look-development, micro-matte texturing, ambient shadow design",
    "platforms": "Autodesk Maya, Substance 3D Painter, Octane Render",
    "challenge": "Emphasizing extreme slim profile dimensions cleanly without losing visibility on vital side connector elements.",
    "approach": "Set up fine rim-lighting paths combined with soft ambient background shadows to cleanly define edge structures.",
    "outcome": "Delivered high-end product visuals deployed across premium hardware marketing streams successfully.",
    "whatWeDid": "Rim light configuration, fine matte finish development, presentation staging.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdnb.artstation.com/p/assets/videos/images/072/830/199/20240218224719/smaller_square/aayush-choudhary-hqdefault.jpg?1708318040", "title": "ThinkBook 13x Profile Pass", "subtitle": "Cinematic presentation tracking slim chassis configurations cleanly" }
    ]
  },
  {
    "id": "mclaren-750s-mclaren-special-operations-edition-spectrum-theme",
    "title": "Mclaren 750S Mclaren Special Operations Edition - SPECTRUM THEME",
    "categories": ["Automotive Lighting"],
    "image": "https://cdnb.artstation.com/p/assets/images/images/074/838/445/large/aayush-choudhary-g-14.jpg?1713110796",
    "artstationUrl": "https://www.artstation.com/artwork/yDeDQK",
    "description": "Professional look-development and staging showcase for Mclaren 750S Mclaren Special Operations Edition - SPECTRUM THEME. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Executing precise multi-tiered studio lighting arrays on custom MSO paint options.",
    "client": "Sickrit Studio Car Portfolio",
    "role": "Lead Lighting & Material Artist",
    "services": "MSO paint matching, reflection field mapping, clean studio layout design",
    "platforms": "Autodesk Maya, Blender, Octane Render",
    "challenge": "Managing complex light breaks along intricate aerodynamic panels without washing out the unique custom paint gradients.",
    "approach": "Engineered tailored softbox matrix rigs tracking car body lines, managing clear coat behavior precisely.",
    "outcome": "Delivered print-ready high-end commercial visualizations displaying premium vehicle surface details cleanly.",
    "whatWeDid": "Custom softbox asset array rigging, paint shader synthesis, clear coat reflection balancing.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdnb.artstation.com/p/assets/images/images/074/838/445/large/aayush-choudhary-g-14.jpg?1713110796", "title": "MSO Spectrum Edition Studio Pass", "subtitle": "Reflection flow tracking along aerodynamic side intake networks" }
    ]
  },
  {
    "id": "lenovo-puresight-2023",
    "title": "Lenovo PureSight (2023)",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/069/254/346/20240218224843/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318123",
    "artstationUrl": "https://www.artstation.com/artwork/xD4RKm",
    "description": "Professional look-development and staging showcase for Lenovo PureSight (2023). Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Detailing complete display color accuracy behaviors through abstract visual arrays.",
    "client": "Lenovo Display Technologies Division",
    "role": "3D Production Artist",
    "services": "Color matrix shader creation, internal panel texturing, screen glare design",
    "platforms": "Autodesk Maya, Octane Render, After Effects",
    "challenge": "Presenting high display color parity and crisp viewing angles without introducing artificial light wash variables.",
    "approach": "Constructed accurate multi-layered glass panel assets paired with localized light path settings, creating natural viewing setups.",
    "outcome": "Delivered highly functional commercial animation panels explaining complex screen technologies beautifully.",
    "whatWeDid": "Glass panel node development, color matrix calibration, anti-glare layout tracking.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/069/254/346/20240218224843/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318123", "title": "PureSight System Matrix", "subtitle": "Visual loop exploring internal screen array color dynamics" }
    ]
  },
  {
    "id": "river-s-edge-portal-where-the-earth-defies-gravity",
    "title": "River's Edge Portal: Where the Earth Defies Gravity",
    "categories": ["3D Asset Design"],
    "image": "https://cdna.artstation.com/p/assets/images/images/067/023/572/large/aayush-choudhary-portal-render-cam.jpg?1694368146",
    "artstationUrl": "https://www.artstation.com/artwork/QXBVbd",
    "description": "Professional look-development and staging showcase for River's Edge Portal: Where the Earth Defies Gravity. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Building deep environmental fantasy spaces using high-poly asset workflows.",
    "client": "Conceptual Landscape Project",
    "role": "Solo Environment Generalist",
    "services": "Terrain displacement sculpting, particle effect staging, custom scene composition",
    "platforms": "Blender, ZBrush, Substance 3D Painter",
    "challenge": "Maintaining crisp, high-resolution texture details across massive sculpted rock structures without stretching mapping layouts.",
    "approach": "Utilized advanced multi-tile UDIM setups paired with fine procedural moss noise masks, ensuring micro-detail consistency.",
    "outcome": "Produced a highly striking environmental scene demonstrating expert control over complex digital landscapes.",
    "whatWeDid": "UDIM texture management, rock displacement sculpting, dynamic atmospheric layout tuning.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdna.artstation.com/p/assets/images/images/067/023/572/large/aayush-choudhary-portal-render-cam.jpg?1694368146", "title": "Portal Landscape Composition", "subtitle": "Final camera frame showing high-poly rock setups and particle details" }
    ]
  },
  {
    "id": "panasonic-mz2000-flagship-2023-oled-tv-with-master-oled-ultimate-panel",
    "title": "Panasonic MZ2000 - Flagship 2023 OLED TV",
    "categories": ["3D Asset Design"],
    "image": "https://cdnb.artstation.com/p/assets/videos/images/067/023/367/smaller_square/aayush-choudhary-maxresdefault.jpg?1694367691",
    "artstationUrl": "https://www.artstation.com/artwork/8bLn9G",
    "description": "Professional look-development and staging showcase for Panasonic MZ2000 - Flagship 2023 OLED TV - with Master OLED Ultimate panel. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Visualizing complete home theater component layouts inside minimal studio sets.",
    "client": "Home Electronics Visualization Project",
    "role": "CGI Generalist & Lighting TD",
    "services": "Speaker chassis modeling, screen emission configuration, product presentation",
    "platforms": "Blender, Octane Render, Photoshop",
    "challenge": "Presenting deep screen emission brightness levels accurately alongside fine, low-contrast speaker mesh finishes.",
    "approach": "Configured precise light balance settings separating emissive screen objects from soft panel bounce networks.",
    "outcome": "Successfully generated professional commercial assets tracking clean structural product properties.",
    "whatWeDid": "Emissive material tracking, product assembly look-dev, minimal layout design.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdnb.artstation.com/p/assets/videos/images/067/023/367/smaller_square/aayush-choudhary-maxresdefault.jpg?1694367691", "title": "Panasonic MZ2000 Tour Loop", "subtitle": "Product visual exploration outlining chassis details and panel setups" }
    ]
  },
  {
    "id": "lenovo-thinkcentre-neo-50s-g4-small-in-size-big-on-performance",
    "title": "Lenovo ThinkCentre Neo 50s (G4) – Performance Showcase",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/067/020/532/20240218224909/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318150",
    "artstationUrl": "https://www.artstation.com/artwork/vDRrOx",
    "description": "Professional look-development and staging showcase for Lenovo ThinkCentre Neo 50s (G4) – Small in Size, Big on Performance. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Detailing high computing capabilities inside ultra-compact desktop frames.",
    "client": "Lenovo Small Form Factor Division",
    "role": "3D Production Artist",
    "services": "Front panel shading, micro-texture development, layout creation",
    "platforms": "Autodesk Maya, Octane Render, After Effects",
    "challenge": "Presenting detailed texture transitions across small device cases without losing crisp edge information in tight layout grids.",
    "approach": "Set up fine rim illumination tracks combined with tight camera paths to cleanly document physical component layouts.",
    "outcome": "Delivered high-quality product visuals driving clean visibility across global commercial asset catalogs.",
    "whatWeDid": "Rim light path configuration, micro texture mapping, small form factor staging.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/067/020/532/20240218224909/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318150", "title": "Neo 50s Production Loop", "subtitle": "Compact case sequence tracking fine texturing and port layouts" }
    ]
  },
  {
    "id": "lenovo-yoga-slim-7-2023-product-tour",
    "title": "Lenovo Yoga Slim 7 (2023) Product Tour",
    "categories": ["Product Advertisement"],
    "image": "https://cdnb.artstation.com/p/assets/videos/images/067/020/557/20240218225111/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318271",
    "artstationUrl": "https://www.artstation.com/artwork/ZaXVYZ",
    "description": "Professional look-development and staging showcase for Lenovo Yoga Slim 7 (2023) Product Tour. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Tracking high-end mobility design properties through smooth visual transitions.",
    "client": "Lenovo Yoga Brand Portfolio",
    "role": "Lead Look-Dev Generalist",
    "services": "Aluminum surface shading, screen pivot mapping, product layout creation",
    "platforms": "Autodesk Maya, Octane Render, Premiere Pro",
    "challenge": "Achieving realistic reflections along slim aluminum frame profiles without losing visibility on fine side design points.",
    "approach": "Positioned soft gradient light strips along primary body edges, controlling specular reflection behaviors cleanly.",
    "outcome": "Supplied crisp commercial visuals used across essential international digital marketing campaigns successfully.",
    "whatWeDid": "Aluminum texture synthesis, pivot mechanic animation, premium studio staging.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdnb.artstation.com/p/assets/videos/images/067/020/557/20240218225111/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318271", "title": "Yoga Slim 7 System Tour", "subtitle": "Cinematic sequence exploring chassis finishes and display profiles" }
    ]
  },
  {
    "id": "introducing-the-sony-wh-ch520-on-ear-wireless-headphones",
    "title": "Introducing the Sony WH-CH520 On-ear Wireless Headphones",
    "categories": ["3D Asset Design", "Product Advertisement"],
    "image": "https://cdnb.artstation.com/p/assets/covers/images/067/023/333/large/aayush-choudhary-aayush-choudhary-2.jpg?1708318200",
    "artstationUrl": "https://www.artstation.com/artwork/EvgmR2",
    "description": "Professional look-development and staging showcase for Introducing the Sony WH-CH520 On-ear Wireless Headphones. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Replicating intricate matte polymers and ergonomic comfort details.",
    "client": "Consumer Audio Visualization Study",
    "role": "Solo CGI Generalist",
    "services": "Polymer texture development, ear cushion look-dev, studio light staging",
    "platforms": "Blender, Substance 3D Painter, Arnold Renderer",
    "challenge": "Balancing the low-contrast look of soft ear cushion textures against hard injected plastic components under high studio exposure.",
    "approach": "Implemented micro-height displacement maps on soft cushion structures, combined with fine multi-layered subsurface scattering nodes.",
    "outcome": "Produced high-quality commercial visuals tracking realistic material behaviors across clean product presentation steps.",
    "whatWeDid": "Polymer shader creation, cushion displacement mapping, high-contrast studio layout staging.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdnb.artstation.com/p/assets/covers/images/067/023/333/large/aayush-choudhary-aayush-choudhary-2.jpg?1708318200", "title": "Studio Macro View", "subtitle": "Material comparison tracking hard plastics and soft ear configurations" }
    ]
  },
  {
    "id": "mclaren-artura-spider-stealth-360",
    "title": "Mclaren Artura Spider Stealth 360",
    "categories": ["Automotive Lighting"],
    "image": "https://cdna.artstation.com/p/assets/images/images/074/839/244/large/aayush-choudhary-screenshot-2.jpg?1713112145",
    "artstationUrl": "https://www.artstation.com/artwork/04G4Wy",
    "description": "Professional look-development and staging showcase for Mclaren Artura Spider Stealth 360. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Tracing high-end conversion mechanics along custom supercar frames.",
    "client": "Sickrit Studio Car Portfolio",
    "role": "Lighting Technical Director",
    "services": "Matte paint look-development, 360 camera path setup, reflection calibration",
    "platforms": "Autodesk Maya, Blender, Octane Render",
    "challenge": "Tracking clean reflection flows along open roof components without introducing messy visual artifacts in dark cabin areas.",
    "approach": "Configured custom reflection cards targeting vehicle body lines, blocking unwanted light spill cleanly.",
    "outcome": "Delivered high-quality 360-degree commercial assets tracking premium structural details perfectly.",
    "whatWeDid": "Matte paint node matching, custom studio reflection tuning, 360 composition staging.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdna.artstation.com/p/assets/images/images/074/839/244/large/aayush-choudhary-screenshot-2.jpg?1713112145", "title": "Spider Open Cabin Staging", "subtitle": "Turntable progression tracking body contours and interior accents" }
    ]
  },
  {
    "id": "lenovo-legion-towers-power-for-the-way-you-play",
    "title": "Lenovo Legion Towers: Power for the Way You Play",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/067/020/458/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318352",
    "artstationUrl": "https://www.artstation.com/artwork/NyBV0b",
    "description": "Professional look-development and staging showcase for Lenovo Legion Towers: Power for the Way You Play. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Presenting deep component integration patterns across enterprise gaming setups.",
    "client": "Lenovo Gaming Desktop Division",
    "role": "Lead Lookdevelopment Artist",
    "services": "Fluid tube shader engineering, side glass reflection tuning, RGB system design",
    "platforms": "Autodesk Maya, SideFX Houdini, Octane Render",
    "challenge": "Detailing internal cooling pipes and component steps clearly behind a dark, highly reflective tempered glass side panel asset.",
    "approach": "Set up dual light paths splitting interior case illumination tracks from external studio reflection arrays, balancing opacity values.",
    "outcome": "Successfully built striking commercial visualization blocks tracking high-end gaming desktop properties perfectly.",
    "whatWeDid": "Tempered glass look-development, internal component illumination mapping, custom environmental composition.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/067/020/458/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318352", "title": "Internal Component Tour", "subtitle": "Product sequence exploring liquid pipeline details and internal hardware blocks" }
    ]
  },
  {
    "id": "lenovo-yoga-pro-7i-2023-product-tour",
    "title": "Lenovo Yoga Pro 7i (2023) Product Tour",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/066/828/046/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318388",
    "artstationUrl": "https://www.artstation.com/artwork/OGBm5k",
    "description": "Professional look-development and staging showcase for Lenovo Yoga Pro 7i (2023) Product Tour. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Tracking absolute computing efficiency through premium product visual paths.",
    "client": "Lenovo Premium Mobile Division",
    "role": "3D Production Generalist",
    "services": "Chassis surface texturing, edge contour tracking, studio layout creation",
    "platforms": "Autodesk Maya, Octane Render, After Effects",
    "challenge": "Presenting clean visual continuity across slim metallic cases without losing fine tracking definitions on interface components.",
    "approach": "Deployed soft linear highlight sheets targeting primary chassis edges, isolating structural form boundaries cleanly.",
    "outcome": "Supplied ultra-crisp marketing visual arrays deployed across core international launch networks successfully.",
    "whatWeDid": "Chassis look-dev optimization, edge highlight mapping, product tour sequence layout.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/066/828/046/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318388", "title": "Yoga Pro 7i Visual Loop", "subtitle": "High-contrast product pass exploring frame finishes and connection layouts" }
    ]
  },
  {
    "id": "lenovo-premium-suite-2023",
    "title": "Lenovo Premium Suite (2023)",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/066/827/982/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318465",
    "artstationUrl": "https://www.artstation.com/artwork/KeBOby",
    "description": "Professional look-development and staging showcase for Lenovo Premium Suite (2023). Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Detailing absolute material connection parities across complex multi-device product grids.",
    "client": "Lenovo Ecosystem Design Group",
    "role": "Lead Look-Dev Generalist",
    "services": "Ecosystem asset texturing, multi-device setup mapping, studio lighting layout",
    "platforms": "Autodesk Maya, Octane Render, After Effects",
    "challenge": "Achieving absolute material finish harmony across multiple unique device forms under a unified studio environment map setup.",
    "approach": "Developed global master shader parameters tracking exact production material targets, balancing multi-device reflection metrics.",
    "outcome": "Produced a highly polished, clean visual package capturing premium ecosystem hardware properties beautifully.",
    "whatWeDid": "Ecosystem shader management, unified studio light balancing, multi-device composition staging.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/066/827/982/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318465", "title": "Premium Suite Unified View", "subtitle": "Ecosystem animation loop exploring multiple concurrent hardware profiles" }
    ]
  },
  {
    "id": "introducing-the-sony-wh-ch720n-over-ear-noise-cancelling-wireless-headphones",
    "title": "Introducing the Sony WH-CH720N Over-ear Noise Cancelling Wireless Headphones",
    "categories": ["3D Asset Design"],
    "image": "https://cdna.artstation.com/p/assets/covers/images/067/023/234/large/aayush-choudhary-aayush-choudhary-untitled.jpg?1694367453",
    "artstationUrl": "https://www.artstation.com/artwork/LRBV0A",
    "description": "Professional look-development and staging showcase for Introducing the Sony WH-CH720N Over-ear Noise Cancelling Wireless Headphones. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Detailing advanced mechanical hinges and textured material profiles.",
    "client": "Consumer Audio Asset Study",
    "role": "Lead Visualizer & Shader TD",
    "services": "Hinges mechanical rigging, matte plastic look-dev, specular falloff tuning",
    "platforms": "Blender, Substance 3D Painter, Arnold Renderer",
    "challenge": "Tracking clean reflection cuts across custom rotating headband linkages without revealing texture seams or mesh stretching anomalies.",
    "approach": "Deployed precision custom vertex normal configurations along moving component joints, tracking continuous specular falloffs.",
    "outcome": "Successfully built useful visual documentation tools explaining vital hardware layout properties perfectly.",
    "whatWeDid": "Vertex normal optimization, dynamic joint rigging, custom polymer texture creation.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdna.artstation.com/p/assets/covers/images/067/023/234/large/aayush-choudhary-aayush-choudhary-untitled.jpg?1694367453", "title": "Hinges Setup Overview", "subtitle": "Specular response validation across movable headband linkages" }
    ]
  },
  {
    "id": "the-world-s-most-powerful-ai-tuned-gaming-laptops-the-legion-pro-series",
    "title": "The World’s Most Powerful AI Tuned Gaming laptops | The Legion Pro Series",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/066/792/654/smaller_square/aayush-choudhary-hqdefault.jpg?1693806761",
    "artstationUrl": "https://www.artstation.com/artwork/el5dQD",
    "description": "Professional look-development and staging showcase for The World’s Most Powerful AI Tuned Gaming laptops | The Legion Pro Series. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Unleashing next-level computing power tracking structural chassis launch animations.",
    "client": "Lenovo Premium Gaming Portfolio",
    "role": "3D Technical Director",
    "services": "Vent structural mapping, chassis layout optimization, launch sequence composition",
    "platforms": "Autodesk Maya, SideFX Houdini, Octane Render",
    "challenge": "Balancing complex component visibility maps inside an aggressive, high-contrast promotional frame asset requirement.",
    "approach": "Set up fine rim illumination arrays targeting outer chassis corners, ensuring clean visual separation from dark studio panels.",
    "outcome": "Produced high-quality launch visual assets driving solid visibility across multiple target media channels.",
    "whatWeDid": "Chassis edge detail tracking, specialized component look-dev, launch sequence arrangement.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/066/792/654/smaller_square/aayush-choudhary-hqdefault.jpg?1693806761", "title": "Legion Pro Series Teaser", "subtitle": "High-intensity hardware loop exploring top frame construction details" }
    ]
  },
  {
    "id": "lenovo-yoga-pro-9i-2023-product-tour",
    "title": "Lenovo Yoga Pro 9i (2023) Product Tour",
    "categories": ["Product Advertisement"],
    "image": "https://cdnb.artstation.com/p/assets/videos/images/066/827/933/smaller_square/aayush-choudhary-hqdefault.jpg?1693880631",
    "artstationUrl": "https://www.artstation.com/artwork/obl2vL",
    "description": "Professional look-development and staging showcase for Lenovo Yoga Pro 9i (2023) Product Tour. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Detailing premium content creator tool specs through clean product loops.",
    "client": "Lenovo Creator Portfolio Group",
    "role": "Lead Lookdevelopment Artist",
    "services": "Display panel calibration, fine chassis finish texturing, composition design",
    "platforms": "Autodesk Maya, Octane Render, After Effects",
    "challenge": "Presenting clean visual definitions along high-contrast display edges without washing out subtle chassis texture details.",
    "approach": "Utilized advanced layered subsurface material properties paired with precise light path setups, generating crisp visual tracking fields.",
    "outcome": "Delivered high-quality promotional videos capturing premium hardware layout elements beautifully.",
    "whatWeDid": "Chassis look-dev configuration, display refractivity tuning, product tour presentation setup.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdnb.artstation.com/p/assets/videos/images/066/827/933/smaller_square/aayush-choudhary-hqdefault.jpg?1693880631", "title": "Yoga Pro 9i Frame Sequence", "subtitle": "Macro camera path evaluating structural aluminum shell properties" }
    ]
  },
  {
    "id": "lenovo-x-power-on-yoga-pro-2023",
    "title": "Lenovo X Power on Yoga Pro (2023)",
    "categories": ["Product Advertisement"],
    "image": "https://cdnb.artstation.com/p/assets/videos/images/066/827/863/smaller_square/aayush-choudhary-maxresdefault.jpg?1693880463",
    "artstationUrl": "https://www.artstation.com/artwork/obl2vq",
    "description": "Professional look-development and staging showcase for Lenovo X Power on Yoga Pro (2023). Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Visualizing abstract computing processing paths across internal motherboard components.",
    "client": "Lenovo Hardware Marketing Division",
    "role": "3D Technical Generalist",
    "services": "Motherboard component design, abstract thermal animation, particle staging",
    "platforms": "Autodesk Maya, SideFX Houdini, Octane Render",
    "challenge": "Creating an engaging visual sequence tracing complex processing tasks across dense internal electrical tracks.",
    "approach": "Engineered customized data string animations using procedural path objects, matching hardware chassis positions precisely.",
    "outcome": "Successfully supplied striking abstract technical sequences explaining processing power capabilities effectively.",
    "whatWeDid": "Procedural data flow tracking, electrical track styling, macro hardware illumination design.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdnb.artstation.com/p/assets/videos/images/066/827/863/smaller_square/aayush-choudhary-maxresdefault.jpg?1693880463", "title": "X Power Processing Pass", "subtitle": "Abstract visualization tracking active electrical components inside the frame" }
    ]
  },
  {
    "id": "lenovo-tab-extreme-be-extremely-you",
    "title": "Lenovo Tab Extreme | Be extremely you",
    "categories": ["Product Advertisement"],
    "image": "https://cdnb.artstation.com/p/assets/videos/images/066/792/611/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318724",
    "artstationUrl": "https://www.artstation.com/artwork/n0LwZE",
    "description": "Professional look-development and staging showcase for Lenovo Tab Extreme | Be extremely you. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Showcasing expansive display fields and modular computing accessories.",
    "client": "Lenovo Premium Tablet Group",
    "role": "Lead Look-Dev Generalist",
    "services": "Screen glass look-development, keyboard magnet rigging, finish matching",
    "platforms": "Autodesk Maya, Octane Render, Premiere Pro",
    "challenge": "Balancing complex specular responses along extensive display fields without losing visibility on slim structural edges.",
    "approach": "Implemented linear camera polarization grids inside virtual viewports, filtering out unwanted lighting distractions cleanly.",
    "outcome": "Supplied ultra-crisp launch asset portfolios utilized globally across core marketing campaigns.",
    "whatWeDid": "Display refractivity management, magnetic assembly tracking, high-contrast studio layout design.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdnb.artstation.com/p/assets/videos/images/066/792/611/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318724", "title": "Tab Extreme Assembly View", "subtitle": "Product sequence exploring modular component linkages cleanly" }
    ]
  },
  {
    "id": "lenovo-yoga-book-9i",
    "title": "Lenovo Yoga Book 9i",
    "categories": ["Product Advertisement"],
    "image": "https://cdnb.artstation.com/p/assets/videos/images/066/792/417/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318770",
    "artstationUrl": "https://www.artstation.com/artwork/w05AP9",
    "description": "Professional look-development and staging showcase for Lenovo Yoga Book 9i. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Redefining multi-screen mobile layout configurations through cinematic CGI steps.",
    "client": "Lenovo Innovation Showcase Team",
    "role": "Lead Technical Asset Artist",
    "services": "Dual screen asset design, folding hinge rigging, premium look-dev",
    "platforms": "Autodesk Maya, Substance 3D Painter, Octane Render",
    "challenge": "Managing concurrent reflection values across two separate folding display components without cluttering core product features.",
    "approach": "Set up independent specular occlusion matrices across display areas, ensuring high visual clarity from multiple viewing tracking paths.",
    "outcome": "Delivered high-quality product visuals driving clean visibility across global commercial asset catalogs.",
    "whatWeDid": "Dual screen asset development, hinge transformation tracking, premium workspace staging.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdnb.artstation.com/p/assets/videos/images/066/792/417/smaller_square/aayush-choudhary-maxresdefault.jpg?1708318770", "title": "Yoga Book Dual Screen Tour", "subtitle": "Cinematic camera pass tracking dual display panel interactions cleanly" }
    ]
  },
  {
    "id": "wacom-tab-hard-surface-modeling",
    "title": "Wacom Tab - (Hard Surface Modeling)",
    "categories": ["3D Asset Design"],
    "image": "https://cdnb.artstation.com/p/assets/images/images/027/944/081/large/aayush-choudhary-button2.jpg?1593025053",
    "artstationUrl": "https://www.artstation.com/artwork/ykbWXJ",
    "description": "Professional look-development and staging showcase for Wacom Tab - (Hard Surface Modeling). Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2020",
    "tagline": "Developing ultra-precise topology configurations for hard-surface components.",
    "client": "Industrial Modeling Exploration",
    "role": "Solo Hard-Surface Asset Artist",
    "services": "Sub-divisional wireframe modeling, interface panel styling, normal map baking",
    "platforms": "Autodesk Maya, Substance 3D Painter, Arnold Renderer",
    "challenge": "Maintaining completely clean, distortion-free sub-divisional mesh fields around tight corner interfaces and button housing holes.",
    "approach": "Applied manual loop routing configurations along structural boundaries, managing flawless vertex normal distributions across flat faces.",
    "outcome": "Achieved production-ready hard-surface asset layouts featuring perfect topology responses under close inspection passes.",
    "whatWeDid": "Sub-divisional topology management, interface component texturing, macro look-dev staging.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdnb.artstation.com/p/assets/images/images/027/944/081/large/aayush-choudhary-button2.jpg?1593025053", "title": "Wireframe Grid Check", "subtitle": "Sub-divisional flow evaluation across tight component corners" }
    ]
  },
  {
    "id": "lenovo-magic-bay-accessories-the-magic-of-modularity",
    "title": "Lenovo Magic Bay Accessories – The Magic of Modularity",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/066/827/824/smaller_square/aayush-choudhary-maxresdefault.jpg?1693880317",
    "artstationUrl": "https://www.artstation.com/artwork/39xqGD",
    "description": "Professional look-development and staging showcase for Lenovo Magic Bay Accessories – The Magic of Modularity. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Highlighting modular attachment configurations through precise hardware tracking loops.",
    "client": "Lenovo Modular Innovation Group",
    "role": "3D Technical Animator",
    "services": "Pogo pin link animation, magnetic connection staging, asset mapping",
    "platforms": "Autodesk Maya, Octane Render, After Effects",
    "challenge": "Detailing minuscule electronic connection pins and small mounting hooks clearly inside high-speed product presentations.",
    "approach": "Paired custom macro focal camera paths with subtle animated connection track alignments, creating clean focus anchors.",
    "outcome": "Delivered high-clarity promotional tools communicating complex modular layout capabilities cleanly.",
    "whatWeDid": "Macro tracking loop setup, modular assembly texturing, connection mechanic rigging.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/066/827/824/smaller_square/aayush-choudhary-maxresdefault.jpg?1693880317", "title": "Magic Bay Accessory Staging", "subtitle": "Product animation loop tracing modular component connection sequences" }
    ]
  },
  {
    "id": "lenovo-thinkbook-16p-gen-4-made-for-no-holds-barred-work",
    "title": "Lenovo ThinkBook 16p Gen 4 – Made for no holds barred work!",
    "categories": ["Product Advertisement"],
    "image": "https://cdnb.artstation.com/p/assets/videos/images/066/792/683/smaller_square/aayush-choudhary-maxresdefault.jpg?1693806902",
    "artstationUrl": "https://www.artstation.com/artwork/KeB6zB",
    "description": "Professional look-development and staging showcase for Lenovo ThinkBook 16p Gen 4 – Made for no holds barred work!. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Presenting large professional work platforms within clean office ambient environments.",
    "client": "Lenovo ThinkBook Launch Division",
    "role": "Lead Lookdevelopment Generalist",
    "services": "Chassis surface texturing, keyboard tray look-dev, layout configuration",
    "platforms": "Autodesk Maya, Octane Render, After Effects",
    "challenge": "Achieving balanced surface definition across expansive matte alloy panels without losing crisp definition along tracking trackpad borders.",
    "approach": "Set up fine rim illumination tracks combined with soft studio light boxes, isolating structural form boundaries cleanly.",
    "outcome": "Supplied ultra-crisp launch asset portfolios utilized globally across core marketing campaigns.",
    "whatWeDid": "Chassis alloy development, trackpad normal optimization, professional environment assembly.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdnb.artstation.com/p/assets/videos/images/066/792/683/smaller_square/aayush-choudhary-maxresdefault.jpg?1693806902", "title": "ThinkBook 16p Visual Pass", "subtitle": "Chassis progression sequence tracking premium workspace properties cleanly" }
    ]
  },
  {
    "id": "lenovo-thinkvision-p49w-30-monitor-ultra-wide-curved-to-boost-productivity",
    "title": "Lenovo ThinkVision P49w-30 Monitor: Ultra-wide curved to boost productivity",
    "categories": ["Product Advertisement"],
    "image": "https://cdnb.artstation.com/p/assets/videos/images/066/792/463/smaller_square/aayush-choudhary-maxresdefault.jpg?1693806194",
    "artstationUrl": "https://www.artstation.com/artwork/49qoaW",
    "description": "Professional look-development and staging showcase for Lenovo ThinkVision P49w-30 Monitor: Ultra-wide curved to boost productivity. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Detailing extensive curved workspace display integration steps inside clean studio setups.",
    "client": "Lenovo Premium Display Division",
    "role": "Lead Visualizer & Lighting TD",
    "services": "Curved panel asset development, screen glare configuration, profile tracking",
    "platforms": "Autodesk Maya, SideFX Houdini, Octane Render",
    "challenge": "Managing wide reflection bands along a massive 49-inch curved panel asset without hiding essential thin edge structural profiles.",
    "approach": "Implemented precise linear camera polarization nodes across virtual viewports, eliminating messy lighting artifacts cleanly.",
    "outcome": "Produced high-quality commercial visualizations perfectly presenting high-end workspace component profiles.",
    "whatWeDid": "Curved glass shader styling, display grid development, premium studio composition staging.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdnb.artstation.com/p/assets/videos/images/066/792/463/smaller_square/aayush-choudhary-maxresdefault.jpg?1693806194", "title": "ThinkVision Ultra-wide Setup", "subtitle": "Product animation loop tracing display contours and panel options" }
    ]
  },
  {
    "id": "thinkcentre-tiny-desktops-born-with-innovative-dna",
    "title": "ThinkCentre Tiny Desktops: Born with Innovative DNA",
    "categories": ["3D Asset Design"],
    "image": "https://cdna.artstation.com/p/assets/videos/images/066/791/894/smaller_square/aayush-choudhary-maxresdefault.jpg?1693804100",
    "artstationUrl": "https://www.artstation.com/artwork/qeYLeR",
    "description": "Professional look-development and staging showcase for ThinkCentre Tiny Desktops: Born with Innovative DNA. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2023",
    "tagline": "Showcasing structural density configurations within ultra-slim enterprise hardware forms.",
    "client": "Lenovo Desktop Architecture Studio",
    "role": "3D Production Generalist",
    "services": "Mesh hole grid mapping, custom casing texturing, interface layout design",
    "platforms": "Autodesk Maya, Blender, Octane Render",
    "challenge": "Rendering high-density ventilation grill structures cleanly without introducing texture artifacts or stretching along panel links.",
    "approach": "Utilized advanced procedural alpha channels linked to target mesh properties, tracking under narrow spotlight setups.",
    "outcome": "Delivered clean commercial asset visualizations showcasing precise product properties for core brand updates.",
    "whatWeDid": "Ventilation channel management, metallic texture look-dev, multi-angle studio layout staging.",
    "mediaGallery": [
      { "type": "video", "url": "https://cdna.artstation.com/p/assets/videos/images/066/791/894/smaller_square/aayush-choudhary-maxresdefault.jpg?1693804100", "title": "Tiny Desktop Core Pass", "subtitle": "High-contrast render sequence tracking mesh structures and case elements" }
    ]
  },
  {
    "id": "legion-7-series-amd-portfolio-video",
    "title": "Legion 7 Series (AMD) Portfolio Video",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/covers/images/072/830/776/large/aayush-choudhary-aayush-choudhary-screenshot-9.jpg?1708319460",
    "artstationUrl": "https://www.artstation.com/artwork/04rY4E",
    "description": "Professional look-development and staging showcase for Legion 7 Series (AMD) Portfolio Video. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2024",
    "tagline": "Executing high-speed camera paths tracking custom performance hardware releases.",
    "client": "Lenovo Global Gaming Campaign",
    "role": "Lead Look-Dev Generalist",
    "services": "Chassis texture mapping, high-speed camera layout, environmental tracking",
    "platforms": "Autodesk Maya, Octane Render, Premiere Pro",
    "challenge": "Maintaining pristine material clarity and clean specular tracking lines during fast camera sweeps across chassis contours.",
    "approach": "Designed a custom lookup track managing sampling parameters relative to camera motion changes, avoiding motion artifact washes.",
    "outcome": "Delivered high-octane marketing visual loops driving strong engagement across launch distribution points.",
    "whatWeDid": "Dynamic sampling configuration, chassis alloy texturing, high-speed sequence arrangement.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdna.artstation.com/p/assets/covers/images/072/830/776/large/aayush-choudhary-aayush-choudhary-screenshot-9.jpg?1708319460", "title": "Legion AMD Launch Pass", "subtitle": "High-contrast visual loop tracking dynamic frame reflection trajectories" }
    ]
  },
  {
    "id": "brick-house",
    "title": "Brick House",
    "categories": ["3D Asset Design"],
    "image": "https://cdnb.artstation.com/p/assets/images/images/042/019/523/large/aayush-choudhary-f5.jpg?1633365938",
    "artstationUrl": "https://www.artstation.com/artwork/3dAyro",
    "description": "Professional look-development and staging showcase for Brick House. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2021",
    "tagline": "Building deep architectural environmental art using advanced displacement systems.",
    "client": "Stylized Environment Study",
    "role": "Solo Environment Artist",
    "services": "Brick displacement mapping, atmospheric layout creation, custom texture building",
    "platforms": "Blender, ZBrush, Substance 3D Painter",
    "challenge": "Achieving highly tactile, jagged brick surface profiles without bloating scene vertex budgets beyond rendering stability thresholds.",
    "approach": "Combined fine vector displacement maps built inside ZBrush with highly optimized micro-poly tessellation nodes inside the render layout.",
    "outcome": "Produced a highly beautiful, clean environmental scene showcasing expert control over deep tactile landscape details.",
    "whatWeDid": "Vector displacement setup, micro-tessellation management, warm environmental lighting calibration.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdnb.artstation.com/p/assets/images/images/042/019/523/large/aayush-choudhary-f5.jpg?1633365938", "title": "Tactile Brick Environment", "subtitle": "Final camera pass tracking texture displacement and atmospheric lighting responses" }
    ]
  },
  {
    "id": "mytholojam-march-2022-samurai-farmhouse",
    "title": "Mytholojam March 2022 | Samurai Farmhouse",
    "categories": ["3D Asset Design"],
    "image": "https://cdna.artstation.com/p/assets/images/images/047/060/894/large/aayush-choudhary-thumbnail.jpg?1646669532",
    "artstationUrl": "https://www.artstation.com/artwork/g8GkdQ",
    "description": "Professional look-development and staging showcase for Mytholojam March 2022 | Samurai Farmhouse. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2022",
    "tagline": "Constructing beautiful historical structures under strict hackathon timeline limits.",
    "client": "Mytholojam Live Challenge",
    "role": "Solo Environment Generalist",
    "services": "Modular roof segment design, custom timber texturing, landscape composition",
    "platforms": "Blender, Substance 3D Painter, Photoshop",
    "challenge": "Building a complete, visually striking historical scene containing authentic wood properties under tight submission limits.",
    "approach": "Created an efficient assembly system utilizing modular wood beam components and reusable trim sheet texture configurations.",
    "outcome": "Successfully completed challenge asset arrays widely recognized for strong historical environmental staging elements.",
    "whatWeDid": "Modular component design, trim sheet texture synthesis, atmospheric look-dev tracking.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdna.artstation.com/p/assets/images/images/047/060/894/large/aayush-choudhary-thumbnail.jpg?1646669532", "title": "Samurai Farmhouse Master Frame", "subtitle": "Modular architectural assembly tracking custom tile and timber layouts" }
    ]
  },
  {
    "id": "colt-python-royal-spade",
    "title": "Colt Python - Royal Spade",
    "categories": ["3D Asset Design"],
    "image": "https://cdna.artstation.com/p/assets/covers/images/038/701/056/large/aayush-choudhary-aayush-choudhary-denoise-exp-size.jpg?1623822373",
    "artstationUrl": "https://www.artstation.com/artwork/8eYdbE",
    "description": "Professional look-development and staging showcase for Colt Python - Royal Spade. Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2021",
    "tagline": "Baking intricate ornamental engravings flawlessly onto optimized low-poly weapon models.",
    "client": "Hard-Surface Prop Design Study",
    "role": "Solo Weapon Generalist",
    "services": "Ornamental handle modeling, weathered steel texturing, normal map baking",
    "platforms": "Blender, Substance 3D Painter, Marmoset Toolbag",
    "challenge": "Preserving complex floral filigree relief details perfectly without increasing real-time game budget polygon limits.",
    "approach": "Sculpted ornate relief work patterns cleanly on high-poly target models, executing high-resolution 16-bit normal map bakes.",
    "outcome": "Produced high-quality hard-surface weapon assets featuring excellent texture parity under close viewport checking passes.",
    "whatWeDid": "High-poly filigree sculpting, 16-bit normal map baking, weathered steel look-development.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdna.artstation.com/p/assets/covers/images/038/701/056/large/aayush-choudhary-aayush-choudhary-denoise-exp-size.jpg?1623822373", "title": "Engraving Detail Pass", "subtitle": "16-bit normal details interacting with weathered metal alloy finishes" }
    ]
  },
  {
    "id": "wireless-earphone-product-design",
    "title": "Wireless Earphone ( PRODUCT DESIGN )",
    "categories": ["Product Advertisement"],
    "image": "https://cdna.artstation.com/p/assets/images/images/027/944/264/large/aayush-choudhary-2-earphone.jpg?1604867134",
    "artstationUrl": "https://www.artstation.com/artwork/L32XlK",
    "description": "Professional look-development and staging showcase for Wireless Earphone ( PRODUCT DESIGN ). Rendered to demonstrate high-fidelity material behaviors and intricate detail precision.",
    "year": "2020",
    "tagline": "Tracking organic earbud curvatures and complex high-gloss plastic finishes.",
    "client": "Industrial Product Asset Study",
    "role": "Lead CGI Visualizer",
    "services": "Ergonomic case modeling, glossy texture balancing, contact shadow configuration",
    "platforms": "Autodesk Maya, Blender, Octane Render",
    "challenge": "Avoiding messy light distortions along tight, seamless high-gloss composite shells inside high-contrast layout grids.",
    "approach": "Configured custom continuous topology loops paired with precise edge smoothing controls, removing reflection anomalies cleanly.",
    "outcome": "Achieved beautiful product presentation assets showcasing crisp surface reflection response configurations perfectly.",
    "whatWeDid": "Ergonomic component assembly, high-gloss shell styling, minimal studio staging setup.",
    "mediaGallery": [
      { "type": "image", "url": "https://cdna.artstation.com/p/assets/images/images/027/944/264/large/aayush-choudhary-2-earphone.jpg?1604867134", "title": "Glossy Shell Presentation", "subtitle": "Specular distribution check along high-gloss plastic shell contours" }
    ]
  }

];

export const FEATURED_PROJECT: Project = {
  id: "the-studio-edit",
  title: "The Studio Edit",
  subtitle: "A Cinematic Audio-Visual Experience",
  description: "A dark, atmospheric cinematic animation showcasing procedural simulation, realistic material behaviors, and dynamic physics workflows. The project features rigid body collisions colliding to physical frequencies, and photorealistic lighting designed to evoke a sense of quiet grandeur.",
  roles: ["Director", "Lead 3D Generalist", "VFX Artist", "Sound Designer"],
  duration: "4 Months (Winter 2025)",
  client: "Personal Conceptual Release",
  embedColor: "rgba(255, 77, 0, 0.1)"
};