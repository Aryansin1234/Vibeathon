import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! How can I help you today? You can ask me about the event, schedule, prizes, registration, eligibility, team formation, theme, submission, or judging criteria!'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const faqs = {
    event: {
      keywords: ['event', 'vibeathon', 'hackathon'],
      responses: [
        'The Vibeathon is a 6-hour hackathon happening on September 27, 2025, at SAP Labs, Whitefield.',
        'Vibeathon is a 6-hour event on September 27, 2025, at SAP Labs, Whitefield.',
        'Join us for the Vibeathon on September 27, 2025, at SAP Labs, Whitefield!'
      ]
    },
    schedule: {
      keywords: ['schedule', 'time', 'timing'],
      responses: [
        'The event starts at 9:00 AM and ends at 3:00 PM. Make sure to arrive early!',
        'Vibeathon runs from 9:00 AM to 3:00 PM on September 27, 2025.',
        'Be ready! The event begins at 9:00 AM sharp and concludes at 3:00 PM.'
      ]
    },
    prizes: {
      keywords: ['prizes', 'prize', 'reward', 'rewards'],
      responses: [
        'The total prize pool is ₹50,000, distributed across multiple categories.',
        '1st Place: ₹25,000, 2nd Place: ₹15,000, 3rd Place: ₹5,000.',
        'Special prizes include ₹3,000 + goodies for Best Innovation and ₹2,000 + goodies for People’s Choice.'
      ]
    },
    registration: {
      keywords: ['register', 'registration', 'sign up'],
      responses: [
        'You can register for the Vibeathon through the official registration link shared with your college.',
        'Registration is open until September 20, 2025. Don’t miss out!',
        'Make sure to complete your registration before the deadline on September 20, 2025.'
      ]
    },
    eligibility: {
      keywords: ['eligibility', 'eligible', 'who can participate'],
      responses: [
        'The Vibeathon is open to all college students with a valid ID.',
        'Participants must be enrolled in a college or university to be eligible.',
        'Ensure you have a valid college ID to participate in the event.'
      ]
    },
    team: {
      keywords: ['team', 'members', 'group'],
      responses: [
        'Teams can have up to 4 members.',
        'You can participate individually or form a team of up to 4 members.',
        'Collaborate with your friends and form a team of up to 4 participants.'
      ]
    },
    theme: {
      keywords: ['theme', 'topics', 'focus'],
      responses: [
        'The theme for this year’s Vibeathon is “Innovation for a Better Tomorrow.”',
        'Focus on projects that align with the theme “Innovation for a Better Tomorrow.”',
        'This year’s theme encourages solutions that drive innovation and positive impact.'
      ]
    },
    submission: {
      keywords: ['submission', 'submit', 'deadline'],
      responses: [
        'All projects must be submitted by 3:00 PM on September 27, 2025.',
        'Ensure your project is submitted before the deadline to be eligible for judging.',
        'Late submissions will not be accepted, so plan accordingly.'
      ]
    },
    judging: {
      keywords: ['judging', 'criteria', 'evaluation'],
      responses: [
        'Judging criteria include innovation, impact, and presentation.',
        'Projects will be evaluated based on creativity, technical implementation, and alignment with the theme.',
        'Make sure your presentation highlights the key features and impact of your project.'
      ]
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    const lowerInput = input.toLowerCase();
    let botResponse = 'Sorry, I didn’t understand that. Can you ask something else?';

    for (const key in faqs) {
      if (faqs[key].keywords.some((keyword) => lowerInput.includes(keyword))) {
        const responses = faqs[key].responses;
        botResponse = responses[Math.floor(Math.random() * responses.length)];
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { type: 'bot', text: botResponse }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="w-80 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-300"
        >
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3">
            <h4 className="text-lg font-semibold">FAQ Chatbot</h4>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 hover:text-red-400 transition-colors duration-200" />
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`px-4 py-2 rounded-lg text-sm shadow-md transition-transform transform hover:scale-105 ${
                    msg.type === 'bot'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-blue-500 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex items-center border-t border-gray-200 bg-gray-100">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-4 py-2 text-sm border-none focus:ring-0 bg-transparent placeholder-gray-500"
            />
            <button
              onClick={handleSend}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-transform duration-200"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default FAQChatbot;
