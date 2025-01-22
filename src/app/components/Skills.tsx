const Skills: React.FC = () => {
    return (
        <section id="skills" className="p-12 relative bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Transparent overlay */}
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-100 tracking-widest relative z-10">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text animate-text-glow">
                    My Skills
                </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
                <div className="skill-card">
                    <p className="text-2xl font-bold text-gray-50">HTML</p>
                </div>
                <div className="skill-card">
                    <p className="text-2xl font-bold text-gray-50">Tailwind</p>
                </div>
                <div className="skill-card">
                    <p className="text-2xl font-bold text-gray-50">JavaScript</p>
                </div>
                <div className="skill-card">
                    <p className="text-2xl font-bold text-gray-50">Three.js</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;