import { SiUnity, SiBlender, SiUnrealengine, SiPython, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss, SiAutodesk } from 'react-icons/si';
import { FaVrCardboard, FaCube, FaLayerGroup, FaCode, FaBolt, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';

const Skills = () => {
  const xrSkills = [
    {
      name: 'Unity 3D',
      icon: <SiUnity className="text-white" />,
      desc: 'Scènes, lighting, interactions, optimisation VR',
      color: 'from-gray-500 to-gray-300',
    },
    {
      name: 'XR Interaction Toolkit',
      icon: <FaVrCardboard className="text-indigo-400" />,
      desc: 'Grab, UI diégétique, locomotion VR',
      color: 'from-indigo-600 to-indigo-400',
    },
    {
      name: 'Blender',
      icon: <SiBlender className="text-orange-400" />,
      desc: 'Modélisation, UV, textures, rigging',
      color: 'from-orange-600 to-orange-400',
    },
    {
      name: 'C#',
      icon: <FaCode className="text-green-400" />,
      desc: "Scripts, triggers, gestion d'état, interactions",
      color: 'from-green-600 to-green-400',
    },
    {
      name: 'Level Design',
      icon: <FaCube className="text-amber-400" />,
      desc: 'Composition, ambiance, gameplay, narration spatiale',
      color: 'from-amber-600 to-amber-400',
    },
    {
      name: 'Substance Painter',
      icon: <FaPaintBrush className="text-red-400" />,
      desc: 'Texturing PBR, baking, matériaux réalistes',
      color: 'from-red-600 to-orange-400',
    },
    {
      name: 'Maya',
      icon: <SiAutodesk className="text-sky-400" />,
      desc: 'Modélisation 3D, animation, rigging',
      color: 'from-sky-600 to-sky-400',
    },
    {
      name: 'Unreal Engine 5',
      icon: <SiUnrealengine className="text-slate-300" />,
      desc: 'Blueprints, import 3D, Lumen, Nanite',
      color: 'from-slate-600 to-slate-400',
    },
    {
      name: 'Optimisation VR',
      icon: <FaBolt className="text-yellow-400" />,
      desc: 'LOD, batching, lightmaps, framerate stable',
      color: 'from-yellow-600 to-yellow-400',
    },
    {
      name: 'Intégration VR',
      icon: <FaMobileAlt className="text-violet-400" />,
      desc: 'Meta Quest, HTC Vive, SDK VR',
      color: 'from-violet-600 to-violet-400',
    },
    {
      name: 'Shaders / VFX',
      icon: <FaLayerGroup className="text-pink-400" />,
      desc: 'Shader Graph, effets de particules, post-process',
      color: 'from-pink-600 to-pink-400',
    },
  ];

  const webSkills = [
    { name: 'Python', icon: <SiPython className="text-blue-400" />, desc: 'Automatisation, scripting, data.' },
    { name: 'HTML/CSS', icon: <div className="flex space-x-1 justify-center"><SiHtml5 className="text-orange-500"/><SiCss3 className="text-blue-500"/></div>, desc: 'Structure et style web.' },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, desc: 'Interactivité Web.' },
    { name: 'React Js', icon: <SiReact className="text-cyan-400" />, desc: 'Frontend dynamique.' },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" />, desc: 'Backend JS.' },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, desc: 'Base de données NoSQL.' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, desc: 'Styling moderne.' },
    { name: 'API RESTful', icon: <FaCode className="text-orange-400" />, desc: 'Architecture API.' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 xr-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== XR / 3D Skills ===== */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-2">Cœur de métier</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl border-b-2 border-indigo-500 inline-block pb-2">
            Compétences XR / 3D / VR
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
              <p className="text-gray-400 text-sm">{skill.desc}</p>
              {/* Color bar — sans pourcentage */}
              <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${skill.color} opacity-60`} />
            </div>
          ))}
        </div>

        {/* ===== Web / Dev Skills ===== */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Complémentaires</p>
          <h2 className="text-2xl font-bold text-slate-400 border-b border-slate-700 inline-block pb-2">
            Compétences Web & Développement
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
              <p className="text-gray-500 text-xs">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
