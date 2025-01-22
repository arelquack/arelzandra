import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6 text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Arel Zandra. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
