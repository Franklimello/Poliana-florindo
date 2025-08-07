"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

import cliente1 from '../../public/pamela.jpeg'
import cliente2 from '../../public/prescila soares.jpeg'
import cliente3 from '../../public/maria gabriela.jpeg'

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700", // Pode ajustar para "600" ou "500" também
});

const testimonials = [
  {
    content:
      "A mentoria com a Poliana foi um divisor de águas. Consegui alinhar minha imagem pessoal com meu propósito profissional. Hoje me sinto muito mais confiante e alinhada com quem sou.",
    author: "Pamela",
    role: "Empresária",
    image: cliente1,
  },
  {
    content:
      "Nunca imaginei que as cores certas poderiam impactar tanto minha autoestima. A análise de coloração pessoal com a Poliana me trouxe clareza, leveza e mais presença nas minhas escolhas.",
    author: "Priscila Soares",
    role: "Empresaria",
    image: cliente2,
  },
  {
    content:
      "A consultoria de imagem foi transformadora. Consegui me posicionar de forma mais estratégica nas redes sociais e isso refletiu diretamente no meu negócio. Recomendo de olhos fechados!",
    author: "Maria gabriela",
    role: "Empresaria",
    image: cliente3,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  })

  function scrollPrev() {
    emblaApi?.scrollPrev()
  }

  function scrollNext() {
    emblaApi?.scrollNext()
  }

  return (
    <section className="bg-[#e6dccf] py-16">
      <div className="container mx-auto px-4">
        <h2 className={`${playfair.className} text-4xl font-bold text-center mb-12 text-rose-700`}>
          O que dizem minhas clientes
        </h2>


        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-white text-gray-800 rounded-2xl p-6 space-y-4 h-full flex flex-col shadow-lg">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative w-24 h-24">
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes="96px"
                          className="object-cover rounded-full"
                        />
                      </div>

                      <p className="text-gray-600 italic">&ldquo;{item.content}&rdquo;</p>

                      <div>
                        <p className="font-bold text-rose-700">{item.author}</p>
                        <p className="text-sm text-gray-500">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center mt-8">
        <div className="border-b-2 border-rose-400 w-[90%] mb-4" />
      </div>
    </section>
  )
}
