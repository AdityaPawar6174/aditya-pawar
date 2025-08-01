import React from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';

interface EducationProps {
    darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
    const timelineItems = [
        {
            icon: <School size={24} className="text-purple-600" />,
            title: 'Secondary Education (SSC)',
            institution: 'V. J. HighSchool, Nandgaon',
            board: 'Maharashtra State Board',
            year: '2020',
            score: '95.80%',
        },
        {
            icon: <BookOpen size={24} className="text-purple-600" />,
            title: 'Higher Secondary (HSC)',
            institution: 'Arts, Commerce and Science College, Nandgaon',
            board: 'Maharashtra State Board',
            year: '2022',
            score: '81.00%',
        },
        {
            icon: <GraduationCap size={24} className="text-purple-600" />,
            title: "Bachelor's in Computer Engineering",
            institution: 'Dr. D. Y. Patil Institute of Technology, Pune',
            board: 'SPPU (Savitribai Phule Pune University)',
            year: '2026',
            score: 'Current CGPA: 8.93',
        },
    ];

    return (
        <section
            id="education"
            className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-purple-50 text-gray-900'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Education</h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
                </div>

                <div className="relative">
                    <div className="absolute left-5 sm:left-10 top-0 h-full w-[2px] bg-purple-500 rounded-full z-0"></div>

                    <div className="space-y-16 pl-8 sm:pl-14">
                        {timelineItems.map((item, index) => (
                            <div key={index} className="relative flex flex-col sm:flex-row items-start">
                                <div className="relative z-10 flex-shrink-0">
                                    <span className="absolute left-[-14px] sm:left-[-26px] top-20 w-6 h-6 rounded-full bg-purple-300 opacity-40 animate-pulse"></span>
                                    <span className="absolute left-[-10px] sm:left-[-22px] top-21 w-4 h-4 rounded-full bg-purple-600 z-10"></span>
                                </div>

                                <div
                                    className={`mt-6 sm:mt-0 sm:ml-20 p-6 w-full border rounded-2xl shadow-md transition-all duration-300 ${
                                        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                                    }`}
                                >
                                    <div className="flex items-center mb-3">
                                        {item.icon}
                                        <h4 className="ml-4 text-xl font-semibold">{item.title}</h4>
                                    </div>
                                    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                        <span className="font-bold">{item.institution}</span><br />
                                        {item.board}<br />
                                        <span className="italic">Year: {item.year} | Score: {item.score}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;