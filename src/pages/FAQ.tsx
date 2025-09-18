import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General Info' },
    { id: 'participation', name: 'Participation' },
    { id: 'logistics', name: 'Logistics' },
    { id: 'judging', name: 'Judging & Prizes' },
  ];

  const faqItems = [
    {
      question: "What is Vibathon?",
      answer: "Vibathon is a 6-hour mini-hackathon as part of SAP Inside Track, where students team up to brainstorm, build using AI, and showcase innovative tech solutions aligned with SAP themes.",
      category: "general"
    },
    {
      question: "Who can participate?",
      answer: "The event is open to college students from all years and streams. No prior hackathon experience is required just enthusiasm to learn and build!",
      category: "participation"
    },
    {
      question: "Do I need to know coding to join?",
      answer: "Not at all. Teams need a mix of skills — coding, design, problem-solving, and pitching. Even if you're new, you'll find a role to contribute.",
      category: "participation"
    },
    {
      question: "How many members can be in a team?",
      answer: "Teams can have 1–3 members.",
      category: "participation"
    },
    {
      question: "What should I bring?",
      answer: "• Laptop + charger\n• College ID card\n• Any special hardware if your project needs it (optional)\n• Loads of energy and creativity",
      category: "logistics"
    },
    {
      question: "Is food provided?",
      answer: "Yes! Breakfast, and lunch will be provided to all registered participants.",
      category: "logistics"
    },
    {
      question: "How much does it cost to participate?",
      answer: "Participation is completely free.",
      category: "participation"
    },
    {
      question: "What do I get out of Vibathon?",
      answer: "• Hands-on hackathon experience\n• Mentorship from SAP professionals\n• Networking with peers & experts\n• Exciting prizes & certificates",
      category: "general"
    },
    {
      question: "How will projects be judged?",
      answer: "Judges will evaluate based on:\n• Innovation & Creativity\n• Technical Implementation\n• Business Impact\n• Sustainability Impact\n• Presentation & Demo",
      category: "judging"
    },
    {
      question: "Do I need to submit my project somewhere?",
      answer: "Yes, all teams must submit on GitHub by the code freeze deadline (3:30 PM). Submissions include repo link, short description, and a demo video.",
      category: "judging"
    },
    {
      question: "Can I continue working on my idea after Vibathon?",
      answer: "Absolutely! Vibathon is just the kick-off. We encourage you to refine your idea and explore opportunities with mentors and SAP Community.",
      category: "general"
    },
    {
      question: "Will certificates be given?",
      answer: "Yes, all participants will receive certificates of participation, and winners will receive special recognition & prizes.",
      category: "judging"
    }
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Animated background gradients */}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Link 
              to="/"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 mb-8"
            >
              ← Back to Home
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 
                filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                Frequently Asked Questions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Everything you need to know about Vibathon. Can't find the answer you're looking for?{" "}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 relative max-w-xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 
                    dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-2 mt-6"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                    ${activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {filteredFAQs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Accordion type="single" collapsible>
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden
                      transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/5"
                  >
                    <AccordionTrigger 
                      className="px-6 py-4 hover:no-underline data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-gray-700/50
                        hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                    >
                      <span className="text-left text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-white/50 dark:bg-gray-800/50">
                      <div className="prose prose-blue dark:prose-invert max-w-none">
                        <div className="text-base text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                          {item.answer}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQPage;