import { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        lastname: '',
        firstname: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission or add actual logic if backend exists
        if (formData.lastname && formData.firstname && formData.email && formData.message) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000); // Hide message after 3 seconds
            setFormData({ lastname: '', firstname: '', email: '', phone: '', message: '' });
        }
    };

    return (
        <section id="contact" className="py-16 bg-slate-900 relative">
             {/* Decorative background element */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl -top-20 -left-20 animate-blob"></div>
                <div className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl bottom-0 right-0 animate-blob animation-delay-2000"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-8 border-b-2 border-blue-500 inline-block pb-2">
                    Contact
                </h2>
                <div className="max-w-3xl mx-auto">
                    {submitted ? (
                        <div className="bg-green-900/50 border border-green-500 text-green-200 p-6 rounded-lg flex items-center justify-center animate-bounce">
                           <FiCheckCircle className="mr-2" size={24} />
                           <span className="text-lg font-medium">Message envoyé avec succès !</span>
                        </div>
                    ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="lastname" className="block text-sm font-medium text-gray-300 mb-1">Nom</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    required
                                    className="block w-full bg-slate-800 border border-slate-700 rounded-md text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 transition-colors focus:bg-slate-700"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label htmlFor="firstname" className="block text-sm font-medium text-gray-300 mb-1">Prénom</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    required
                                    className="block w-full bg-slate-800 border border-slate-700 rounded-md text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 transition-colors focus:bg-slate-700"
                                    placeholder="Votre prénom"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="block w-full bg-slate-800 border border-slate-700 rounded-md text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 transition-colors focus:bg-slate-700"
                                placeholder="votre@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Numéro de téléphone</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                pattern="[0-9+]+"
                                className="block w-full bg-slate-800 border border-slate-700 rounded-md text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 transition-colors focus:bg-slate-700"
                                placeholder="+33 6 ..."
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Votre message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="block w-full bg-slate-800 border border-slate-700 rounded-md text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 transition-colors focus:bg-slate-700 resize-none"
                                placeholder="Votre message..."
                            ></textarea>
                        </div>
                        <div className="flex justify-start">
                            <button
                                type="submit"
                                className="inline-flex justify-center items-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:scale-105"
                            >
                                <FiSend className="mr-2" />
                                Envoyer
                            </button>
                        </div>
                    </form>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Contact;
