import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Registration = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto bg-card border-border shadow-lg p-8 rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Registration Closed</h1>
            <p className="text-center text-lg text-muted-foreground">
              Thank you for your interest in Vibeathon. Registration is now closed. Stay tuned for updates on the event!
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;
