
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 px-6 mt-20 border-t border-secondary/30">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Social Links */}
        <div className="flex space-x-6 mb-4">
          <SocialLink href="https://github.com/username" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/username" icon={<Linkedin size={20} />} label="LinkedIn" />
          <SocialLink href="mailto:hello@example.com" icon={<Mail size={20} />} label="Email" />
        </div>
        
        {/* Credit */}
        <div className="font-mono text-sm text-slate">
          <p>Designed & Built by John Doe</p>
        </div>
        
        {/* Copyright */}
        <div className="mt-4 text-xs text-slate/70">
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-slate hover:text-cyan transform hover:-translate-y-1 transition-all duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;
