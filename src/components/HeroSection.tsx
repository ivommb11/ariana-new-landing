import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="descubre" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* ... (Fondo) ... */}
      <div className="absolute inset-0">
        <img
                  src="/images/Mesa_de_trabajo_1.png" // <-- CAMBIA ESTA RUTA
                  alt="Fondo de la nueva colección" // <-- Cambia el texto alternativo
                  className="w-full h-full object-cover"
                />
      </div>

      {/* Contenedor principal: sigue siendo flex-col para apilar verticalmente */}
      <div className="relative z-10 w-full h-64 md:h-80 bg-primary/70 backdrop-blur-sm
                      flex flex-col items-center justify-center text-center px-6 fade-in-up">

        {/* 1. El Título (tal como estaba) */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-background mb-6 tracking-tight font-abril">
          ❝NUEVA COLECCIÓN❞
        </h1>

        {/* === CAMBIO AQUÍ === */}
        {/* 2. Nuevo 'div' para agrupar el párrafo y el botón */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <p className="text-background/90 text-sm md:text-base font-light italic">
            La nueva colección que redefine tu estilo
          </p>

          <Button
            size="lg"
            className="bg-[#8F8060] text-white hover:bg-[#8F8060]/90 px-8 py-6 text-sm tracking-wider whitespace-nowrap"
            onClick={() => {
                window.open('https://www.zara.com/pe/es/mujer-nuevo-l1180.html?v1=2544455', '_blank', 'noopener,noreferrer');
            }}
          >
            EXPLORAR AHORA
          </Button>
        </div>
        {/* === FIN DEL CAMBIO === */}

      </div>
    </section>
  );
};

export default HeroSection;