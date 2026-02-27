import whatsappIcon from "@/assets/whatsapp-icon.png";
import { personalInfo } from "@/constants";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'd like to connect with you.");
    const phoneNumber = personalInfo.phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover-lift animate-bounce"
      aria-label="Contact on WhatsApp"
      style={{
        animation: "bounce 2s infinite"
      }}
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-full h-full object-contain"
      />
    </button>
  );
};
