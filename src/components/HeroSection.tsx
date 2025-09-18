import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import backgroundimage from '@/assets/geminibackground.png';
import heroVideo from '@/assets/BackgroundVideo.mp4';
import { motion } from 'framer-motion';
import sitLogo from '@/assets/SIT.png';
import sapLogo from '@/assets/SAP.png';
import copilotLogo from '@/assets/github-copilot-logo.png';

const HeroSection = () => {
  const targetDate = new Date("2025-09-27T07:30:00"); // Updated target date
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-2 sm:px-4">
      {/* Animated Background with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-fill"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundimage})`,
        }}
        /> */}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 backdrop-blur-[2px]" />

      {/* Main Content */}
  <div className="relative z-10 text-center px-2 sm:px-4 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Title */}
          <div className="mb-8 relative flex flex-col items-center justify-center">
            {/* SAP Inside Track Logo and Text */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col sm:flex-row items-center justify-between relative z-20 w-full max-w-7xl mx-auto px-4 gap-6 sm:gap-4 pt-8 sm:pt-10"
            >
              {/* Partner Logos - Top row on mobile, sides on desktop */}
              <div className="flex w-full sm:w-auto justify-between sm:justify-start order-first gap-4 sm:gap-0">
                {/* SAP Logo */}
                <div className="flex-shrink-0">
                  <img 
                    src={sapLogo} 
                    alt="SAP Logo" 
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain transform hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                {/* Copilot Logo */}
                <div className="flex-shrink-0 sm:hidden">
                  <img 
                    src={copilotLogo} 
                    alt="Copilot Logo" 
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain transform hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </div>

              {/* Centered SIT logo and text */}
              <div className="flex items-center justify-center flex-grow order-last sm:order-none">
                <img 
                  src={sitLogo} 
                  alt="SIT Logo" 
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain mr-3" 
                />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
                  SAP Inside Track
                </span>
              </div>

              {/* Copilot Logo - Only visible on desktop */}
              <div className="hidden sm:flex flex-shrink-0 items-center justify-end">
                <img 
                  src={copilotLogo} 
                  alt="Copilot Logo" 
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain transform hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </motion.div>
            <motion.div
              className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter break-words"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ zIndex: 1 }}
            >
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                VIBE
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                ATHON
              </span>
            </motion.div>
          </div>

          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-lg sm:text-2xl md:text-3xl font-medium mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">Code with Co-pilot.</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">Craft the Community.</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300"> Create the Future.</span>
          </motion.div>
        </motion.div>

        {/* Event Info Cards */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 mb-8 md:mb-12 w-full max-w-lg md:max-w-none mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="flex items-center gap-2 sm:gap-3 glass-card backdrop-blur-sm border-purple-200/20 
              hover:border-purple-500/30 transition-all duration-300 px-3 py-2 sm:px-4 sm:py-3 min-w-[180px] justify-center sm:justify-start"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 flex-shrink-0" />
            <span className="font-medium text-sm sm:text-base md:text-lg text-foreground/90">September 27, 2025, 7:30 AM</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 sm:gap-3 glass-card backdrop-blur-sm border-purple-200/20 
              hover:border-pink-500/30 transition-all duration-300 px-3 py-2 sm:px-4 sm:py-3 min-w-[180px] justify-center sm:justify-start"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 flex-shrink-0" />
            <a
              href="https://maps.app.goo.gl/63FmktWjyWJejNHG9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sm sm:text-base md:text-lg text-foreground/90 hover:text-blue-500 transition-colors duration-300"
            >
              SAP Labs, Whitefield
            </a>
          </motion.div>
        </motion.div>

        {/* Animated Countdown Timer */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-12 mx-auto px-4 sm:px-0 max-w-[280px] sm:max-w-[600px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={unit}
              className="w-[120px] sm:w-[130px] flex flex-col items-center justify-center bg-blue-900/80 border border-blue-500/40 rounded-lg p-2 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
            >
              <div className="text-2xl sm:text-5xl font-bold text-white">
                {String(value).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-sm font-medium text-blue-300 uppercase tracking-wide mt-1 sm:mt-2">
                {unit}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg transition-transform transform hover:scale-105">
            <a href="https://konfhub.com/sap-inside-track-bengaluru-vibeathon" target="_blank" rel="noopener noreferrer">
              Register Now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;