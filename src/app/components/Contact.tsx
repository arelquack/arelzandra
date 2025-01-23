import React from "react";

const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-gray-900 p-12 relative">
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Transparent overlay */}
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-100 tracking-widest relative z-10">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text animate-text-glow">
                    Contact Me
                </span>
            </h2>
            <div className="max-w-xl mx-auto text-center relative z-10">
                <p className="text-lg text-gray-300 mb-8">
                    If you would like to get in touch, feel free to send me a message!
                </p>
                <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=arel.zandra@gmail.com&su=Halo Arel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold transition hover:bg-blue-400"
                >
                    Send Email
                </a>
            </div>
        </section>
    );
};

export default Contact;