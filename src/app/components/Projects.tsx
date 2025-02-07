import Image from 'next/image';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="p-12 relative bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Transparent overlay */}
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-100 tracking-widest relative z-10">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text animate-text-glow">
                    My Projects
                </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
                
                {/* Nihongo Kurabu Website */}
                <div className="group">
                    <Image 
                        src="/images/website-nk.png" 
                        alt="Nihongo Kurabu Website" 
                        width={500}
                        height={200}
                        className="w-full h-48 object-cover mb-4 rounded-lg group-hover:opacity-80 transition"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-gray-50 group-hover:text-blue-400 transition">Nihongo Kurabu Website</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition">
                        A website dedicated to my beloved Japanese language organization in high school.
                    </p>
                    <a 
                        href="https://nk-project.vercel.app" 
                        target="_blank" 
                        className="text-blue-400 hover:text-blue-600 mt-4 inline-block"
                    >
                        Visit Website
                    </a>
                </div>

                {/* YouTube Comment Analysis */}
                <div className="group">
                    <Image 
                        src="/images/youtube-analysis.png" 
                        alt="YouTube Comment Analysis" 
                        width={500}
                        height={200}
                        className="w-full h-48 object-cover mb-4 rounded-lg group-hover:opacity-80 transition"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-gray-50 group-hover:text-blue-400 transition">YouTube Comment Analysis</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition">
                        Analyzing 1000 YouTube comments about Ngarai Sianok using NLP and data visualization.
                    </p>
                    <a 
                        href="https://github.com/arelquack/data-analytics" 
                        target="_blank" 
                        className="text-blue-400 hover:text-blue-600 mt-4 inline-block"
                    >
                        View on GitHub
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;
