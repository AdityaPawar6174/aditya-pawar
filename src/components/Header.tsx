import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? darkMode
                    ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg shadow-purple-200/10'
                    : 'bg-white/90 backdrop-blur-sm shadow-lg'
                : 'bg-transparent'
            }`}
        >

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex justify-between items-center py-4'>
                    <div className='flex items-center'>
                        <a href="#" className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                            Aditya<span className='text-purple-600'> Pawar</span>
                        </a>
                    </div>

                    <nav className='hidden md:flex space-x-10'>
                        <a href="#home" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300`}>Home</a>
                        <a href="#about" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300`}>About</a>
                        <a href="#education" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300`}>Education</a>
                        <a href="#skills" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300`}>Skills</a>
                        <a href="#projects" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300`}>Projects</a>
                        <a href="#contact" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300`}>Contact</a>
                    </nav>

                    <div className='flex items-center'>
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors duration-300 mr-2`}
                            aria-label='Toggle dark mode'
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-700 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} className={darkMode ? 'text-white' : 'text-gray-900'} /> : <Menu size={24} className={darkMode ? 'text-white' : 'text-gray-900'} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className={`md:hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
                    <div className='px-2 pt-2 pb-3 space-y-` sm:px-3'>
                        <a
                            href="#home"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}`}
                            onClick={toggleMenu}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}`}
                            onClick={toggleMenu}
                        >
                            About
                        </a>
                        <a 
                            href="#Education"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}`}
                        >
                            Education
                        </a>
                        <a
                            href="#skills"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}`}
                            onClick={toggleMenu}
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}`}
                            onClick={toggleMenu}
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}`}
                            onClick={toggleMenu}
                        >
                            Contact
                        </a>

                    </div>
                </div>
            )}



        </header>
    );
};

export default Header;