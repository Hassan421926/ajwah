import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Twitter,
  ArrowUpRight
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { name: 'Demolition', href: '#services' },
  { name: 'Construction', href: '#services' },
  { name: 'Transport', href: '#services' },
  { name: 'AC Services', href: '#services' },
  { name: 'CCTV Installation', href: '#services' },
  { name: 'Labor Supply', href: '#services' },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#0891B2] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <h3 className="text-gray-900 font-heading font-bold text-lg">Ajwah Electronics</h3>
                  <p className="text-[#0891B2] text-xs">Trading Co. L.L.C.</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Your trusted partner for demolition, construction, transport, and technical 
                services across the UAE. Quality service, every time.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#2563EB] hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-gray-900 font-heading font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-600 hover:text-[#2563EB] transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-gray-900 font-heading font-semibold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(service.href);
                      }}
                      className="text-gray-600 hover:text-[#2563EB] transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-gray-900 font-heading font-semibold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:0559895187"
                    className="flex items-start gap-3 text-gray-600 hover:text-[#2563EB] transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">Phone</p>
                      <p className="text-gray-900 font-medium">055-989-5187</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Mehroozkhann9@gmail.com"
                    className="flex items-start gap-3 text-gray-600 hover:text-[#2563EB] transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">Email</p>
                      <p className="text-gray-900 font-medium text-sm break-all">Mehroozkhann9@gmail.com</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-gray-900 font-medium">All Over UAE</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Ajwah Electronics Trading Co. L.L.C. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-[#2563EB] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#2563EB] text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
