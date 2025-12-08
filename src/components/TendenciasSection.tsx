import React from 'react';
const hoverClasses = "transition-transform duration-500 hover:scale-105";
const TendenciasSection = () => {
  return (
    <section id="descubre" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* 1. FONDO PNG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/tendencias-back.png"
          alt="Fondo decorativo"
          className="w-full h-full object-cover md:object-contain opacity-90 scale-110"
        />
      </div>

      <div className="relative z-10 w-full">

        {/* 2. GRID: Imagen a la izquierda (sin padding), Texto a la derecha */}
        <div className="grid md:grid-cols-[auto_1fr] lg:grid-cols-[45%_55%] items-center w-full min-h-screen">

          {/* COLUMNA IZQUIERDA: Imagen
              📍 POSICIÓN HORIZONTAL: Pegada al borde izquierdo (sin margen)
              📍 POSICIÓN VERTICAL: Pegada al fondo (items-end)
              📏 ALTURA: h-[valor] controla la altura
                  - h-[500px] = 500px de alto
                  - h-[600px] = 600px de alto
                  - h-[700px] = 700px de alto
                  - h-[80vh] = 80% de la altura de la pantalla
                  - h-[90vh] = 90% de la altura de la pantalla
                  - h-[100vh] = 100% altura de pantalla (pantalla completa)
              📏 ANCHO: w-[valor] controla el ancho
                  - w-auto = ancho automático según proporción
                  - w-[400px] = 400px de ancho
                  - w-[500px] = 500px de ancho
                  - w-[600px] = 600px de ancho
                  - w-full = 100% del contenedor
              📏 MIN-WIDTH: min-w-[valor] establece un ancho mínimo
                  - min-w-[400px] = mínimo 400px
                  - min-w-[500px] = mínimo 500px
                  - min-w-[600px] = mínimo 600px
          */}
          <div className="relative flex items-end justify-start ">
            <img
              src="/images/imagen-tendencias.png"
              alt="Tendencias de Primavera"
              className={`h-[600px] md:h-[700px] lg:h-[100vh] w-auto min-w-[400px] md:min-w-[500px] lg:min-w-[600px] object-bottom object-left ${hoverClasses}`}
            />
          </div>

          {/* COLUMNA DERECHA: Textos
              📍 PADDING: px-6 md:px-8 lg:px-12 para separar del borde
              📍 POSICIÓN VERTICAL DEL BLOQUE: items-start, items-center, items-end
              📍 ALINEACIÓN DE TEXTO: text-left, text-center, text-right
          */}
          <div className="flex flex-col items-start text-left px-6 md:px-8 lg:px-12 py-12 mt-32">

            {/* BLOQUE DE TÍTULO */}
            <div className="flex flex-col items-start leading-none mb-6 w-full">

              {/* "TENDENCIAS" - Abril Fatface (Grande)
                  📍 POSICIÓN HORIZONTAL:
                      - translate-x-0 = sin movimiento (default)
                      - translate-x-4 = mover 1rem a la derecha
                      - -translate-x-4 = mover 1rem a la izquierda
                      - translate-x-8, -translate-x-8, etc.
                  📏 TAMAÑO FUENTE:
                      - text-4xl = 2.25rem (36px)
                      - text-5xl = 3rem (48px)
                      - text-6xl = 3.75rem (60px)
                      - text-7xl = 4.5rem (72px)
                      - text-8xl = 6rem (96px)
                      - text-9xl = 8rem (128px)
                  📏 ESPACIADO DE LETRAS: tracking-tight, tracking-normal, tracking-wide, tracking-wider
              */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] font-abril uppercase tracking-wide">
                TENDENCIAS
              </h2>

              {/* "De Primavera" - Poppins Italic
                  📍 POSICIÓN HORIZONTAL: mismo sistema de translate-x que arriba
                  📏 TAMAÑO FUENTE: text-xl, text-2xl, text-3xl, text-4xl, text-5xl
                  📏 ESPACIADO VERTICAL CON LÍNEA ANTERIOR:
                      - -mt-1 = 0.25rem más cerca (4px)
                      - -mt-2 = 0.5rem más cerca (8px)
                      - -mt-3 = 0.75rem más cerca (12px)
                      - -mt-4 = 1rem más cerca (16px)
                      - -mt-6 = 1.5rem más cerca (24px)
                      - -mt-8 = 2rem más cerca (32px)
                      - Sin -mt = separación normal
              */}
              <span className="text-2xl md:text-3xl lg:text-6xl text-[#1A1A1A] font-poppins font-light italic -mt-2 md:-mt-3 translate-x-52">
                De Primavera
              </span>
            </div>

            {/* PÁRRAFO DESCRIPTIVO - Poppins
                📏 TAMAÑO FUENTE: text-xs, text-sm, text-base, text-lg, text-xl
                📏 ESPACIADO VERTICAL CON TÍTULO:
                    - mt-2 = 0.5rem de separación (8px)
                    - mt-4 = 1rem de separación (16px)
                    - mt-6 = 1.5rem de separación (24px)
                    - mt-8 = 2rem de separación (32px)
                📏 ANCHO MÁXIMO: max-w-sm, max-w-md, max-w-lg, max-w-xl, max-w-2xl
                📏 INTERLINEADO: leading-tight, leading-normal, leading-relaxed, leading-loose
            */}
            <p className="font-poppins text-gray-600 text-sm md:text-base leading-relaxed max-w-lg mt-4">
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