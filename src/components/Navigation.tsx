import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      if (nav && !nav.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu on resize if open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Check which section is currently in view
      const sections = ['hero', 'tracks', 'prizes', 'schedule', 'contact'];
      for (const section of sections) {
        const element = document.querySelector(`#${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view (allowing for some margin)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll as any);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Challenges', href: '#tracks' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  // Determine the effective theme ('light' | 'dark')
  const effectiveTheme = theme === 'system' ? systemTheme : theme;

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-2 sm:p-4">
      <div className="max-w-7xl mx-auto">
        <div className={`flex items-center justify-between h-14 md:h-16 rounded-full transition-all duration-300
          ${scrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 shadow-lg dark:shadow-gray-900/20' 
            : 'bg-white/90 dark:bg-gray-900/90 shadow-xl dark:shadow-gray-900/30'
          } 
          backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 px-4 sm:px-6`}>
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('#hero')}>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className={`text-lg sm:text-xl font-bold ${scrolled ? 'text-foreground' : 'text-foreground dark:text-white'}`}>
              SIT Vibeathon
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 
                      rounded-full relative group overflow-hidden
                      ${isActive 
                        ? 'text-white bg-gradient-to-r from-primary to-purple-600 shadow-md shadow-primary/20' 
                        : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10'
                      }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {!isActive && (
                      <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/5 
                        dark:group-hover:bg-primary/10 transition-colors duration-200" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Theme Toggle & Register Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              aria-label="Toggle theme"
              variant="ghost"
              size="icon"
              onClick={() => setTheme(effectiveTheme === 'dark' ? 'light' : 'dark')}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              {effectiveTheme === 'dark' ? 
                <Sun className="h-5 w-5" /> : 
                <Moon className="h-5 w-5" />
              }
            </Button>
            <Button asChild
              className="gradient-primary hover:glow text-white px-6 font-semibold transition-all duration-200"
            >
              <a href="https://konfhub.com/sap-inside-track-bengaluru-vibeathon" target="_blank" rel="noopener noreferrer">Register</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              aria-label="Toggle theme"
              variant="ghost"
              size="icon"
              onClick={() => setTheme(effectiveTheme === 'dark' ? 'light' : 'dark')}
              className="hover:bg-primary/10 hover:text-primary"
            >
              {effectiveTheme === 'dark' ? 
                <Sun className="h-5 w-5" /> : 
                <Moon className="h-5 w-5" />
              }
            </Button>
            <Button
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-primary/10 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-20 left-4 right-4 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-xl border border-gray-200/20 dark:border-gray-700/20 animate-fade-in">
          <div className="p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 w-full text-left
                    ${isActive 
                      ? 'text-white bg-gradient-to-r from-primary to-purple-600 shadow-sm shadow-primary/20' 
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10'
                    }`}
                >
                  {item.name}
                </button>
              );
            })}
            <div className="pt-4 pb-2">
              <Button asChild
                className="gradient-primary hover:glow text-white w-full font-semibold"
              >
                <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer">Register Now</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;