
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase, GraduationCap, Award, FileText } from 'lucide-react';
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    
    const section = document.getElementById('resume');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-background py-20 px-6`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="numbered-heading mb-10 text-center">
          RESUME
        </h2>
        
        <div className="mb-8 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white py-2 px-6 rounded-full transition-all duration-300 hover:scale-105"
            target="_blank" 
            rel="noreferrer"
          >
            <FileText size={18} />
            Download Resume
          </a>
        </div>
        
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8 w-full max-w-md mx-auto">
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase size={16} />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap size={16} />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center gap-2">
              <Award size={16} />
              <span className="hidden sm:inline">Activities</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="space-y-8">
            <Card className="border border-primary/20 bg-card hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-1">Operations & Technology Intern</h3>
                <div className="flex flex-wrap justify-between mb-4">
                  <p className="text-secondary font-medium">NBC Sports</p>
                  <p className="text-accent">06/2024 - 08/2024</p>
                </div>
                <ul className="list-disc ml-5 space-y-2 text-white/80">
                  <li>Managed the development of a web-based incident request form used by employees to report incidents and create tickets in ServiceNow</li>
                  <li>Planned and carried out the front end using HTML, CSS, and JavaScript for a responsive interface</li>
                  <li>Developed the back-end server using Node.js and Express.js to handle form submissions</li>
                  <li>Deployed the application on a web server and integrated it with SharePoint</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-primary/20 bg-card hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-1">Intern</h3>
                <div className="flex flex-wrap justify-between mb-4">
                  <p className="text-secondary font-medium">Lockheed Martin</p>
                  <p className="text-accent">05/2024 - 06/2024</p>
                </div>
                <ul className="list-disc ml-5 space-y-2 text-white/80">
                  <li>Learned and utilized Jira for project tracking and management with Strategy and Business Agility</li>
                  <li>Gained proficiency in Confluence for documentation and team collaboration</li>
                  <li>Used Agile Methodology in project workflows</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-primary/20 bg-card hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-1">RIT Housing Ambassador</h3>
                <div className="flex flex-wrap justify-between mb-4">
                  <p className="text-secondary font-medium">Rochester Institute of Technology</p>
                  <p className="text-accent">09/2023 - Present</p>
                </div>
                <ul className="list-disc ml-5 space-y-2 text-white/80">
                  <li>Acted as primary resident contact; addressed inquiries, resolved conflicts</li>
                  <li>Managed housing assignments, move-ins/outs, and maintained records</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="education" className="space-y-8">
            <Card className="border border-primary/20 bg-card hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-1">Bachelor of Science in Computer Science</h3>
                <div className="flex flex-wrap justify-between mb-4">
                  <p className="text-secondary font-medium">Rochester Institute of Technology</p>
                  <p className="text-accent">Expected May 2027</p>
                </div>
                <p className="text-white/80">Rochester, New York</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="activities" className="space-y-6">
            <Card className="border border-primary/20 bg-card hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Volunteer & Extracurricular Activities</h3>
                <Table>
                  <TableBody>
                    <TableRow className="hover:bg-muted/30">
                      <TableCell className="font-medium text-primary">Vice President</TableCell>
                      <TableCell>Organization of African Students (OAS)</TableCell>
                      <TableCell className="text-accent text-right">08/2023 - Present</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-muted/30">
                      <TableCell className="font-medium text-primary">Participant</TableCell>
                      <TableCell>Rewriting the Code (RTC)</TableCell>
                      <TableCell className="text-accent text-right">08/2022 - Present</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-muted/30">
                      <TableCell className="font-medium text-primary">Participant</TableCell>
                      <TableCell>Women in Computing (WIC)</TableCell>
                      <TableCell className="text-accent text-right">08/2022 - Present</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-muted/30">
                      <TableCell className="font-medium text-primary">Participant</TableCell>
                      <TableCell>National Society of Black Engineers (NSBE)</TableCell>
                      <TableCell className="text-accent text-right">08/2022 - Present</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-muted/30">
                      <TableCell className="font-medium text-primary">Participant</TableCell>
                      <TableCell>Computing Organization of Multicultural Students (COMS)</TableCell>
                      <TableCell className="text-accent text-right">08/2022 - Present</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-muted/30">
                      <TableCell className="font-medium text-primary">Participant</TableCell>
                      <TableCell>Caribbean Student Association (CSA)</TableCell>
                      <TableCell className="text-accent text-right">08/2024 - Present</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
