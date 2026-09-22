import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { FaVrCardboard } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.target'), href: '#objectif' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = `#${section}`;
            break;
          }
        }
      }
      if (current) setActiveLink(current);
      else if (window.scrollY < 100) setActiveLink('#home');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]);

  const handleClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-indigo-500/20 shadow-lg shadow-indigo-500/5'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" onClick={() => handleClick('#home')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
              <FaVrCardboard size={16} className="text-white" />
            </div>
            <span className="text-base font-bold xr-gradient-text">MS · XR Dev</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeLink === link.href
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Language switch button desktop */}
            <button
              onClick={toggleLanguage}
              className="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-indigo-300 bg-slate-800/80 border border-indigo-500/30 hover:bg-indigo-600/20 hover:border-indigo-400/50 transition-all hover:scale-105"
              title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
            >
              <FiGlobe size={14} className="text-indigo-400" />
              <span className={language === 'fr' ? 'text-white font-extrabold' : 'text-gray-400 font-normal'}>FR</span>
              <span className="text-slate-600">/</span>
              <span className={language === 'en' ? 'text-white font-extrabold' : 'text-gray-400 font-normal'}>EN</span>
            </button>

            <a
              href="/CV_Mamadou_Moustapha_SARR-fr.pdf"
              download
              className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/20 transition-all hover:scale-105"
            >
              {t('nav.cvLabel')}
            </a>
          </div>

          {/* Mobile menu button + language switcher */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-800 border border-indigo-500/30 text-indigo-300"
              title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
            >
              <FiGlobe size={14} className="text-indigo-400" />
              <span className={language === 'fr' ? 'text-white font-extrabold' : 'text-gray-400 font-normal'}>FR</span>
              <span className="text-slate-600">/</span>
              <span className={language === 'en' ? 'text-white font-extrabold' : 'text-gray-400 font-normal'}>EN</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-md border-b border-indigo-500/20">
          <div className="px-3 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeLink === link.href
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/CV_Mamadou_Moustapha_SARR-fr.pdf"
              download
              className="block mt-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-center text-white bg-gradient-to-r from-indigo-600 to-purple-600"
            >
              {t('nav.downloadCvMobile')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
