import { MessageCircle } from 'lucide-react';
import { Playfair_Display } from "next/font/google";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700", // Pode ajustar para "600" ou "500" também
});

export  function Visagismo() {
  return (
    <section
      className="bg-white py-16"
      aria-label="Entenda o que é o visagismo estratégico"
    >
      <div className="container mx-auto flex flex-col px-4 max-w-4xl">
        <div className="space-y-6 text-center mb-6">
          <h2 className={`text-4xl font-bold text-black ${playfair.className}`}>
            O que é o Visagismo?
          </h2>

          <p className="text-lg text-gray-700">
            Visagismo é a arte de traduzir a identidade, personalidade e objetivos de uma pessoa através da sua imagem. 
            Com técnicas estratégicas e personalizadas, o visagismo vai além da estética — ele comunica valor, autenticidade 
            e propósito, ajudando profissionais a se posicionarem com confiança no mercado.
          </p>

          <p className="text-lg text-gray-700">
            Na minha  mentoria , o visagismo é aplicado de forma estratégica para elevar a autoestima e potencializar resultados,
            conectando imagem, essência e mensagem de forma única.
          </p>
        </div>
            <div className="flex gap-2 mx-auto">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/5533999638245?text=Olá, gostaria de saber mais sobre sua mentoria de visagismo.`}
                aria-label="Entrar em contato via WhatsApp para saber mais sobre mentoria de visagismo"
                className="bg-rose-300 text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:bg-rose-900 transition"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Faça aqui seu orçamento

              </a>
            </div>
      </div>
    </section>
  );
}
