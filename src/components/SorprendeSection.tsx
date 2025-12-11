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

        <div className="grid md:grid-cols-[60%_40%] gap-8 items-center max-w-[120rem] mx-auto min-h-screen py-20 lg:-translate-x-12">

          <div className="flex flex-col items-start text-left py-12 self-center md:self-start md:pt-32 w-full">

            {/* TÍTULO - Usando vw para mantener proporciones */}
            <div className="flex flex-col items-start mb-8 w-full" style={{ lineHeight: '0.9' }}>
              <span className="font-poppins font-light italic text-[#1A1A1A]"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 3.5rem)' }}>
                ¡La estación
              </span>

              <span className="font-poppins font-light italic text-[#1A1A1A]"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 3.5rem)', marginLeft: 'clamp(1rem, 3vw, 5rem)' }}>
                que esperabas
              </span>

              <h2 className="font-abril uppercase font-light text-[#1A1A1A] whitespace-nowrap"
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 8rem)',
                    marginTop: 'clamp(0.25rem, 0.5vw, 0.5rem)',
                    letterSpacing: '-0.02em'
                  }}>
                YA FLORECIÓ!
              </h2>
            </div>

            <p className="font-poppins text-[#1A1A1A] leading-relaxed max-w-lg"
               style={{
                 fontSize: 'clamp(0.875rem, 1.1vw, 1.25rem)',
                 marginTop: 'clamp(0.5rem, 1vw, 1rem)',
                 marginLeft: 'clamp(1rem, 3vw, 6rem)'
               }}>
              <span className="font-semibold">Haz clic</span> y déjate sorprender por la nueva colección de Zara.
            </p>

            <button className="bg-[#c5d68e] hover:bg-[#b8ca75] text-white font-poppins rounded-full shadow-sm hover:shadow-md transition-all"
              style={{
                fontSize: 'clamp(0.875rem, 1vw, 1.125rem)',
                padding: 'clamp(0.75rem, 1.2vw, 1.25rem) clamp(1.5rem, 3vw, 2.5rem)',
                marginTop: 'clamp(1.5rem, 2vw, 2rem)',
                marginLeft: 'clamp(1rem, 10vw, 13rem)'
              }}
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