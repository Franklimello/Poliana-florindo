import { MessageCircle, Sparkles, Users, Target } from 'lucide-react';
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export function Visagismo() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Transformação Autêntica",
      description: "Desenvolvemos sua imagem alinhada com sua verdadeira essência e objetivos profissionais."
    },
    {
      icon: Users,
      title: "Conexão Estratégica",
      description: "Criamos uma comunicação visual que gera conexão e confiança com seu público-alvo."
    },
    {
      icon: Target,
      title: "Resultados Mensuráveis",
      description: "Potencializamos sua presença no mercado através de uma imagem estratégica e impactante."
    }
  ];

  return (
    <section
      className="bg-gradient-to-br from-slate-50 via-white to-rose-50 py-20"
      aria-label="Entenda o que é o visagismo estratégico"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-rose-600" aria-hidden="true" />
          </div>
          
          <h2 className={`text-5xl lg:text-6xl font-bold text-slate-900 mb-6 ${playfair.className}`}>
            O que é o{" "}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Visagismo?
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-slate-700 leading-relaxed">
              Visagismo é a <strong className="text-slate-900">arte de traduzir sua identidade, personalidade e objetivos</strong> através da sua imagem. 
              Com técnicas estratégicas e personalizadas, o visagismo transcende a estética — ele comunica valor, 
              autenticidade e propósito, posicionando profissionais com confiança no mercado.
            </p>
            
            <p className="text-xl text-slate-700 leading-relaxed">
              Na minha <strong className="text-rose-600">mentoria especializada</strong>, o visagismo é aplicado de forma estratégica para 
              elevar a autoestima e potencializar resultados, conectando imagem, essência e mensagem de forma única e impactante.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              
              <h3 className={`text-xl font-semibold text-slate-900 mb-4 ${playfair.className}`}>
                {benefit.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 text-center">
          <h3 className={`text-3xl lg:text-4xl font-bold text-white mb-6 ${playfair.className}`}>
            Pronta para transformar sua imagem em{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              estratégia de sucesso?
            </span>
          </h3>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Agende uma conversa personalizada e descubra como o visagismo estratégico pode elevar 
            sua presença profissional e potencializar seus resultados.
          </p>
          
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5533999638245?text=Olá, gostaria de saber mais sobre sua mentoria de visagismo estratégico."
            aria-label="Entrar em contato via WhatsApp para saber mais sobre mentoria de visagismo"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:ring-4 focus:ring-rose-200"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Solicitar Orçamento Personalizado
          </a>
          
          <p className="text-sm text-slate-400 mt-4">
            ✓ Consulta inicial gratuita • ✓ Resposta em até 2 horas • ✓ Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}