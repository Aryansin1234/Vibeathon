import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, Trophy, Sparkles } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CTASection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const features = [
    {
      icon: Code,
      text: "6 hours of intense coding", // Updated duration
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Zap,
      text: "Cutting-edge technology tracks",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Trophy,
      text: "₹50,000 in prizes",
      gradient: "from-pink-500 to-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const containerTransition = {
    duration: 0.5,
    staggerChildren: 0.2
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-pink-500/10 to-purple-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
        />
      </div>

      <div className="container mx-auto">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          transition={containerTransition}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="relative inline-block mb-16">
            <motion.div
              className="absolute -top-8 -left-8 text-blue-500/80"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>

            <motion.h2 
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
              variants={itemVariants}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 
                filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                Ready to Build
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500
                filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                the Future?
              </span>
            </motion.h2>

            <motion.div
              className="absolute -top-8 -right-8 text-blue-400/80"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
          </div>
            
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join hundreds of developers, innovators, and dreamers in the ultimate hackathon experience. 
            Your next breakthrough is just one weekend away.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-400/20 blur-xl 
                    rounded-xl transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="relative bg-white dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700 
                    rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${index === 0 ? 'from-blue-500 to-blue-400' : index === 1 ? 'from-blue-400 to-blue-600' : 'from-blue-600 to-blue-500'}
                      flex items-center justify-center transform group-hover:scale-110 
                      group-hover:rotate-6 transition-all duration-500`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-semibold text-xl text-gray-900 dark:text-white">{feature.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div 
            className="space-y-6 mb-16"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600
                  hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-500
                  text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6"
              >
                <a href="https://konfhub.com/sap-inside-track-bengaluru-vibeathon" target="_blank" rel="noopener noreferrer">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 flex items-center gap-2 font-bold">
                    Join the Competition
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </span>
                </a>
              </Button>
            </motion.div>
            
            <motion.p 
              className="text-base text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Registration closes on 23rd September • 150 spots available
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} whileHover={{ y: -2 }}>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="bg-white dark:bg-gray-800 border-2 border-blue-500 text-blue-600 dark:text-blue-400
                  hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 
                  shadow-lg hover:shadow-blue-500/25"
              >
                <Link to="/faq" className="flex items-center gap-2 text-lg">
                  Have Questions? Check our FAQ
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
