"use client"
import useEmblaCarousel from "embla-carousel-react"
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Clock,
  Sparkles,
  Palette,
  BookOpenCheck,
  Users,
} from "lucide-react"

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700", // Pode ajustar para "600" ou "500" também
});


const services = [
  {
    title: "Mentoria Visagismo Estratégico",
    description: "Descubra como a imagem certa pode potencializar seus resultados e vendas. Mentoria individual focada em visagismo aplicado ao posicionamento.",
    duration: "Sessões personalizadas",
    price: "Sob consulta",
    icon: <Sparkles />,
    linkText: 'Olá, vi no site sobre a mentoria de visagismo estratégico e gostaria de mais informações.'
  },
  {
    title: "Análise de Coloração Pessoal",
    description: "Encontre sua paleta ideal e aprenda a usar as cores a seu favor — na vida e nos negócios. Experiência completa com análise presencial ou online.",
    duration: "Duração: 1h30",
    price: "Valor único",
    icon: <Palette />,
    linkText: 'Olá, vi no site sobre análise de coloração pessoal e gostaria de agendar.'
  },
  {
    title: "Consultoria de Imagem & Posicionamento",
    description: "Transforme sua presença profissional com uma consultoria completa de imagem, estilo e comunicação não-verbal.",
    duration: "Atendimento online",
    price: "Pacotes exclusivos",
    icon: <BookOpenCheck />,
    linkText: 'Olá, vi no site sobre consultoria de imagem e gostaria de saber mais.'
  },
  {
    title: "Workshops e Treinamentos",
    description: "Capacite sua equipe com treinamentos sobre imagem profissional, comportamento, postura e vendas inconscientes.",
    duration: "Sob agendamento",
    price: "Orçamento para grupos",
    icon: <Users />,
    linkText: 'Olá, vi no site sobre workshops e treinamentos e quero mais informações.'
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': {
        slidesToScroll: 3,
      }
    }
  })

  function scrollPrev() {
    emblaApi?.scrollPrev()
  }

  function scrollNext() {
    emblaApi?.scrollNext()
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div>
          <h2 className={`text-4xl text-black font-bold mb-12 text-center text-rose-700 ${playfair.className}`}>
            Serviços
            </h2>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {services.map((item, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                    <article className="bg-[#e6dccf] text-black rounded-2xl p-6 space-y-4 h-full flex flex-col shadow-md">
                      <div className="flex-1 flex items-start justify-between">
                        <div className="flex gap-3">
                          <span className="text-3xl text-rose-600">{item.icon}</span>
                          <div>
                            <h3 className="font-bold text-xl my-1">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-300 pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>
                        <a
                          target='_blank'
                          href={`https://wa.me/5533999638245?text=${encodeURIComponent(item.linkText)}`}
                          className="flex items-center justify-center gap-2 bg-rose-600 text-white px-4 py-1 rounded-md hover:bg-rose-700 transition"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Entrar em contato
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Botões de navegação */}
            <button>
              <div
                className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 duration-300"
                onClick={scrollPrev}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </div>
            </button>
            <button>
              <div
                className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 duration-300"
                onClick={scrollNext}
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </div>
            </button>
          </div>
          <div className="mt-12 flex justify-center">
                <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/OVZU0rF87hA?si=h3wynWAcDWmj2DSt"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    ></iframe>
                </div>
                </div>

        </div>
      </div>
    </section>
  );
}
