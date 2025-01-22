const Projects: React.FC = () => {
    return (
        <section id="projects" className="p-12 bg-gray-700 relative glass-bg overflow-hidden">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-100 tracking-widest">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text animate-text-glow">
                    My Projects
                </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="project-card group">
                    <h3 className="text-xl font-semibold mb-2 text-gray-50 group-hover:text-blue-400 transition">3D Portfolio</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition">
                        Interactive 3D scenes using Three.js.
                    </p>
                </div>
                <div className="project-card group">
                    <h3 className="text-xl font-semibold mb-2 text-gray-50 group-hover:text-blue-400 transition">Animated Torus</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition">
                        Dynamic torus object with colorful effects.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;