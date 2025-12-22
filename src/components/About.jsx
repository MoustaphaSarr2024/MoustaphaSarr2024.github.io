const About = () => {
    return (
      <section id="about" className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-8 border-b-2 border-blue-500 inline-block pb-2">
            À propos de moi
          </h2>
          <div className="bg-slate-900 p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-300 leading-relaxed">
              Étudiant passionné par l'informatique depuis le collège, je suis actuellement en formation en Master 1 de Sciences et Technologies de Métavers à l'Université Polytechnique Haut de France INSA à Valenciennes après deux ans de préparation en MPI et une année de licence Pré-Msc à Epitech Lille.
              Je suis motivé par le développement de solutions innovantes en informatique et je suis à la recherche d'une stage de 2 à 3 mois.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                   <h3 className="text-xl font-semibold text-white">Profil</h3>
                   <ul className="mt-2 text-gray-400 space-y-1">
                       <li><strong className="text-gray-200">Nom :</strong> Mamadou Moustapha Sarr</li>
                       <li><strong className="text-gray-200">Localisation :</strong> Valenciennes, France</li>
                       <li><strong className="text-gray-200">Profession :</strong> Étudiant Master 1 de Sciences et Technologies de Métavers</li>
                   </ul>
               </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  export default About
