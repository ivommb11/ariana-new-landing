import React from 'react';

const hoverClasses = "transition-transform duration-500 hover:scale-105";

const TendenciasSection = () => {
  return (
    <section id="descubre" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">

      {/* 1. FONDO PNG - CORRECCIÓN FULL WIDTH
          ❌ Antes: md:object-contain (dejaba bordes blancos)
          ✅ Ahora: object-cover object-center (Cubre siempre, centrado)
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/tendencias-back.png"
          alt="Fondo decorativo"
          className="w-full h-full object-cover object-center opacity-90 scale-110"
        />
      </div>

      <div className="relative z-10 w-full h-full">

        {/* 2. GRID PRINCIPAL
           ✅ Añadido 'w-full' y 'max-w-[1920px]' para que en pantallas gigantes no se estire infinito si no quieres
           (o déjalo sin max-w si prefieres full-full width)
        */}
        <div className="grid md:grid-cols-[auto_1fr] lg:grid-cols-[45%_55%] items-center w-full min-h-screen">

          {/* COLUMNA IZQUIERDA: Imagen
              ✅ Añadido 2xl:min-w-[800px] para que en monitores 4K la imagen crezca acorde
          */}
          <div className="relative flex items-end justify-start h-full">
            <img
              src="/images/imagen-tendencias.png"
              alt="Tendencias de Primavera"
              className={`
                h-[600px] md:h-[700px] lg:h-[100vh]
                w-auto
                min-w-[400px] md:min-w-[500px] lg:min-w-[600px] 2xl:min-w-[800px]
                object-cover object-left-bottom
                ${hoverClasses}
              `}
            />
          </div>

          {/* COLUMNA DERECHA: Textos
              ✅ Añadido 2xl:pl-24 para dar más aire en pantallas gigantes
          */}
          <div className="flex flex-col items-start text-left px-6 md:px-8 lg:px-12 2xl:px-24 py-12 mt-32">

            {/* BLOQUE DE TÍTULO */}
            <div className="flex flex-col items-start leading-none mb-6 w-full">

              {/* "TENDENCIAS"
                  ✅ Añadido 2xl:text-8xl para monitores grandes
              */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-[#1A1A1A] font-abril uppercase tracking-wide">
                TENDENCIAS
              </h2>

              {/* "De Primavera"
                  ✅ Añadido 2xl:text-7xl para monitores grandes
                  ⚠️ MANTENEMOS translate-x-52 intacto (o ajustado proporcionalmente si quisieras)
              */}
              <span className="text-2xl md:text-3xl lg:text-6xl 2xl:text-7xl text-[#1A1A1A] font-poppins font-light italic -mt-2 md:-mt-3 translate-x-20 md:translate-x-32 lg:translate-x-52">
                De Primavera
              </span>
            </div>

            {/* PÁRRAFO
                ✅ Añadido 2xl:text-xl y 2xl:max-w-2xl
            */}
            <p className="font-poppins text-gray-600
              text-sm md:text-base 2xl:text-xl
              leading-relaxed
              max-w-lg 2xl:max-w-2xl
              mt-4">
              La moda no tiene que ser complicada. Es un nuevo ciclo, una nueva actitud.
              La colección de Primavera '25 te invita a la LIGEREZA y al
              estilo sin esfuerzo.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TendenciasSection;