
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-background border-t border-primary/20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Social Links */}
        <div className="flex space-x-6 mb-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-secondary transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/christabel-osei-919940212" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:armahsarpomaa16@gmail.com" 
            className="text-white hover:text-accent transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-sm text-white/70">
          <p>© {new Date().getFullYear()} Christabel Osei. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
