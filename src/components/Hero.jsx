import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        Harinikumar
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
                        Frontend Developer
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Passionate about building responsive, user-friendly websites and web applications.
                        Turning complex problems into beautiful interfaces.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <a
                            href="/resume.pdf"
                            download
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-500/25"
                        >
                            Download Resume <ArrowDown size={20} />
                        </a>
                        <Link
                            to="contact"
                            smooth={true}
                            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full font-medium transition-colors cursor-pointer"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-6">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-transform hover:scale-110">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:hariniksl27@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-transform hover:scale-110">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
