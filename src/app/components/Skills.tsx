import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="p-12 relative bg-gray-900 overflow-hidden mt-0">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-100 tracking-widest relative z-10">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text animate-text-glow">
                    My Skills
                </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
                <div className="skill-card">
                    <FaHtml5 size={40} color="#E34F26" />
                </div>
                <div className="skill-card">
                    <FaCss3Alt size={40} color="#1572B6" />
                </div>
                <div className="skill-card">
                    <FaJs size={40} color="#F7DF1E" />
                </div>
                <div className="skill-card">
                    <FaReact size={40} color="#61DAFB" />
                </div>
                <div className="skill-card">
                    <FaNodeJs size={40} color="#6DA55F" />
                </div>
                <div className="skill-card">
                    <SiTypescript size={40} color="#3178C6" />
                </div>
                <div className="skill-card">
                    <FaPython size={40} color="#3178C6" />
                </div>
                <div className="skill-card">
                    <SiNextdotjs size={40} color="#3178C6" />
                </div>
            </div>
        </section>
    );
};

export default Skills;
