const About = () => {
  const stats = [
    { value: '2+', label: "Ans d'expérience XR" },
    { value: '5+', label: 'Projets 3D / VR' },
    { value: 'M2', label: 'Master Métavers' },
    { value: '2027', label: 'Disponible en stage' },
  ];

  const interests = [
    { icon: '🥽', label: 'Réalité Virtuelle' },
    { icon: '🎮', label: 'Jeux Vidéo 3D' },
    { icon: '🌐', label: 'Métavers' },
    { icon: '🤖', label: 'Simulation Temps Réel' },
    { icon: '🏗️', label: 'Architecture XR' },
    { icon: '✨', label: 'Interfaces Immersives' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50 xr-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-14">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-2">Qui suis-je ?</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl border-b-2 border-indigo-500 inline-block pb-2">
            À propos de moi
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — text */}
          <div>
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                Je suis <span className="text-indigo-300 font-semibold">Mamadou Moustapha Sarr</span>, étudiant en 
                <span className="text-indigo-300 font-semibold"> Master Métavers & Réalité Étendue</span>, passionné par la création 
                d'expériences immersives en VR, la 3D temps réel, et le développement d'applications 
                interactives avec <span className="text-indigo-300 font-semibold">Unity</span>.
              </p>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                Je conçois des environnements 3D, des prototypes VR jouables, et des interactions 
                intuitives pour casques de réalité virtuelle (Meta Quest, HTC Vive). Chaque projet 
                est une occasion de repousser les limites entre le monde réel et le monde virtuel.
              </p>
              <p className="mt-4 text-indigo-300 font-medium">
                🎯 Je recherche un stage de fin d'étude <strong>en mars 2027</strong> dans les domaines :<br/>
                XR / VR / AR / 3D / Unity / Unreal / Métavers / Simulation temps réel.
              </p>

              {/* Profile info */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-700/50 pt-6">
                <div>
                  <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">Profil</h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li><span className="text-gray-200 font-medium">Nom :</span> Mamadou Moustapha Sarr</li>
                    <li><span className="text-gray-200 font-medium">Localisation :</span> Valenciennes, France</li>
                    <li><span className="text-gray-200 font-medium">Formation :</span> Master Métavers — UPHF-INSA</li>
                    <li><span className="text-gray-200 font-medium">Langues :</span> Français, Anglais</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">Focus</h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>🥽 XR / VR / AR Development</li>
                    <li>🎮 Unity 3D & C#</li>
                    <li>🧊 Modélisation Blender</li>
                    <li>🌐 Métavers & Simulation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right — stats + interests */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-6 rounded-2xl text-center hover:border-indigo-400/50 transition-all hover:-translate-y-1">
                  <div className="text-3xl font-extrabold xr-gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Centres d'intérêt */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-4">Domaines d'intérêt XR</h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 bg-slate-900/60 px-3 py-2 rounded-lg border border-slate-700/50 hover:border-indigo-500/40 transition-colors text-sm"
                  >
                    <span>{item.icon}</span>
                    <span className="text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formation */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">Formation</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Master Métavers & Réalité Étendue</p>
                    <p className="text-gray-400 text-xs">UPHF-INSA Valenciennes · En cours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Licence Pré-Msc Informatique</p>
                    <p className="text-gray-400 text-xs">Epitech Lille · 2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Préparation MPI (Mathématiques, Physique, Informatique)</p>
                    <p className="text-gray-400 text-xs">Classes préparatoires · 2022–2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
