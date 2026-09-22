import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
    const { t } = useLanguage();

    const vrProjectData = t('experience.vrProject');
    const factoryProjectData = t('experience.factoryProject');
    const webExperiencesData = t('experience.webExperiences');

    const vrProjectTech = ['Unity 3D', 'XR Toolkit', 'C#', 'Blender', 'Level Design', 'Lighting VR', 'Meta Quest'];
    const factoryTech = ['Maya', 'Substance Painter', 'Unity 3D', 'Texturing PBR', 'Level Design', 'Lighting'];

    const webTechMap = [
        ['React Js', 'Node Js', 'Express Js', 'Mongo DB', 'AWS'],
        ['Node JS', 'Express JS', 'Mongo DB'],
        ['Node.js', 'Express', 'MongoDB', 'React Native', 'Expo'],
        ['Java', 'LibGDX'],
        ['HTML/CSS', 'Bootstrap', 'PHP', 'MySQL'],
        ['React', 'MongoDB'],
    ];

    return (
        <section id="experience" className="py-20 bg-slate-900 xr-section-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-14">
                    <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-2">{t('experience.tagline')}</p>
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl border-b-2 border-indigo-500 inline-block pb-2">
                        {t('experience.title')}
                    </h2>
                </div>

                {/* ===== XR & 3D Featured Projects ===== */}
                <div className="mb-10 space-y-6">
                    <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-6 h-px bg-indigo-500" />
                        {t('experience.xrSectionTitle')}
                    </p>

                    {/* Projet 1: VR Alchemy */}
                    <div className="glass-card p-6 rounded-2xl border-l-4 border-indigo-500 hover:border-indigo-400 transition-all hover:-translate-y-1 shadow-lg shadow-indigo-500/10">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-lg">🥽</span>
                                    <h3 className="text-xl font-extrabold text-white">{vrProjectData?.title}</h3>
                                </div>
                                <p className="text-indigo-400 font-medium">{vrProjectData?.place}</p>
                            </div>
                            <span className="text-gray-400 font-mono text-sm bg-slate-800 px-3 py-1 rounded border border-indigo-500/20 text-indigo-300 whitespace-nowrap">
                                {vrProjectData?.date}
                            </span>
                        </div>
                        <p className="mt-4 text-gray-300">{vrProjectData?.desc}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {vrProjectTech.map((techItem, i) => (
                                <span key={i} className="px-3 py-1 bg-indigo-900/40 text-indigo-200 rounded-full text-xs font-medium border border-indigo-800/60">
                                    {techItem}
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
                                    <h3 className="text-xl font-extrabold text-white">{factoryProjectData?.title}</h3>
                                </div>
                                <p className="text-amber-400 font-medium">{factoryProjectData?.place}</p>
                            </div>
                            <span className="text-gray-400 font-mono text-sm bg-slate-800 px-3 py-1 rounded border border-amber-500/20 text-amber-300 whitespace-nowrap">
                                {factoryProjectData?.date}
                            </span>
                        </div>
                        <p className="mt-4 text-gray-300">
                            {factoryProjectData?.desc}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {factoryTech.map((techItem, i) => (
                                <span key={i} className="px-3 py-1 bg-amber-900/40 text-amber-200 rounded-full text-xs font-medium border border-amber-800/60">
                                    {techItem}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ===== Web / Other Projects ===== */}
                <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-6 h-px bg-slate-600" />
                        {t('experience.otherSectionTitle')}
                    </p>
                    <div className="space-y-5">
                        {Array.isArray(webExperiencesData) && webExperiencesData.map((exp, index) => (
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
                                    {webTechMap[index] && webTechMap[index].map((techItem, i) => (
                                        <span key={i} className="px-2 py-0.5 bg-blue-900/20 text-blue-300/80 rounded-full text-xs border border-blue-900/30">
                                            {techItem}
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
