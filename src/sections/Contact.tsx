import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "WhatsApp",
    value: "0559895187",
    // UAE number → remove 0 and add 971
    href: "https://wa.me/971559895187",
    description: "Chat with us on WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    value: "mehroozkhann9@gmail.com",
    href: "mailto:ehroozkhann9@gmail.com",
    description: "Send us an email",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "All Over UAE",
    href: "#",
    description: "Serving all areas",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "24/7 Available",
    href: "#",
    description: "Round the clock service",
  },
];

const Contact = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Client WhatsApp number (UAE format)
    const phoneNumber = "971559895187";

    const message = `*New Inquiry*
------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}

*Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    toast.success("Redirecting to WhatsApp...");

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gray-50">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg">
            Send us your details and we will contact you soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 p-5 bg-white rounded-xl border hover:shadow-lg transition"
                >
                  <Icon className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-blue-600">{info.value}</p>
                    <p className="text-sm text-gray-500">{info.description}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="p-6 bg-white rounded-xl shadow"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="p-3 border rounded-lg"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="p-3 border rounded-lg"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone"
                  className="p-3 border rounded-lg"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="p-3 border rounded-lg"
                >
                  <option value="">Select Service</option>
                  <option value="Demolition Services">Demolition Services</option>
                  <option value="Construction Services">Construction Services</option>
                  <option value="Transport Services">Transport Services</option>
                  <option value="Shifting & Moving">Shifting & Moving</option>
                  <option value="AC Services">AC Services</option>
                  <option value="CCTV Installation">CCTV Installation</option>
                  <option value="Labor Services">Labor Services</option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="p-3 border rounded-lg sm:col-span-2"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg flex justify-center items-center gap-2"
              >
                {isSubmitting ? "Redirecting..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;