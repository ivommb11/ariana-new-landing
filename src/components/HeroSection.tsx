import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  // Animación suave de "respiración"
  const frontImageAnimation = "animate-[breathe_5s_ease-in-out_infinite]";

  return (
    <section id="explora" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">

      {/* 1. FONDO - CORRECCIÓN PARA PANTALLAS ANCHAS
          ❌ Antes: md:object-contain (dejaba espacios blancos en monitores anchos)
          ✅ Ahora: object-cover (Cubre siempre toda la pantalla)
          ✅ object-center (Centra la imagen para que el recorte sea equilibrado)
      */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img
          src="/images/fondo-pinceladas.png"
          alt="Fondo decorativo"
          className={`w-full h-full object-cover object-center opacity-90 scale-110 ${frontImageAnimation}`}
        />
      </div>

      {/* 2. CONTENIDO
          ✅ Añadido '2xl:max-w-7xl' para que en monitores gigantes el contenido se expanda más
      */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 max-w-4xl 2xl:max-w-7xl mx-auto">

        {/* Bloque de Títulos */}
        <div className="relative w-full flex flex-col items-center leading-none text-brand-dark mb-6">

            {/* 1. "¿Estás lista para"
               - Móvil: text-xl (más seguro)
               - PC: text-7xl
               - Monitor 4K (2xl): text-8xl
            */}
            <span className="font-poppins italic font-light
              text-xl sm:text-2xl md:text-3xl lg:text-7xl 2xl:text-6xl
              text-[#1A1A1A] self-center
              -translate-x-2 md:-translate-x-6 lg:-translate-x-12">
              ¿Estás lista para
            </span>

            {/* 2. "RENOVAR"
               - Móvil: text-5xl (Evita que se corte en iPhone SE)
               - Tablet: text-7xl
               - PC: text-[8rem]
               - Monitor 4K (2xl): text-[10rem] (GIGANTE para pantallas grandes)
            */}
            <h1 className="font-abril
              text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] 2xl:text-[6rem]
              uppercase tracking-wide
              -mt-1 md:mt-1
              translate-x-2 md:translate-x-8 lg:translate-x-12">
              RENOVAR
            </h1>

            {/* 3. "tu estilo en" */}
            <span className="font-poppins italic font-light
              text-xl sm:text-2xl md:text-3xl lg:text-7xl 2xl:text-6xl
              text-[#1A1A1A] self-center
              -mt-2 md:mt-2
              -translate-x-2 md:-translate-x-6 lg:-translate-x-28">
              tu estilo en
            </span>

            {/* 4. "PRIMAVERA?"
               - 2xl:text-[10rem] para mantener proporción en 4K
            */}
            <h1 className="font-abril
              text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] 2xl:text-[6rem]
              uppercase tracking-wide
              -mt-2 md:mt-2">
              PRIMAVERA?
            </h1>
        </div>

        {/* Párrafo descriptivo
           ✅ 2xl:text-xl y 2xl:max-w-3xl para que sea legible en 4K
        */}
        <p className="font-poppins text-gray-600
          text-xs sm:text-sm md:text-base 2xl:text-xl
          max-w-xl 2xl:max-w-3xl
          leading-relaxed mb-8 text-center px-4">
          Combina la versatilidad con la tendencia y una estética contemporánea que eleva cualquier look con naturalidad con nuestra nueva colección de primavera.
        </p>

        {/* Botón */}
        <Button
          className="bg-[#c5d68e] hover:bg-[#b8ca75] text-white font-poppins
            text-base md:text-xl 2xl:text-2xl
            px-8 py-5 md:px-10 md:py-6 2xl:px-12 2xl:py-8
            rounded-full shadow-sm hover:shadow-md transition-all"
          onClick={() => {
              window.open('https://www.zara.com/pe/es/mujer-nuevo-l1180.html?v1=2544455', '_blank', 'noopener,noreferrer');
          }}
        >
          Conoce más
        </Button>

      </div>
    </section>
  );
};

export default HeroSection;