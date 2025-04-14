function Navbar() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        return (
            <nav data-name="navbar" className="fixed w-full bg-white nav-shadow z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex-shrink-0">
                            <h1 data-name="logo" className="text-xl font-bold gradient-text">Stephen Ndolo</h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
                                <a data-name="nav-home" href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2">Home</a>
                                <a data-name="nav-about" href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2">About</a>
                                <a data-name="nav-skills" href="#skills" className="text-gray-700 hover:text-blue-600 px-3 py-2">Skills</a>
                                <a data-name="nav-projects" href="#projects" className="text-gray-700 hover:text-blue-600 px-3 py-2">Projects</a>
                                <a data-name="nav-contact" href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2">Contact</a>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                data-name="mobile-menu-button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-blue-600"
                            >
                                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div data-name="mobile-menu" className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#home" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Home</a>
                            <a href="#about" className="block text-gray-700 hover:text-blue-600 px-3 py-2">About</a>
                            <a href="#skills" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Skills</a>
                            <a href="#projects" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Projects</a>
                            <a href="#contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Contact</a>
                        </div>
                    </div>
                )}
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
