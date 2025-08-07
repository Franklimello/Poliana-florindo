import Head from 'next/head'
import { Hero } from './_components/hero'
import { About } from './_components/about'
import { Services } from './_components/services'
import { Testimonials } from './_components/testimonials'
import { Footer } from './_components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Poliana Estética | Visagismo e Consultoria de Imagem em Lajinha</title>
        <meta
          name="description"
          content="Transforme sua imagem com a mentoria de visagismo estratégico da Poliana Estética. Atendimento personalizado para mulheres em Lajinha e região."
        />
        <meta name="keywords" content="visagismo, consultoria de imagem, estética, Lajinha, mentoria, autoestima, poliana florindo" />
        <meta name="author" content="Poliana Estética" />

        {/* Open Graph para redes sociais */}
        <meta property="og:title" content="Poliana Estética | Visagismo e Consultoria de Imagem" />
        <meta
          property="og:description"
          content="Mentoria exclusiva para mulheres que desejam transformar sua imagem e atrair clientes certos."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.polianaestetica.com.br" />
        <meta property="og:image" content="/capa-site.jpg" />

        {/* URL canônica */}
        <link rel="canonical" href="https://www.polianaestetica.com.br" />
      </Head>

      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}
