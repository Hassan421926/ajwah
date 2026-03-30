import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, Shield, Clock, Target, CheckCircle2 } from 'lucide-react';

const About = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We build lasting relationships through honest and transparent business practices.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Committed to delivering the highest standards in every project we undertake.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect deadlines and ensure projects are completed on schedule.',
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver.',
    },
  ];

  const achievements = [
    'Licensed by UAE Authorities',
    'ISO Certified Company',
    'Insurance Coverage',
    'Safety Compliant',
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0891B2]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#2563EB]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-sm font-medium mb-6">
              About Us
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Building Trust Through{' '}
              <span className="text-gradient">Excellence</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Ajwah Electronics Trading Co. L.L.C. is a leading multi-service company based in the 
                United Arab Emirates, dedicated to providing comprehensive solutions for construction, 
                demolition, transport, and technical services.
              </p>
              <p>
                Founded and led by <strong className="text-gray-900">Mehrooz Iqbal</strong>, our company 
                has established a reputation for reliability, quality, and professionalism across all 
                seven emirates of the UAE.
              </p>
              <p>
                With over a decade of experience, we have successfully completed hundreds of projects 
                ranging from residential demolitions to large-scale commercial constructions, earning 
                the trust of countless satisfied clients.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{achievement}</span>
                </motion.div>
              ))}
            </div>

            {/* Owner Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-[#2563EB]/10 to-[#0891B2]/10 border border-[#2563EB]/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#0891B2] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
                <div>
                  <h4 className="text-gray-900 font-heading font-semibold text-lg">Mehrooz Iqbal</h4>
                  <p className="text-[#2563EB] text-sm">Founder & Managing Director</p>
                  <p className="text-gray-500 text-xs mt-1">Ajwah Electronics Trading Co. L.L.C.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#2563EB]/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB]/10 to-[#0891B2]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="text-gray-900 font-heading font-semibold text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
