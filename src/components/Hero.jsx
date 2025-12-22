import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pb-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Bonjour, je suis</span>
              <span className="block text-blue-500">Mamadou Moustapha Sarr</span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Étudiant Master 1 de Sciences et Technologies de Métavers à l'Université Polytechnique Haut de France INSA à Valenciennes. Passionné par l'informatique et le développement de solutions innovantes. À la recherche d'un stage de 2 à 3 mois dans le domaine d'informatique et du Métavers.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="/CV_Mamadou_Moustapha_Sarr.pdf"
                  download
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg transition-transform hover:scale-105"
                >
                  <FiDownload className="mr-2" />
                  Télécharger mon CV
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-100 bg-blue-900/50 hover:bg-blue-900 md:py-4 md:text-lg transition-transform hover:scale-105"
                >
                  <FiMail className="mr-2" />
                  Me contacter
                </a>
              </div>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start space-x-6">
                <a href="https://github.com/MoustaphaSarr2024" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FiGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/mamadou-moustapha-sarr-2002janvier/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <FiLinkedin size={30} />
                </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 relative flex justify-center">
             <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/50">
                <img
                  className="w-full h-full object-cover"
                  src="/Image/imageSarr.jpeg"
                  alt="Mamadou Moustapha Sarr"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
