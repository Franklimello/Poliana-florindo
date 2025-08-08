import { Hero } from './_components/hero'
import { About } from './_components/about'
import { Services } from './_components/services'
import { Testimonials } from './_components/testimonials'
import { Footer } from './_components/footer'
import {Visagismo} from "./_components/visagismo"
import {VisageNobre} from "./_components/visageNobre"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Visagismo/>
      <Services />
      <VisageNobre/>
      <Testimonials />
      <Footer />
    </main>
  )
}
