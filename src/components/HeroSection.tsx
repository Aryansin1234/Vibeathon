import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import { motion } from 'framer-motion';
import FAQChatbot from './FAQChatbot';

const HeroSection = () => {
  const targetDate = new Date("2025-09-27T09:00:00"); // Updated target date
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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground})`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]" />

      {/* Main Content */}
  <div className="relative z-10 text-center px-2 sm:px-4 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Title */}
          <div className="mb-8 relative flex items-center justify-center">
            <motion.div
              className="absolute -top-8 -right-8 text-blue-500/80"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ zIndex: 2 }}
            >
              <Sparkles className="w-12 h-12" />
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">Build the Future.</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">Code the Innovation.</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">Win Amazing Prizes.</span>
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
            <span className="font-medium text-sm sm:text-base md:text-lg text-foreground/90">September 27, 2025</span>
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
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 max-w-xl sm:max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={unit}
              className="flex flex-col items-center justify-center bg-blue-900/80 border border-blue-500/40 rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
            >
              <div className="text-3xl sm:text-5xl font-bold text-white">
                {String(value)}
              </div>
              <div className="text-xs sm:text-sm font-medium text-blue-300 uppercase tracking-wide mt-2">
                {unit}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center"
        >
          <Button 
            size="lg" 
            className="relative overflow-hidden group bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 
              hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-500 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10 flex items-center gap-2 font-semibold text-white">
              Register Now
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
            </span>
          </Button>
        </motion.div>
      </div>

      <FAQChatbot />
    </section>
  );
};

export default HeroSection;