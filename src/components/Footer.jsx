const Footer = () => {
    return (
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            <p>
                &copy; {new Date().getFullYear()} Mamadou Moustapha Sarr. Tous droits réservés.
            </p>
            <p className="mt-2 text-sm">
                Développé avec React et Tailwind CSS.
            </p>
        </div>
      </footer>
    )
  }
  export default Footer
