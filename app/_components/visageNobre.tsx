"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Foto1 from "../../public/foto1.jpeg";
import Foto2 from "../../public/foto2.jpeg";
import Foto3 from "../../public/foto3.jpeg";
import Foto4 from "../../public/foto4.jpeg";
import Foto5 from "../../public/foto5.jpeg";
import Foto6 from "../../public/foto6.jpeg";
import { useCallback } from "react";
import { Playfair_Display } from "next/font/google";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700", // Pode ajustar para "600" ou "500" também
});

export function VisageNobre() {
  const [emblaRef2, emblaApi2] = useEmblaCarousel();

  const scrollPrev2 = useCallback(() => {
    if (emblaApi2) emblaApi2.scrollPrev();
  }, [emblaApi2]);

  const scrollNext2 = useCallback(() => {
    if (emblaApi2) emblaApi2.scrollNext();
  }, [emblaApi2]);

  const fotosNobre = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6];

  return (
    <section className="px-4 py-10 bg-white">
      <h2 className={`${playfair.className} text-3xl font-bold text-center mb-6 text-rose-900`}>VisageNobre</h2>

      <div className="relative">
        {/* Botões */}
        <button
          onClick={scrollPrev2}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
        >
          ◀
        </button>

        <div className="overflow-hidden" ref={emblaRef2}>
          <div className="flex gap-4">
            {fotosNobre.map((foto, index) => (
              <div
                key={index}
                className="min-w-64 flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_30%]"
              >
                <Image
                  src={foto}
                  alt={`Foto ${index + 1}`}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext2}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
