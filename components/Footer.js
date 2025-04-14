function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 data-name="footer-name" className="text-xl font-bold mb-4">Stephen Ndolo</h3>
                            <p className="text-gray-400">Software Engineer & Full Stack Developer</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                                <li><a href="#skills" className="text-gray-400 hover:text-white">Skills</a></li>
                                <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Connect</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white text-2xl">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-2xl">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-2xl">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} Stephen Ndolo. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
