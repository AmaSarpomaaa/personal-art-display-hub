
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  // Skills data
  const skills = {
    frontend: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "PostgreSQL", level: 60 },
      { name: "GraphQL", level: 55 },
    ],
    other: [
      { name: "Git", level: 80 },
      { name: "UI/UX Design", level: 65 },
      { name: "AWS", level: 50 },
      { name: "Docker", level: 45 },
      { name: "Testing", level: 60 },
    ],
  };

  return (
    <section 
      id="skills" 
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="numbered-heading text-2xl sm:text-3xl font-bold mb-10" data-number="02">
          Skills
        </h2>

        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-navy-light border border-secondary">
              <TabsTrigger value="frontend" className="data-[state=active]:bg-secondary data-[state=active]:text-slate-lighter">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-secondary data-[state=active]:text-slate-lighter">
                Backend
              </TabsTrigger>
              <TabsTrigger value="other" className="data-[state=active]:bg-secondary data-[state=active]:text-slate-lighter">
                Other
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(skills).map(([category, categorySkills]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="space-y-6">
                {categorySkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-light font-mono">{skill.name}</span>
                      <span className="text-cyan font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-navy-light rounded-full h-2.5">
                      <div 
                        className="bg-cyan h-2.5 rounded-full"
                        style={{ 
                          width: `${skill.level}%`, 
                          animation: isVisible ? `growWidth 1s ease-out forwards ${index * 0.2}s` : 'none',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <style jsx>{`
        @keyframes growWidth {
          from { width: 0; }
          to { width: ${isVisible ? 'calc(var(--level) * 1%)' : '0'}; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
