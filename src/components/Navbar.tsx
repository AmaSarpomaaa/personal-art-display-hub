
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Nav items
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6",
      isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <a href="#" className="text-pink font-mono text-2xl font-semibold flex items-center">
          <span className="mr-2">✨</span>
          Portfolio
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-purple hover:text-pink"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ol className="flex space-x-8">
            {navItems.map((item, i) => (
              <li key={item.name} className="text-purple hover:text-pink transition-colors">
                <a href={item.href} className="font-mono group">
                  <span className="text-pink mr-1">{`0${i + 1}.`}</span>
                  <span className="group-hover:text-pink transition-colors">{item.name}</span>
                </a>
              </li>
            ))}
          </ol>
          <div>
            <Button asChild variant="outline" className="border-pink text-pink hover:bg-pink/10">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[76px] bg-white/95 backdrop-blur-md flex justify-center items-center z-40">
            <nav className="flex flex-col items-center">
              <ol className="flex flex-col items-center space-y-6 mb-8">
                {navItems.map((item, i) => (
                  <li key={item.name} className="text-purple hover:text-pink transition-colors text-lg">
                    <a 
                      href={item.href}
                      className="font-mono"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-pink mr-2">{`0${i + 1}.`}</span>
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <Button asChild variant="outline" className="border-pink text-pink hover:bg-pink/10">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
