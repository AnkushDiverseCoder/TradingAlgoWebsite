import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Faq from "@/components/faq/Faq";
import Hero from "@/components/hero/hero";
import Pricing from "@/components/Pricing/Pricing";
import { Testimonial } from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <main>
        <Hero />
        <About/>
        <Testimonial/>
        <Pricing/>
        <Faq/>
        <Contact/>
    </main>
  );
}
