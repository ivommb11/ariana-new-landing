import React from "react";
// 1. Importamos los íconos desde "Font Awesome 6" (incluido en react-icons)
import { FaInstagram, FaTiktok, FaXTwitter, FaPinterest } from "react-icons/fa6";

const Footer = () => {

  // ================================================================
  // === 🎯 AQUÍ PUEDES EDITAR TUS LINKS ===
  // ================================================================
  const footerLinks = {
    siguenos: [
      // 2. Usamos los componentes importados. Les damos 'size={20}'
      { label: "Instagram", href: "https://www.instagram.com/zara", icon: <FaInstagram size={20} /> },
      { label: "TikTok", href: "https://www.tiktok.com/@zara", icon: <FaTiktok size={20} /> },
      { label: "X", href: "https://www.x.com/zara", icon: <FaXTwitter size={20} /> },
      { label: "Pinterest", href: "https://es.pinterest.com/zaraofficial/_created/", icon: <FaPinterest size={20} /> },
    ],
    secciones: [
      { label: "EXPLORA", href: "#explora" },    // HeroSection
      { label: "DESCUBRE", href: "#descubre" }, // TendenciasSection
      { label: "COMBINA", href: "#combina" },    // CombinaSection
      { label: "DESTACA", href: "#destaca" },    // RenuevaSection
    ],
    equipo: [
      { name: "Calderon Ariana" },
      { name: "Canahuiri Maria fernanda" },
      { name: "Romero Ivon" },
      { name: "Osorio Meza Gian" },
    ],
  };

  // Función de scroll (la que ajustamos para tu Header)
  const scrollToSection = (id: string) => {
    const elementId = id.replace("#", "");
    const element = document.getElementById(elementId);
    const header = document.querySelector("header");

    if (element && header) {
      const headerHeight = header.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      let offsetPosition;

      if (elementId === "combina") {
        const elementHeight = element.offsetHeight;
        const viewportHeight = window.innerHeight;
        offsetPosition = elementPosition + (elementHeight / 2) - (viewportHeight / 2) - (headerHeight / 2);
      } else {
        offsetPosition = elementPosition - headerHeight;
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">

          <div className="md:col-span-2">
            <img src="/images/Zara_Logo.svg.png" alt="ZARA" className="h-20" />
          </div>

          {/* SÍGUENOS */}
          <div>
            <h3 className="font-medium text-sm mb-4 tracking-wider">SÍGUENOS</h3>
            <ul className="space-y-3">
              {footerLinks.siguenos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SECCIONES */}
          <div>
            <h3 className="font-medium text-sm mb-4 tracking-wider">SECCIONES</h3>
            <ul className="space-y-2">
              {footerLinks.secciones.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* EQUIPO */}
          <div>
            <h3 className="font-medium text-sm mb-4 tracking-wider">EQUIPO</h3>
            <ul className="space-y-2">
              {footerLinks.equipo.map((item) => (
                <li key={item.name}>
                  <p className="text-sm text-muted-foreground font-light">
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-light">
            © 2025 ZARA. TODOS LOS DERECHOS RESERVADOS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;