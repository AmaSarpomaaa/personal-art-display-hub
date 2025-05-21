
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16 bg-gradient-to-br from-pink-lighter via-white to-blue-lighter">
      <div className="max-w-4xl relative">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 text-pink opacity-30 text-7xl font-bold z-0 hidden md:block">✦</div>
        <div className="absolute bottom-10 -right-10 text-blue opacity-30 text-7xl font-bold z-0 hidden md:block">✦</div>
        
        {/* Main content */}
        <h1 className="font-mono text-pink text-lg mb-6 animate-fade-in-up">Hi, my name is</h1>
        <h2 className="text-purple-dark text-5xl sm:text-6xl md:text-7xl font-bold mb-4 animate-fade-in-up sparkle relative" style={{ animationDelay: '100ms' }}>
          Jane Smith.
        </h2>
        <h3 className="text-purple text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          I create digital magic.
        </h3>
        <p className="text-purple max-w-xl text-lg mb-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          I'm a creative developer specializing in building delightful digital experiences. Currently, I'm focused on creating accessible, human-centered designs that bring joy to users.
        </p>
        <div className="animate-fade-in-up flex items-center gap-8" style={{ animationDelay: '400ms' }}>
          <Button asChild className="btn-girly">
            <a href="#projects">See my work!</a>
          </Button>
          
          {/* Bitmoji */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg animate-bounce">
            <img 
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
              alt="Jane's Bitmoji" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
