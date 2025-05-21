
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
    <section id="about" className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-gradient-to-tr from-white via-pink-bg to-white`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="numbered-heading text-2xl sm:text-3xl font-bold mb-10 sparkle relative" data-number="01">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <div className="space-y-4 text-purple">
              <p>
                Hello! I'm Jane, and I love creating beautiful experiences on the web. 
                My journey into web development began when I discovered my passion for 
                combining creativity with logic through designing custom blog themes.
              </p>
              
              <p>
                Today, I've had the amazing opportunity to work with 
                <span className="text-pink"> a creative design agency</span>,
                <span className="text-pink"> an innovative tech startup</span>, and
                <span className="text-pink"> a global beauty brand</span>. 
                I'm passionate about creating experiences that are not only functional but also delightful!
              </p>
              
              <p>
                Here are some technologies I've been playing with lately:
              </p>
              
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 heart-bullet">
                {[
                  "JavaScript (ES6+)", 
                  "TypeScript", 
                  "React", 
                  "Next.js", 
                  "Node.js", 
                  "Tailwind CSS"
                ].map((tech, i) => (
                  <li key={i} className="flex items-center font-mono text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="relative group">
              <div className="w-full relative z-10">
                <div className="relative rounded-2xl overflow-hidden aspect-square transform rotate-3 transition-all group-hover:rotate-0 duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
                    alt="Jane Smith" 
                    className="w-full h-full object-cover transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink/40 to-blue/40 mix-blend-multiply hover:opacity-0 transition duration-300"></div>
                </div>
              </div>
              <div className="absolute -inset-1.5 border-2 border-pink rounded-2xl z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
