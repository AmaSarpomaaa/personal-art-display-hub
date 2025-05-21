
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        {/* Main content */}
        <div className="md:w-2/3">
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 animate-fade-in-up">
            Hi, I'm <span className="text-accent">Shyanne</span>
          </h1>
          <p className="text-xl mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            I'm a prospective software/web developer with 5 years of experience using HTML, CSS,
            Javascript, MySQL and Java. I also have 2 years of experience with Python, PHP, C#,
            Flutter, and React. Reach out if you'd like to learn more!
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button asChild className="btn-primary">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        {/* Bitmoji */}
        <div className="mt-12 md:mt-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <img 
            src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
            alt="Shyanne's Bitmoji" 
            className="w-64 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
