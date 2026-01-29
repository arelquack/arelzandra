import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Tipe data project
interface Project {
    title: string;
    type: "web" | "analysis" | "mobile";
    image: string; // Langsung path gambar manual
    description: string;
    problem: string;
    solution: string;
    stack: string[];
    links: {
        demo: string | null;
        repo: string | null;
    };
}

const projects: Project[] = [
    {
        title: "Adkeskom Web App",
        type: "web",
        image: "/images/adkeskom.png", // Pastikan file ini ada di folder public/images
        description: "Official web application for Biro Adkes Himakom Polban.",
        problem: "Manual asset tracking and low member engagement caused administrative chaos and data inconsistency.",
        solution: "Built a centralized Dashboard with Asset Management & Gamification System to track inventory and boost member activity through leaderboards.",
        stack: ["Next.js", "Shadcn/ui", "Tailwind", "Supabase"],
        links: {
            demo: "https://adkes-himakom.vercel.app",
            repo: "https://github.com/arelquack/adkes-webapp"
        }
    },
    {
        title: "Nihongo Kurabu Portal",
        type: "web",
        image: "/images/website-nk.png",
        description: "A dedicated portal for Japanese language organization.",
        problem: "Limited visibility for recruitment and difficulty in sharing learning materials efficiently.",
        solution: "Developed a digital hub for event showcases and material repository, successfully increasing member registration by 40%.",
        stack: ["Next.js", "Tailwind", "Vercel"],
        links: {
            demo: "https://nk-project.vercel.app",
            repo: "https://github.com/arelquack/nk-project"
        }
    },
    {
        title: "YouTube Sentiment Analysis",
        type: "analysis",
        image: "/images/youtube-analysis.png",
        description: "NLP research on Ngarai Sianok tourism perception.",
        problem: "Stakeholders struggled to process thousands of unstructured comments manually.",
        solution: "Automated NLP pipeline to scrape 1,000+ comments, visualizing sentiment distribution and topic extraction.",
        stack: ["Python", "NLP", "Pandas", "Matplotlib"],
        links: {
            demo: null,
            repo: "https://github.com/arelquack/data-analytics"
        }
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
                        Featured <span className="text-glow-gradient">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Solving real-world problems with code. Here are some of the highlights.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-blue-500/50 transition-colors">
                            
                            {/* Image Wrapper */}
                            <div className="relative h-56 overflow-hidden bg-gray-900 group">
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    width={800} 
                                    height={600}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 relative z-10"
                                />
                                
                                {/* Overlay Gradient (biar teks di atas gambar terbaca kalau ada) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 z-20"></div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow relative z-30 -mt-2">
                                {/* Type Badge */}
                                <div className="mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                        project.type === 'web' ? 'bg-blue-500/20 text-blue-300' : 'bg-orange-500/20 text-orange-300'
                                    }`}>
                                        {project.type}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                
                                <div className="space-y-4 mb-6 flex-grow">
                                    <p className="text-gray-400 text-sm mt-1 leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                    
                                    {/* Problem & Solution Mini (Opsional, kalau mau ditampilin detail) */}
                                    {/* <div className="pt-2 border-t border-white/5">
                                        <p className="text-xs text-gray-500"><span className="text-red-400 font-bold">Problem:</span> {project.problem}</p>
                                    </div> */}
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className="text-xs text-gray-400 border border-gray-700 px-2 py-1 rounded hover:border-blue-500 transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
                                    {project.links.demo ? (
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-2 text-sm font-bold text-gray-600 cursor-not-allowed">
                                            <FaExternalLinkAlt /> Offline
                                        </span>
                                    )}
                                    
                                    {project.links.repo && (
                                        <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition">
                                            <FaGithub size={16} /> Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;