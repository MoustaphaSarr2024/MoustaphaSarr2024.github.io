import { useState, useEffect } from 'react';
import { FiSend, FiCheckCircle, FiLinkedin, FiMapPin, FiLoader, FiAlertCircle, FiX } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'error'
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Clé Web3Forms lue strictly depuis les variables d'environnement .env
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

  useEffect(() => {
    let timer;
    if (showToast) {
      timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showToast]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: `${formData.firstname} ${formData.lastname}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          from_name: "Portfolio XR — Mamadou Moustapha Sarr",
          subject: `Nouveau message Portfolio XR de ${formData.firstname} ${formData.lastname}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('idle');
        setShowToast(true);
        // Réinitialisation automatique du formulaire
        setFormData({ lastname: '', firstname: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || t('contact.errorDefault'));
      }
    } catch (error) {
      console.error("Erreur d'envoi du formulaire:", error);
      setStatus('error');
      setErrorMessage(t('contact.errorNetwork'));
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-slate-900 xr-section-bg">
      {/* ===== TOAST NOTIFICATION (TOP RIGHT — 5 SECONDS) ===== */}
      {showToast && (
        <div className="fixed top-20 right-5 z-50 max-w-md w-full animate-fade-in-up">
          <div className="glass-card bg-slate-900/95 border border-emerald-500/50 p-4 rounded-2xl shadow-2xl shadow-emerald-500/20 backdrop-blur-md relative overflow-hidden flex items-start gap-3">
            {/* Animated icon */}
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 text-xl">
              <FiCheckCircle size={22} />
            </div>

            {/* Content */}
            <div className="flex-1 pr-6">
              <h4 className="text-white font-bold text-sm">{t('contact.toastTitle')}</h4>
              <p className="text-gray-300 text-xs mt-1 leading-relaxed">
                {t('contact.toastDesc')}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowToast(false)}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800"
            >
              <FiX size={16} />
            </button>

            {/* 5-second progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500/30">
              <div
                className="h-full bg-emerald-500 transition-all duration-[5000ms] ease-linear"
                style={{ width: showToast ? '0%' : '100%' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl -top-20 -left-20 animate-blob" />
        <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl bottom-0 right-0 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-2">{t('contact.tagline')}</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl border-b-2 border-indigo-500 inline-block pb-2">
            {t('contact.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column — Direct Contact Info */}
          <div className="space-y-4">
            <div className="glass-card p-6 rounded-2xl border border-indigo-500/20">
              <h3 className="text-xl font-bold text-white mb-4">{t('contact.coordsTitle')}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {t('contact.coordsDesc')}
              </p>

              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/moustaphasarr2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-blue-500/50 transition-all hover:-translate-y-0.5 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FiLinkedin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">{t('contact.linkedinLabel')}</p>
                    <p className="text-sm font-bold text-white">moustaphasarr2024</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/50">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">{t('contact.locationLabel')}</p>
                    <p className="text-sm font-bold text-white">{t('contact.locationValue')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-indigo-600/10 border border-indigo-500/30">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">
                    🥽
                  </div>
                  <div>
                    <p className="text-xs text-indigo-300 font-medium">{t('contact.internshipLabel')}</p>
                    <p className="text-sm font-bold text-white">{t('contact.internshipValue')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Contact Form (Toujours visible) */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 rounded-2xl border border-indigo-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="bg-rose-950/60 border border-rose-500/50 text-rose-200 p-4 rounded-xl flex items-center gap-3 text-sm animate-fade-in-up">
                    <FiAlertCircle className="flex-shrink-0 text-rose-400" size={20} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-semibold text-gray-300 mb-2">
                      {t('contact.lastnameLabel')} <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                      className="block w-full bg-slate-900/80 border border-slate-700/80 rounded-xl text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 p-3.5 transition-all text-sm outline-none"
                      placeholder={t('contact.lastnamePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-semibold text-gray-300 mb-2">
                      {t('contact.firstnameLabel')} <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                      className="block w-full bg-slate-900/80 border border-slate-700/80 rounded-xl text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 p-3.5 transition-all text-sm outline-none"
                      placeholder={t('contact.firstnamePlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      {t('contact.emailLabel')} <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full bg-slate-900/80 border border-slate-700/80 rounded-xl text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 p-3.5 transition-all text-sm outline-none"
                      placeholder={t('contact.emailPlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                      {t('contact.phoneLabel')} <span className="text-gray-500 font-normal">{t('contact.phoneOptional')}</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full bg-slate-900/80 border border-slate-700/80 rounded-xl text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 p-3.5 transition-all text-sm outline-none"
                      placeholder={t('contact.phonePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    {t('contact.messageLabel')} <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="block w-full bg-slate-900/80 border border-slate-700/80 rounded-xl text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 p-3.5 transition-all text-sm resize-none outline-none"
                    placeholder={t('contact.messagePlaceholder')}
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 py-3.5 px-8 border border-transparent shadow-lg text-base font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-indigo-500/25"
                  >
                    {status === 'submitting' ? (
                      <>
                        <FiLoader className="animate-spin" size={18} />
                        {t('contact.submitting')}
                      </>
                    ) : (
                      <>
                        <FiSend size={18} />
                        {t('contact.send')}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
