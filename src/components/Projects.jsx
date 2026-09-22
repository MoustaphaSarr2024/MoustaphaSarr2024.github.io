import { useState } from 'react';
import { FiExternalLink, FiGithub, FiPlayCircle, FiX } from 'react-icons/fi';
import { FaVrCardboard, FaCube, FaUnity, FaCode } from 'react-icons/fa';
import { SiUnity, SiBlender } from 'react-icons/si';

const vrProjectTags = [
  { label: 'Unity 3D', icon: <SiUnity size={12} /> },
  { label: 'XR Interaction Toolkit', icon: <FaVrCardboard size={12} /> },
  { label: 'C#', icon: <FaCode size={12} /> },
  { label: 'Blender', icon: <SiBlender size={12} /> },
  { label: 'Level Design', icon: <FaCube size={12} /> },
  { label: 'Meta Quest', icon: <FaVrCardboard size={12} /> },
  { label: 'VR Locomotion', icon: <FaUnity size={12} /> },
  { label: 'Lighting VR', icon: <FaUnity size={12} /> },
];

const features = [
  { icon: '🎮', title: 'Déplacement VR', desc: 'Locomotion fluide optimisée pour casque' },
  { icon: '✋', title: 'Grab & Interactions', desc: "Saisie d'objets, triggers, UI dans la scène" },
  { icon: '💡', title: 'Ambiance lumineuse', desc: 'Lighting dynamique et effets visuels magiques' },
  { icon: '🧪', title: 'Objets interactifs', desc: 'Potions, chaudron, bâton magique, autel' },
  { icon: '❤️', title: 'Interface diégétique', desc: "Vie, pause, UI intégrée dans l'environnement" },
  { icon: '⚡', title: 'Optimisation VR', desc: 'Framerate stable, LOD et batching appliqués' },
];

