import React from 'react';

const SorprendeSection = () => {
    const imageAnimation = "animate-[slideRight_8s_ease-in-out_infinite]";
  return (
    <section id="sorprende" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f4e8a8]">

      {/* 1. FONDO PNG - Capa 1 (Pinceladas amarillas)
          📍 Esta es la imagen de fondo base con pinceladas
          📏 object-cover = CUBRE TODO el espacio (puede recortar)
          📏 object-contain = muestra la imagen completa (puede dejar espacios)
          📏 scale-110 = aumenta el tamaño para asegurar que cubra todo
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/sorprende-back.png"
          alt="Fondo decorativo"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* 2. IMAGEN CHICA CON JARDÍN - Capa 2 (Encima del fondo)
          📍 Esta imagen cubre TODO el ancho y alto de la sección
          📍 Usa z-[5] para estar entre el fondo (z-0) y el texto (z-10)
          📏 inset-0 = ocupa todo el espacio (arriba, abajo, izquierda, derecha)
          📏 object-cover = cubre todo el espacio
          📏 object-right = la imagen se alinea a la derecha (la chica queda a la derecha)
          💡 Esta imagen debe ser grande y puede tener transparencia en el lado izquierdo
      */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <img
          src="/images/sorprende-chica.png"
          alt="Mujer en jardín de flores"
          className={`w-full h-full object-cover object-right ${imageAnimation}`}
        />
      </div>
      {/* ESTILOS DE ANIMACIÓN PERSONALIZADOS */}
            <style jsx>{`
              @keyframes slideRight {
                0%, 100% {
                  transform: translateX(0);
                }
                50% {
                  transform: translateX(30px);
                }
              }
            `}</style>

      <div className="container mx-auto px-6 relative z-10">

        {/* GRID: Texto a la izquierda, Espacio para imagen a la derecha */}
        <div className="grid md:grid-cols-[60%_40%] gap-8 items-center max-w-[100rem] mx-auto min-h-screen py-20 -translate-x-12">

          {/* COLUMNA IZQUIERDA: Textos
              📍 ALINEACIÓN: items-start text-left (alineado a la izquierda)
              📍 Posición vertical: self-start para estar arriba
          */}
          <div className="flex flex-col items-start text-left py-12 self-center md:self-start md:pt-32">

            {/* BLOQUE DE TÍTULO */}
            <div className="flex flex-col items-start leading-none mb-8 w-full">

              {/* "¡La estación" - Poppins Italic
                  📏 TAMAÑO FUENTE: text-2xl md:text-3xl lg:text-4xl
                  📍 POSICIÓN HORIZONTAL: sin translate-x (alineado a la izquierda)
                  Para mover: agrega translate-x-[valor] o -translate-x-[valor]
              */}
              <span className="text-2xl md:text-3xl lg:text-6xl text-[#1A1A1A] font-poppins font-light italic translate-x-6">
                ¡La estación
              </span>

              {/* "que esperabas" - Poppins Italic
                  📏 TAMAÑO FUENTE: text-2xl md:text-3xl lg:text-4xl
                  📏 ESPACIADO VERTICAL: sin margen (pegado a línea anterior)
                  📍 POSICIÓN HORIZONTAL: sin translate-x (alineado a la izquierda)
              */}
              <span className="text-2xl md:text-3xl lg:text-6xl text-[#1A1A1A] font-poppins font-light italic translate-x-24 ">
                que esperabas
              </span>

              {/* "YA FLORECIÓ!" - Abril Fatface (MUY GRANDE y BOLD)
                  📏 TAMAÑO FUENTE: text-5xl md:text-6xl lg:text-7xl
                  📏 ESPACIADO VERTICAL: -mt-2 (cerca de línea anterior)
                  📍 POSICIÓN HORIZONTAL: sin translate-x (alineado a la izquierda)
                  Para mover: agrega translate-x-[valor] o -translate-x-[valor]
              */}
              <h2 className="text-5xl md:text-6xl lg:text-9xl text-[#1A1A1A] font-abril uppercase tracking-tight font-light -mt-1 whitespace-nowrap">
                YA FLORECIÓ!
              </h2>
            </div>

            {/* PÁRRAFO DESCRIPTIVO
                📏 TAMAÑO FUENTE: text-sm md:text-base
                📏 ESPACIADO VERTICAL: mt-6 (espacio entre título y párrafo)
                📏 ANCHO MÁXIMO: max-w-md (más estrecho para este diseño)
                📍 ALINEACIÓN: text-left
            */}
            <p className="font-poppins text-[#1A1A1A] text-sm md:text-base leading-relaxed max-w-md mt-6 translate-x-28 lg:text-2xl">
              <span className="font-semibold">Haz clic</span> y déjate sorprender por la nueva colección de Zara.
            </p>

            {/* BOTÓN CTA
                📏 TAMAÑO: text-base md:text-lg
                📏 PADDING: px-8 py-3
                📏 ESPACIADO: mt-8
                🎨 Color verde suave para combinar con el diseño
            */}
            <button className="bg-[#c5d68e] hover:bg-[#b8ca75] text-white font-poppins text-base md:text-lg px-8 py-3 rounded-full shadow-sm hover:shadow-md transition-all mt-8 translate-x-64"
            onClick={() => {
                          window.open('https://www.zara.com/pe/es/mujer-nuevo-l1180.html?v1=2544455', '_blank', 'noopener,noreferrer');
                      }}
            >

              Conoce más ⏵
            </button>

          </div>

          {/* COLUMNA DERECHA: Espacio vacío para la imagen de fondo */}
          <div className="hidden md:block"></div>

        </div>
      </div>
    </section>
  );
};

export default SorprendeSection;