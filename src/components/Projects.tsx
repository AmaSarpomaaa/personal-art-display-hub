import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Link as LinkIcon } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
  featured: boolean;
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
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS. Features smooth scrolling, responsive design, and animated sections for an engaging user experience.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/username/portfolio",
      demo: "https://portfolio-demo.com",
      featured: true
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce application with product listings, cart functionality, checkout process, and authentication. Built with modern web technologies.",
      tags: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects and deadlines. Features drag-and-drop interface, filters, and data visualization.",
      tags: ["Next.js", "PostgreSQL", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/username/taskapp",
      demo: "https://taskapp-demo.com",
      featured: false
    }
  ];

  return (
    <section 
      id="projects" 
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="numbered-heading text-2xl sm:text-3xl font-bold mb-10" data-number="03">
          Projects
        </h2>
        
        <div className="space-y-16 mb-12">
          {/* Featured Projects - Made smaller by reducing spacing and image size */}
          {projects.filter(p => p.featured).map((project, i) => (
            <div key={project.title} className={`relative grid grid-cols-12 gap-3 items-center`}>
              {/* Project Image - Made smaller */}
              <div className={`col-span-12 lg:col-span-6 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative block w-full h-full group"
                >
                  <div className="w-full h-full relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-cyan/20 mix-blend-multiply group-hover:opacity-0 transition duration-300 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition duration-300"
                    />
                  </div>
                </a>
              </div>
              
              {/* Project Info - Made smaller with less padding and margin */}
              <div className={`col-span-12 lg:col-span-6 lg:col-start-${i % 2 === 0 ? '7' : '1'} lg:row-start-1 z-20`}>
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:items-end text-right' : ''}`}>
                  <p className="font-mono text-pink text-sm mb-1">Featured Project</p>
                  <h3 className="text-xl font-bold mb-3">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-pink transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="bg-white/50 backdrop-blur-sm p-3 rounded-lg shadow-md mb-3">
                    <p className="text-purple text-sm">{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap mb-3 gap-2 ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    {project.tags.map(tag => (
                      <li key={tag} className="text-purple-light font-mono text-xs">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="text-purple hover:text-pink transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Live Demo"
                      className="text-purple hover:text-pink transition-colors"
                    >
                      <LinkIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects - Made into a smaller grid with smaller cards */}
        <h3 className="text-center text-xl font-bold mb-6">Other Noteworthy Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {projects.filter(p => !p.featured).map((project) => (
            <Card key={project.title} className="bg-white/50 backdrop-blur-sm border-pink/10 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="rounded-full bg-pink/10 p-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="text-purple hover:text-pink transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Live Demo"
                      className="text-purple hover:text-pink transition-colors"
                    >
                      <LinkIcon size={16} />
                    </a>
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2 text-purple-dark hover:text-pink transition-colors">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h4>
                <p className="text-purple text-sm mb-4 flex-grow">{project.description}</p>
                <ul className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map(tag => (
                    <li key={tag} className="text-purple-light font-mono text-xs">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Show More Button - Made smaller */}
        <div className="flex justify-center mt-10">
          <Button asChild className="bg-transparent hover:bg-pink/10 border border-pink text-pink px-5 py-2 text-sm rounded-full font-mono">
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
