import React from 'react';
import * as simpleIcons from 'simple-icons';

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  level: number;
  simpleIconSlug: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SimpleIconData {
  title: string;
  slug: string;
  hex: string;
  svg: string;
  source: string;
  path: string;
  guidelines?: string;
  license: {
    type: string;
    url: string;
  };
}

function isSimpleIcon(obj: any): obj is SimpleIconData {
  return typeof obj === 'object' && 'slug' in obj && 'svg' in obj;
}

const iconMap = new Map<string, SimpleIconData>();
Object.values(simpleIcons).forEach((icon: any) => {
  if (isSimpleIcon(icon)) {
    iconMap.set(icon.slug, icon);
  }
});

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML5', level: 90, simpleIconSlug: 'html5' },
        { name: 'CSS3', level: 70, simpleIconSlug: 'css' },
        { name: 'React.js', level: 60, simpleIconSlug: 'react' },
        { name: 'JavaScript', level: 70, simpleIconSlug: 'javascript' },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Java', level: 70, simpleIconSlug: 'java' },
        { name: 'Spring Boot', level: 80, simpleIconSlug: 'springboot' },
        { name: 'Node.js', level: 50, simpleIconSlug: 'nodedotjs' },
        { name: 'Python', level: 70, simpleIconSlug: 'python' },
      ],
    },
    {
      name: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 40, simpleIconSlug: 'amazonaws' },
        { name: 'Kubernetes', level: 10, simpleIconSlug: 'kubernetes' },
        { name: 'Docker', level: 10, simpleIconSlug: 'docker' },
        { name: 'GCP', level: 0, simpleIconSlug: 'googlecloud' },
      ],
    },
    {
      name: 'Database',
      skills: [
        { name: 'MySQL', level:70, simpleIconSlug: 'mysql' },
        { name: 'PostgreSQL', level: 80, simpleIconSlug: 'postgresql' },
        { name: 'MongoDB', level: 60, simpleIconSlug: 'mongodb' },
        { name: 'Supabase', level: 20, simpleIconSlug: 'supabase'},
      ],
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', level: 50, simpleIconSlug: 'git' },
        { name: 'GitHub', level: 70, simpleIconSlug: 'github' },
        { name: 'Postman', level: 50, simpleIconSlug: 'postman' },
        { name: 'IntelliJ IDEA', level: 60, simpleIconSlug: 'intellijidea' },
        { name: 'Ubuntu', level: 70, simpleIconSlug: 'ubuntu' },
      ],
    },
    {
      name: 'AI/ML & DS',
      skills: [
        { name: 'Pandas', level: 60, simpleIconSlug: 'pandas'},
        { name: 'NumPy', level: 40, simpleIconSlug: 'numpy'},
        { name: 'Jupyter', level: 70, simpleIconSlug: 'jupyter' },
        { name: 'TensorFlow', level: 10, simpleIconSlug: 'tensorflow' },
        { name: 'OpenCV', level: 0, simpleIconSlug: 'opencv' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'}`}
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-600">{category.name}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => {
                  const icon = iconMap.get(skill.simpleIconSlug);
                  return (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-3">
                          {icon && (
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill={`#${icon.hex}`}
                              xmlns="http://www.w3.org/2000/svg"
                              dangerouslySetInnerHTML={{ __html: icon.svg }}
                            ></svg>
                          )}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{skill.level}%</span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div
                          className="h-full rounded-full bg-purple-600"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
