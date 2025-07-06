import React, { useState } from 'react';
import { Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "CuisineVerse – Scalable Recipe Discovery Platform",
      githubUrl: "https://github.com/AdityaPawar6174/cuisineverse-discover-amazing-recipes",
      description: "Responsive web app to explore 1000+ global recipes with real-time filtering.",
      longDescription: "Built a full-featured recipe discovery platform using React.js and Firebase. Implemented real-time API search, cuisine-based filtering, dietary tag selection, and responsive UI. Achieved a Lighthouse performance score of over 95. Designed with modular components and optimized for mobile and desktop interfaces.",
      image: "https://github.com/AdityaPawar6174/aditya-pawar/blob/main/public/image2.png",
      technologies: ["React.js", "Firebase", "JavaScript", "REST APIs", "CSS"],
      category: "frontend"
    },
    {
      id: 2,
      title: "CineScout – Movie Metadata Explorer",
      githubUrl: "https://github.com/AdityaPawar6174?tab=repositories",
      description: "Multi-page movie database application with persistent watchlist support.",
      longDescription: "Created a movie metadata explorer app using React and the TMDB API. Integrated dynamic routing with React Router and managed local state with hooks. Implemented persistent localStorage watchlist, responsive layout, and skeleton loading components to enhance UX.",
      image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "TMDB API", "JavaScript", "React Router", "LocalStorage"],
      category: "frontend"
    },
    {
      id: 3,
      title: "FinBanker – Core Banking System Simulation",
      githubUrl: "https://github.com/AdityaPawar6174/bank-management-system",
      description: "Desktop-based Java banking simulation with secure transaction features.",
      longDescription: "Engineered a banking system simulator using Java Swing and JDBC with MySQL. Included secure user authentication, ATM-style operations like deposit, withdrawal, and mini-statements. Followed OOP principles and modular design for extensibility and clean architecture.",
      image: "https://plus.unsplash.com/premium_photo-1661301075857-63868ae88c00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Java", "Swing", "AWT", "MySQL", "JDBC"],
      category: "backend"
    },
    {
      id: 4,
      title: "CronTasker – Lightweight Task Scheduler",
      githubUrl: "https://github.com/AdityaPawar6174/Task-Schedular-Project",
      description: "Pure PHP-based task management system with CRON-based hourly reminders.",
      longDescription: "Developed for rtCamp's GitHub Classroom assignment, CronTasker allows users to create, verify, and manage tasks via an HTML/CSS interface. Tasks are stored in text files without using databases. Integrated CRON jobs to trigger hourly email reminders and implemented custom email verification. Focused on simplicity, automation, and raw PHP skills.",
      image: "https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["PHP", "CRON", "HTML", "CSS", "File I/O"],
      category: "backend"
    }
  ];


  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const openProjectModal = (project: Project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-purple-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Explore a curated collection of my projects — each one a testament to solving <br /> real-world challenges with innovative engineering and scalable solutions
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {["all", "frontend", "backend", "ai/ml", "Data Science"].map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${filter === type
                  ? 'bg-purple-600 text-white'
                  : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} transition-all duration-300 transform hover:-translate-y-2`}
              onClick={() => openProjectModal(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 text-xs rounded-full bg-purple-600 text-white font-bold">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-200 text-purple-900">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div
            className={`absolute inset-0 ${darkMode ? 'bg-gray-900 bg-opacity-70 opacity-80 transition-opacity' : 'bg-gray-600 bg-opacity-60 opacity-80 transition-opacity'}`}
            onClick={closeProjectModal}
          ></div>
          <div className={`relative rounded-lg shadow-xl w-full max-w-4xl mx-auto overflow-hidden z-50 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <div className={`flex justify-between items-start p-6 border-b border-gray-200 dark:border-white-700 ${darkMode ? 'bg-gray-800' : 'bg-purple-100'}`}>
              <h3 className="text-2xl font-bold">{activeProject.title}</h3>
              <button onClick={closeProjectModal} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-64 w-full overflow-hidden">
              <img src={activeProject.image} alt={activeProject.title} className="object-cover w-full h-full" />
            </div>
            <div className="p-6 space-y-4">
              <p className="text-lg">{activeProject.longDescription}</p>

              {activeProject.githubUrl && (
                <div>
                  <h4 className="font-semibold mb-2">🔗 View Project</h4>
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-700 transition"
                  >
                    <Github size={20} className="text-white" />
                    GitHub Repository
                  </a>
                </div>
              )}


              <div>
                <h4 className="font-semibold mb-2">🛠️ Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-purple-600 text-white font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;