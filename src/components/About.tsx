
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
    <section id="about" className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-card`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="numbered-heading mb-12">
          ABOUT
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
              alt="Shyanne's Bitmoji" 
              className="w-60 h-auto mx-auto"
            />
          </div>
          
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="text-accent mt-1">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L7 11M12 16L17 11M12 16V4M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Front-end Developer</h3>
                <p className="text-lg">
                  I'm a front-end developer with experience in building responsive and optimized sites.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="text-accent mt-1">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 21V9" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">UI Designer</h3>
                <p className="text-lg">
                  I have designed multiple landing pages and have created design systems as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
