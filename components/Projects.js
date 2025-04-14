function Projects() {
    try {
        const projects = [
            {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with React and Node.js",
                image: "https://images.unsplash.com/photo-1557821552-17105176677c",
                technologies: ["React", "Node.js", "MongoDB", "Express"],
                link: "#"
            },
            {
                title: "Task Management App",
                description: "A collaborative task management application",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
                technologies: ["React", "Firebase", "Material-UI"],
                link: "#"
            },
            {
                title: "Weather Dashboard",
                description: "Real-time weather tracking application",
                image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
                technologies: ["JavaScript", "Weather API", "CSS3"],
                link: "#"
            }
        ];

        return (
            <section data-name="projects" id="projects" className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="projects-title" className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div 
                                key={index}
                                data-name={`project-${index}`}
                                className="project-card bg-white rounded-lg overflow-hidden shadow-md"
                            >
                                <img 
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a 
                                        href={project.link}
                                        className="text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        View Project <i className="fas fa-arrow-right ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
        return null;
    }
}
