import Image from "next/image";
import polianaSobre from '../../public/polianaSobre.jpeg';
import polianaSobre2 from '../../public/polianaSobre2.jpeg';
import polianaCeo from "../../public/polianaCeo.jpeg";
import { Check } from "lucide-react";
import { MessageCircle } from 'lucide-react';

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16" aria-label="Sobre Poliana Florindo e sua mentoria">
      <div className="container px-4 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={polianaSobre}
                alt="Poliana Florindo sorrindo, mentora de visagismo"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={polianaSobre2}
                alt="Foto secundária de Poliana Florindo"
                fill
                quality={100}
                priority
              />
            </div>

          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold text-black">Sobre</h2>

            <p className="text-lg text-gray-700">
              Com mais de uma década de experiência, transformo a forma como <strong>mulheres</strong> se enxergam e se posicionam no mercado.
              Através do <strong>visagismo estratégico</strong> e do poder das cores, elevo a <strong>autoestima feminina</strong> e ensino como comunicar valor e vender de forma inconsciente — seja qual for o produto.
              Já impactei profissionais em mais de 13 países com meu método exclusivo, unindo <strong>beleza, identidade e estratégia</strong>.
            </p>

            <ul className="space-y-4 text-gray-700" aria-label="Destaques da mentoria e método">
              <li className="flex items-center gap-2">
                <Check className="text-rose-500" aria-hidden="true" />
                Método validado em +13 países.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-rose-500" aria-hidden="true" />
                Foco em autoestima, vendas e posicionamento.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-rose-500" aria-hidden="true" />
                Visagismo estratégico com resultado real.
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-6">
              <div>
                <Image
                  src={polianaCeo}
                  alt="Foto da Poliana Florindo, mentora e fundadora"
                  width={150}
                  height={100}
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-lg text-gray-500 font-semibold">Poliana Florindo</h3>
                <p className="text-gray-600">Mentora e Fundadora</p>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/5533999638245?text=Olá, gostaria de saber mais sobre sua mentoria de visagismo.`}
                aria-label="Entrar em contato via WhatsApp para saber mais sobre mentoria de visagismo"
                className="bg-rose-500 text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:bg-rose-900 transition"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Fale comigo no WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
