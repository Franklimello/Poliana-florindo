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
  Star,
  ArrowRight,
  Play
} from "lucide-react"

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const services = [
  {
    title: "Mentoria Visagismo Estratégico",
    description: "Descubra como a imagem certa pode potencializar seus resultados e vendas. Mentoria individual focada em visagismo aplicado ao posicionamento.",
    duration: "Sessões personalizadas",
    price: "Sob consulta",
    icon: <Sparkles />,
    linkText: 'Olá, vi no site sobre a mentoria de visagismo estratégico e gostaria de mais informações.',
    badge: "Mais Procurado",
    color: "from-rose-500 to-pink-600"
  },
  {
    title: "Análise de Coloração Pessoal",
    description: "Encontre sua paleta ideal e aprenda a usar as cores a seu favor — na vida e nos negócios. Experiência completa com análise presencial ou online.",
    duration: "Duração: 1h30",
    price: "Valor único",
    icon: <Palette />,
    linkText: 'Olá, vi no site sobre análise de coloração pessoal e gostaria de agendar.',
    badge: "Premium",
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Consultoria de Imagem & Posicionamento",
    description: "Transforme sua presença profissional com uma consultoria completa de imagem, estilo e comunicação não-verbal.",
    duration: "Atendimento online",
    price: "Pacotes exclusivos",
    icon: <BookOpenCheck />,
    linkText: 'Olá, vi no site sobre consultoria de imagem e gostaria de saber mais.',
    badge: "Completo",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Workshops e Treinamentos",
    description: "Capacite sua equipe com treinamentos sobre imagem profissional, comportamento, postura e vendas inconscientes.",
    duration: "Sob agendamento",
    price: "Orçamento para grupos",
    icon: <Users />,
    linkText: 'Olá, vi no site sobre workshops e treinamentos e quero mais informações.',
    badge: "Empresarial",
    color: "from-blue-500 to-cyan-600"
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': {
        slidesToScroll: 2,
      },
      '(min-width: 1024px)': {
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
    <section className="bg-gradient-to-br from-slate-50 via-white to-rose-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full mb-6">
            <Star className="w-8 h-8 text-white" />
          </div>
          
          <h2 className={`text-5xl lg:text-6xl font-bold text-slate-900 mb-6 ${playfair.className}`}>
            Nossos{" "}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Soluções personalizadas para transformar sua imagem em uma ferramenta estratégica de sucesso profissional
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {services.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]">
                  <article className="group bg-white rounded-3xl p-8 h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 relative overflow-hidden">
                    {/* Badge */}
                    <div className={`absolute top-6 right-6 bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {item.badge}
                    </div>
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-2xl">{item.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className={`text-2xl font-bold text-slate-900 ${playfair.className}`}>
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-slate-100 pt-6 mt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Clock className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>
                        <span className="text-lg font-semibold text-slate-900">
                          {item.price}
                        </span>
                      </div>
                      
                      <a
                        target='_blank'
                        href={`https://wa.me/5533999638245?text=${encodeURIComponent(item.linkText)}`}
                        className={`group/btn flex items-center justify-center gap-3 bg-gradient-to-r ${item.color} hover:shadow-lg text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 w-full`}
                      >
                        <MessageCircle className="w-5 h-5 group-hover/btn:animate-pulse" />
                        <span>Solicitar Informações</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all duration-300 group"
            aria-label="Serviço anterior"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-slate-900 group-hover:-translate-x-1 transition-all" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all duration-300 group"
            aria-label="Próximo serviço"
          >
            <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Video Section */}
        
      </div>
    </section>
  );
}