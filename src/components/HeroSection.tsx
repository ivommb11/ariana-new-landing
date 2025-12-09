import React from 'react';
import { Button } from "@/components/ui/button";


const HeroSection = () => {
    const frontImageAnimation = "animate-[breathe_5s_ease-in-out_infinite]";
  return (
    <section id = "explora" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* 1. FONDO DE PINCELADAS */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img
          src="/images/fondo-pinceladas.png"
          alt="Fondo decorativo"
          className={`w-full h-full object-cover md:object-contain opacity-90 scale-110 ${frontImageAnimation}`}
        />
      </div>

      {/* 2. CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl mx-auto">

        {/* Bloque de Títulos con posiciones personalizadas */}
        <div className="relative w-full flex flex-col items-center leading-none text-brand-dark mb-6">

            {/* Primera línea: "¿Estás lista para" - Ligeramente a la IZQUIERDA
                📍 Posición horizontal: -translate-x-[valor] (negativo = izquierda, positivo = derecha)
                📏 Tamaño fuente: text-2xl md:text-3xl lg:text-4xl
            */}
            <span className="font-poppins italic font-light text-2xl md:text-3xl lg:text-7xl text-[#1A1A1A] self-center -translate-x-4 md:-translate-x-6 lg:-translate-x-12">
              ¿Estás lista para
            </span>

            {/* Segunda línea: "RENOVAR" - Ligeramente a la DERECHA
                📍 Posición horizontal: translate-x-[valor]
                📏 Tamaño fuente: text-[4rem] md:text-[6rem] lg:text-[8rem]
            */}
            <h1 className="font-abril text-[4rem] md:text-[6rem] lg:text-[6rem] uppercase tracking-wide -mt-2 md:-mt-2 translate-x-4 md:translate-x-8 lg:translate-x-12">
              RENOVAR
            </h1>

            {/* Tercera línea: "tu estilo en" - CENTRADA
                📍 Posición horizontal: sin translate-x (centrado por defecto)
                📏 Tamaño fuente: text-2xl md:text-3xl lg:text-4xl
            */}
            <span className="font-poppins italic font-light text-2xl md:text-3xl lg:text-7xl text-[#1A1A1A] self-center -mt-4 md:-mt-2 -translate-x-4 md:-translate-x-6 lg:-translate-x-16">
              tu estilo en
            </span>

            {/* Cuarta línea: "PRIMAVERA?" - CENTRADA
                📍 Posición horizontal: sin translate-x (centrado por defecto)
                📏 Tamaño fuente: text-[4rem] md:text-[6rem] lg:text-[8rem]
            */}
            <h1 className="font-abril text-[4rem] md:text-[6rem] lg:text-[6rem] uppercase tracking-wide -mt-4 md:-mt-2">
              PRIMAVERA?
            </h1>
        </div>

        {/* Párrafo descriptivo - Centrado */}
        <p className="font-poppins text-gray-600 text-sm md:text-base max-w-xl leading-relaxed mb-8 text-center px-4">
          Combina la versatilidad con la tendencia y una estética contemporánea que eleva cualquier look con naturalidad con nuestra nueva colección de primavera.
        </p>

        {/* Botón Verde - Centrado */}
        <Button
          className="bg-[#c5d68e] hover:bg-[#b8ca75] text-white font-poppins text-lg md:text-xl px-10 py-6 rounded-full shadow-sm hover:shadow-md transition-all"
          onClick={() => {
              window.open('https://www.zara.com/pe/es/mujer-nuevo-l1180.html?v1=2544455', '_blank', 'noopener,noreferrer');
          }}
        >
          Conoce más
        </Button>

      </div>
    </section>
  );
};

export default HeroSection;