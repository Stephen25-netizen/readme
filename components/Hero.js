function Hero() {
    try {
        return (
            <section data-name="hero" id="home" className="min-h-screen flex items-center bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                    <div className="text-center">
                        <h1 data-name="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                            Hi, I'm <span className="gradient-text">Stephen Ndolo</span>
                        </h1>
                        <p data-name="hero-subtitle" className="text-xl sm:text-2xl text-gray-600 mb-8">
                            Software Engineer & Full Stack Developer
                        </p>
                        <div data-name="hero-cta" className="flex justify-center space-x-4">
                            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                Get In Touch
                            </a>
                            <a href="#projects" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                                View Projects
                            </a>
                        </div>
                        <div data-name="hero-social" className="mt-12 flex justify-center space-x-6">
                            <a href="#" className="text-gray-600 hover:text-blue-600 text-2xl">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 text-2xl">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 text-2xl">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
