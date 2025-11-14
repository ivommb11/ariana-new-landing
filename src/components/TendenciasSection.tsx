const TendenciasSection = () => {
  return (
    <section id="tendencias" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ... (Imagen sin cambios) ... */}
          <div className="bg-muted aspect-[3/4] fade-in-up">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              <img
                src="/images/k1.jpeg"
                alt="October"
                className="
                  w-full h-full object-cover
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:scale-[1.02]
                "
              />
            </div>
          </div>

          {/* === INICIO DE LOS CAMBIOS EN EL TEXTO === */}
          {/* 1. 'items-start' alinea todo a la izquierda por defecto.
          */}
          <div className="space-y-6 fade-in-up flex flex-col items-start" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-5xl md:text-6xl font-light font-abril">TENDENCIAS</h2>

            {/* 2. 'pl-12' (o pl-16, etc.) lo empuja a la derecha.
                 ¡Ajusta este valor hasta que te guste!
            */}
            <p className="text-2xl md:text-3xl font-light italic opacity-90 pl-60 font-abril">
              DE PRIMAVERA
            </p>

            {/* 3. El texto de las "líneas" se queda alineado a la izquierda. */}
            <p className="text-sm md:text-base font-light leading-relaxed opacity-80 max-w-lg">
              La moda de esta temporada se inspira en la elegancia atemporal y el minimalismo sofisticado.
              Descubre las piezas que están marcando tendencia en las pasarelas y en las calles.
            </p>
          </div>
          {/* === FIN DE LOS CAMBIOS EN EL TEXTO === */}
        </div>
      </div>
    </section>
  );
};

export default TendenciasSection;