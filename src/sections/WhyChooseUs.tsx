import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  BadgeCheck, 
  Zap, 
  Users, 
  Wallet, 
  HeadphonesIcon, 
  Clock,
  Shield,
  MapPin
} from 'lucide-react';

const features = [
  {
    icon: BadgeCheck,
    title: 'Licensed & Certified',
    description: 'Fully licensed by UAE authorities with all necessary certifications and insurance coverage for your peace of mind.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Fast Service',
    description: 'Quick response times and efficient project execution. We value your time and complete projects on schedule.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Skilled Workers',
    description: 'Our team consists of experienced professionals trained to handle projects of any scale with precision.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising on quality. Get the best value for your investment.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for emergencies and inquiries. We are always here to help.',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect deadlines and ensure all projects are completed within the agreed timeframe.',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Strict adherence to safety protocols and regulations to protect our workers and your property.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: MapPin,
    title: 'All Over UAE',
    description: 'Services available across all seven emirates of the UAE. Wherever you are, we can reach you.',
    color: 'from-amber-500 to-yellow-500',
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      <div className="h-full p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#2563EB]/30 transition-all duration-300 shadow-lg hover:shadow-xl">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-[#2563EB] transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#2563EB]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            The <span className="text-gradient">Ajwah</span> Advantage
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover why hundreds of clients across the UAE trust us for their 
            construction, demolition, and service needs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Ready to experience our professional services?
          </p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
