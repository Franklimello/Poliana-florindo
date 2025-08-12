"use client"

import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black pt-20 pb-8" aria-label="Rodapé do site Poliana Florindo">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Footer Content */}
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16" role="contentinfo">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-3">
                Poliana Florindo
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Transformando vidas através da beleza, cuidado e bem-estar com excelência e profissionalismo.
              </p>
            </div>
            
            <div className="mb-8">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/5533999638245?text=Olá%20Poliana,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20horário."
                className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                aria-label="Agendar horário pelo WhatsApp"
              >
                <Image src="/whatsapp.svg" alt="" width={24} height={24} />
                Agendar Consulta
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Nos acompanhe</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/share/16LH2ZYFuK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800 hover:bg-rose-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Página no Facebook"
                >
                  <Image 
                    src="/facebook.svg" 
                    alt="" 
                    width={20} 
                    height={20}
                    className="group-hover:brightness-0 group-hover:invert transition-all duration-300" 
                  />
                </a>
                <a
                  href="https://www.instagram.com/polianaflorindo?utm_source=ig_web_button_share_sheet&igsh=MXR4eWo3bGc1cHAzNg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800 hover:bg-rose-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Perfil no Instagram"
                >
                  <Image 
                    src="/instagram.svg" 
                    alt="" 
                    width={20} 
                    height={20}
                    className="group-hover:brightness-0 group-hover:invert transition-all duration-300" 
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800 hover:bg-rose-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Canal no YouTube"
                >
                  <Image 
                    src="/youtube.svg" 
                    alt="" 
                    width={20} 
                    height={20}
                    className="group-hover:brightness-0 group-hover:invert transition-all duration-300" 
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-1 bg-rose-500 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <a 
                    href="mailto:personalstylistconsultoriademo@gmail.com"
                    className="text-rose-400 hover:text-rose-300 transition-colors duration-300 break-all"
                  >
                    personalstylistconsultoriademo@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-1 bg-rose-500 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-gray-300 font-medium">Telefone</p>
                  <a 
                    href="tel:+5533999638245"
                    className="text-rose-400 hover:text-rose-300 transition-colors duration-300"
                  >
                    (33) 9 9963-8245
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Localização</h4>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-1 bg-rose-500 rounded-full flex-shrink-0"></div>
              <address className="not-italic text-gray-300 leading-relaxed">
                <strong className="text-white block mb-1">Endereço:</strong>
                Av Natal Rodrigues Pereira, 420<br />
                Centro - Lajinha | MG
              </address>
            </div>
          </div>
        </footer>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Poliana Florindo. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              Desenvolvido por{' '}
              <span className="text-rose-400 font-medium hover:text-rose-300 transition-colors duration-300">
                Franklim Melo
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}