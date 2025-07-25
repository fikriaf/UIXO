
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Rocket, Globe, Zap, Shield, Heart } from 'lucide-react';

const Testing = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);
    
    // Particle animation
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particles: any[] = [];
        const particleCount = 100; for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speed: Math.random() * 0.5 + 0.1,
            angle: Math.random() * Math.PI * 2,
            opacity: Math.random() * 0.5 + 0.1
          });
        }
        
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          
          particles.forEach(particle => {
            particle.y -= particle.speed;
            particle.x += Math.sin(particle.angle) * 0.5;
            particle.angle += 0.01;
            
            if (particle.y < 0) {
              particle.y = canvas.height;
              particle.x = Math.random() * canvas.width;
            }
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fill();
          });
          
          requestAnimationFrame(animate);
        };
        
        animate();
      }
    }
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: <Rocket className="w-8 h-8" />, title: "Light Speed", description: "Experience blazing fast performance" },
    { icon: <Shield className="w-8 h-8" />, title: "Secure", description: "Military-grade encryption protection" },
    { icon: <Zap className="w-8 h-8" />, title: "Powerful", description: "Unleash unlimited potential" },
    { icon: <Globe className="w-8 h-8" />, title: "Global", description: "Connect across the universe" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div> <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      
      {/* Mouse Follower */}
      <motion.div 
        className="fixed w-6 h-6 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-40 py-6 px-8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto"> <motion.div 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            whileHover={{ scale: 1.05 }}
          >
            COSMOS
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Features', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="hover:text-purple-400 transition-colors"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration:0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Launch
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            EXPLORE THE
            <br />
            <span className="block mt-2">UNIVERSE</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.8 }}
          > Journey beyond the stars with our cutting-edge platform designed for the cosmos explorers of tomorrow.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.7)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="w-5 h-5" />
              Begin Journey
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-purple-500 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-all" whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-16 h-16 border border-purple-500 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Star className="w-8 h-8 text-purple-400" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 right-10 w-12 h-12 border border-pink-500 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Heart className="w-6 h-6 text-pink-400" />
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity:0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} >
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Cosmic Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the extraordinary capabilities that set us apart in the universe of possibilities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.3)",
                  borderColor: "rgba(147, 51, 234, 0.5)"
                }}
              >
                <motion.div
                  className="text-purple-400 mb-6"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-3xl p-16 border border-gray-700/50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 0 50px rgba(147, 51, 234, 0.3)",
              borderColor: "rgba(147, 51, 234, 0.7)"
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Ready for Liftoff?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of explorers already charting their course through the cosmos.
            </p>
            <motion.button
              className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px rgba(147, 51, 234, 0.8)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4 md:mb-0">
              COSMOS
            </div>
            <div className="flex space-x-6">
              {['Privacy', 'Terms', 'Support', 'Docs'].map((item) => (
                <a 
                  key={item}
                  href="#"  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div> <div className="mt-8 text-center text-gray-500">
            © 2023 COSMOS. Exploring the infinite possibilities of the digital universe.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Testing