const Skills: React.FC = () => {
    return (
        <section id="skills" className="p-12 bg-gray-800 relative glass-bg overflow-hidden">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-100 tracking-widest">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
                    My Skills
                </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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