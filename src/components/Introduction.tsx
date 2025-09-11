import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Introduction = () => {
  const [showRules, setShowRules] = useState(false);

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
            className="absolute -top-8 -left-8 text-blue-500/80"
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-8 h-8" />
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
            className="absolute -top-8 -right-8 text-blue-400/80"
            animate={{ rotate: [360, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-8 h-8" />
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
            onClick={() => setShowRules(true)}
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

      {/* Enhanced Expanding Accordion Rules Card */}
      <motion.div
        initial={false}
        animate={showRules ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1, marginTop: 20 },
          closed: { height: 0, opacity: 0, marginTop: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="overflow-visible flex justify-center"
      >
        {showRules && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, boxShadow: "0 0 0 0 rgba(59,130,246,0.15)" }}
            animate={{ opacity: 1, scale: 1, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.15)" }}
            exit={{ opacity: 0, scale: 0.95, boxShadow: "0 0 0 0 rgba(59,130,246,0.15)" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-xl p-8 max-w-md w-full relative border-2 border-transparent bg-clip-padding backdrop-blur-md"
            style={{ borderImage: 'linear-gradient(90deg, #3b82f6 0%, #a78bfa 100%) 1' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-blue-700">Event Rules</h3>
            </div>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 text-2xl font-bold"
              onClick={() => setShowRules(false)}
              aria-label="Close rules"
            >
              &times;
            </button>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-base mt-2">
              {[
                "Teams can have up to 4 members.",
                "All projects must be submitted before the deadline.",
                "Judging criteria include innovation, impact, and presentation.",
                "Follow the code of conduct at all times."
              ].map((rule, idx) => (
                <motion.li
                  key={rule}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.15, duration: 0.4, type: "spring" }}
                >
                  {rule}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Introduction;
