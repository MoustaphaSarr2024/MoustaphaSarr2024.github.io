const Experience = () => {
    const experiences = [
        {
            date: 'Octobre 2025 - Novembre 2025',
            title: 'Développeur web',
            place: 'UPHF-INSA Valenciennes',
            desc: 'Développement d\'un site de réservation de chambres d\'hôtel et son déploiement dans le cloud AWS.',
            tech: ['React Js', 'Node Js', 'Express Js', 'Mongo DB', 'AWS']
        },
        {
            date: 'Juin 2025 - Septembre 2025',
            title: 'Développeur back-end',
            place: 'Epitech Lille',
            desc: 'Développement d\'API RESTful, optimisation des requêtes MongoDB et collaboration avec l\'équipe front-end pour l\'intégration des fonctionnalités.',
            tech: ['Node JS', 'Express JS', 'Mongo DB']
        },
        {
            date: 'Février 2025 - Avril 2025',
            title: 'Développeur d\'app de gestion de projets',
            place: 'Epitech Lille',
            desc: 'Développement d\'une application type Trello avec création de boards, gestion des listes/cartes, et intégration de l\'API Trello. Backend RESTful et Interface mobile fluide.',
            tech: ['Node.js', 'Express', 'MongoDB', 'React Native', 'Expo']
        },
        {
            date: 'Depuis Novembre 2024',
            title: 'Développeur de jeu vidéo 2D',
            place: 'Epitech Lille',
            desc: 'Création d\'une plateforme 2D avec Java et LibGDX. Implémentation de mécaniques de jeu (contrôles, collisions) et optimisation de l\'affichage.',
            tech: ['Java', 'LibGDX']
        },
        {
            date: 'Octobre 2024',
            title: 'Développeur d\'un site d\'offres d\'emploi',
            place: 'Epitech Lille',
            desc: 'Développement d\'une plateforme web responsive pour la recherche d\'emploi. Création de pages pour administrateurs et recruteurs.',
            tech: ['HTML/CSS', 'Bootstrap', 'PHP', 'MySQL']
        },
        {
            date: 'Janvier 2024',
            title: 'Développeur React JS',
            place: 'Junia Lille',
            desc: 'Projet de développement d\'application consistant à scanner un code QR pour acheter un article.',
            tech: ['React', 'MongoDB']
        }
    ];

    return (
        <section id="experience" className="py-16 bg-slate-800">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-12 border-b-2 border-blue-500 inline-block pb-2">
                    Projets et expériences professionnels
                </h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-slate-900 p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:bg-slate-800 transition-colors">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                                    <p className="text-lg text-blue-400 font-medium">{exp.place}</p>
                                </div>
                                <span className="text-gray-400 mt-2 md:mt-0 font-mono text-sm bg-slate-800 md:bg-slate-900 px-3 py-1 rounded inline-block border border-slate-700">{exp.date}</span>
                            </div>
                            <p className="mt-4 text-gray-300">{exp.desc}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {exp.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 bg-blue-900/40 text-blue-200 rounded-full text-sm border border-blue-900/60">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
};
export default Experience;
