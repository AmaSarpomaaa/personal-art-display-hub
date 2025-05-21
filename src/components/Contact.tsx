
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    
    const section = document.getElementById('contact');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section 
      id="contact" 
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-gradient-to-tl from-blue-lighter via-white to-pink-lighter`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-2 text-center">
          <span className="inline-block text-pink text-2xl sparkle-element">✦</span>
        </div>
        <h2 className="font-mono text-pink text-lg mb-4">04. Let's Connect!</h2>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-purple-dark">Get In Touch</h2>
        <p className="text-purple mb-10 max-w-lg mx-auto">
          I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, drop me a message and I'll get back to you soon.
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-pink/30">
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-purple font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/50 border-pink/30 text-purple focus-visible:ring-pink"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-purple font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/50 border-pink/30 text-purple focus-visible:ring-pink"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-purple font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-white/50 border-pink/30 text-purple focus-visible:ring-pink"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-purple font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white/50 border-pink/30 text-purple focus-visible:ring-pink min-h-[150px]"
              />
            </div>
            <div className="pt-4 flex justify-center sm:justify-end">
              <Button 
                type="submit" 
                className="btn-girly flex items-center gap-2"
              >
                <Mail size={18} />
                <span>Send Message</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
