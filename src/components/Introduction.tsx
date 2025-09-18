import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Introduction = () => {
  const [showInfo, setShowInfo] = useState(false);

  const guidelines = [
    "All participants must register at the desk and collect their name tags.",
    "Each team can have up to 3 members. Solo participants are also allowed.",
    "Respect the Code of Conduct – be professional, collaborative, and inclusive.",
    "Duration: 2 main hacking sprints (09:30–12:30 & 12:45–2:45).",
    "Only code developed during the event is allowed.",
    "AI and open-source tools are allowed.",
    "Submissions must include: GitHub/Repo link, Project description, 2-min demo video (screen recording or live demo-ready).",
    "Deadline: 3:00 PM (Code Freeze).",
    "Late submissions will not be accepted.",
    "Wi-Fi credentials will be provided at registration.",
    "Charging points available across the venue.",
    "Volunteers will wear different colour tags and T-Shirts – approach them for help."
  ];

  const rules = [
    "Projects will be scored on the following:",
    "Innovation & Creativity – Originality of the idea.",
    "Technical Implementation – Functionality, code quality, and working demo.",
    "Business Impact – Relevance to SAP theme and real-world applications.",
    "Sustainability & Social Impact – Contribution toward positive change.",
    "Presentation & Demo – Clarity, teamwork, and ability to explain the solution.",
    "Mentors will circulate during both sprints.",
    "Role is to guide, not build – help with ideation, architecture, debugging.",
    "Encourage teams to stay realistic and focus on MVP.",
    "Each team gets 3–5 minutes for demo + Q&A.",
    "Judges rotate science-fair style across tables.",
    "Use provided score sheets and submit to the lead judge after deliberation.",
    "Winners will be decided based on cumulative scoring + discussions.",
    "Be respectful of all participants, mentors, and organizers.",
    "No plagiarism, offensive content, or disruptive behaviour.",
    "Violations may result in disqualification."
  ];

  return (
    <section className="relative text-center px-4 max-w-5xl mx-auto mb-20 pt-20">
      {/* Subtle Animated Gradient Blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 text-blue-500/80"
            animate={{ rotate: [0, 360], scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              SAP Inside Track & Vibeathon
            </span>
          </h2>
          <motion.div
            className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 text-blue-400/80"
            animate={{ rotate: [360, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />
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
        <div
          className="bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg p-6 border-2 border-transparent bg-clip-padding backdrop-blur-md relative"
          style={{ borderImage: "linear-gradient(90deg, #3b82f6 0%, #a78bfa 100%) 1" }}
        >
          <div className="flex items-center gap-3 mb-2 justify-center">
            <span className="text-xl font-bold text-blue-600">
              SAP Inside Track & Vibeathon
            </span>
          </div>
          <p className="text-blue-900/80 dark:text-blue-100 text-base">
            A community-driven SAP event and hackathon experience. Learn, share, network, and compete for prizes. Let your ideas vibe and come alive!
          </p>
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
          whileHover={{ y: -6, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.25)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            size="lg"
            className="relative px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 text-white shadow-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300 overflow-hidden"
            onClick={() => setShowInfo((prev) => !prev)}
          >
            <span className="relative z-10">More Information & Rules</span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Guidelines and Rules Section */}
      {showInfo && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto mt-10 max-w-7xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg p-10 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-center items-stretch">
            {/* Guidelines Column */}
            <div className="flex-1 min-w-0 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 text-left">Guidelines</h3>
              <ul className="list-disc list-inside space-y-4 text-left">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-200 text-base">
                    {guideline}
                  </li>
                ))}
              </ul>
            </div>

            {/* Rules Column */}
            <div className="flex-1 min-w-0 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-purple-700 mb-4 text-left">Rules</h3>
              <ul className="list-disc list-inside space-y-4 text-left">
                {rules.map((rule, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-200 text-base">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Introduction;
