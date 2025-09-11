import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Twitter, Github, Linkedin, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { 
      icon: Twitter, 
      href: '#',
      label: 'Twitter'
    },
    { 
      icon: Github, 
      href: '#',
      label: 'GitHub'
    },
    { 
      icon: Linkedin, 
      href: '#',
      label: 'LinkedIn'
    }
  ];

  return (
    <section id="contact-section" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-0 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-400/10 blur-3xl"
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
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/10 to-blue-500/10 blur-3xl"
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
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -top-6 -left-6 text-blue-500/80"
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
              <Sparkles className="w-6 h-6" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">
              Get in Touch
            </h2>

            <motion.div
              className="absolute -top-6 -right-6 text-blue-400/80"
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
              <Sparkles className="w-6 h-6" />
            </motion.div>
          </div>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have questions? Need help? Our team is here to support you throughout the hackathon
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <Card className="glass-card backdrop-blur-sm border-blue-200/20 hover:border-blue-500/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div 
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground group-hover:text-blue-500 transition-colors">hello@vibeathon.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground group-hover:text-blue-400 transition-colors">+1 (555) 123-4567</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground group-hover:text-blue-600 transition-colors">Innovation Hub, Tech City</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-card backdrop-blur-sm border-blue-200/20 hover:border-blue-400/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">
                    Join Our Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-8 justify-center py-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          className="group relative"
                          aria-label={social.label}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 
                            rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-300 -z-10" />
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/10 to-blue-400/10 
                            flex items-center justify-center backdrop-blur-sm border border-blue-200/20 
                            group-hover:border-blue-400/30 transition-all duration-300">
                            <div className="relative">
                              <IconComponent className="w-8 h-8 text-muted-foreground group-hover:text-blue-500 
                                transition-colors duration-300" />
                              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-400/20 
                                rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                          <p className="mt-2 text-sm font-medium text-muted-foreground group-hover:text-blue-500 
                            transition-colors duration-300 text-center">{social.label}</p>
                        </motion.a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card backdrop-blur-sm border-blue-200/20 hover:border-blue-500/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass-card backdrop-blur-sm border-blue-200/20 focus:border-blue-500/50 transition-all"
                    />
                  </motion.div>
                  
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass-card backdrop-blur-sm border-blue-200/20 focus:border-blue-400/50 transition-all"
                    />
                  </motion.div>
                  
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="glass-card backdrop-blur-sm border-blue-200/20 focus:border-blue-500/50 transition-all resize-none"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full relative overflow-hidden group"
                      size="lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 flex items-center justify-center gap-2 text-white font-semibold">
                        Send Message
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;