import { SiUnity, SiBlender, SiUnrealengine, SiPython, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss, SiAutodesk } from 'react-icons/si';
import { FaVrCardboard, FaCube, FaLayerGroup, FaCode, FaBolt, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const xrSkillsData = t('skills.xrSkills');
  const webSkillsData = t('skills.webSkills');

  const xrSkills = [
    { name: 'Unity 3D', icon: <SiUnity className="text-white" />, color: 'from-gray-500 to-gray-300' },
    { name: 'XR Interaction Toolkit', icon: <FaVrCardboard className="text-indigo-400" />, color: 'from-indigo-600 to-indigo-400' },
    { name: 'Blender', icon: <SiBlender className="text-orange-400" />, color: 'from-orange-600 to-orange-400' },
    { name: 'C#', icon: <FaCode className="text-green-400" />, color: 'from-green-600 to-green-400' },
    { name: 'Level Design', icon: <FaCube className="text-amber-400" />, color: 'from-amber-600 to-amber-400' },
    { name: 'Substance Painter', icon: <FaPaintBrush className="text-red-400" />, color: 'from-red-600 to-orange-400' },
    { name: 'Maya', icon: <SiAutodesk className="text-sky-400" />, color: 'from-sky-600 to-sky-400' },
    { name: 'Unreal Engine 5', icon: <SiUnrealengine className="text-slate-300" />, color: 'from-slate-600 to-slate-400' },
    { name: 'Optimisation VR', icon: <FaBolt className="text-yellow-400" />, color: 'from-yellow-600 to-yellow-400' },
    { name: 'Intégration VR', icon: <FaMobileAlt className="text-violet-400" />, color: 'from-violet-600 to-violet-400' },
    { name: 'Shaders / VFX', icon: <FaLayerGroup className="text-pink-400" />, color: 'from-pink-600 to-pink-400' },
  ];

  const webSkills = [
    { name: 'Python', icon: <SiPython className="text-blue-400" /> },
    { name: 'HTML/CSS', icon: <div className="flex space-x-1 justify-center"><SiHtml5 className="text-orange-500"/><SiCss3 className="text-blue-500"/></div> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'React Js', icon: <SiReact className="text-cyan-400" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'API RESTful', icon: <FaCode className="text-orange-400" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 xr-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== XR / 3D Skills ===== */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-2">{t('skills.xrTagline')}</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl border-b-2 border-indigo-500 inline-block pb-2">
            {t('skills.xrTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {xrSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-5 rounded-2xl hover:border-indigo-400/50 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-20 text-xl group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h3 className="text-white font-bold">{skill.name}</h3>
              </div>
              <p className="text-gray-400 text-sm">
                {Array.isArray(xrSkillsData) && xrSkillsData[index] ? xrSkillsData[index].desc : ''}
              </p>
              {/* Color bar — sans pourcentage */}
              <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${skill.color} opacity-60`} />
            </div>
          ))}
        </div>

        {/* ===== Web / Dev Skills ===== */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">{t('skills.webTagline')}</p>
          <h2 className="text-2xl font-bold text-slate-400 border-b border-slate-700 inline-block pb-2">
            {t('skills.webTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {webSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all hover:-translate-y-0.5 flex flex-col items-center text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{skill.icon}</div>
              <h3 className="text-sm font-bold text-slate-300 mb-1">{skill.name}</h3>
              <p className="text-gray-500 text-xs">
                {Array.isArray(webSkillsData) && webSkillsData[index] ? webSkillsData[index].desc : ''}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
