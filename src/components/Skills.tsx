
import { useState, useEffect } from 'react';

interface TechItem {
  name: string;
  icon: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    
    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  // Technology data
  const technologies: TechItem[] = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" }
  ];

  return (
    <section 
      id="skills" 
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-background`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="numbered-heading mb-16">
          EXPERIENCE
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className="tech-circle"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="tech-circle-inner">
                <img src={tech.icon} alt={tech.name} />
              </div>
              <p className="text-center font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
