import React from 'react';
import { Brain, Computer, Binary } from 'lucide-react';

interface AboutProps {
    darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
    return (
        <section
            id="about"
            className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
                </div>

                <div className="mt-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">
                            🚀 Full Stack Developer | AIML & Data Science Enthusiast
                        </h3>
                        <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                I am a Fourth-year <span className="text-purple-600 font-bold"> Computer Engineering student </span> at <span className="font-bold">Dr. D. Y. Patil Institute of Technology, Pimpri, Pune</span>. passionate about crafting scalable, efficient, and intelligent solutions across the cloud, backend systems, and AI/ML landscapes. My interests lie in solving real-world problems through innovative technology and clean architecture.
                            </p>
                            <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Currently undergoing technical training at <span className='font-bold'> EdgeVerve (Infosys Finacle)</span>, I’m expanding my expertise in enterprise-grade development using Spring Boot, PostgreSQL, and microservice architectures.
                            </p>
                            <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                With a strong foundation in <span className='font-bold'>Java, C++, Python, and SQL</span>, I aim to bridge the gap between development and deployment through DevOps tools like Git, GitHub, Docker, and Kubernetes. I embrace challenges, drive continuous learning, and believe in building resilient systems through automation and collaboration.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="mt-16">
                    <h3 className="text-2xl font-bold mb-6">🔧 What I’m Doing</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                            <div className="flex items-center mb-4">
                                <Computer size={24} className="text-purple-600 mr-4" />
                                <h4 className="text-xl font-semibold">Learning Spring Boot + Microservices</h4>
                            </div>
                            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                Currently diving deep into Java-based backend development using <span className='font-bold'>Spring Boot</span> and exploring <span className='font-bold'>microservice</span> patterns, API gateway integration (Eureka, OpenFeign), and JPA with PostgreSQL. My projects reflect clean REST API design and modular development.
                            </p>
                        </div>
                        <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                            <div className="flex items-center mb-4">
                                <Brain size={24} className="text-purple-600 mr-4" />
                                <h4 className="text-xl font-semibold">Exploring AI/ML for Smart Applications</h4>
                            </div>
                            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                Actively exploring data science and machine learning to understand how intelligent systems can enhance decision-making in fintech and geospatial data analysis. Co-authored a Scopus-indexed book chapter on “<span className='font-bold'>AI/ML for Geodata Analysis</span>” with IGI Global.
                            </p>
                        </div>
                        <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                            <div className="flex items-center mb-4">
                                <Binary size={24} className="text-purple-600 mr-4" />
                                <h4 className="text-xl font-semibold">Mastering DSA & Problem Solving</h4>
                            </div>
                            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                With 100+ problems solved on platforms like <span className="font-bold">LeetCode & GeeksForGeeks</span>, I continuously strengthen my grasp on algorithms, data structures, and time-space trade-offs. My goal is to write optimal code that’s not just correct but elegant.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;