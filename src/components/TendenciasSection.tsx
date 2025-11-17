const TendenciasSection = () => {
  return (
    <section id="tendencias" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">

          {/* Columna de Imagen */}
          <div className="bg-primary aspect-[4/4] fade-in-up">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">

              {/* === CAMBIO AQUÍ === */}
              <img
                src="/images/sec2.png"
                alt="October"
                className="
                  w-[110%] h-[110%]  /* <-- REEMPLAZA 'w-full h-full' CON ESTO */
                  object-cover
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:scale-[1.02]
                "
              />
              {/* === FIN DEL CAMBIO === */}

            </div>
          </div>

          {/* Columna de Texto (ahora es más estrecha) */}
          <div className="space-y-6 fade-in-up flex flex-col items-start" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-5xl md:text-6xl font-light font-abril">TENDENCIAS</h2>

            <p className="text-2xl md:text-3xl font-light italic opacity-90 pl-60 font-abril">
              DE PRIMAVERA
            </p>

            <p className="text-sm md:text-base font-light leading-relaxed opacity-80 max-w-lg">
              La moda de esta temporada se inspira en la elegancia atemporal y el minimalismo sofisticado.
              Descubre las piezas que están marcando tendencia en las pasarelas y en las calles.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TendenciasSection;