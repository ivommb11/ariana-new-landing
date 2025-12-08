import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CombinaSection = () => {
  const carouselImages = [
    { id: 1, src: "/images/SECCION3.png", alt: "Primavera 1" },
    { id: 2, src: "/images/img2.png", alt: "Primavera 2" },
    { id: 3, src: "/images/img3.png", alt: "Primavera 3" },
  ];

  return (
    <section id="combina" className="relative w-full overflow-hidden bg-secondary">

      {/* Texto superpuesto */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white drop-shadow-lg">
        <div className="flex flex-col items-start">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-abril tracking-tight">
            EL COLOR
          </h2>
          <p className="text-2xl md:text-3xl font-light tracking-widest my-1 md:my-2 ml-8 md:ml-52 italic">
            QUE DESPIERTA
          </p>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-abril tracking-tight ml-16 md:ml-32 italic">
            LA PRIMAVERA
          </h3>
        </div>
      </div>

      {/* Carrusel sin zoom, adaptado a formato horizontal */}
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full aspect-video" // <=== La clave para evitar zoom
      >
        <CarouselContent>
          {carouselImages.map((image) => (
            <CarouselItem key={image.id} className="basis-full">
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover brightness-[0.6]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 z-30 bg-white/40 hover:bg-white/60 text-black rounded-full" />
        <CarouselNext className="right-4 z-30 bg-white/40 hover:bg-white/60 text-black rounded-full" />
      </Carousel>
    </section>
  );
};

export default CombinaSection;
