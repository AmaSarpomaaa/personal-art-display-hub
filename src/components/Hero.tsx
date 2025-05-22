
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        {/* Main content */}
        <div className="md:w-2/3">
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 animate-fade-in-up">
            Hi, I'm <span className="text-accent">Christabel</span>
          </h1>
          <p className="text-xl mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            I'm a Computer Science student with experience in Python, Java, HTML, CSS, Javascript, TypeScript, 
            Rest API, Node.js, Express.js, and Angular. I'm passionate about creating responsive and user-friendly 
            web applications. Reach out if you'd like to learn more!
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button asChild className="bg-primary hover:bg-secondary hover:text-black transition-all duration-300">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        {/* Bitmoji */}
        <div className="mt-12 md:mt-0 animate-fade-in relative" style={{ animationDelay: '400ms' }}>
          <div className="absolute -inset-4 bg-gradient-to-r from-accent via-primary to-secondary opacity-30 blur-lg rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
            alt="Christabel's Bitmoji" 
            className="w-64 h-auto relative rounded-full border-4 border-accent/50"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
