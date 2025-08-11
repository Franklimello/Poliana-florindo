'use client';

import { MessageCircle, Star, Users, Award, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import poliana from "../../public/poliana.png";
import playstore from "../../public/Google-Play-Logo-2016.jpg";
import apple from "../../public/apple.png";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Playfair_Display } from "next/font/google";
import { Roboto } from "next/font/google";
import Logo from "../../public/logo.png"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export function Hero() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    "Transformei minha carreira em 30 dias!",
    "Aumentei meus preços em 300% com confiança.",
    "Finalmente entendi meu valor como profissional."
  ];

  const stats = [
    { number: "13+", label: "Países", icon: <Award className="w-5 h-5" /> },
    { number: "2.5k+", label: "Mulheres", icon: <Users className="w-5 h-5" /> },
    { number: "98%", label: "Satisfação", icon: <Star className="w-5 h-5" /> }
  ];

  const benefits = [
    "Descubra seu estilo único e autêntico",
    "Aprenda técnicas de venda inconsciente",
    "Aumente sua autoestima e confiança",
    "Atraia clientes que valorizam seu trabalho"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/30 to-purple-100/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20" />
        
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      {/* Mobile background image */}
      <div className="lg:hidden absolute inset-0">
        <Image
          src={poliana}
          alt="Poliana Estética"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-200/80 via-pink-200/90 to-purple-200/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0">
          
          {/* Left Column - Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Sparkles className="w-4 h-4" />
              Método Validado em +13 Países
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`}>
                <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Visagismo
                </span>
                <br />
                <span className="text-gray-800">
                  Estratégico & Cor
                </span>
              </h1>
              
              <h2 className={`${roboto.className} text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 leading-relaxed`}>
                Aumente sua <span className="font-bold text-rose-600">autoestima</span> e aprenda a 
                <span className="font-bold text-purple-600"> vender de forma inconsciente</span>
              </h2>
            </div>

            {/* Description */}
            <p className={`${roboto.className} text-lg text-gray-600 leading-relaxed max-w-xl`}>
              Mentoria exclusiva para mulheres que desejam transformar sua imagem, 
              atrair clientes certos e comunicar seu valor com confiança.
            </p>

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 transform transition-all duration-500 delay-${index * 100}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/5533999638245?text=Olá, quero saber mais sobre a mentoria de Visagismo Estratégico.`}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <MessageCircle className="w-6 h-6" />
                Fale comigo no WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Resposta em até 5 minutos
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="flex items-center justify-center text-rose-500 mb-2">
                    {stat.icon}
                  </div>
                  <div className={`${playfair.className} text-2xl md:text-3xl font-bold text-gray-800`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Carousel */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 font-medium italic transition-all duration-500">
                "{testimonials[currentTestimonial]}"
              </p>
              <p className="text-sm text-gray-500 mt-2">- Cliente transformada</p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:block relative">
            <div className="relative h-[700px] w-full">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-200/50 to-purple-200/50 rounded-3xl transform rotate-6 scale-105" />
              <div className="absolute inset-0 bg-gradient-to-bl from-pink-200/50 to-rose-200/50 rounded-3xl transform -rotate-3 scale-105" />
              
              {/* Main image */}
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src={poliana}
                  alt="Poliana Estética - Especialista em Visagismo"
                  fill
                  sizes="(max-width: 768px) 0vw, 50vw"
                  quality={100}
                  priority
                  className="object-cover"
                />
                
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-lg transform hover:rotate-12 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Online agora</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-rose-500 text-white p-4 rounded-2xl shadow-lg transform hover:-rotate-12 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 text-white">
          <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}