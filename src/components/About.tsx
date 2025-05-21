
import { useState, useEffect } from 'react';
import { School, Award, FileCode } from 'lucide-react';

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
              alt="Christabel's Bitmoji" 
              className="w-60 h-auto mx-auto"
            />
          </div>
          
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="text-accent mt-1">
                <School width="32" height="32" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Education</h3>
                <p className="text-lg">
                  Rochester Institute of Technology<br />
                  Bachelor of Science in Computer Science<br />
                  Expected May 2027
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="text-accent mt-1">
                <Award width="32" height="32" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Certifications</h3>
                <p className="text-lg">
                  HTML & CSS<br />
                  Product Management<br />
                  Introduction to Generative AI
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-accent mt-1">
                <FileCode width="32" height="32" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Software Skills</h3>
                <p className="text-lg">
                  Excel, Visual Studio, Trello, Microsoft Office, Slack,<br />
                  GitHub, Bootstrap, Jira, Confluence, Postman, SharePoint
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
