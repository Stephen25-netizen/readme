function About() {
    try {
        return (
            <section data-name="about" id="about" className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="about-title" className="text-3xl font-bold text-center mb-8">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-name="about-image" className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
                                alt="Stephen Ndolo"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div data-name="about-content">
                            <p className="text-gray-600 mb-6">
                                I'm a passionate Software Engineer with expertise in building scalable web applications
                                and solving complex problems. With a strong foundation in both frontend and backend
                                development, I strive to create efficient and user-friendly solutions.
                            </p>
                            <p className="text-gray-600 mb-6">
                                My journey in software development started with a deep curiosity for technology
                                and has evolved into a professional career where I continuously learn and adapt
                                to new technologies and methodologies.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-semibold text-gray-900">Experience</h3>
                                    <p className="text-gray-600">5+ Years</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Projects</h3>
                                    <p className="text-gray-600">50+ Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
