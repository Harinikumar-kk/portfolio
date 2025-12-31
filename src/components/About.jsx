import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Database, Terminal, GitBranch } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
    >
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
            <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            I am a passionate <span className="text-blue-600 dark:text-blue-400 font-semibold">Frontend Developer</span> with experience in building responsive, user-friendly websites and web applications.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            I am currently working at <span className="font-semibold text-gray-900 dark:text-white">Xtown</span> as a Frontend Developer, where I focus on creating clean UI, implementing smooth animations, and building interactive functional designs.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            My goal is to create meaningful web experiences that look great and work perfectly across all devices.
                        </p>
                    </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Technical Skills</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SkillCard
                        icon={Code2}
                        title="Frontend Foundations"
                        skills={['HTML5', 'CSS3', 'JavaScript (ES6+)']}
                    />
                    <SkillCard
                        icon={Globe}
                        title="Modern Frameworks"
                        skills={['React.js', 'Vite']}
                    />
                    <SkillCard
                        icon={Palette}
                        title="Styling"
                        skills={['TailwindCSS', 'Bootstrap']}
                    />
                    <SkillCard
                        icon={GitBranch}
                        title="Version Control"
                        skills={['Git', 'GitHub']}
                    />
                    <SkillCard
                        icon={Terminal}
                        title="Tools"
                        skills={['VS Code', 'NPM/Yarn', 'Postman']}
                    />
                    <SkillCard
                        icon={Database}
                        title="Deployment"
                        skills={['Vercel']}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
