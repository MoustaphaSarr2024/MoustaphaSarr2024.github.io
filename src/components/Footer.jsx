import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaVrCardboard } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-indigo-500/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <FaVrCardboard size={16} className="text-white" />
            </div>
            <span className="text-sm font-bold xr-gradient-text">MS · XR Dev</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a href="https://github.com/MoustaphaSarr2024" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/moustaphasarr2024" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors hover:scale-110 transform">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:moustapha.sarr@uphf.fr"
              className="text-gray-500 hover:text-indigo-400 transition-colors hover:scale-110 transform">
              <FiMail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-right">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Mamadou Moustapha Sarr
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Développeur XR / VR / 3D · Master Métavers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
