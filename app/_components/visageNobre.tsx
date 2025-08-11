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
import { ChevronLeft, ChevronRight, Camera, Sparkles, Award } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export function VisageNobre() {
  const [emblaRef2, emblaApi2] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': {
        slidesToScroll: 2,
      },
      '(min-width: 1024px)': {
        slidesToScroll: 3,
      }
    }
  });

  const scrollPrev2 = useCallback(() => {
    if (emblaApi2) emblaApi2.scrollPrev();
  }, [emblaApi2]);

  const scrollNext2 = useCallback(() => {
    if (emblaApi2) emblaApi2.scrollNext();
  }, [emblaApi2]);

  const fotosNobre = [
    { src: Foto1, alt: "Transformação de imagem profissional - Antes e depois" },
    { src: Foto2, alt: "Análise de coloração pessoal - Resultado personalizado" },
    { src: Foto3, alt: "Consultoria de estilo e posicionamento" },
    { src: Foto4, alt: "Workshop de imagem corporativa" },
    { src: Foto5, alt: "Mentoria de visagismo estratégico" },
    { src: Foto6, alt: "Resultado final - Cliente satisfeita" }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-rose-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full mb-6">
            <Camera className="w-8 h-8 text-white" />
          </div>
          
          <h2 className={`text-5xl lg:text-6xl font-bold text-slate-900 mb-6 ${playfair.className}`}>
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Visage
            </span>
            Nobre
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Conheça os resultados reais das nossas transformações. Cada imagem conta uma história de sucesso, 
            autoestima elevada e objetivos alcançados através do visagismo estratégico.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-600">500+</div>
              <div className="text-sm text-slate-500">Transformações</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-600">98%</div>
              <div className="text-sm text-slate-500">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-600">5+</div>
              <div className="text-sm text-slate-500">Anos de Experiência</div>
            </div>
          </div>
        </div>

        {/* Gallery Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev2}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700 group-hover:text-slate-900 group-hover:-translate-x-1 transition-all" />
          </button>

          <div className="overflow-hidden rounded-3xl" ref={emblaRef2}>
            <div className="flex gap-6 p-4">
              {fotosNobre.map((foto, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] group"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white p-4">
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                      <Image
                        src={foto.src}
                        alt={foto.alt}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        ✨ Transformação
                      </div>
                    </div>
                    
                    {/* Caption */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-rose-500" />
                        <span className="text-sm font-medium text-slate-700">
                          Resultado #{String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {foto.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext2}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-rose-400" />
            <span className="text-rose-400 font-semibold">Transformações Comprovadas</span>
          </div>
          
          <h3 className={`text-2xl lg:text-3xl font-bold text-white mb-4 ${playfair.className}`}>
            Pronta para ser a{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              próxima transformação?
            </span>
          </h3>
          
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Cada cliente tem uma história única de sucesso. Descubra como podemos transformar 
            sua imagem e potencializar seus resultados profissionais.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span>✓ Resultados garantidos</span>
            <span>✓ Acompanhamento personalizado</span>
            <span>✓ Metodologia exclusiva</span>
          </div>
        </div>
      </div>
    </section>
  );
}