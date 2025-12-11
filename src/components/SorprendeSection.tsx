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
                 📉 REBAJADO: text-2xl (móvil) -> text-3xl (tablet) -> text-5xl (laptop)
              */}
              <span className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-[#1A1A1A] font-poppins font-light italic translate-x-2 lg:translate-x-6">
                ¡La estación
              </span>

              {/* 2. "que esperabas"
                 📉 REBAJADO: Igual que arriba
              */}
              <span className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-[#1A1A1A] font-poppins font-light italic translate-x-6 lg:translate-x-20">
                que esperabas
              </span>

              {/* 3. "YA FLORECIÓ!"
                 📉 REBAJADO: text-5xl (móvil) -> text-7xl (laptop) -> text-8xl (escritorio grande)
                 Ya no usamos 9xl ni 11rem en pantallas normales.
              */}
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#1A1A1A] font-abril uppercase tracking-tight font-light -mt-1 lg:-mt-2 whitespace-nowrap">
                YA FLORECIÓ!
              </h2>
            </div>

            {/* PÁRRAFO
               📉 REBAJADO: text-sm a text-lg (máximo)
            */}
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
              translate-x-4 lg:translate-x-52" // Ajustado el translate para que no se vaya tan lejos
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