const Projects = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [activeFactoryImg, setActiveFactoryImg] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const gallery = [
    { src: '/Image/vr_game_mystique.png', alt: "Vue d'ensemble — salle d'alchimie" },
    { src: '/Image/vr_game_2.png', alt: 'Chaudron, potions et bâton magique' },
    { src: '/Image/vr_game_3.png', alt: 'Autel central et interface VR' },
  ];

  const factoryGallery = [
    { src: '/Image/VueEnsemble.png', alt: "Vue d'ensemble — Usine historique" },
    { src: '/Image/VueIntérieure1.png', alt: "Vue intérieure 1 — Structures & machines" },
    { src: '/Image/VueIntérieure2.png', alt: "Vue intérieure 2 — Éclairage & matériaux PBR" },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/30 xr-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-14">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-2">Mes créations immersives</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl border-b-2 border-indigo-500 inline-block pb-2">
            Projets XR / VR / 3D
          </h2>
        </div>

        {/* Featured VR Project */}
        <div className="glass-card rounded-3xl overflow-hidden mb-12">
          {/* Top badge */}
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-b border-indigo-500/20 px-6 py-3 flex items-center gap-2">
            <FaVrCardboard className="text-indigo-400" size={18} />
            <span className="text-indigo-300 font-semibold text-sm">Projet Phare — XR / VR</span>
            <span className="ml-auto px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium border border-indigo-500/30">
              Unity 3D · VR
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — Gallery */}
            <div className="relative bg-slate-900/50">
              <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src={gallery[activeImg].src}
                  alt={gallery[activeImg].alt}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end justify-between p-4">
                  <p className="text-gray-300 text-sm">{gallery[activeImg].alt}</p>
                  {/* Bouton Vidéo démo */}
                  <button
                    onClick={() => setShowVideo(true)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-medium transition-all hover:scale-105 shadow-lg shadow-indigo-500/30"
                  >
                    <FiPlayCircle size={14} />
                    Vidéo démo
                  </button>
                </div>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-2 p-3 bg-slate-900/80">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative flex-1 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImg === i ? 'border-indigo-500' : 'border-slate-700/50 hover:border-slate-600'
                    }`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    {activeImg === i && <div className="absolute inset-0 bg-indigo-500/20" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Right — Description */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-white mb-1">
                  Prototype VR — Jeu 3D Mystique d'alchimie
                </h3>
                <p className="text-indigo-400 font-medium mb-4">
                  Développeur 3D · Level Designer · Intégration VR
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  Prototype de jeu vidéo 3D conçu pour un casque de réalité virtuelle. Le joueur explore
                  une <strong className="text-white">salle mystique d'alchimie</strong> remplie d'objets interactifs :
                  potions magiques, chaudron fumant, bâton enchanté, autel central et éléments de gameplay
                  (vie, pause). Ce projet démontre mes compétences en modélisation 3D, level design,
                  intégration Unity, interactions VR et optimisation temps réel.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {vrProjectTags.map((tag) => (
                    <span
                      key={tag.label}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {tag.icon}
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowVideo(true)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-indigo-500/20"
                >
                  <FiPlayCircle size={16} />
                  Voir la démo vidéo
                </button>
                <a
                  href="https://github.com/MoustaphaSarr2024"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-700/50 hover:bg-slate-700 text-gray-300 font-semibold text-sm border border-slate-600/50 transition-all hover:scale-105"
                >
                  <FiGithub size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="border-t border-slate-700/50 p-6">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-4">Fonctionnalités démontrées</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3 bg-slate-900/40 p-3 rounded-xl border border-slate-700/30">
                  <span className="text-xl">{f.icon}</span>
                  <div>
                    <p className="text-white text-sm font-semibold">{f.title}</p>
                    <p className="text-gray-500 text-xs">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Second 3D Project: Usine Ancienne ===== */}
        <div className="glass-card rounded-3xl overflow-hidden mb-12 border border-slate-700/60 hover:border-amber-500/40 transition-all">
          {/* Top badge */}
          <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 border-b border-amber-500/20 px-6 py-3 flex items-center gap-2">
            <FaCube className="text-amber-400" size={18} />
            <span className="text-amber-300 font-semibold text-sm">Environnement 3D & Level Design</span>
            <span className="ml-auto px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium border border-amber-500/30">
              Maya · Substance Painter · Unity
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — Gallery */}
            <div className="relative bg-slate-900/50">
              <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src={factoryGallery[activeFactoryImg].src}
                  alt={factoryGallery[activeFactoryImg].alt}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end justify-between p-4">
                  <p className="text-amber-200 text-sm font-medium">{factoryGallery[activeFactoryImg].alt}</p>
                </div>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-2 p-3 bg-slate-900/80">
                {factoryGallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFactoryImg(i)}
                    className={`relative flex-1 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      activeFactoryImg === i ? 'border-amber-500' : 'border-slate-700/50 hover:border-slate-600'
                    }`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    {activeFactoryImg === i && <div className="absolute inset-0 bg-amber-500/20" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Right — Description & Workflow */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-white mb-1">
                  Modélisation 3D — Usine Historique
                </h3>
                <p className="text-amber-400 font-medium mb-4">
                  Artiste 3D · Texturing PBR · Level Design & Intégration Unity
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  Conception et réalisation intégrale d'un environnement 3D d'une <strong className="text-white">ancienne usine industrielle</strong>. 
                  Modélisation complète des structures et assets 3D sur <strong className="text-white">Autodesk Maya</strong>, création de textures 
                  et matériaux PBR personnalisés avec <strong className="text-white">Substance Painter</strong>, puis assemblage, composition, 
                  éclairage temps réel et optimisation sur <strong className="text-white">Unity 3D</strong>.
                </p>

                {/* Workflow steps */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-5">
                  <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/50">
                    <span className="text-indigo-400 font-bold text-[11px] uppercase tracking-wider block mb-0.5">1. Modélisation</span>
                    <p className="text-white text-xs font-semibold">Autodesk Maya</p>
                    <p className="text-gray-400 text-[10px]">Assets, structures 3D</p>
                  </div>
                  <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/50">
                    <span className="text-orange-400 font-bold text-[11px] uppercase tracking-wider block mb-0.5">2. Texturing PBR</span>
                    <p className="text-white text-xs font-semibold">Substance Painter</p>
                    <p className="text-gray-400 text-[10px]">Baking & matériaux</p>
                  </div>
                  <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/50">
                    <span className="text-cyan-400 font-bold text-[11px] uppercase tracking-wider block mb-0.5">3. Intégration</span>
                    <p className="text-white text-xs font-semibold">Unity 3D</p>
                    <p className="text-gray-400 text-[10px]">Level design & lighting</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Maya', 'Substance Painter', 'Unity 3D', 'Texturing PBR', 'Level Design', 'Lighting Temps Réel', '3D Environment'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action button */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/MoustaphaSarr2024"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600/90 hover:bg-amber-600 text-white font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
                >
                  <FiGithub size={16} />
                  Voir sur GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Coming soon */}
        <div className="glass-card rounded-2xl p-8 text-center border-dashed border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
          <div className="text-4xl mb-3">🚀</div>
          <h3 className="text-white font-bold text-lg mb-2">Nouveaux projets VR & 3D en cours…</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            De nouveaux prototypes XR et environnements 3D sont en développement. Consultez mon GitHub pour suivre l'avancement.
          </p>
          <a
            href="https://github.com/MoustaphaSarr2024"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-lg text-sm text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/10 transition-colors"
          >
            <FiExternalLink size={14} />
            Voir GitHub
          </a>
        </div>
      </div>

      {/* ===== VIDEO MODAL ===== */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl mx-4 rounded-2xl overflow-hidden border border-indigo-500/30 shadow-2xl shadow-indigo-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-slate-900 px-5 py-3 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <FiPlayCircle className="text-indigo-400" size={18} />
                <span className="text-white font-semibold text-sm">Prototype VR — Jeu 3D Mystique d'alchimie</span>
              </div>
              <button
                onClick={() => setShowVideo(false)}
                className="text-gray-400 hover:text-white transition-colors hover:bg-slate-700 p-1.5 rounded-lg"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Video player */}
            <div className="bg-black aspect-video">
              <video
                src="/Démo/DemoJeu.mp4"
                controls
                autoPlay
                className="w-full h-full"
                poster="/Image/vr_game_mystique.png"
              >
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            </div>

            {/* Footer info */}
            <div className="bg-slate-900 px-5 py-3 flex items-center justify-between border-t border-slate-700">
              <p className="text-gray-400 text-xs">Développé avec Unity 3D · XR Interaction Toolkit · C#</p>
              <button
                onClick={() => setShowVideo(false)}
                className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
