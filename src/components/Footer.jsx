import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
                    Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Harinikumar
                </div>

                <div className="text-gray-500 dark:text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
