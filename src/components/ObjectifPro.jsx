import { FiMail, FiDownload } from 'react-icons/fi';
import { FaVrCardboard } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const DOMAIN_ICONS = ['🥽', '🤖', '🎮', '🌐', '✨', '📊', '🏭', '👷'];

const TARGETS = [
  'Renault Digital', 'CORYS', 'CEA', 'CS Group', 'Alten',
  'Naval Group', 'Thales', 'Airbus', 'Ubisoft', 'Dassault Systèmes',
];

const ObjectifPro = () => {
  const { t } = useLanguage();
  const domainsData = t('objectif.domains');

  return (
    <section id="objectif" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full filter blur-3xl animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-2">{t('objectif.tagline')}</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            {t('objectif.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('objectif.subtitle_1')}<span className="text-indigo-300 font-semibold">{t('objectif.subtitle_highlight')}</span>{t('objectif.subtitle_2')}
          </p>
        </div>

        {/* Availability banner */}
        <div className="glass-card rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 border border-indigo-500/30">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
              <FaVrCardboard size={28} className="text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">{t('objectif.bannerTitle')}</p>
              <p className="text-indigo-300 font-semibold">{t('objectif.bannerSubtitle')}</p>
              <p className="text-gray-400 text-sm">{t('objectif.bannerLocation')}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-indigo-500/20"
            >
              <FiMail size={16} />
              {t('objectif.contactBtn')}
            </a>
            <a
              href="/CV_Mamadou_Moustapha_SARR-fr.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 font-semibold text-sm transition-all hover:scale-105"
            >
              <FiDownload size={16} />
              {t('objectif.cvBtn')}
            </a>
          </div>
        </div>

        {/* Domains grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {Array.isArray(domainsData) && domainsData.map((domain, i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-2xl hover:border-indigo-400/50 transition-all hover:-translate-y-1 group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">{DOMAIN_ICONS[i] || '🥽'}</div>
              <h3 className="text-white font-bold mb-1">{domain.label}</h3>
              <p className="text-gray-400 text-sm">{domain.desc}</p>
            </div>
          ))}
        </div>

        {/* Target companies */}
        <div className="glass-card rounded-2xl p-6 text-center">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-4">{t('objectif.targetsTitle')}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {TARGETS.map((company) => (
              <span
                key={company}
                className="px-4 py-2 rounded-full text-sm font-medium bg-slate-900/60 text-gray-300 border border-slate-700/50 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
              >
                {company}
              </span>
            ))}
          </div>
          <p className="mt-4 text-gray-500 text-sm">
            {t('objectif.targetsFooter')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ObjectifPro;
