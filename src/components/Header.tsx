import { useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("descubre");

  const navItems = [
    { id: "descubre", label: "EXPLORA" },
    { id: "tendencias", label: "DESCUBRE" },
    { id: "combina", label: "COMBINA" },
    { id: "destaca", label: "DESTACA" },
    { id: "renueva", label: "RENUEVA" },
  ];

  // ==============================================
  // === INICIO DEL CAMBIO ===
  // ==============================================
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    const header = document.querySelector("header");

    if (element && header) {
      const headerHeight = header.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      let offsetPosition;

      if (id === "combina") {
        // --- LÓGICA ESPECIAL PARA CENTRAR 'combina' ---
        const elementHeight = element.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Calcula dónde debe estar el 'top' para que el *centro* de la
        // sección se alinee con el *centro* de la pantalla (menos el header)
        offsetPosition = elementPosition + (elementHeight / 2) - (viewportHeight / 2) - (headerHeight / 2);

      } else {
        // --- LÓGICA NORMAL (para todas las demás secciones) ---
        // Se desplaza a la parte superior de la sección
        offsetPosition = elementPosition - headerHeight;
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // ==============================================
  // === FIN DEL CAMBIO ===
  // ==============================================

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex-shrink-0">
            <img src="/images/Zara_Logo.svg.png" alt="ZARA" className="h-8" />
          </div>

          {/* Navigation - Centrado */}
          <nav className="hidden md:flex gap-12 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-light tracking-wider transition-colors hover:text-foreground ${
                  activeSection === item.id ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;