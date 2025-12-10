import { useState, useEffect } from "react";
import { Home } from "lucide-react"; // Importamos el ícono de 'casa'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 1. Lógica para mostrar u ocultar el botón
  const toggleVisibility = () => {
    // Si el usuario ha bajado más de 300px, muestra el botón
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 2. Lógica para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Esto hace el scroll suave
    });
  };

  // 3. Este 'useEffect' añade un 'escuchador' de scroll al navegador
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Esto 'limpia' el escuchador cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50
        w-14 h-14 rounded-full
        flex items-center justify-center
        bg-[#c5d68e] text-white
        shadow-lg transition-all duration-300 ease-in-out
        hover:bg-[#b8ca75] hover:scale-110
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <Home className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;