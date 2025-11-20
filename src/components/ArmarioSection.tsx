import React from "react";

const ArmarioSection = () => {

  const leftImages = [
    { id: 1, src: "/images/k1.jpeg", alt: "Explora" },
    { id: 2, src: "/images/k2.jpeg", alt: "She’s got the look" },
    { id: 3, src: "/images/k3.jpeg", alt: "Coming soon" },
    { id: 4, src: "/images/k4.jpeg", alt: "Extra" },
  ];

  const rightImages = [
    { id: 5, src: "/images/k1.jpeg", alt: "She’s got the look" },
    { id: 6, src: "/images/k2.jpeg", alt: "Coming soon" },
    { id: 7, src: "/images/k3.jpeg", alt: "Explora" },
    { id: 8, src: "/images/k4.jpeg", alt: "Extra 2" },
  ];

  const hoverClasses = "hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer";

  return (
    <section id="destaca" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr_1.5fr] gap-8 md:gap-12 lg:gap-16 min-h-auto lg:min-h-screen">

        {/* === Columna izquierda (Solo PC) === */}
        <div className="hidden lg:grid w-full grid-cols-2 grid-rows-[2fr_1fr_1fr] gap-4">
          <div className={`relative h-full row-start-1 row-end-4 col-start-1 ${hoverClasses}`}>
            <img src={leftImages[0].src} alt={leftImages[0].alt} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className={`relative h-full row-start-1 row-end-2 col-start-2 ${hoverClasses}`}>
            <img src={leftImages[1].src} alt={leftImages[1].alt} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className={`relative h-full row-start-2 row-end-3 col-start-2 ${hoverClasses}`}>
            <img src={leftImages[2].src} alt={leftImages[2].alt} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className={`relative h-full row-start-3 row-end-4 col-start-2 ${hoverClasses}`}>
            <img src={leftImages[3].src} alt={leftImages[3].alt} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        {/* ============================================== */}
        {/* === TEXTO CENTRAL === */}
        {/* ============================================== */}

        <div className="w-full flex flex-col justify-center py-20 lg:py-0 px-6">

          <div className="max-w-lg mx-auto text-center lg:text-left">

            <div className="ml-0 lg:ml-16">

              {/* Bloque 1: "TU ARMARIO" */}
              <div className="relative w-fit mx-auto lg:mx-0">
                <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-light leading-tight lg:ml-12 font-abril">
                  <span className="absolute text-[#8f8060] text-6xl md:text-7xl lg:text-8xl -left-12 md:-left-14 -top-2">
                    ❝
                  </span>
                  TU <span className="font-light">ARMARIO</span>
                </h2>
              </div>

              {/* Bloque 2: "renace" */}
              <div className="mt-2 lg:-mt-8 ml-0 lg:ml-28">
                <p className="text-6xl md:text-7xl lg:text-8xl font-abril leading-tight">
                  renace
                </p>
              </div>

              {/* Bloque 3: "En primavera" */}
              <div className="mt-2 lg:-mt-2 ml-0 lg:ml-10 w-fit mx-auto lg:mx-0 relative">

                <p className="relative text-3xl md:text-4xl lg:text-5xl italic font-light text-primary leading-tight">
                  En primavera

                  {/* === CAMBIO AQUÍ: de '-right-12' a '-right-16' === */}
                  <span className="absolute text-[#8f8060] not-italic text-6xl md:text-7xl lg:text-8xl -right-16 top-0">
                    ❞
                  </span>
                </p>
              </div>

            </div>

            {/* Bloque 4: Párrafo */}
            <div className="mt-8 ml-0 lg:ml-12">
              <p className="text-sm md:text-base font-light leading-relaxed text-muted-foreground text-center">
                Corpo del testo, vibrante e pieno di vita, si muoveva con eleganza e grazia.
                Ogni movimento era una danza, un’espressione di forza e bellezza che catturava
                l’attenzione di chiunque osservasse. I muscoli si flettevano sotto la pelle,
                mentre l’energia pulsava come un fiume in piena.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================ */}


        {/* === Columna derecha (Solo PC) === */}
        <div className="hidden lg:grid w-full grid-cols-2 grid-rows-[1fr_1fr_2fr] gap-4">
          <div className={`relative h-full col-start-1 col-end-3 row-start-1 row-end-2 ${hoverClasses}`}>
            <img src={rightImages[0].src} alt={rightImages[0].alt} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className={`relative h-full row-start-2 row-end-3 col-start-1 ${hoverClasses}`}>
            <img src={rightImages[1].src} alt={rightImages[1].alt} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className={`relative h-full row-start-2 row-end-4 col-start-2 ${hoverClasses}`}>
            <img src={rightImages[2].src} alt={rightImages[2].alt} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className={`relative h-full row-start-3 row-end-4 col-start-1 ${hoverClasses}`}>
            <img src={rightImages[3].src} alt={rightImages[3].alt} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        {/* === Cuadrícula para Móvil === */}
        <div className="grid grid-cols-2 gap-4 lg:hidden px-6 pb-20">
          {[...leftImages, ...rightImages].map((image) => (
            <div key={image.id} className={`relative aspect-[3/4] ${hoverClasses}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ArmarioSection;