import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaLinkedin, FaCalendarAlt } from 'react-icons/fa';

interface Project {
    title: string;
    date: string; // Menggantikan 'type'
    image: string;
    description: string;
    stack: string[];
    partners?: {
        name: string;
        linkedin: string;
    }[];
    links: {
        demo: string | null;
        repo: string | null;
    };
}

const projects: Project[] = [
    {
        title: "VoteX",
        date: "May 2026",
        image: "/images/votex.png",
        description: "A Decentralized Autonomous Organization (DAO) application for transparent, secure, and immutable digital voting leveraging Ethereum.",
        stack: ["Solidity", "Ethereum", "Next.js", "Web3"],
        partners: [
            {
                name: "Zidan Taufiqurahman",
                linkedin: "https://www.linkedin.com/in/zidan-taufiqurahman-0208ba385/"
            }
        ],
        links: {
            demo: null, 
            repo: null
        }
    },
    {
        title: "Newlymom",
        date: "May 2026",
        image: "/images/newlymom.png",
        description: "An integrated multi-platform system for postpartum mental health support, featuring early detection alerts and sentiment analysis.",
        stack: ["Flutter", "Spring Boot", "Next.js", "Java"],
        partners: [
            {
                name: "Reqi Jumantara Hapid",
                linkedin: "https://www.linkedin.com/in/reqi-jumantara"
            },
            {
                name: "Umar Faruq Robbany",
                linkedin: "https://www.linkedin.com/in/umar-faruq-robbany/"
            }
        ],
        links: {
            demo: null,
            repo: null
        }
    },
    {
        title: "AdkesKom",
        date: "Jan 2026",
        image: "/images/adkeskom.png",
        description: "Web application incorporating gamification elements to track member engagement and integrate cross-stack API endpoints.",
        stack: ["Next.js", "FastAPI", "Supabase", "Python"],
        partners: [
            {
                name: "Annisa Dian Fadillah",
                linkedin: "https://www.linkedin.com/in/annisadianfadillah"
            }
        ],
        links: {
            demo: "https://adkes-himakom.vercel.app",
            repo: null
        }
    },
    {
        title: "RekamedChain",
        date: "Oct 2025",
        image: "/images/rekamedchain.png",
        description: "MVP of an e-government digital medical record system securing patient data sovereignty through SSI and IPFS.",
        stack: ["Golang", "Docker", "IPFS", "CI/CD"],
        partners: [
            {
                name: "Reqi Jumantara Hapid",
                linkedin: "https://www.linkedin.com/in/reqi-jumantara"
            },
            {
                name: "Umar Faruq Robbany",
                linkedin: "https://www.linkedin.com/in/umar-faruq-robbany/"
            }
        ],
        links: {
            demo: null,
            repo: null
        }
    },
    {
        title: "Nihongo Kurabu Portal",
        date: "Jan 2025",
        image: "/images/website-nk.png",
        description: "A comprehensive web-based information system and admin dashboard with custom SEO optimization yielding top organic search rankings.",
        stack: ["Next.js", "TypeScript", "Supabase", "Vercel"],
        links: {
            demo: "https://nk-project.vercel.app",
            repo: null
        }
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
                        Featured <span className="text-glow-gradient">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Solving complex architectural challenges from smart contracts to cross-platform mobile apps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-blue-500/50 transition-colors">
                            
                            <div className="relative h-56 overflow-hidden bg-gray-900 group">
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    width={800} 
                                    height={600}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 relative z-10"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 z-20"></div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow relative z-30 -mt-2">
                                {/* Date Badge - Diubah warnanya biar lebih clean dan dikasih icon kalender */}
                                <div className="mb-4">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-white/10 text-gray-300 border border-white/20">
                                        <FaCalendarAlt className="text-gray-400" />
                                        {project.date}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                
                                <div className="space-y-4 mb-4 flex-grow">
                                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                                        {project.description}
                                    </p>
                                    
                                    {project.partners && project.partners.length > 0 && (
                                        <div className="pt-2">
                                            <p className="text-xs text-gray-500 mb-2 font-medium">Co-developed with:</p>
                                            <div className="flex flex-wrap gap-3">
                                                {project.partners.map((partner, pIdx) => (
                                                    <a 
                                                        key={pIdx}
                                                        href={partner.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-blue-400 transition-colors"
                                                    >
                                                        <FaLinkedin size={14} />
                                                        {partner.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className="text-xs font-medium text-gray-300 bg-white/5 border border-gray-700 px-2 py-1 rounded hover:bg-white/10 hover:border-gray-500 transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-white/5">
                                    {project.links.demo ? (
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-gray-400 border border-white/10 select-none">
                                            Private Project
                                        </span>
                                    )}
                                    
                                    {project.links.repo ? (
                                        <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition">
                                            <FaGithub size={16} /> Code
                                        </a>
                                    ) : (
                                        <span className="text-xs text-gray-500 font-medium border-l border-white/10 pl-3">
                                            Private Repository
                                        </span>
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