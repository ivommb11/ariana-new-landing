import React from 'react';

const SorprendeSection = () => {
  const imageAnimation = "animate-[slideRight_8s_ease-in-out_infinite]";

  return (
    <section id="sorprende" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#f4e8a8]">

      {/* FONDO BASE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/images/sorprende-back.png" alt="Fondo" className="w-full h-full object-cover scale-110" />
      </div>

      {/* IMAGEN CHICA */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <img src="/images/sorprende-chica.png" alt="Chica" className={`w-full h-full object-cover object-right ${imageAnimation}`} />
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(30px); }
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10 w-full h-full">

        <div className="grid md:grid-cols-[60%_40%] gap-8 items-center max-w-[120rem] mx-auto min-h-screen py-20 translate-x-0 lg:-translate-x-12">

          {/* --- AQUÍ ESTÁ LA MAGIA ---
              1. lg:scale-[0.75]: En laptops, reduce todo este bloque al 75% de su tamaño real.
              2. lg:origin-left: Asegura que al achicarse, se pegue a la izquierda (y no flote al centro).
              3. xl:scale-100: En monitores grandes, vuelve al 100% (tamaño original).
              4. w-[130%]: Compensación visual opcional porque al escalar se reduce el ancho ocupado.
          */}
          <div className="flex flex-col items-start text-left py-12 self-center md:self-start md:pt-32 w-full
                          lg:scale-[0.70] lg:origin-left lg:w-[140%]
                          xl:scale-100 xl:w-full">

            {/* TÍTULO - VOLVEMOS A TUS VALORES ORIGINALES GIGANTES */}
            <div className="flex flex-col items-start leading-none mb-8 w-full">
              <span className="text-2xl lg:text-5xl xl:text-6xl text-[#1A1A1A] font-poppins font-light italic translate-x-2 lg:translate-x-6">
                ¡La estación
              </span>

              <span className="text-2xl lg:text-5xl xl:text-6xl text-[#1A1A1A] font-poppins font-light italic translate-x-6 lg:translate-x-20 lg:mt-4">
                que esperabas
              </span>

              {/* Aquí mantenemos tu 9xl o valor fijo gigante, porque el scale se encarga de reducirlo visualmente */}
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#1A1A1A] font-abril uppercase tracking-tight font-light -mt-1 lg:mt-1 whitespace-nowrap">
                YA FLORECIÓ!
              </h2>
            </div>

            <p className="font-poppins text-[#1A1A1A] text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed max-w-xs md:max-w-md lg:max-w-lg mt-2 translate-x-4 lg:translate-x-24">
              <span className="font-semibold">Haz clic</span> y déjate sorprender por la nueva colección de Zara.
            </p>

            <button className="bg-[#c5d68e] hover:bg-[#b8ca75] text-white font-poppins text-sm md:text-base lg:text-lg px-6 py-3 lg:px-10 lg:py-4 rounded-full shadow-sm hover:shadow-md transition-all mt-8 translate-x-4 lg:translate-x-52"
              onClick={() => window.open('https://www.zara.com/pe/es/mujer-nuevo-l1180.html?v1=2544455', '_blank', 'noopener,noreferrer')}
            >
              Conoce más ⏵
            </button>

          </div>

          <div className="hidden md:block"></div>

        </div>
      </div>
    </section>
  );
};

export default SorprendeSection;