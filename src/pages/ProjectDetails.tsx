import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, ArrowUpRight, Cpu, Layers, Sparkles, MoveRight, ChevronRight, Check, Eye
} from "lucide-react";
import { GALLERY_ITEMS, GalleryItem, CaseStudyDetails } from "../data";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the current gallery item
  const galleryItem = GALLERY_ITEMS.find((item) => item.id === id) || GALLERY_ITEMS[0];

  const getCaseDetail = (item: GalleryItem): CaseStudyDetails => {
    const cleanTitle = item.title.split("-")[0].split("//")[0].trim();
    const idLower = item.id.toLowerCase();
    const titleLower = item.title.toLowerCase();
    const isMelee = item.categories.includes("Melee Asset");

    // If the gallery item has explicit case study values defined in data.ts, prioritize them!
    if (item.challenge || item.approach || item.outcome || item.role) {
      return {
        tagline: item.tagline || `Professional Game-Ready ${item.categories.join(", ")}: ${cleanTitle}`,
        client: item.client || "ArtStation Personal Project",
        role: item.role || "Lead 3D Hard-Surface & Sculpt Artist",
        services: item.services || item.categories.join(", "),
        platforms: item.platforms || "Autodesk Maya, Substance 3D Painter, Unreal Engine 5, Pixologic ZBrush",
        challenge: item.challenge || `Designing the ultimate topological flow and precise PBR micro-surface values for ${cleanTitle}. The challenge lay in preserving complex silhouette features under strict, game-budget polygon limitations while optimizing dynamic mesh parts for flawless reload and strike transformations.`,
        approach: item.approach || `A sub-divisional master workflow was built in Maya, accompanied by high-fidelity structural sculpting in ZBrush. Texturing in Substance 3D Painter layered authentic, micro-scratched edge wear and localized roughness maps. Composited high-performance skeletal bindings and custom emissive nodes in Unreal Engine 5.`,
        outcome: item.outcome || `Achieved complete industry standard visual parity with real-time multiplayer titles. Crisp normal projections and custom vertex normal alignments provide artifact-free specular highlights and exceptional shader reaction from any viewpoint.`,
        whatWeDid: item.whatWeDid || `${isMelee ? "Organic blade sculpting" : "Reload assembly modeling"}, high-to-low poly normal bakes, optimized non-overlapping UV packing, dynamic smart materials, and high-fidelity real-time lighting previews.`,
        missionTitle: item.missionTitle || "The Craft of Structural Integrity",
        missionDesc: item.missionDesc || `To create an immersive, game-ready 3D asset of the ${cleanTitle} that fits the precise memory footprint and runtime constraints of modern real-time graphics engines.`,
        missionImg: item.missionImg || item.image,
        visionTitle: item.visionTitle || "Surface Micro-Detail Composition",
        visionDesc: item.visionDesc || "Calibrating authentic specular reflectance, delicate metal oxidation layers, and customized polymer roughness distributions to create highly tangible material contrast.",
        visionImg: item.visionImg || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        specVertices: item.specVertices || (isMelee ? "28,500 Low-Poly // 980,000 High-Poly" : "46,200 Low-Poly // 1,850,000 High-Poly"),
        specTriangles: item.specTriangles || (isMelee ? "56,000 Tris" : "91,500 Tris"),
        specTexelDensity: item.specTexelDensity || "160 px/cm (High-Resolution 4K Channels)",
        specMaps: item.specMaps || ["Albedo / BaseColor Map (sRGB)", "Normal Map (DirectX MikkTSpace)", "Roughness Map", "Metallic Map", "Ambient Occlusion", "Emissive Mask"],
        mediaGallery: item.mediaGallery
      };
    }

    // 1. Lenovo Commercial / Tech Products
    const isLenovo = idLower.includes("lenovo") || idLower.includes("thinkpad") || idLower.includes("thinkcentre") || idLower.includes("thinkvision") || idLower.includes("yoga") || idLower.includes("legion") || idLower.includes("loq") || idLower.includes("copilot") || titleLower.includes("lenovo") || titleLower.includes("thinkpad") || titleLower.includes("legion");
    
    // 2. Automotive / Sports Cars
    const isAutomotive = idLower.includes("porsche") || idLower.includes("mclaren") || idLower.includes("mercedes") || idLower.includes("amg") || idLower.includes("car") || item.categories.includes("Automotive Lighting") || titleLower.includes("porsche") || titleLower.includes("mclaren") || titleLower.includes("mercedes");

    // 3. Electronic Accessories (Razer, Wacom, Sony, Headphones, etc.)
    const isElectronics = idLower.includes("razer") || idLower.includes("sony") || idLower.includes("wacom") || idLower.includes("earphone") || idLower.includes("headphone") || titleLower.includes("razer") || titleLower.includes("sony") || titleLower.includes("wacom");

    // 4. Weapons & Props
    const isWeapon = idLower.includes("vandal") || idLower.includes("phantom") || idLower.includes("marshall") || idLower.includes("python") || idLower.includes("weapon") || titleLower.includes("python") || titleLower.includes("vandal") || titleLower.includes("weapon");

    if (isLenovo) {
      return {
        tagline: `High-Fidelity Commercial Product Tour: ${cleanTitle}`,
        client: "Lenovo Global Marketing Showcase",
        role: "Lead 3D Look-Development & CGI Motion Designer",
        services: "CAD Refinement, Exploded Blueprint Animations, Lookdev Shading, Ring-Lighting",
        platforms: "Maxon Cinema 4D, OctaneRender, Adobe After Effects, Premier Pro",
        challenge: `Converting extremely dense industrial engineering CAD assemblies of the ${cleanTitle} into highly-optimized, render-friendly sub-divisional meshes. The challenge was maintaining absolute mechanical tolerances for rotating hinge folds and thin bezel screens while preventing specular highlights from pinching under high-contrast spotlight transitions.`,
        approach: `Executed advanced manual retopology across key casing elements and mapped non-overlapping high-resolution UDIM layouts. Programmed procedural anisotropy maps to capture the light radial sheen across aluminum casings, and designed dynamic keyframe camera choreography in Cinema 4D to accentuate the slim silhouette.`,
        outcome: `Delivered commercial-ready product tour video and interactive CGI renders aligning flawlessly with Lenovo's strict corporate branding. Renders feature pristine glass refraction, crisp text lettering, and photorealistic matte finishes.`,
        whatWeDid: "Hinge mechanical rigging, complex motherboard component modeling, screen panel emissive calibration, luxury material shading, keyframe cinematic camera paths.",
        missionTitle: "Sleek Commercial Precision",
        missionDesc: `Deliver a photorealistic product demonstration of the ${cleanTitle} that highlights its modular component design, premium materials, and compact form factor.`,
        missionImg: item.image,
        visionTitle: "Anisotropic Metal Reflection",
        visionDesc: "Bespoke look-development using micro-facet micro-bump structures on the metallic hinge cylinders to disperse specular highlights across a vertical axis.",
        visionImg: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=80",
        specVertices: "1,240,000 Polygons (High-Poly CAD Retopology)",
        specTriangles: "2,420,000 Tris",
        specTexelDensity: "240 px/cm (Double-set 8K UDIM pack)",
        specMaps: ["Albedo (Matte Polymer)", "Normal Map (Micro-Facet Aluminum)", "Roughness Map", "Metallic Map", "Anisotropy Angle", "Screen Emissive / LED Mask", "Ambient Occlusion"],
        mediaGallery: [
          {
            type: "image",
            url: item.image,
            title: "Industrial Shell Beauty Pass",
            subtitle: "Anodized metal casing and display panel calibration under neutral studio lighting"
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=80",
            title: "Exploded Mechanical Blueprint",
            subtitle: "Visualization demonstrating internal CPU cooling fan and modular motherboard layouts"
          },
          {
            type: "video",
            url: "https://www.youtube.com/embed/1fc9QiFZ9ZA",
            title: "Commercial Showcase Reel",
            subtitle: "Dynamic cinematic commercial edit highlighting hinge transformations and screen capabilities"
          }
        ]
      };
    }

    if (isAutomotive) {
      return {
        tagline: `Photorealistic Automotive Look-Dev & Studio Staging: ${cleanTitle}`,
        client: "Automotive CGI Staging Concept",
        role: "Senior Automotive Lighting & Shader Technical Artist",
        services: "Clearcoat Shader Tuning, Studio Ring-Lighting, Raytraced Environments",
        platforms: "Autodesk Maya, Substance 3D Painter, Unreal Engine 5 (Lumen), Redshift RT",
        challenge: `Perfecting complex double-layered clearcoat paint reflections across the aerodynamically curved chassis of the ${cleanTitle}. The challenge lay in preventing surface shading artifacts or reflections from looking jagged or pixelated under grazing studio spotlights.`,
        approach: `Constructed a custom clearcoat shader inside Redshift utilizing high-frequency micro-flake metallic dust maps. Staged multiple oversized light boxes and reflection cards to bounce uniform illumination across the rear aerofoils, and modeled high-density wheel rim treads for macro closeup fidelity.`,
        outcome: `Achieved professional automotive presentation prints with zero shading distortions, presenting stunning light sweeps and deep, realistic lacquer paint lusters from every camera perspective.`,
        whatWeDid: "Double-lobe paint shader formulation, high-precision wheel modeling, tire tread normal displacement mapping, studio ring stage setups, raytraced reflection tuning.",
        missionTitle: "The Pursuit of Aerodynamic Luster",
        missionDesc: `To isolate and glorify the aggressive, curving lines of the ${cleanTitle} inside a high-contrast digital studio environment using commercial lighting techniques.`,
        missionImg: item.image,
        visionTitle: "Specular Paint Layer Composition",
        visionDesc: "Synthesizing deep base paint pigments, metallic flake sparkle layers, and a highly polished outer clearcoat mask to replicate real-world multi-stage luxury paints.",
        visionImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        specVertices: "3,850,000 Polygons (Highly detailed CAD subdivisions)",
        specTriangles: "7,520,000 Tris",
        specTexelDensity: "180 px/cm (Dedicated body paint & trim UDIM packs)",
        specMaps: ["Albedo (Metalic Base Paint)", "Normal Map (DirectX Mesh Details)", "Roughness Map (Clearcoat Lacquer)", "Metallic Sparkle Mask", "Anisotropy Map (Alloy Rims)", "Displacement Map (Treads)"],
        mediaGallery: [
          {
            type: "image",
            url: item.image,
            title: "Studio Ring Beauty Pass",
            subtitle: "Uniform studio lighting highlights the active muscular contours of the chassis"
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
            title: "Specular Paint Reflections",
            subtitle: "Close-up showing carbon-fiber integration and polished clearcoat reflection cards"
          },
          {
            type: "video",
            url: "https://www.youtube.com/embed/1fc9QiFZ9ZA",
            title: "Cinematic Sweep Sequence",
            subtitle: "Full-length cinematic video showing active rear-wing adjustments and tire spin dynamics"
          }
        ]
      };
    }

    if (isElectronics) {
      return {
        tagline: `High-End Electronics Look-Dev & Product Staging: ${cleanTitle}`,
        client: "E-Commerce Launch Asset Division",
        role: "Lead Product Shading & Lighting Artist",
        services: "Micro-Surface Shading, Dual-Lobe Polymer Shaders, Studio Product Photography",
        platforms: "Autodesk Maya, Substance 3D Painter, OctaneRender, After Effects",
        challenge: `Replicating the exact ergonomic surface texture of the ${cleanTitle}. It is highly challenging to capture porous, injection-molded plastics, soft textured rubber grips, and highly diffused internal RGB light guides in macro close-up shots.`,
        approach: `Molded bespoke smart materials blending dual-lobe specular distribution. Mapped procedural high-frequency noise layers onto the normal maps to represent the tactile feel of matte plastics, and calibrated internal volume scatter parameters for the glowing LED strips.`,
        outcome: `Exceptional, retail-grade close-up product renders demonstrating authentic material contrasts, soft specular gradients, and precise physical seams.`,
        whatWeDid: "Tactile material shader writing, micro-bump noise mapping, internal RGB volume diffusion, macro lens staging, seam alignment optimization.",
        missionTitle: "Tactile Ergonomic Harmony",
        missionDesc: `Deliver a series of photorealistic macro product shots highlighting the advanced material changes and ergonomic curves of the ${cleanTitle}.`,
        missionImg: item.image,
        visionTitle: "Diffuse LED Light Guides",
        visionDesc: "Using sub-surface scattering masks inside translucent polymers to scatter and diffuse the internal light sources evenly across the structural strips.",
        visionImg: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=80",
        specVertices: "340,000 Sub-D Polygons",
        specTriangles: "680,000 Tris",
        specTexelDensity: "220 px/cm (High-Resolution 4K Smart Texture Sets)",
        specMaps: ["Albedo/Color", "Normal Map (injection-molded polymer)", "Roughness (Dampened Polymer)", "Metallic Map", "Translucency Weight", "Emissive Light Strip Mask"],
        mediaGallery: [
          {
            type: "image",
            url: item.image,
            title: "Macro Studio Packshot",
            subtitle: "Pristine macro lens capture showing surface materials under high-contrast studio lights"
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=80",
            title: "Material Seam Analysis",
            subtitle: "Visualization of porous polymer and soft rubber grip alignment at physical joints"
          },
          {
            type: "video",
            url: "https://www.youtube.com/embed/1fc9QiFZ9ZA",
            title: "CGI Functional Tour",
            subtitle: "Cinematic keyframe sequence highlighting click responses and RGB LED transitions"
          }
        ]
      };
    }

    if (isWeapon) {
      return {
        tagline: `High-Fidelity Game-Ready Weapon Design: ${cleanTitle}`,
        client: "Conceptual Asset Pack",
        role: "Lead Hard-Surface Modeler & Technical Artist",
        services: "Hardsurface Subdivision, High-Poly Sculpting, PBR Shader Calibration",
        platforms: "Autodesk Maya, Substance 3D Painter, Pixologic ZBrush, Unreal Engine 5",
        challenge: `Designing the ultimate topological flow and precise PBR micro-surface values for ${cleanTitle}. The challenge lay in preserving complex silhouette features under strict, game-budget polygon limitations while optimizing dynamic mesh parts for flawless reload transformations.`,
        approach: `A sub-divisional master workflow was built in Maya, accompanied by high-fidelity structural sculpting in ZBrush. Texturing in Substance 3D Painter layered authentic, micro-scratched edge wear and localized roughness maps. Composited high-performance skeletal bindings and custom emissive nodes in Unreal Engine 5.`,
        outcome: `Achieved complete industry standard visual parity with real-time multiplayer titles. Crisp normal projections and custom vertex normal alignments provide artifact-free specular highlights and exceptional shader reaction from any viewpoint.`,
        whatWeDid: "Hardsurface mechanical assembly, high-to-low poly normal bakes, optimized non-overlapping UV packing, dynamic smart materials, and high-fidelity real-time lighting previews.",
        missionTitle: "The Craft of Structural Integrity",
        missionDesc: `To create an immersive, game-ready 3D asset of the ${cleanTitle} that fits the precise memory footprint and runtime constraints of modern real-time graphics engines.`,
        missionImg: item.image,
        visionTitle: "Surface Micro-Detail Composition",
        visionDesc: "Calibrating authentic specular reflectance, delicate metal oxidation layers, and customized polymer roughness distributions to create highly tangible material contrast.",
        visionImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        specVertices: "45,000 Low-Poly // 1,900,000 High-Poly",
        specTriangles: "88,000 Tris",
        specTexelDensity: "160 px/cm (High-Resolution 4K Channels)",
        specMaps: ["Albedo / BaseColor Map (sRGB)", "Normal Map (DirectX MikkTSpace)", "Roughness Map", "Metallic Map", "Ambient Occlusion", "Emissive Mask"],
        mediaGallery: [
          {
            type: "image",
            url: item.image,
            title: "Beauty Render Pass",
            subtitle: "High-fidelity look-development preview under multi-light setup"
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
            title: "Subdivision Wireframe View",
            subtitle: "Clean edge-loops routing supporting high-poly baking without pinching"
          },
          {
            type: "video",
            url: "https://www.youtube.com/embed/1fc9QiFZ9ZA",
            title: "Action Reload Sequence",
            subtitle: "Mechanical animation walkthrough demonstrating receiver lock slides and internal assemblies"
          }
        ]
      };
    }

    // Generic Staging / Environmental Motion Study
    return {
      tagline: `Look-Dev Staging & Cinematic Motion Study: ${cleanTitle}`,
      client: "ArtStation Personal Design Study",
      role: "Lead 3D Look-Dev & Environment Artist",
      services: "Procedural Material Design, Volumetric Atmospheric Lighting, Sequencer Layout",
      platforms: "Unreal Engine 5.4, Cinema 4D, Substance 3D Painter",
      challenge: `Achieving photorealistic light scattering and atmospheric fog depth inside the ${cleanTitle} scene without creating noisy raymarching artifacts or dropping viewport playback below 60 FPS.`,
      approach: `Constructed bespoke vertex-blended landscape master shaders and optimized foliage density matrices. Leveraged Unreal Engine's Lumen and virtual shadow maps to compute real-time global illumination paired with fine-tuned volumetric fog.`,
      outcome: `An incredibly atmospheric, highly immersive real-time look-development study. Light reacts beautifully with dust motes and micro-surfaces, creating cinema-quality keyframe outputs instantly.`,
      whatWeDid: "Procedural layout design, volumetric fog tuning, cinematic camera choreography, smart landscape material creation, look-development color-grading.",
      missionTitle: "The Craft of Spatial Atmosphere",
      missionDesc: `To establish an immersive spatial atmosphere within ${cleanTitle} that tells a silent environmental narrative through high-fidelity lighting and layout.`,
      missionImg: item.image,
      visionTitle: "Cinematic Atmosphere Staging",
      visionDesc: "Integrating subtle atmospheric haze and glowing particulate particles to depth-buffer spatial elements, creating a realistic sense of scale and distance.",
      visionImg: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
      specVertices: "2,150,000 Polygons",
      specTriangles: "4,120,000 Tris",
      specTexelDensity: "145 px/cm (High-Resolution 4K & 8K Channels)",
      specMaps: ["Albedo / BaseColor Map", "Normal Map (Physical Surface details)", "Roughness Map", "Metallic Map", "Height / Displacement Map", "Ambient Occlusion / Cavity"],
      mediaGallery: [
        {
          type: "image",
          url: item.image,
          title: "Beauty Render Pass",
          subtitle: "Final composited look-development preview showcasing spatial depth and volumetric haze"
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
          title: "Volumetric Depth Pass",
          subtitle: "Isolating volumetric fog and light shafts depth calculation inside the active viewport"
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/1fc9QiFZ9ZA",
          title: "Cinematic Walkthrough Study",
          subtitle: "Full sequencer camera movement rendering realistic parallax effects and dynamic shadows"
        }
      ]
    };
  };

  const caseDetail = getCaseDetail(galleryItem);

  const [activeTab, setActiveTab] = useState<"challenge" | "approach" | "outcome" | "whatWeDid">("challenge");
  const [interactiveTab, setInteractiveTab] = useState<"viewport" | "wireframe">("viewport");
  const [wireframeOpacity, setWireframeOpacity] = useState(60);

  // Derive the media gallery list for display
  const activeMediaList = caseDetail.mediaGallery || [
    {
      type: "image" as const,
      url: galleryItem.image,
      title: "Beauty Render Pass",
      subtitle: "High-fidelity look-development preview"
    },
    {
      type: "video" as const,
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Viewport Cinema Study",
      subtitle: "Real-time layout sequence walkthrough"
    }
  ];

  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const activeMedia = activeMediaList[activeMediaIndex] || activeMediaList[0];

  // Scroll to top on load or ID change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveMediaIndex(0);
  }, [id]);

  // Handle Cycling to next project
  const handleNextProject = () => {
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === galleryItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    const nextProject = GALLERY_ITEMS[nextIndex];
    navigate(`/project/${nextProject.id}`);
  };

  const tabs = [
    { id: "challenge", label: "THE CHALLENGE" },
    { id: "approach", label: "APPROACH" },
    { id: "outcome", label: "OUTCOME" },
    { id: "whatWeDid", label: "WHAT WE DID" }
  ];

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white selection:bg-orange-500 selection:text-black relative font-sans">
      
      {/* Background analog grid mesh */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="max-w-[1440px] mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-12 relative">
        
        {/* ==================== LEFT COLUMN: STICKY BRAND BLOCK ==================== */}
        <aside className="lg:col-span-5 px-6 pt-32 pb-12 lg:pb-24 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between border-r border-zinc-900/60 bg-[#050505] z-20">
          
          <div className="space-y-8">
            {/* Back to Portfolio trigger */}
            <div>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-900 hover:border-orange-500 text-zinc-400 hover:text-white text-[10px] font-mono font-bold uppercase transition-all duration-300 active:scale-95 group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Portfolio</span>
              </Link>
            </div>

            {/* Title & Tagline */}
            <div>
              <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest block mb-2 font-bold">
                // GALLERY_ID: {galleryItem.id.toUpperCase()}
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-black leading-tight uppercase tracking-tighter text-white">
                {galleryItem.title.split("-")[0].trim()}
              </h1>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mt-1.5">
                {caseDetail.tagline}
              </p>
            </div>

            {/* Metadata Badges list */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-6 border-t border-zinc-900/60 font-mono text-[9px] text-zinc-500">
              <div>
                <span className="block uppercase font-bold text-[8px] text-zinc-600 mb-0.5">Client</span>
                <span className="text-zinc-300 text-xs font-sans leading-tight block">{caseDetail.client}</span>
              </div>
              <div>
                <span className="block uppercase font-bold text-[8px] text-zinc-600 mb-0.5">Role</span>
                <span className="text-zinc-300 text-xs font-sans leading-tight block">{caseDetail.role}</span>
              </div>
              <div className="col-span-2 pt-1">
                <span className="block uppercase font-bold text-[8px] text-zinc-600 mb-0.5">Services</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {galleryItem.categories.map((cat, catIdx) => (
                    <span key={catIdx} className="text-[9px] font-mono text-orange-500 bg-orange-950/30 border border-orange-500/20 px-1.5 py-0.5 rounded uppercase leading-none">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-span-2 pt-1">
                <span className="block uppercase font-bold text-[8px] text-zinc-600 mb-0.5 font-mono">Platform Pipeline</span>
                <span className="text-orange-500/80 text-[10px] leading-relaxed block font-semibold">{caseDetail.platforms}</span>
              </div>
            </div>

            {/* Interactive Dynamic Tabs (Trionn left text-changing system) */}
            <div className="space-y-4 pt-6 border-t border-zinc-900/60">
              <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 rounded-lg border transition-all ${
                      activeTab === tab.id
                        ? "bg-orange-500/10 border-orange-500 text-orange-500 font-extrabold"
                        : "bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Dynamic narrative card content with slide/fade */}
              <div className="bg-zinc-950/40 border border-zinc-900/50 p-5 rounded-2xl min-h-[140px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {activeTab === "challenge" && (
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        <strong className="font-mono text-white text-[10px] uppercase block mb-1">Structural Challenge:</strong>
                        {caseDetail.challenge}
                      </p>
                    )}
                    {activeTab === "approach" && (
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        <strong className="font-mono text-white text-[10px] uppercase block mb-1">Execution Approach:</strong>
                        {caseDetail.approach}
                      </p>
                    )}
                    {activeTab === "outcome" && (
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        <strong className="font-mono text-white text-[10px] uppercase block mb-1">Validation Outcome:</strong>
                        {caseDetail.outcome}
                      </p>
                    )}
                    {activeTab === "whatWeDid" && (
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        <strong className="font-mono text-white text-[10px] uppercase block mb-1">Services Breakdown:</strong>
                        {caseDetail.whatWeDid}
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Left bottom CTA & Cycling controllers */}
          <div className="pt-8 mt-8 border-t border-zinc-900/60 space-y-4">
            <a
              href={galleryItem.artstationUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-mono text-xs font-black uppercase tracking-wider transition-colors group shadow-[0_0_15px_rgba(255,77,0,0.15)]"
            >
              <span>View On ArtStation Portfolio</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Carousel navigation matching Trionn */}
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <Link to="/portfolio" className="hover:text-white uppercase transition-colors">
                ◀ Back to Work
              </Link>
              <button
                onClick={handleNextProject}
                className="hover:text-orange-500 uppercase transition-colors flex items-center gap-1.5 font-bold"
              >
                <span>Next Project</span>
                <MoveRight className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
              </button>
            </div>
          </div>

        </aside>

        {/* ==================== RIGHT COLUMN: SCROLLABLE MEDIA BLOCKS ==================== */}
        <main className="lg:col-span-7 px-6 lg:px-12 py-12 lg:py-32 space-y-16">
          
          {/* Section 0: Multimedia Showcase Gallery */}
          <section className="space-y-6">
            <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
              <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest block font-bold">
                00 // MULTIMEDIA GALLERY
              </span>
              <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase">
                {activeMediaList.length} Showcase Items
              </span>
            </div>

            <div className="space-y-4">
              {/* Main Active Media Viewport */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black/40 border border-zinc-900/60 shadow-2xl">
                {activeMedia.type === "video" ? (
                  activeMedia.url.includes("youtube.com") || activeMedia.url.includes("youtu.be") || activeMedia.url.includes("vimeo.com") ? (
                    <iframe
                      src={activeMedia.url}
                      title={activeMedia.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="no-referrer"
                      className="w-full h-full"
                    />
                  ) : (
                    <video
                      src={activeMedia.url}
                      controls
                      controlsList="nodownload"
                      disablePictureInPicture
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover select-none"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  )
                ) : (
                  <img
                    src={activeMedia.url}
                    alt={activeMedia.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none pointer-events-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable={false}
                  />
                )}
                
                {/* Active Media info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none">
                  <span className="text-[9px] font-mono text-orange-500 uppercase tracking-widest block font-bold mb-0.5">
                    {activeMedia.type === "video" ? "MOTION GRAPHIC SEQUENCE" : "HIGH-FIDELITY RENDER"}
                  </span>
                  <h4 className="text-sm font-display font-black text-white uppercase tracking-tight">
                    {activeMedia.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-light mt-0.5">
                    {activeMedia.subtitle}
                  </p>
                </div>
              </div>

              {/* Grid of Thumbnails with Small Title and Subtitle */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {activeMediaList.map((media, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`group relative text-left rounded-xl overflow-hidden border transition-all ${
                      activeMediaIndex === idx
                        ? "border-orange-500 bg-orange-950/10 shadow-[0_0_15px_rgba(255,77,0,0.1)]"
                        : "border-zinc-900/60 bg-zinc-950/40 hover:border-zinc-800"
                    }`}
                  >
                    <div className="aspect-[16/10] w-full relative bg-zinc-950 overflow-hidden">
                      {media.type === "video" ? (
                        <div className="w-full h-full flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/40 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                              <Eye className="w-3.5 h-3.5" />
                            </div>
                          </div>
                          <img
                            src={galleryItem.image}
                            alt="Video Thumbnail placeholder"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover opacity-40 filter grayscale select-none pointer-events-none"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable={false}
                          />
                        </div>
                      ) : (
                        <img
                          src={media.url}
                          alt={media.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 select-none pointer-events-none"
                          onContextMenu={(e) => e.preventDefault()}
                          draggable={false}
                        />
                      )}
                      <span className="absolute top-1.5 right-1.5 text-[8px] font-mono bg-black/80 text-zinc-400 px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">
                        {media.type}
                      </span>
                    </div>

                    <div className="p-2.5">
                      <h5 className="text-[10px] font-display font-black text-zinc-200 uppercase tracking-tight truncate">
                        {media.title}
                      </h5>
                      <p className="text-[8px] font-mono text-zinc-500 uppercase truncate mt-0.5">
                        {media.subtitle}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Section 1: Our Mission */}
          <section className="space-y-6">
            <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
                01 // MISSION STATEMENT
              </span>
              <span className="text-[9px] font-mono text-orange-500/80 font-bold uppercase">
                {galleryItem.year} Release
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white tracking-tight">
                  {caseDetail.missionTitle}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {caseDetail.missionDesc}
                </p>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-900/60 bg-zinc-950">
                <img
                  src={caseDetail.missionImg || galleryItem.image}
                  alt={galleryItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-4 text-[8px] font-mono text-zinc-500">BEAUTY PASS V01</span>
              </div>
            </div>
          </section>

          {/* Section 2: Our Vision */}
          <section className="space-y-6">
            <div className="border-b border-zinc-900 pb-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
                02 // ARTISTIC VISION
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-900/60 bg-zinc-950 md:order-last">
                <img
                  src={caseDetail.visionImg}
                  alt="Asset vision blueprint"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-4 text-[8px] font-mono text-zinc-500">DIAGNOSTIC TEXTURE BLOCK</span>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white tracking-tight">
                  {caseDetail.visionTitle}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {caseDetail.visionDesc}
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Interactive Mesh Lab (Showcasing topology/wireframe) */}
          <section className="space-y-6 bg-zinc-950/40 border border-zinc-900/60 p-6 sm:p-8 rounded-3xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-zinc-900">
              <div>
                <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest block font-bold mb-1">
                  03 // TOPOLOGY LAB
                </span>
                <h3 className="text-lg font-display font-black uppercase text-white tracking-tight">
                  INTERACTIVE WIREFRAME COMPARISON
                </h3>
              </div>

              <div className="flex gap-2 text-[9px] font-mono">
                <button
                  onClick={() => setInteractiveTab("viewport")}
                  className={`px-3 py-1 rounded-md border transition-all ${
                    interactiveTab === "viewport"
                      ? "bg-orange-500 text-black border-orange-500 font-extrabold"
                      : "bg-black border-zinc-850 text-zinc-500 hover:text-white"
                  }`}
                >
                  Beauty Shader
                </button>
                <button
                  onClick={() => setInteractiveTab("wireframe")}
                  className={`px-3 py-1 rounded-md border transition-all ${
                    interactiveTab === "wireframe"
                      ? "bg-orange-500 text-black border-orange-500 font-extrabold"
                      : "bg-black border-zinc-850 text-zinc-500 hover:text-white"
                  }`}
                >
                  Topology Grid
                </button>
              </div>
            </div>

            {/* Comparison Visual viewport */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black border border-zinc-900 flex items-center justify-center">
              
              {/* Beauty Render Layer */}
              <img
                src={galleryItem.image}
                alt="Mesh Viewport Beauty"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-all duration-700"
                style={{
                  filter: interactiveTab === "wireframe" ? "grayscale(100%) brightness(25%)" : "none"
                }}
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />

              {/* Holographic Wireframe Grid Overlay */}
              <AnimatePresence>
                {interactiveTab === "wireframe" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
                    style={{
                      backgroundImage: `
                        radial-gradient(rgba(249, 115, 22, 0.35) 1px, transparent 1px), 
                        linear-gradient(rgba(249, 115, 22, 0.2) 1px, transparent 1px), 
                        linear-gradient(90deg, rgba(249, 115, 22, 0.2) 1px, transparent 1px)
                      `,
                      backgroundSize: "6px 6px, 12px 12px, 12px 12px",
                      opacity: wireframeOpacity / 100
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Overlay telemetry reading */}
              <div className="absolute top-3 left-4 text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
                MESH_ANALYZER // VERTICES: {caseDetail.specVertices.split(" ")[0]}
              </div>

              {/* Custom Opacity Controller for wireframe */}
              {interactiveTab === "wireframe" && (
                <div className="absolute bottom-3 left-4 z-20 bg-black/80 backdrop-blur-md border border-zinc-800/80 p-3 rounded-lg flex items-center gap-3 font-mono text-[9px]">
                  <span>GRID OPACITY:</span>
                  <input
                    type="range"
                    min="15"
                    max="100"
                    value={wireframeOpacity}
                    onChange={(e) => setWireframeOpacity(Number(e.target.value))}
                    className="accent-orange-500 h-1 rounded cursor-pointer bg-zinc-800 w-24"
                  />
                  <span className="text-orange-500 font-bold">{wireframeOpacity}%</span>
                </div>
              )}
            </div>
          </section>

          {/* Section 4: Specifications grid */}
          <section className="space-y-6">
            <div className="border-b border-zinc-900 pb-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
                04 // DIAGNOSTIC SPECIFICATIONS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-950/40 border border-zinc-900/60 p-6 sm:p-8 rounded-3xl font-mono text-xs text-zinc-400">
              <div className="space-y-4">
                <span className="text-[10px] text-zinc-600 block font-bold uppercase tracking-wider">// MESH BUDGET</span>
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b border-zinc-900">
                    <span className="uppercase text-[10px]">Vertex Count</span>
                    <span className="text-zinc-200">{caseDetail.specVertices}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-900">
                    <span className="uppercase text-[10px]">Triangle Density</span>
                    <span className="text-zinc-200">{caseDetail.specTriangles}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="uppercase text-[10px]">Texel Density</span>
                    <span className="text-zinc-200">{caseDetail.specTexelDensity}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] text-zinc-600 block font-bold uppercase tracking-wider">// TEX_MAPS PACK</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {caseDetail.specMaps.map((map, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-zinc-900 border border-zinc-850 hover:border-orange-500/25 text-zinc-300 text-[9px] rounded-md uppercase tracking-wider transition-colors"
                    >
                      {map}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: End Action Box */}
          <section className="pt-12 border-t border-zinc-900/60 flex flex-col items-center justify-center text-center space-y-6">
            <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white bg-black border border-zinc-850 px-3 py-1 rounded-full">
              End of Analysis
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tighter">
              READY FOR THE NEXT DECK?
            </h2>
            <p className="text-xs text-zinc-400 font-light max-w-sm mx-auto leading-relaxed">
              Continue exploring Aayush's subdivision weapons designs or dynamic fluid simulators inside our immersive 3D workspace.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleNextProject}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-mono text-xs font-black uppercase rounded-xl transition-all duration-300 flex items-center gap-2 group active:scale-95 shadow-[0_0_20px_rgba(255,77,0,0.2)]"
              >
                <span>Next Case Study</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link
                to="/portfolio"
                className="px-6 py-3 bg-transparent border border-zinc-800 hover:border-white text-zinc-400 hover:text-white font-mono text-xs font-bold uppercase rounded-xl transition-all duration-300"
              >
                Return to Portfolio
              </Link>
            </div>
          </section>

        </main>
      </div>

    </div>
  );
}
