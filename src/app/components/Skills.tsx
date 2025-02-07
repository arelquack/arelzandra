import { FaPython, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiSupabase, SiJupyter } from 'react-icons/si';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="p-12 relative bg-gray-900 overflow-hidden mt-0">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-100 tracking-widest relative z-10">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text animate-text-glow">
                    My Skills
                </span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center relative z-10">
                <div className="skill-card flex flex-col items-center justify-center">
                    <SiTypescript size={100} color="#3178C6" />
                </div>
                <div className="skill-card flex flex-col items-center justify-center">
                    <FaPython size={100} color="#FFD43B" />
                </div>
                <div className="skill-card flex flex-col items-center justify-center">
                    <FaReact size={100} color="#3178C6" />
                </div>
                <div className="skill-card flex flex-col items-center justify-center">
                    <SiNextdotjs size={100} color="#000000" />
                </div>
                <div className="skill-card flex flex-col items-center justify-center">
                    <SiSupabase size={100} color="#00C58E" />
                </div>
                <div className="skill-card flex flex-col items-center justify-center">
                    <SiJupyter size={100} color="#F37626" />
                </div>
            </div>
        </section>
    );
};

export default Skills;
