
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    
    const section = document.getElementById('contact');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="contact" 
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-background`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="numbered-heading mb-6">
          CONTACT
        </h2>
        <h3 className="text-3xl mb-16">Feel free to reach out!</h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-4">
            <Mail size={32} className="text-white" />
            <a href="mailto:armahsarpomaa16@gmail.com" className="text-2xl hover:text-accent transition-colors">
              armahsarpomaa16@gmail.com
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <Linkedin size={32} className="text-white" />
            <a href="https://www.linkedin.com/in/christabel-osei-919940212" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition-colors">
              linkedin.com/in/christabel-osei
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <Github size={32} className="text-white" />
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition-colors">
              github.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
