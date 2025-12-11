import React from 'react';

const SorprendeSection = () => {
  const imageAnimation = "animate-[slideRight_8s_ease-in-out_infinite]";

  return (
    <section id="sorprende" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#f4e8a8]">

      {/* 1. FONDO BASE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/sorprende-back.png"
          alt="Fondo decorativo"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* 2. IMAGEN CHICA */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <img
          src="/images/sorprende-chica.png"
          alt="Mujer en jardín de flores"
          className={`w-full h-full object-cover object-right ${imageAnimation}`}
        />
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(30px); }
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10 w-full h-full">

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-[60%_40%] gap-8 items-center max-w-[120rem] mx-auto min-h-screen py-20 translate-x-0 lg:-translate-x-12">

          {/* COLUMNA IZQUIERDA: Textos */}
          <div className="flex flex-col items-start text-left py-12 self-center md:self-start md:pt-32 w-full">

            {/* BLOQUE DE TÍTULO */}
            <div className="flex flex-col items-start leading-none mb-8 w-full">

              {/* 1. "¡La estación"
                 CAMBIO: lg:text-[min(3.75rem,4vw)]
                 Significa: "Usa 60px (3.75rem) como máximo, PERO si el 4% de la pantalla es menor, usa eso".
              */}
              <span className="text-2xl lg:text-[min(3.75rem,4vw)] text-[#1A1A1A] font-poppins font-light italic translate-x-2 lg:translate-x-6">
                ¡La estación
              </span>

              {/* 2. "que esperabas"
                 CAMBIO: Igual que arriba para consistencia
              */}
              <span className="text-2xl lg:text-[min(3.75rem,4vw)] text-[#1A1A1A] font-poppins font-light italic translate-x-6 lg:translate-x-20 lg:mt-8">
                que esperabas
              </span>

              {/* 3. "YA FLORECIÓ!"
                 CAMBIO: lg:text-[min(8rem,6vw)]
                 - 8rem (128px) es tu tamaño "text-9xl" original (el tope).
                 - 6vw hace que en Laptop (1366px) baje a unos 82px (un tamaño perfecto, ni muy chico ni muy grande).
              */}
              <h2 className="text-5xl md:text-6xl lg:text-[min(8rem,6vw)] text-[#1A1A1A] font-abril uppercase tracking-tight font-light -mt-1 lg:mt-4 whitespace-nowrap">
                YA FLORECIÓ!
              </h2>
            </div>

            {/* PÁRRAFO */}
            <p className="font-poppins text-[#1A1A1A]
              text-sm md:text-base lg:text-lg xl:text-xl
              leading-relaxed
              max-w-xs md:max-w-md lg:max-w-lg
              mt-6
              translate-x-4 lg:translate-x-24">
              <span className="font-semibold">Haz clic</span> y déjate sorprender por la nueva colección de Zara.
            </p>

            {/* BOTÓN */}
            <button className="bg-[#c5d68e] hover:bg-[#b8ca75] text-white font-poppins
              text-sm md:text-base lg:text-lg
              px-6 py-3 lg:px-10 lg:py-4
              rounded-full shadow-sm hover:shadow-md transition-all
              mt-8
              translate-x-4 lg:translate-x-52"
              onClick={() => {
                  window.open('https://www.zara.com/pe/es/mujer-nuevo-l1180.html?v1=2544455', '_blank', 'noopener,noreferrer');
              }}
            >
              Conoce más ⏵
            </button>

          </div>

          {/* COLUMNA DERECHA (Espaciador) */}
          <div className="hidden md:block"></div>

        </div>
      </div>
    </section>
  );
};

export default SorprendeSection;