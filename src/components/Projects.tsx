
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  // Projects data
  const projects: Project[] = [
    {
      title: "Responsive Card Design",
      description: "This is a project designed to change image quality based on the size of the user's device. The first card uses resolution switching, while the second card uses art-direction.",
      tags: ["HTML", "CSS", "JS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Top 10 Places to Eat",
      description: "This is a project designed to show the user the top 10 highly rated places to eat in Rochester. This website uses localStorage and cookies to save the user's previous likes.",
      tags: ["HTML", "CSS", "JS"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Baltimore County - Hometown",
      description: "This project involves creating a 10-page website about a place I've lived or visited. All of the content and styling are included in the database back-end, and PHP is used to retrieve that data.",
      tags: ["PHP", "HTML", "CSS", "JS"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "iSchool Website",
      description: "This project creates a professional web presence for the iSchool by consuming data from an API to display information about programs, employment, and people.",
      tags: ["HTML", "CSS", "React"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section 
      id="projects" 
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-card`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="numbered-heading mb-16">
          PROJECTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={project.title} className="project-card">
              <div className="mb-6">
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>
              <p className="text-base mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="btn-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.demo && (
                  <Button variant="outline" className="btn-outline">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button variant="outline" className="btn-outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      Source
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
