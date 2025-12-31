import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Sri Krishna Bhavan',
        description: 'A modern, responsive website for Sri Krishna Bhavan, featuring an elegant user interface to showcase the menu, ambiance, and location details.',
        tags: ['React', 'TailwindCSS', 'Vite'],
        image: 'https://placehold.co/600x400/eab308/white?text=Sri+Krishna+Bhavan',
        liveLink: 'https://srikrishnabhavan-et9a.vercel.app/',
        codeLink: '#'
    },
    {
        title: 'Inventory Management System',
        description: 'A comprehensive dashboard for tracking sales, managing inventory, and analyzing customer data with real-time charts.',
        tags: ['React', 'TailwindCSS', 'Chart.js'],
        image: 'https://placehold.co/600x400/2563eb/white?text=IMS+Project',
        liveLink: '#',
        codeLink: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col group"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="flex gap-3">
                                        <a href={project.liveLink} className="p-2 bg-white rounded-full text-gray-900 hover:bg-blue-500 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.codeLink} className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-700 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
