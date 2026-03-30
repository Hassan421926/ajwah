import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const features = [
    'Licensed & Insured',
    '24/7 Emergency Service',
    'All Over UAE',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Floating orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0891B2]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              Professional Services in UAE
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 leading-tight mb-6"
          >
            Professional Services{' '}
            <span className="text-gradient">Across UAE</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Ajwah Electronics Trading Co. L.L.C. delivers excellence in demolition, 
            construction, transport, AC services, CCTV installation, and skilled labor 
            solutions throughout the United Arab Emirates.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
                <span className="text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary flex items-center gap-2 text-base w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.a
              href="tel:0559895187"
              className="btn-secondary flex items-center gap-2 text-base w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              055-989-5187
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: '50+', label: 'Expert Workers' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
