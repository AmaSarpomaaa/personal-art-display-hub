
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

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
    { name: "Experience", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-6 px-6",
      isScrolled ? "bg-background/90 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <a href="#" className="text-white font-bold text-2xl">
          Portfolio
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-accent"
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
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-white hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[76px] bg-background/95 backdrop-blur-md flex justify-center items-center z-40">
            <nav className="flex flex-col items-center">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-accent transition-colors py-4 text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
