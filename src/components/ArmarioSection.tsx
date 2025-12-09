import React from 'react';

const ArmarioSection = () => {
  // 🎨 OPCIONES DE ANIMACIÓN PARA LA IMAGEN FRONTAL
  // Descomenta solo UNA opción a la vez (quita los //)

  // Opción 1: Flotación suave (recomendado) - Activa por defecto
  const frontImageAnimation = "animate-[float_6s_ease-in-out_infinite]";

  // Opción 2: Zoom suave pulsante
  // const frontImageAnimation = "animate-[pulse_4s_ease-in-out_infinite]";

  // Opción 3: Rotación muy suave
  // const frontImageAnimation = "animate-[spin_20s_linear_infinite]";

  // Opción 4: Respiración (escala)
  // const frontImageAnimation = "animate-[breathe_5s_ease-in-out_infinite]";

  return (
    <section id="destaca" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* 1. FONDO PNG - Capa 1 (Fondo base)
          📍 Esta es la imagen de fondo base
          📏 object-cover = cubre todo el espacio
          📏 object-contain = mantiene proporciones completas
          📏 opacity-90 = 90% de opacidad (ajusta: opacity-80, opacity-100)
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/armariofondo.png"
          alt="Fondo decorativo"
          className="w-full h-full object-cover md:object-contain opacity-90"
        />
      </div>

      {/* 2. IMAGEN FRONTAL - Capa 2 (Encima del fondo, sin color de fondo)
          📍 Esta imagen va ENCIMA del fondo base
          📍 Usa z-[5] para estar entre el fondo (z-0) y el texto (z-10)
          📏 w-full h-full = ocupa 100% ancho y alto del contenedor
          📏 object-cover = cubre TODO el espacio disponible (puede recortar)
          📏 object-contain = muestra la imagen completa (puede dejar espacios)
          💡 Esta imagen debe tener fondo transparente (PNG con alpha)
          🎨 Animación aplicada con frontImageAnimation
          ⚠️ Si no ocupa todo el alto, prueba cambiando md:object-contain a md:object-cover
      */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <img
          src="/images/imagenesarmario.png"
          alt="Elementos decorativos frontales"
          className={`w-full h-full object-cover ${frontImageAnimation}`}
        />
      </div>

      {/* ESTILOS DE ANIMACIÓN PERSONALIZADOS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10">

        {/* CONTENEDOR CENTRAL PARA TEXTO */}
        <div className="relative max-w-7xl mx-auto min-h-[600px] flex items-center justify-center translate-x-8">

          {/* TEXTO CENTRADO
              📍 ALINEACIÓN: text-center (centrado)
              📏 Ajusta tamaños de fuente según necesites
              🔄 z-10 para estar sobre las imágenes de fondo
          */}
          <div className="relative flex flex-col items-center text-center px-4 md:px-8 z-10 max-w-2xl mx-auto">

            {/* BLOQUE DE TÍTULO
                📍 items-start = alinea elementos a la izquierda
            */}
            <div className="flex flex-col items-start leading-none mb-8 w-full">

              {/* "TU ARMARIO" - Abril Fatface
                  📏 TAMAÑO FUENTE: text-3xl md:text-4xl lg:text-5xl
                  📍 POSICIÓN HORIZONTAL: sin translate-x (alineado a la izquierda)
                  Para mover: agrega translate-x-[valor] o -translate-x-[valor]
              */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] font-abril uppercase tracking-wide self-start">
                TU ARMARIO
              </h2>

              {/* "renace" - Abril Fatface (MÁS GRANDE)
                  📏 TAMAÑO FUENTE: text-5xl md:text-6xl lg:text-9xl
                  📏 ESPACIADO VERTICAL: -mt-10 (muy cerca de línea anterior)
                  📍 POSICIÓN HORIZONTAL: translate-x-28 (movido a la derecha)
                  Para ajustar horizontal: cambia el valor translate-x-[número]
              */}
              <h2 className="text-5xl md:text-6xl lg:text-9xl text-[#1A1A1A] font-abril lowercase tracking-wide -mt-10 translate-x-16 self-start">
                renace
              </h2>

              {/* "En primavera" - Poppins Italic
                  📏 TAMAÑO FUENTE: text-2xl md:text-3xl lg:text-6xl
                  📏 ESPACIADO VERTICAL: -mt-2 (cerca de línea anterior)
                  📍 POSICIÓN HORIZONTAL: sin translate-x (alineado a la izquierda)
                  Para mover: agrega translate-x-[valor] o -translate-x-[valor]
              */}
              <span className="text-2xl md:text-3xl lg:text-6xl text-[#1A1A1A] font-poppins font-light italic -mt-2 self-start">
                En primavera
              </span>
            </div>

            {/* PÁRRAFO DESCRIPTIVO
                📏 TAMAÑO FUENTE: text-sm md:text-base
                📏 ESPACIADO VERTICAL: mt-6 (espacio entre título y párrafo)
                📏 ANCHO MÁXIMO: max-w-2xl
                📍 ALINEACIÓN: text-left (alineado a la izquierda)
                📍 self-start hace que el párrafo inicie donde inicia "En primavera"
            */}
            <p className="font-poppins text-gray-700 text-sm md:text-base leading-relaxed max-w-md mt-6 text-left self-start">
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