import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "971559895187"; // formatted international number

  const handleClick = () => {
    const message = "Hello, I would like to inquire about your services";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 right-5 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </button>
  );
};

export default WhatsAppButton;