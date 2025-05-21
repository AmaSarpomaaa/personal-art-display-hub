
import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="numbered-heading text-2xl sm:text-3xl font-bold mb-10" data-number="01">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <div className="space-y-4 text-slate">
              <p>
                Hello! My name is John, and I enjoy creating things that live on the internet. 
                My interest in web development started back in 2012 when I decided to try customizing 
                Tumblr themes — turns out hacking together custom CSS sparked my journey into coding!
              </p>
              
              <p>
                Fast-forward to today, and I've had the privilege of working at 
                <span className="text-cyan"> an advertising agency</span>,
                <span className="text-cyan"> a start-up</span>, and
                <span className="text-cyan"> a large corporation</span>. 
                My main focus these days is building accessible, inclusive products and digital 
                experiences for a variety of clients.
              </p>
              
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4">
                {[
                  "JavaScript (ES6+)", 
                  "TypeScript", 
                  "React", 
                  "Next.js", 
                  "Node.js", 
                  "Tailwind CSS"
                ].map((tech, i) => (
                  <li key={i} className="flex items-center font-mono text-sm">
                    <span className="text-cyan mr-2">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="relative group">
              <div className="w-full relative z-10">
                <div className="relative rounded-md overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                    alt="John Doe" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300" 
                  />
                  <div className="absolute inset-0 bg-cyan/20 mix-blend-multiply hover:opacity-0 transition duration-300"></div>
                </div>
              </div>
              <div className="absolute -inset-1.5 border-2 border-cyan rounded-md z-0 group-hover:translate-x-1 group-hover:translate-y-1 transition"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
