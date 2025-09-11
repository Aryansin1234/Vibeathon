import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TracksSection from '@/components/TracksSection';
import PrizeSection from '@/components/PrizeSection';
import ScheduleSection from '@/components/ScheduleSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Introduction from '@/components/Introduction';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Mouse tracking for interactive effects with rAF & transforms
    const cursor = document.querySelector('.cursor-trail') as HTMLElement | null;
    const handleMouseMove = (e: MouseEvent) => {
      // store target position
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (cursor) {
        // update via transform to avoid layout thrash
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // stop observing once revealed for perf
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((element) => observer.observe(element));

    // Parallax effect with rAF
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>('.parallax'));
    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        const yOffset = window.pageYOffset;
        parallaxElements.forEach((el) => {
          const speedAttr = el.getAttribute('data-speed') || '0.5';
          const speed = parseFloat(speedAttr);
          el.style.transform = `translateY(${-(yOffset * speed)}px)`;
        });
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleMouseMove as any);
      window.removeEventListener('scroll', onScroll as any);
    };
  }, []);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Cursor Trail Effect */}
      <div 
        className="cursor-trail opacity-30 pointer-events-none hidden md:block"
      />
      
      <Navigation />
      
      <section id="hero">
        <HeroSection />
      </section>
      
      <section id="introduction">
        <Introduction />
      </section>
      
      <section id="tracks">
        <TracksSection />
      </section>
      
      <section id="prizes">
        <PrizeSection />
      </section>
      
      <section id="schedule">
        <ScheduleSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      <section id="cta">
        <CTASection />
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
