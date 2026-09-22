import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '2+', label: t('about.stats.xrExp') },
    { value: '5+', label: t('about.stats.projectsCount') },
    { value: 'M2', label: t('about.stats.master') },
    { value: '2027', label: t('about.stats.available') },
  ];

  const interests = [
    { icon: '🥽', label: t('about.interests.vr') },
    { icon: '🎮', label: t('about.interests.games') },
    { icon: '🌐', label: t('about.interests.metaverse') },
    { icon: '🤖', label: t('about.interests.simulation') },
    { icon: '🏗️', label: t('about.interests.architecture') },
    { icon: '✨', label: t('about.interests.interfaces') },
  ];

  const education = t('about.education');

  return (
    <section id="about" className="py-20 bg-slate-800/50 xr-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-14">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-2">{t('about.tagline')}</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl border-b-2 border-indigo-500 inline-block pb-2">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — text */}
          <div>
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.p1_1')}<span className="text-indigo-300 font-semibold">{t('about.p1_name')}</span>{t('about.p1_2')} 
                <span className="text-indigo-300 font-semibold">{t('about.p1_master')}</span>{t('about.p1_3')} 
                <span className="text-indigo-300 font-semibold">{t('about.p1_unity')}</span>{t('about.p1_end')}
              </p>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                {t('about.p2')}
              </p>
              <p className="mt-4 text-indigo-300 font-medium">
                {t('about.internshipTitle')}<strong>{t('about.internshipDate')}</strong>{t('about.internshipFields')}
              </p>

              {/* Profile info */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-700/50 pt-6">
                <div>
                  <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">{t('about.profileTitle')}</h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li><span className="text-gray-200 font-medium">{t('about.nameLabel')}</span> Mamadou Moustapha Sarr</li>
                    <li><span className="text-gray-200 font-medium">{t('about.locationLabel')}</span> {t('about.locationValue')}</li>
                    <li><span className="text-gray-200 font-medium">{t('about.formationLabel')}</span> {t('about.formationValue')}</li>
                    <li><span className="text-gray-200 font-medium">{t('about.languagesLabel')}</span> {t('about.languagesValue')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">{t('about.focusTitle')}</h3>
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
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl text-center hover:border-indigo-400/50 transition-all hover:-translate-y-1">
                  <div className="text-3xl font-extrabold xr-gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Centres d'intérêt */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-4">{t('about.interestsTitle')}</h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((item, i) => (
                  <div
                    key={i}
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
              <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">{t('about.educationTitle')}</h3>
              <div className="space-y-3">
                {Array.isArray(education) && education.map((edu, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-2 h-2 ${i === 0 ? 'bg-indigo-500' : i === 1 ? 'bg-purple-500' : 'bg-blue-500'} rounded-full mt-2 flex-shrink-0`} />
                    <div>
                      <p className="text-white font-medium text-sm">{edu.title}</p>
                      <p className="text-gray-400 text-xs">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
