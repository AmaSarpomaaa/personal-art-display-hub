
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simple loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-r from-pink-light to-blue-light flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-pink/30 border-t-pink rounded-full animate-spin"></div>
          <p className="mt-4 font-mono text-pink">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-bg text-purple">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Fixed side elements - left (social links) */}
      <div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center">
        <div className="flex flex-col space-y-6 after:content-[''] after:w-px after:h-24 after:bg-pink/50 after:mx-auto after:mt-6">
          <a 
            href="https://github.com/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple hover:text-pink transform hover:-translate-y-1 transition-all duration-200"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple hover:text-pink transform hover:-translate-y-1 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a 
            href="mailto:hello@example.com" 
            className="text-purple hover:text-pink transform hover:-translate-y-1 transition-all duration-200"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Fixed side elements - right (email) */}
      <div className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center">
        <div className="flex flex-col items-center after:content-[''] after:w-px after:h-24 after:bg-pink/50 after:mx-auto after:mt-6">
          <a 
            href="mailto:hello@example.com" 
            className="font-mono text-purple hover:text-pink transform hover:-translate-y-1 transition-all duration-200"
            style={{ writingMode: 'vertical-rl' }}
          >
            hello@example.com
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="fixed top-20 left-10 text-pink/10 text-6xl hidden lg:block">✦</div>
      <div className="fixed bottom-20 right-10 text-blue/10 text-6xl hidden lg:block">✦</div>
      
      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-pink/20 hover:bg-pink/30 text-pink p-3 rounded-full transition-all duration-200 z-50 shadow-md hover:shadow-lg"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default Index;
