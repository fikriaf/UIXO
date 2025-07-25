import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Zap, Code, CheckCircle, ArrowRight, BookOpenText , Cpu, Phone } from "lucide-react";
import { motion, easeInOut, easeOut } from "framer-motion";
import RotatingCoreWithOrbit from "@/components/RotatingCore";
import { AnimationLayout } from "@/components/AnimationLayout";

const menuItems = [
  { icon: <BookOpenText size={20} />, label: "About Us", href: "#about" },
  { icon: <Cpu size={20} />, label: "Technology", href: "#technology" },
  { icon: <Phone size={20} />, label: "Contact", href: "#contact" },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut
    }
  };

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <div className="relative uixo-gradient dark:uixo-gradient-dark overflow-hidden">
        <div className="group fixed top-50 left-0 backdrop-blur-md shadow-lg text-white flex flex-col items-center hover:w-48 w-12 transition-all duration-300 z-20">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-3 p-4 hover:bg-gray-700 w-full"
            >
              <span className="absolute left-0 p-3">{item.icon}</span>
              <span className="whitespace-nowrap opacity-0 pl-6 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </a>
          ))}
        </div>
        <AnimationLayout />
        <RotatingCoreWithOrbit />
        <div className="absolute inset-0 bg-black opacity-10 dark:opacity-20"></div>
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Generate your next<br />
              <motion.span 
                style={{ color: 'hsl(195, 100%, 50%)' }}
                animate={floatAnimation}
                className="inline-block"
              >
                UI component
              </motion.span><br />
              in seconds
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              UIXO is an AI-powered application that create production-ready code in React TSX, HTML, JavaScript, and more.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <Link href="/generator">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button 
                    className="border-2 border-[--uixo-accent] px-8 py-7 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl group"
                    style={{ 
                      backgroundColor: 'hsl(195, 100%, 50%)',
                      color: 'hsl(225, 95%, 18%)'
                    }}
                  >
                    Get Started
                    {/* <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" /> */}
                  </Button>
                </motion.div>
              </Link>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative rounded-md overflow-hidden group w-fit">
  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[--uixo-primary] via-[--uixo-accent] to-[--uixo-hover] bg-[length:300%_300%] animate-border-glow mask-border z-0" />
  
  <button className="relative z-10 px-8 py-4 rounded-md text-white text-lg font-semibold bg-transparent border-none">
    Browse Component
  </button>
</div>

              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="uixo-polygon"></div>
      <div className="uixo-polygon-reflection"></div>

      {/* Features Section */}
      <motion.div
        id="about"
        className="py-20 pt-10 dark:bg-gray-900 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose UIXO?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Transform your ideas into code faster than ever before with our AI-powered component generator.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                color: 'hsl(195, 100%, 50%)',
                title: 'Lightning Fast',
                description: 'Generate components in seconds, not hours. Save time and focus on what matters.',
                delay: 0
              },
              {
                icon: Code,
                color: 'hsl(207, 90%, 35%)',
                title: 'Multi-Language',
                description: 'Support for React TSX, HTML, JavaScript, CSS, and more languages.',
                delay: 0.2
              },
              {
                icon: CheckCircle,
                color: 'hsl(225, 95%, 18%)',
                title: 'Production Ready',
                description: 'Clean, optimized code that\'s ready to use in your projects immediately.',
                delay: 0.4
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0, delay: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: feature.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[hsl(225,95%,18%)] dark:group-hover:text-[hsl(195,100%,50%)] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Technology Section */}
      <motion.section
        id="technology"
        className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Built with Cutting-edge Stack
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            UIXO is crafted using modern technologies for optimal speed, flexibility, and maintainability.
          </motion.p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
            {[
              { name: "React", icon: <Code className="w-5 h-5" /> },
              { name: "TypeScript", icon: <Code className="w-5 h-5" /> },
              { name: "Tailwind CSS", icon: <Zap className="w-5 h-5" /> },
              { name: "Vite", icon: <Cpu className="w-5 h-5" /> },
            ].map((tech, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 bg-white/70 dark:bg-gray-800/70 px-4 py-2 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                {tech.icon}
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 bg-white dark:bg-gray-950 rounded-t-[5rem] transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let’s Talk
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Have questions, feedback, or want to collaborate? Reach out and let’s connect.
          </motion.p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:outline-none focus:ring-2 focus:ring-[hsl(195,100%,50%)] transition"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:outline-none focus:ring-2 focus:ring-[hsl(195,100%,50%)] transition"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:outline-none focus:ring-2 focus:ring-[hsl(195,100%,50%)] transition"
            />
            <Button className="mt-4 bg-[hsl(195,100%,50%)] hover:bg-[hsl(195,100%,45%)] text-white px-6 py-3 rounded-xl font-semibold transition">
              Send Message
            </Button>
          </form>
        </div>
      </motion.section>

    </div>
  );
}
