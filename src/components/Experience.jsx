import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Internship</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 pb-12 last:pb-0"
                    >
                        <div className="absolute -left-[10px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Briefcase className="text-blue-600" size={20} />
                                    Frontend Developer Intern
                                </h3>
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                    <Calendar size={14} />
                                    2025 - Present
                                </span>
                            </div>

                            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Xtown</h4>

                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                                    Built fully responsive UI components ensuring compatibility across devices.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                                    Integrated RESTful APIs to display dynamic data efficiently.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                                    Designed reusable React components to maintain codebase scalability.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                                    Utilized Git for version control and collaborated with the team via GitHub.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
