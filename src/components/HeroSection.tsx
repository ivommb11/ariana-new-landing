import React from 'react';

const HeroSection = () => {
  const frontImageAnimation = "animate-[breathe_5s_ease-in-out_infinite]";

  return (
    <section id="explora" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">

      {/* FONDO */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img
          src="/images/fondo-pinceladas.png"
          alt="Fondo decorativo"
          className={`w-full h-full object-cover object-center opacity-90 scale-110 ${frontImageAnimation}`}
        />
      </div>

      <style jsx>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1.1); }
          50% { transform: scale(1.15); }
        }
      `}</style>

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 max-w-4xl 2xl:max-w-7xl mx-auto">

        {/* Bloque de Títulos */}
        <div className="relative w-full flex flex-col items-center leading-none text-brand-dark mb-6">

            {/* "¿Estás lista para" */}
            <span className="font-poppins italic font-light text-[#1A1A1A] self-center -translate-x-2 md:-translate-x-6 lg:-translate-x-12"
              style={{ fontSize: 'clamp(1rem, 2.8vw, 4rem)' }}>
              ¿Estás lista para
            </span>

            {/* "RENOVAR" */}
            <h1 className="font-abril uppercase tracking-wide -mt-1 md:mt-1 translate-x-2 md:translate-x-8 lg:translate-x-12"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 6rem)' }}>
              RENOVAR
            </h1>

            {/* "tu estilo en" */}
            <span className="font-poppins italic font-light text-[#1A1A1A] self-center -mt-2 md:mt-2 -translate-x-2 md:-translate-x-6 lg:-translate-x-28"
              style={{ fontSize: 'clamp(1rem, 2.8vw, 4rem)' }}>
              tu estilo en
            </span>

            {/* "PRIMAVERA?" */}
            <h1 className="font-abril uppercase tracking-wide -mt-2 md:mt-2"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 6rem)' }}>
              PRIMAVERA?
            </h1>
        </div>

        {/* Párrafo descriptivo */}
        <p className="font-poppins text-gray-600 text-xs sm:text-sm md:text-base 2xl:text-1xl max-w-xl 2xl:max-w-3xl leading-relaxed mb-8 text-center px-4">
          Combina la versatilidad con la tendencia y una estética contemporánea que eleva cualquier look con naturalidad con nuestra nueva colección de primavera.
        </p>

        {/* Botón */}
        <button
          className="bg-[#c5d68e] hover:bg-[#b8ca75] text-white font-poppins text-base md:text-xl 2xl:text-2xl px-8 py-5 md:px-10 md:py-4 2xl:px-12 2xl:py-6 rounded-full shadow-sm hover:shadow-md transition-all"
          onClick={() => {
            window.open('https://www.zara.com/pe/es/mujer-nuevo-l1180.html?v1=2544455', '_blank', 'noopener,noreferrer');
          }}
        >
          Conoce más
        </button>

      </div>
    </section>
  );
};

export default HeroSection;