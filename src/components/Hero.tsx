
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-4xl">
        <h1 className="font-mono text-cyan text-lg mb-6 animate-fade-in-up">Hi, my name is</h1>
        <h2 className="text-slate-lighter text-5xl sm:text-6xl md:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          John Doe.
        </h2>
        <h3 className="text-slate text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          I build things for the web.
        </h3>
        <p className="text-slate max-w-xl text-lg mb-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <Button asChild className="bg-transparent hover:bg-cyan/10 border-2 border-cyan text-cyan px-7 py-5 rounded font-mono">
            <a href="#projects">Check out my work!</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
