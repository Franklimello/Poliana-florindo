"use client"

import Image from 'next/image'

export function Footer() {
  return (
    <section className="bg-black pt-16" aria-label="Rodapé do site Poliana Florindo">
      <div className="container mx-auto px-4">

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" role="contentinfo">

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              <span className="text-white">Poliana Florindo</span> 
            </h3>
            <p className="mb-4 text-white">Beleza, cuidado e bem-estar com excelência.</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/5533999638245?text=Olá Poliana, vim pelo site e gostaria de agendar um horário.`}
              className="bg-yellow-600 text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md font-medium"
              aria-label="Agendar horário pelo WhatsApp"
            >
              <Image src="/whatsapp.svg" alt="Ícone do WhatsApp" width={24} height={24} />
              Agende pelo WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">Contato</h3>
            <p className="text-white">Email: personalstylistconsultoriademo@gmail.com</p>
            <p className="text-white">Telefone: (33) 9 9963-8245</p>
            <address className="not-italic text-white">
              Endereço: Av Natal Rodrigues Pereira 420, Centro - Lajinha | MG
            </address>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">Redes sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/16LH2ZYFuK/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Página no Facebook"
              >
                <Image src="/facebook.svg" alt="Facebook" width={32} height={32} />
              </a>
              <a
                href="https://www.instagram.com/polianaflorindo?utm_source=ig_web_button_share_sheet&igsh=MXR4eWo3bGc1cHAzNg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil no Instagram"
              >
                <Image src="/instagram.svg" alt="Instagram" width={32} height={32} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal no YouTube"
              >
                <Image src="/youtube.svg" alt="YouTube" width={32} height={32} />
              </a>
            </div>
          </div>

        </footer>

      </div>

      <footer className="bg-yellow-600 text-black py-4 text-center font-medium" role="contentinfo">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Desenvolvido por Franklim Melo. Todos os direitos reservados.
        </p>
      </footer>
    </section>
  )
}
