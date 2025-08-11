'use client';

import Image from "next/image";
import polianaSobre from '../../public/polianaSobre.jpeg';
import polianaSobre2 from '../../public/polianaSobre2.jpeg';
import polianaCeo from "../../public/polianaCeo.jpeg";
import { Check, MessageCircle, Award, Users, Globe, Heart, Star, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from 'react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAchievement, setActiveAchievement] = useState(0);

  const achievements = [
    { number: "10+", label: "Anos de experiência", icon: <Award className="w-6 h-6" /> },
    { number: "13+", label: "Países impactados", icon: <Globe className="w-6 h-6" /> },
    { number: "2.5k+", label: "Mulheres transformadas", icon: <Users className="w-6 h-6" /> },
    { number: "98%", label: "Satisfação dos clientes", icon: <Star className="w-6 h-6" /> }
  ];

  const highlights = [
    {
      icon: <Check className="text-emerald-500" />,
      text: "Método validado em +13 países com resultados comprovados"
    },
    {
      icon: <Check className="text-emerald-500" />,
      text: "Foco em autoestima, vendas e posicionamento estratégico"
    },
    {
      icon: <Check className="text-emerald-500" />,
      text: "Visagismo estratégico com transformação real e duradoura"
    },
    {
      icon: <Check className="text-emerald-500" />,
      text: "Técnicas de venda inconsciente aplicadas à imagem pessoal"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveAchievement((prev) => (prev + 1) % achievements.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Conheça a Especialista
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Sobre Poliana Florindo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transformando vidas através do visagismo estratégico e do poder das cores
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Image gallery */}
          <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            
            {/* Main image with decorative background */}
            <div className="relative">
              {/* Decorative backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-300/50 to-purple-300/50 rounded-3xl transform rotate-3 scale-105 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-bl from-pink-300/50 to-rose-300/50 rounded-3xl transform -rotate-2 scale-110 blur-sm" />
              
              {/* Main image container */}
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-500">
                <Image
                  src={polianaSobre}
                  alt="Poliana Florindo sorrindo, mentora de visagismo"
                  fill
                  quality={100}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 via-transparent to-transparent" />
              </div>

              {/* Secondary image */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                <Image
                  src={polianaSobre2}
                  alt="Foto secundária de Poliana Florindo"
                  fill
                  quality={100}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating achievement badge */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-rose-100 transform hover:rotate-12 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">10+</div>
                  <div className="text-xs text-gray-600 font-medium">Anos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* Main description */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Com mais de uma década de experiência, transformo a forma como <span className="font-semibold text-rose-600">mulheres</span> se enxergam e se posicionam no mercado.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Através do <span className="font-semibold text-purple-600">visagismo estratégico</span> e do poder das cores, elevo a <span className="font-semibold text-pink-600">autoestima feminina</span> e ensino como comunicar valor e vender de forma inconsciente — seja qual for o produto.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Já impactei profissionais em mais de 13 países com meu método exclusivo, unindo <span className="font-semibold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">beleza, identidade e estratégia</span>.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    {highlight.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {highlight.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Achievements grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg transform transition-all duration-500 hover:scale-105 ${
                    activeAchievement === index ? 'ring-2 ring-rose-500 shadow-rose-200' : ''
                  }`}
                >
                  <div className="flex justify-center mb-3 text-rose-500">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Author info */}
            <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-white/80 to-rose-50/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-3 border-rose-500 shadow-lg">
                  <Image
                    src={polianaCeo}
                    alt="Foto da Poliana Florindo, mentora e fundadora"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  Poliana Florindo
                  <div className="w-5 h-5 text-blue-500">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </div>
                </h3>
                <p className="text-gray-600 font-medium">Mentora • Fundadora • Especialista em Visagismo</p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">(4.9 • 247 avaliações)</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/5533999638245?text=Olá Poliana! Vi seu perfil e gostaria de saber mais sobre sua mentoria de visagismo estratégico. Pode me contar mais detalhes?`}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden w-full sm:w-auto"
              >
                <MessageCircle className="w-6 h-6" />
                Conversar com Poliana
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Normalmente responde em poucos minutos
                <Heart className="w-4 h-4 text-rose-500 ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom testimonial */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 max-w-4xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl italic text-gray-700 leading-relaxed mb-6">
              "A Poliana não apenas transformou minha imagem, ela revolucionou minha autoestima e meu negócio. 
              Aprendi a me valorizar e isso se refletiu diretamente no meu faturamento. Recomendo de olhos fechados!"
            </blockquote>
            <cite className="font-semibold text-rose-600">— Marina Silva, Consultora de Beleza</cite>
          </div>
        </div>
      </div>
    </section>
  );
}