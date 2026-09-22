import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const BADGES = [
  { label: 'Unity 3D', color: 'from-indigo-500 to-blue-500' },
  { label: 'VR / AR', color: 'from-purple-500 to-pink-500' },
  { label: 'Blender', color: 'from-orange-500 to-amber-500' },
  { label: 'C#', color: 'from-green-500 to-emerald-500' },
  { label: 'XR Dev', color: 'from-cyan-500 to-blue-500' },
  { label: 'Unreal 5', color: 'from-rose-500 to-red-500' },
  { label: 'Meta Quest', color: 'from-violet-500 to-indigo-500' },
  { label: 'Level Design', color: 'from-teal-500 to-cyan-500' },
  { label: 'Substance Painter', color: 'from-red-500 to-orange-500' },
  { label: 'Maya', color: 'from-sky-500 to-blue-600' },
];

const Hero = () => {
  const { t } = useLanguage();
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('animate-fade-in-up'); },
      { threshold: 0.1 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden xr-section-bg">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-600/10 rounded-full filter blur-3xl -top-32 -left-32 animate-blob" />
        <div className="absolute w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-3xl top-1/2 -right-32 animate-blob animation-delay-2000" />
        <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full filter blur-3xl bottom-0 left-1/2 animate-blob animation-delay-4000" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left — text */}
          <div ref={titleRef} className="sm:text-center lg:text-left opacity-0" style={{ animationFillMode: 'forwards' }}>
            {/* XR badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              {t('hero.badge')}
            </div>

            <h1 className="text-5xl tracking-tight font-extrabold sm:text-6xl md:text-7xl leading-tight">
              <span className="block text-white">{t('hero.greeting')}</span>
              <span className="block xr-gradient-text mt-1">{t('hero.name')}</span>
            </h1>

            <p className="mt-4 text-lg font-semibold text-indigo-300 sm:text-xl tracking-wide">
              {t('hero.subtitle')}
            </p>

            <p className="mt-4 text-base text-gray-400 sm:text-lg leading-relaxed max-w-xl sm:mx-auto lg:mx-0">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <a
                href="/CV_Mamadou_Moustapha_SARR-fr.pdf"
                download
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 hover:shadow-indigo-500/50"
              >
                <FiDownload size={18} />
                {t('hero.downloadCv')}
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all hover:scale-105"
              >
                <FiMail size={18} />
                {t('hero.contactMe')}
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-5 sm:justify-center lg:justify-start">
              <a
                href="https://github.com/MoustaphaSarr2024"
                target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform"
              >
                <FiGithub size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/moustaphasarr2024"
                target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors hover:scale-110 transform"
              >
                <FiLinkedin size={26} />
              </a>
              <a
                href="mailto:moustapha.sarr@uphf.fr"
                className="text-gray-500 hover:text-indigo-400 transition-colors hover:scale-110 transform"
              >
                <FiMail size={26} />
              </a>
            </div>

            {/* XR Tech badges */}
            <div className="mt-10 flex flex-wrap gap-2 sm:justify-center lg:justify-start">
              {BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${badge.color} opacity-90 hover:opacity-100 hover:scale-105 transform transition-all cursor-default`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="mt-16 lg:mt-0 flex justify-center items-center">
            <div className="relative">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/30 animate-spin-slow" style={{ margin: '-16px' }} />
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full animate-pulse-glow" style={{ margin: '-4px' }} />
              {/* Photo */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-indigo-500/60 shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  src="/Image/imageSarr.jpg"
                  alt="Moustapha Sarr — Développeur XR/VR/3D"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent" />
              </div>
              {/* Floating tag */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full text-sm font-semibold text-indigo-300 whitespace-nowrap animate-float">
                {t('hero.floatingTag')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
