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
      <div className="relative z-10 flex flex-col items-center w-full px-4 max-w-7xl mx-auto">

        {/* Bloque de Títulos */}
        <div className="relative w-full flex flex-col items-center mb-6" style={{ lineHeight: '0.85' }}>

            {/* "¿Estás lista para" */}
            <span className="font-poppins italic font-light text-[#1A1A1A]"
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 3rem)',
                transform: 'translateX(clamp(-0.5rem, -1.2vw, -2.5rem))'
              }}>
              ¿Estás lista para
            </span>

            {/* "RENOVAR" */}
            <h1 className="font-abril uppercase text-[#1A1A1A]"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 7rem)',
                letterSpacing: '0.02em',
                marginTop: 'clamp(0.25rem, 0.4vw, 0.5rem)',
                transform: 'translateX(clamp(0.5rem, 1.5vw, 2.5rem))'
              }}>
              RENOVAR
            </h1>

            {/* "tu estilo en" */}
            <span className="font-poppins italic font-light text-[#1A1A1A]"
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 3rem)',
                marginTop: 'clamp(0rem, 0.4vw, 0.8rem)',
                transform: 'translateX(clamp(-0.5rem, -2.5vw, -5rem))'
              }}>
              tu estilo en
            </span>

            {/* "PRIMAVERA?" */}
            <h1 className="font-abril uppercase text-[#1A1A1A]"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 7rem)',
                letterSpacing: '0.02em',
                marginTop: 'clamp(0rem, 0.4vw, 0.8rem)'
              }}>
              PRIMAVERA?
            </h1>
        </div>

        {/* Párrafo descriptivo */}
        <p className="font-poppins text-gray-600 leading-relaxed text-center px-4"
          style={{
            fontSize: 'clamp(0.75rem, 0.95vw, 1.1rem)',
            maxWidth: 'clamp(20rem, 45vw, 38rem)',
            marginBottom: 'clamp(1.5rem, 1.8vw, 2rem)'
          }}>
          Combina la versatilidad con la tendencia y una estética contemporánea que eleva cualquier look con naturalidad con nuestra nueva colección de primavera.
        </p>

        {/* Botón */}
        <button
          className="bg-[#c5d68e] hover:bg-[#b8ca75] text-white font-poppins rounded-full shadow-sm hover:shadow-md transition-all"
          style={{
            fontSize: 'clamp(0.875rem, 1vw, 1.25rem)',
            padding: 'clamp(0.9rem, 1.3vw, 1.4rem) clamp(1.8rem, 2.5vw, 2.3rem)'
          }}
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