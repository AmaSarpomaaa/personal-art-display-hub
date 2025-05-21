
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
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-mono text-cyan text-lg mb-4">04. What's Next?</h2>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-lighter">Get In Touch</h2>
        <p className="text-slate mb-10 max-w-lg mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
        
        <div className="bg-navy-light rounded-lg p-6 sm:p-8 shadow-lg border border-secondary/30">
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-slate-light font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-navy border-secondary text-slate-light focus-visible:ring-cyan"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-slate-light font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-navy border-secondary text-slate-light focus-visible:ring-cyan"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-slate-light font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-navy border-secondary text-slate-light focus-visible:ring-cyan"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-slate-light font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-navy border-secondary text-slate-light focus-visible:ring-cyan min-h-[150px]"
              />
            </div>
            <div className="pt-4 flex justify-center sm:justify-end">
              <Button 
                type="submit" 
                className="bg-transparent hover:bg-cyan/10 border-2 border-cyan text-cyan px-6 py-4 rounded font-mono flex items-center gap-2"
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
