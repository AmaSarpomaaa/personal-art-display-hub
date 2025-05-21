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
        
        <div className="space-y-24 mb-16">
          {/* Featured Projects */}
          {projects.filter(p => p.featured).map((project, i) => (
            <div key={project.title} className={`relative grid grid-cols-12 gap-4 items-center`}>
              {/* Project Image */}
              <div className={`col-span-12 lg:col-span-7 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
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
              
              {/* Project Info */}
              <div className={`col-span-12 lg:col-span-6 lg:col-start-${i % 2 === 0 ? '7' : '1'} lg:row-start-1 z-20`}>
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:items-end text-right' : ''}`}>
                  <p className="font-mono text-cyan mb-1">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-cyan transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="bg-navy-light p-5 rounded-lg shadow-lg mb-4">
                    <p className="text-slate">{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap mb-4 gap-2 ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    {project.tags.map(tag => (
                      <li key={tag} className="text-slate-light font-mono text-sm">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="text-slate-lighter hover:text-cyan transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Live Demo"
                      className="text-slate-lighter hover:text-cyan transition-colors"
                    >
                      <LinkIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects */}
        <h3 className="text-center text-2xl font-bold mb-8">Other Noteworthy Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.filter(p => !p.featured).map((project) => (
            <Card key={project.title} className="bg-navy-light border-navy-lighter h-full flex flex-col">
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="rounded-full bg-cyan/10 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="text-slate-light hover:text-cyan transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Live Demo"
                      className="text-slate-light hover:text-cyan transition-colors"
                    >
                      <LinkIcon size={20} />
                    </a>
                  </div>
                </div>
                <h4 className="font-bold text-xl mb-2 text-slate-lighter hover:text-cyan transition-colors">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h4>
                <p className="text-slate mb-6 flex-grow">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <li key={tag} className="text-slate-light font-mono text-xs">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Show More Button */}
        <div className="flex justify-center mt-12">
          <Button asChild className="bg-transparent hover:bg-cyan/10 border border-cyan text-cyan px-7 py-5 rounded font-mono">
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
