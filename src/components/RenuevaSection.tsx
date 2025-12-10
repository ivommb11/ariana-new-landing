import { Button } from "@/components/ui/button";
import backgroundImage from "/images/renueva-fondo.png";

const RenuevaSection = () => {

  return (
    // 1. ESTRUCTURA: Cambiamos 'py-32' por 'min-h-screen' para igualar a las otras secciones
    <section id="renueva" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      {/* 2. FONDO: Aseguramos que cubra todo el espacio */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage.src || backgroundImage})` }}
      ></div>

      {/* 3. OVERLAY: Oscuro para legibilidad */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-0"></div>

      {/* 4. CONTENIDO: Centrado y Responsive */}
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center w-full h-full">

        {/* RECUADRO BLANCO SEMI-TRANSPARENTE */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-16 max-w-lg md:max-w-2xl w-full text-center shadow-2xl animate-in fade-in zoom-in duration-700">

          <div className="space-y-6 md:space-y-10">

            {/* TÍTULO "20%" */}
            {/* Ajustado para que no sea gigante en móvil pero impactante en Desktop */}
            <h2 className="text-7xl md:text-9xl 2xl:text-[10rem] font-abril leading-none text-[#000000]">
              20%
            </h2>

            {/* SUBTÍTULO */}
            <p className="text-lg md:text-3xl 2xl:text-4xl font-light tracking-widest text-primary italic font-poppins">
              En la nueva colección
            </p>

            {/* BOTÓN */}
            <Button
              size="lg"
              className="bg-[#c5d68e] text-white hover:bg-[#b8ca75]
                         px-10 py-6 md:px-14 md:py-8
                         text-sm md:text-base tracking-[0.2em]
                         mt-4 md:mt-8 rounded-full shadow-lg transition-transform hover:scale-105 font-poppins"
              onClick={() => {
                  window.open('https://www.zara.com/pe/es/mujer-nuevo-l1180.html?v1=2544455', '_blank', 'noopener,noreferrer');
              }}
            >
              COMPRA YA
            </Button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default RenuevaSection;