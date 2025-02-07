const Hero: React.FC = () => {
    return (
        <section id="home" className="h-screen flex flex-col justify-center items-center text-center relative mb-0">
            <h1 className="text-6xl text-white font-extrabold animate-bounce relative z-10">
                Welcome to My Portfolio!
            </h1>
            <p className="text-xl text-white mt-4 relative z-10">
                Hi! I am Arel, a passionate IT student from Bandung State Polytechnic.
            </p>
            <a 
                href="https://drive.google.com/uc?export=download&id=1fAXZPtR3pNAYOj4-usGyHeCC3uPO_9Pl"
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-400 btn-glow transition rounded-full text-lg relative z-10"
            >
                Download CV
            </a>
        </section>
    );
};

export default Hero;