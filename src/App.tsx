import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import About from '@/sections/About';
import WhyChooseUs from '@/sections/WhyChooseUs';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Toast notifications */}
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#ffffff',
            color: '#1f2937',
            border: '1px solid #e5e7eb',
          },
        }}
      />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />

      <WhatsAppButton />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
