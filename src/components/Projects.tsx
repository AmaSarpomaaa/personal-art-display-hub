
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  period: string;
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
      title: "Ufund Platform Development",
      description: "Implemented Helper functionality for searching and managing needs. Developed manager features to modify data with access restrictions. Built with Angular and Java Spring using Agile methodologies with Trello and Slack for tracking.",
      tags: ["Angular", "Java", "Agile", "Trello", "Spring"],
      period: "08/2024 - Present",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Incident Request Form Web App",
      description: "Created a responsive form interface with client-side validation. Configured Node mailer for ServiceNow ticket creation. Developed Express.js server for form handling. Deployed and integrated with SharePoint.",
      tags: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js"],
      period: "06/2024 - 08/2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "NBCUniversal TechWomen SharePoint Redesign",
      description: "Enhanced user experience, promoted events, and increased membership sign-ups. Integrated updated branding, added events calendar, designed streamlined sign-up process, and updated content sections.",
      tags: ["SharePoint", "UI Design", "UX Design"],
      period: "06/2024 - 08/2024",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={project.title} className="project-card">
              <div className="mb-5">
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="rounded-lg w-full h-40 object-cover"
                />
              </div>
              <div className="px-2">
                <p className="text-sm text-accent mb-2">{project.period}</p>
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="btn-tag text-xs py-1 px-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.demo && (
                    <Button size="sm" variant="outline" className="btn-outline text-xs">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button size="sm" variant="outline" className="btn-outline text-xs">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        Source
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
