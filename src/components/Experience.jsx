const Experience = () => {
    const vrProject = {
        date: 'Avril - Mai 2026',
        title: "Prototype VR — Jeu 3D Mystique d'alchimie",
        place: 'UPHF-INSA Valenciennes · Projet XR',
        desc: 'Conception et développement d\'un prototype de jeu vidéo 3D en réalité virtuelle. Le joueur explore une salle mystique avec des objets interactifs (potions, chaudron, bâton magique). Modélisation 3D, level design, intégration XR Interaction Toolkit, optimisation VR.',
        tech: ['Unity 3D', 'XR Toolkit', 'C#', 'Blender', 'Level Design', 'Lighting VR', 'Meta Quest'],
        isXR: true,
    };

    const webExperiences = [
        {
            date: 'Octobre - Novembre 2025',
            title: 'Développeur web',
            place: 'UPHF-INSA Valenciennes',
            desc: 'Développement d\'un site de réservation de chambres d\'hôtel et son déploiement dans le cloud AWS.',
            tech: ['React Js', 'Node Js', 'Express Js', 'Mongo DB', 'AWS'],
        },
        {
            date: 'Juin - Septembre 2025',
            title: 'Développeur back-end',
            place: 'Epitech Lille',
            desc: 'Développement d\'API RESTful, optimisation des requêtes MongoDB et collaboration avec l\'équipe front-end pour l\'intégration des fonctionnalités.',
            tech: ['Node JS', 'Express JS', 'Mongo DB'],
        },
        {
            date: 'Février - Avril 2025',
            title: 'Développeur d\'app de gestion de projets',
            place: 'Epitech Lille',
            desc: 'Développement d\'une application type Trello avec création de boards, gestion des listes/cartes, et intégration de l\'API Trello. Backend RESTful et Interface mobile fluide.',
            tech: ['Node.js', 'Express', 'MongoDB', 'React Native', 'Expo'],
        },
        {
            date: 'Novembre 2024',
            title: 'Développeur de jeu vidéo 2D',
            place: 'Epitech Lille',
            desc: 'Création d\'une plateforme 2D avec Java et LibGDX. Implémentation de mécaniques de jeu (contrôles, collisions) et optimisation de l\'affichage.',
            tech: ['Java', 'LibGDX'],
        },
        {
            date: 'Octobre 2024',
            title: 'Développeur d\'un site d\'offres d\'emploi',
            place: 'Epitech Lille',
            desc: 'Développement d\'une plateforme web responsive pour la recherche d\'emploi. Création de pages pour administrateurs et recruteurs.',
            tech: ['HTML/CSS', 'Bootstrap', 'PHP', 'MySQL'],
        },
        {
            date: 'Janvier 2024',
            title: 'Développeur React JS',
            place: 'Junia Lille',
            desc: 'Projet de développement d\'application consistant à scanner un code QR pour acheter un article.',
            tech: ['React', 'MongoDB'],
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-900 xr-section-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-14">
                    <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-2">Parcours</p>
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl border-b-2 border-indigo-500 inline-block pb-2">
                        Projets & Expériences
                    </h2>
                </div>

                {/* ===== XR & 3D Featured Projects ===== */}
                <div className="mb-10 space-y-6">
                    <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-6 h-px bg-indigo-500" />
                        Projets XR / VR & 3D Temps Réel
                    </p>

                    {/* Projet 1: VR Alchemy */}
                    <div className="glass-card p-6 rounded-2xl border-l-4 border-indigo-500 hover:border-indigo-400 transition-all hover:-translate-y-1 shadow-lg shadow-indigo-500/10">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-lg">🥽</span>
                                    <h3 className="text-xl font-extrabold text-white">{vrProject.title}</h3>
                                </div>
                                <p className="text-indigo-400 font-medium">{vrProject.place}</p>
                            </div>
                            <span className="text-gray-400 font-mono text-sm bg-slate-800 px-3 py-1 rounded border border-indigo-500/20 text-indigo-300 whitespace-nowrap">
                                {vrProject.date}
                            </span>
                        </div>
                        <p className="mt-4 text-gray-300">{vrProject.desc}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {vrProject.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-indigo-900/40 text-indigo-200 rounded-full text-xs font-medium border border-indigo-800/60">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Projet 2: 3D Factory Environment */}
                    <div className="glass-card p-6 rounded-2xl border-l-4 border-amber-500 hover:border-amber-400 transition-all hover:-translate-y-1 shadow-lg shadow-amber-500/10">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-lg">🏭</span>
                                    <h3 className="text-xl font-extrabold text-white">Modélisation 3D — Usine Historique</h3>
                                </div>
                                <p className="text-amber-400 font-medium">UPHF-INSA Valenciennes · Modélisation 3D & Texturing</p>
                            </div>
                            <span className="text-gray-400 font-mono text-sm bg-slate-800 px-3 py-1 rounded border border-amber-500/20 text-amber-300 whitespace-nowrap">
                                2025
                            </span>
                        </div>
                        <p className="mt-4 text-gray-300">
                            Conception et création intégrale d'un environnement 3D d'une ancienne usine. Modélisation 3D de l'architecture et des objets sur Autodesk Maya, confection des textures PBR sur Substance Painter, puis intégration, éclairage et rendu temps réel dans Unity 3D.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {['Maya', 'Substance Painter', 'Unity 3D', 'Texturing PBR', 'Level Design', 'Lighting'].map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-amber-900/40 text-amber-200 rounded-full text-xs font-medium border border-amber-800/60">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ===== Web / Other Projects ===== */}
                <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-6 h-px bg-slate-600" />
                        Autres projets techniques
                    </p>
                    <div className="space-y-5">
                        {webExperiences.map((exp, index) => (
                            <div key={index} className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all hover:-translate-y-0.5">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                                        <p className="text-blue-400 font-medium text-sm">{exp.place}</p>
                                    </div>
                                    <span className="text-gray-500 mt-1 md:mt-0 font-mono text-xs bg-slate-900 px-3 py-1 rounded border border-slate-700 whitespace-nowrap">
                                        {exp.date}
                                    </span>
                                </div>
                                <p className="mt-3 text-gray-400 text-sm">{exp.desc}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {exp.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-0.5 bg-blue-900/20 text-blue-300/80 rounded-full text-xs border border-blue-900/30">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
