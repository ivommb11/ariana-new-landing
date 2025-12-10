import React from 'react';

const ArmarioSection = () => {
  const frontImageAnimation = "animate-[float_6s_ease-in-out_infinite]";

  return (
    <section id="destaca" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">

      {/* 1. FONDO BASE
          ✅ CORRECCIÓN: object-cover siempre (para evitar bordes blancos en monitores anchos)
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/armariofondo.png"
          alt="Fondo decorativo"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* 2. IMAGEN FRONTAL (FLOTANTE)
          ✅ Mantenemos tu animación
          ✅ object-cover para consistencia
      */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <img
          src="/images/imagenesarmario.png"
          alt="Elementos decorativos frontales"
          className={`w-full h-full object-cover ${frontImageAnimation}`}
        />
      </div>

      {/* Estilos de animación (Mantener igual) */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>

      {/* 3. CONTENIDO PRINCIPAL */}
      <div className="container mx-auto px-6 relative z-10 w-full">

        {/* CONTENEDOR DE TEXTO
           ✅ translate-x-0 en móvil (seguro) -> translate-x-8 en escritorio (tu diseño)
           ✅ Añadido w-full para centrado correcto
        */}
        <div className="relative max-w-7xl mx-auto min-h-[600px] flex items-center justify-center translate-x-0 md:translate-x-8">

          <div className="relative flex flex-col items-center text-center px-4 md:px-8 z-10 max-w-2xl mx-auto">

            <div className="flex flex-col items-start leading-none mb-8 w-full">

              {/* "TU ARMARIO"
                 ✅ Añadido 2xl:text-6xl para pantallas gigantes
              */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-[#1A1A1A] font-abril uppercase tracking-wide self-start">
                TU ARMARIO
              </h2>

              {/* "renace"
                 ✅ translate-x-8 en móvil (seguro) -> translate-x-16 en escritorio (tu diseño)
                 ✅ text-5xl en móvil (seguro) -> sube hasta 2xl:text-[8rem]
              */}
              <h2 className="text-5xl md:text-6xl lg:text-9xl 2xl:text-[8rem] text-[#1A1A1A] font-abril lowercase tracking-wide -mt-6 md:-mt-10 translate-x-8 md:translate-x-16 self-start">
                renace
              </h2>

              {/* "En primavera"
                 ✅ Añadido 2xl:text-7xl
              */}
              <span className="text-2xl md:text-3xl lg:text-6xl 2xl:text-7xl text-[#1A1A1A] font-poppins font-light italic -mt-2 md:-mt-4 self-start">
                En primavera
              </span>
            </div>

            {/* PÁRRAFO
               ✅ Mantenemos max-w-md como pediste
               ✅ Añadido 2xl:text-xl
            */}
            <p className="font-poppins text-gray-700 text-sm md:text-base 2xl:text-xl leading-relaxed max-w-md mt-6 text-left self-start">
              Esta colección celebra lo nuevo, colores ligeros,
              siluetas frescas y piezas pensadas para reinventarte con la temporada. Descubre prendas que iluminan,
              suavizan y transforman tu estilo con la naturalidad de un cambio que llega solo una vez al año.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ArmarioSection;