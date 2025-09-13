import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Introduction = () => {
  const [showRules, setShowRules] = useState(false);

  const parallaxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  const rules = [
    "Teams can have up to 4 members.",
    "All projects must be submitted before the deadline.",
    "Judging criteria include innovation, impact, and presentation.",
    "Follow the code of conduct at all times.",
    "Participants must have hands-on knowledge of Git and GitHub.",
    "Ensure your project aligns with the theme of the Vibeathon.",
    "Be prepared to present your project to the judges in a 5-minute pitch."
  ];

  return (
    <section className="relative text-center px-4 max-w-5xl mx-auto mb-20 pt-20">
      {/* Subtle Animated Gradient Blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Title styled like TracksSection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <div className="relative inline-block mb-6">
          <motion.div
            className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 text-blue-500/80"
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              Welcome to
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] ml-4">
              SAP Inside Track & Vibeathon
            </span>
          </h2>
          <motion.div
            className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-blue-400/80"
            animate={{ rotate: [360, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
        </div>
        <motion.p
          className="text-xl md:text-2xl text-blue-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join us for an exciting event filled with innovation, collaboration, and amazing prizes. Be part of the journey to build the future!
        </motion.p>
      </motion.div>

      {/* Single Creative Event Card */}
      <motion.div
        className="mx-auto mb-8 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg p-6 border-2 border-transparent bg-clip-padding backdrop-blur-md relative"
          style={{ borderImage: 'linear-gradient(90deg, #3b82f6 0%, #a78bfa 100%) 1' }}>
          <div className="flex items-center gap-3 mb-2 justify-center">
            <Sparkles className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold text-blue-600">SAP Inside Track & Vibeathon</span>
          </div>
          <p className="text-blue-900/80 dark:text-blue-100 text-base">A community-driven SAP event and hackathon experience. Learn, share, network, and compete for prizes. Let your ideas vibe and come alive!</p>
        </div>
      </motion.div>

      {/* Creative Floating Gradient Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-2 flex justify-center"
      >
        <motion.div
          whileHover={{ y: -6, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.25)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Button
            size="lg"
            className="relative px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 text-white shadow-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300 overflow-hidden"
            onClick={() => setShowRules((prev) => !prev)}
          >
            <span className="relative z-10">More Information & Rules</span>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </Button>
        </motion.div>
      </motion.div>

      {/* Rules Section */}
      {showRules && (
        <div className="relative mx-auto mt-10 max-w-md w-full">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Event Rules</h3>
          <ul className="space-y-4">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-md p-4 border border-gray-200 dark:border-gray-700"
              >
                <p className="text-gray-700 dark:text-gray-200 text-base">{rule}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Introduction;
