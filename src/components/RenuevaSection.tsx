import { Button } from "@/components/ui/button";
import backgroundImage from "/images/k1.jpeg"; // <--- Asegúrate que esta ruta sea correcta

const RenuevaSection = () => {

  const shopNowUrl = "/"; // <--- Configura tu URL

  return (
    // === CAMBIO AQUÍ: Se eliminaron 'min-h-[600px]' y 'md:min-h-screen' ===
    <section id="renueva" className="relative py-32 overflow-hidden flex items-center justify-center">

      {/* Background with single image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage.src || backgroundImage})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content Container (para centrar el recuadro blanco) */}
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center">

        {/* === RECUADRO BLANCO === */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-xl w-full text-center shadow-lg">
          <div className="max-w-md mx-auto space-y-8 fade-in-up">
            <h2 className="text-6xl md:text-8xl font-abril leading-none text-primary">
              20%
            </h2>
            <p className="text-xl md:text-2xl font-light tracking-wider text-primary italic">
              En la nueva colección
            </p>

            <Button
              size="lg"
              className="bg-[#8f8060] text-white hover:bg-[#7a6b52] px-12 py-6 text-sm tracking-widest mt-8"
              onClick={() => {
                              window.open('https://www.zara.com/pe/es/mujer-nuevo-l1180.html?v1=2544455', '_blank', 'noopener,noreferrer');
                          }}
            >
              COMPRA YA
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RenuevaSection;