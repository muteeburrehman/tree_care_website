import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Services } from "@/components/Services";
import { Testimonial } from "@/components/Testimonial";
import { TrustSection } from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <TrustSection />
        <HowItWorks />
        <CtaBanner variant="dark" />
        <Gallery />
        <CtaBanner variant="light" />
        <Testimonial />
        <About />
        <CtaBanner variant="leaf" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
