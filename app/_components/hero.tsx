import { MessageCircle } from 'lucide-react';
import poliana from "../../public/poliana.png";
import playstore from "../../public/Google-Play-Logo-2016.jpg";
import apple from "../../public/apple.png";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Playfair_Display } from "next/font/google";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // ou os pesos que você quiser
  variable: "--font-roboto",
});



const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700", // Pode ajustar para "600" ou "500" também
});


export function Hero() {
  return (
    <section className="bg-rose-200 text-white relative overflow-hidden" aria-label="Hero section">
      <div>
        <Image
          src={poliana}
          alt="Imagem de fundo com Poliana Estética"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-10 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1
              className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-bold leading-10 text-rose-900`}
              data-aos="fade-down"
            >
              Visagismo Estratégico & Cor
            </h1>

            <h2
              className={`${roboto.className} text-2xl md:text-3xl lg:text-4xl font-semibold leading-10 text-black`}
              data-aos="fade-down"
            >
              Aumente sua <strong>autoestima</strong> e aprenda a vender de forma inconsciente.
            </h2>

            <p
              className={`${roboto.className} text-black lg:text-lg `}
              data-aos="fade-right"
            >
              Mentoria exclusiva para mulheres que desejam transformar sua imagem, atrair clientes certos e comunicar seu valor com confiança.
            </p>

            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/5533999638245?text=Olá, quero saber mais sobre a mentoria de Visagismo Estratégico.`}
              className="bg-rose-500 text-black px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:bg-rose-900 transition"
            >
              <MessageCircle className="w-5 h-5" />
              Fale comigo no WhatsApp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4 font-bold text-rose-900">
                Método validado em +13 países
              </p>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={poliana}
              alt="Foto da Poliana Estética"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>

  );
}
