import { SiPython, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiNodedotjs, SiExpress, SiVite, SiReact, SiTailwindcss, SiPostman } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        { name: 'Python', icon: <SiPython className="text-blue-400" />, desc: 'Automatisation, scripting, data.' },
        { name: 'HTML/CSS', icon: <div className="flex space-x-1 justify-center"><SiHtml5 className="text-orange-500"/><SiCss3 className="text-blue-500"/></div>, desc: 'Structure et style web.' },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, desc: 'Interactivité Web.' },
        { name: 'Java', icon: <FaJava className="text-red-500" />, desc: 'POO, Applications.' },
        { name: 'React Js', icon: <SiReact className="text-cyan-400" />, desc: 'Frontend dynamique.' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, desc: 'Styling moderne.' },
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" />, desc: 'Backend JS.' },
        { name: 'Express.js', icon: <SiExpress className="text-gray-400" />, desc: 'Framework Backend.' },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, desc: 'Base de données NoSQL.' },
        { name: 'Vite', icon: <SiVite className="text-purple-500" />, desc: 'Build tool rapide.' },
        { name: 'API RESTful', icon: <SiPostman className="text-orange-500" />, desc: 'Architecture API.' },
    ];

    return (
        <section id="skills" className="py-16 bg-slate-900">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-12 border-b-2 border-blue-500 inline-block pb-2">
                    Mes Compétences
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 flex flex-col items-center text-center group border border-slate-700 hover:border-blue-500">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                            <p className="text-gray-400 text-sm">{skill.desc}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
};
export default Skills;
