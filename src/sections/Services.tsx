import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Building2, 
  Truck, 
  Home, 
  Wind, 
  Camera, 
  Users,
  Hammer,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Demolition Services',
    description: 'Safe and efficient demolition of buildings, structures, and concrete works with modern equipment and experienced teams.',
    image: '/images/service-demolition.jpg',
    icon: Hammer,
    features: ['Building Demolition', 'Concrete Breaking', 'Site Clearance', 'Waste Removal'],
  },
  {
    id: 2,
    title: 'Construction Services',
    description: 'Complete construction solutions from foundation to finishing, delivering quality projects on time and within budget.',
    image: '/images/service-construction.jpg',
    icon: Building2,
    features: ['Residential Construction', 'Commercial Projects', 'Renovation', 'Maintenance'],
  },
  {
    id: 3,
    title: 'Transport Services',
    description: 'Reliable transportation and logistics services across UAE with a modern fleet of vehicles for all cargo needs.',
    image: '/images/service-transport.jpg',
    icon: Truck,
    features: ['Cargo Transport', 'Heavy Lifting', 'Equipment Moving', 'Same Day Delivery'],
  },
  {
    id: 4,
    title: 'Shifting & Moving',
    description: 'Professional home and office relocation services with careful handling of furniture and belongings.',
    image: '/images/service-shifting.jpg',
    icon: Home,
    features: ['Home Relocation', 'Office Moving', 'Packing Service', 'Furniture Assembly'],
  },
  {
    id: 5,
    title: 'AC Services',
    description: 'Expert air conditioning installation, maintenance, and repair services for residential and commercial properties.',
    image: '/images/service-ac.jpg',
    icon: Wind,
    features: ['AC Installation', 'AC Repair', 'Regular Maintenance', 'Duct Cleaning'],
  },
  {
    id: 6,
    title: 'CCTV Installation',
    description: 'Professional security camera installation and monitoring systems to protect your property 24/7.',
    image: '/images/service-cctv.jpg',
    icon: Camera,
    features: ['HD Cameras', 'Remote Monitoring', 'System Setup', 'Technical Support'],
  },
  {
    id: 7,
    title: 'Labor Services',
    description: 'Skilled and unskilled workforce supply for construction, maintenance, and industrial projects across UAE.',
    image: '/images/service-labor.jpg',
    icon: Users,
    features: ['Skilled Workers', 'General Labor', 'Supervisors', 'Project Teams'],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-200 card-hover shadow-lg">
     {/* Image */}
<div className="relative h-48 overflow-hidden">
  {/* Very light overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />

  <img
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* Icon badge */}
  <div className="absolute top-4 left-4 z-20 w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#0891B2] flex items-center justify-center shadow-lg">
    <Icon className="w-6 h-6 text-white" />
  </div>
</div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-[#2563EB] transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-[#2563EB] text-sm font-medium group/btn"
            whileHover={{ x: 5 }}
          >
            Get Quote
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="services" className="relative py-20 md:py-32 bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#2563EB]/5 rounded-full blur-3xl" />
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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Comprehensive Solutions for{' '}
            <span className="text-gradient">Every Need</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From demolition to construction, transport to technical services, 
            we provide end-to-end solutions with professionalism and expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
